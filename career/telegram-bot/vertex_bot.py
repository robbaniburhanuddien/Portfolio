"""
Vertex Telegram Bot
Menggunakan data Vertex (Portfolio Agent) untuk menjawab pertanyaan karir.

Dependencies: pip install python-telegram-bot python-docx openpyxl
"""
import os
import json
import logging
import subprocess
from pathlib import Path
from datetime import datetime

from telegram import Update, Bot
from telegram.ext import Application, ContextTypes, CommandHandler, MessageHandler, filters

# Konfigurasi
BASE = Path(r"C:\Users\burha\OneDrive\Desktop\1 project\portfolio\career")
CONFIG_FILE = BASE / "telegram-bot" / "config.json"

with open(CONFIG_FILE) as f:
    config = json.load(f)

TOKEN = config["token"]
DATA_ROOT = Path(config["data_root"])
JOBS_DIR = DATA_ROOT / "jobs"
TRACKER_FILE = DATA_ROOT / "data" / "Vertex Job Tracker.xlsx"

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


# ============ HELPER FUNCTIONS ============

def readable_size(path: Path) -> str:
    """Dapatkan ukuran file dalam format manusia."""
    try:
        size = path.stat().st_size
        if size >= 1024 * 1024:
            return f"{size // (1024*1024)} MB"
        return f"{size // 1024} KB"
    except:
        return "—"


def list_jobs() -> list[dict]:
    """Baca semua folder lowongan dan ambil metadata."""
    jobs = []
    if not JOBS_DIR.exists():
        return jobs

    for folder in sorted(JOBS_DIR.iterdir()):
        if not folder.is_dir():
            continue
        
        folder_name = folder.name
        # Format: YYYY.MM.DD-Posisi-Perusahaan
        
        files = {}
        for f in folder.iterdir():
            if f.is_file():
                files[f.name] = f
        
        # Ambil info dari folder name
        parts = folder_name.split("-", 2)
        date_str = parts[0] if len(parts) > 0 else ""
        posisi = parts[1] if len(parts) > 1 else ""
        perusahaan = parts[2] if len(parts) > 2 else ""
        
        # Cari file dokumen
        dokumen = []
        for f in folder.iterdir():
            if f.is_file():
                dokumen.append(f.name)
        
        jobs.append({
            "folder": folder_name,
            "date": date_str,
            "posisi": posisi,
            "perusahaan": perusahaan,
            "files": dokumen,
            "path": str(folder),
        })
    
    return sorted(jobs, key=lambda x: x["folder"], reverse=True)


def get_job_detail(nama_pencarian: str) -> dict | None:
    """Cari lowongan berdasarkan nama (BPDLH, ABT, GIS, dll)."""
    jobs = list_jobs()
    
    for job in jobs:
        folder_lower = job["folder"].lower()
        posisi_lower = job["posisi"].lower()
        perusahaan_lower = job["perusahaan"].lower()
        
        if nama_pencarian.lower() in folder_lower or \
           nama_pencarian.lower() in posisi_lower or \
           nama_pencarian.lower() in perusahaan_lower:
            return job
    
    return None


def format_job_message(job: dict) -> str:
    """Format pesan detail lowongan."""
    lines = [
        f"📋 *{job['posisi']}*",
        f"🏢 *{job['perusahaan']}*",
        f"📅 _{job['date']}_",
        "",
        "*Dokumen tersedia:*",
    ]
    
    for f in job["files"]:
        ext = f.suffix.lower()
        icon = "📄" if ext == ".pdf" else "📝" if ext == ".docx" else "📁" if ext == ".md" else "📎"
        lines.append(f"  {icon} __{f}__")
    
    lines.append("")
    lines.append(f"📁 *Folder:* `{job['path']}`")
    
    return "\n".join(lines)


def format_status_message() -> str:
    """Format status semua lowongan."""
    jobs = list_jobs()
    
    if not jobs:
        return "📭 *Belum ada lowongan*\n\nBelum ada job yang direkam di Vertex."
    
    lines = [
        f"📊 *Vertex Job Tracker*",
        f"Total: *{len(jobs)} lowongan*",
        "",
    ]
    
    for i, job in enumerate(jobs, 1):
        lines.append(f"*{i}. {job['posisi']}*")
        lines.append(f"   🏢 {job['perusahaan']}")
        lines.append(f"   📅 {job['date']}")
        if job["files"]:
            lines.append(f"   📎 {len(job['files'])} file")
        lines.append("")
    
    return "\n".join(lines)


def format_skor_message() -> str:
    """Format semua skor A-G dari tracker (baca manual dari file)."""
    try:
        import openpyxl
        wb = openpyxl.load_workbook(TRACKER_FILE)
        ws = wb["Applications"]
        hdr = [c.value for c in ws[1]]
        
        if "Skor_AG" not in hdr:
            return "📊 *Skor A-G*\n\nSkor belum tersedia di tracker."
        
        skor_idx = hdr.index("Skor_AG")
        posisi_idx = hdr.index("Posisi")
        perusahaan_idx = hdr.index("Perusahaan")
        
        lines = ["📊 *Skor A-G Semua Lowongan*"]
        lines.append("")
        
        for row in ws.iter_rows(min_row=2, values_only=True):
            if row[posisi_idx]:
                posisi = str(row[posisi_idx])
                skor = str(row[skor_idx]) if row[skor_idx] else "—"
                
                # Emoji berdasarkan skor
                if skor == "A":
                    emoji = "🟢"
                elif skor == "B":
                    emoji = "🟡"
                elif skor == "C":
                    emoji = "🟠"
                elif skor == "D":
                    emoji = "🔴"
                else:
                    emoji = "⚪"
                
                lines.append(f"{emoji} *{posisi}* — Skor: *{skor}*")
                lines.append(f"   🏢 {row[perusahaan_idx] or '—'}")
                lines.append("")
        
        return "\n".join(lines) if len(lines) > 2 else "📊 *Skor A-G*\n\nBelum ada skor di tracker."
    
    except Exception as e:
        return f"⚠️ *Error membaca tracker:*\n{str(e)}"


# ============ COMMAND HANDLERS ============

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /start command."""
    await update.message.reply_text(
        config["welcome_message"],
        parse_mode="Markdown",
    )


async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /status command."""
    await update.message.reply_text(
        format_status_message(),
        parse_mode="Markdown",
    )


async def jobs(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /jobs command."""
    jobs = list_jobs()
    
    if not jobs:
        await update.message.reply_text("📭 *Belum ada lowongan*\n\nBelum ada job yang direkam di Vertex.")
        return
    
    lines = ["📋 *Daftar Lowongan*"]
    lines.append(f"Total: {len(jobs)} job\n")
    
    for i, job in enumerate(jobs, 1):
        lines.append(f"*{i}. {job['posisi']}*")
        lines.append(f"   🏢 {job['perusahaan']}")
        lines.append(f"   📅 {job['date']}")
        if job["files"]:
            lines.append(f"   📎 {', '.join(job['files'][:3])}")
        lines.append("")
    
    await update.message.reply_text(
        "\n".join(lines[:50]),
        parse_mode="Markdown",
    )


async def job_detail(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /job <nama> command."""
    if not context.args:
        await update.message.reply_text(
            "❌ *Format:* `/job <nama>`\n\nContoh: `/job BPDLH` atau `/job ABT`",
            parse_mode="Markdown",
        )
        return
    
    nama = " ".join(context.args)
    job = get_job_detail(nama)
    
    if job:
        await update.message.reply_text(
            format_job_message(job),
            parse_mode="Markdown",
        )
    else:
        # Coba cari lebih liris
        await update.message.reply_text(
            f"❌ *Lowongan '{nama}' tidak ditemukan.*\n\n"
            "Coba nama lain. Lihat daftar lowongan dengan `/jobs`.",
            parse_mode="Markdown",
        )


async def skor(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /skor command - tampilkan semua skor A-G."""
    await update.message.reply_text(
        format_skor_message(),
        parse_mode="Markdown",
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle /help command."""
    help_text = """
📖 *Perintah yang tersedia:*

• `/start` — Mulai bot, lihat selamat datang
• `/status` — Cek status semua lowongan
• `/jobs` — Daftar semua lowongan  
• `/job <nama>` — Detail lowongan spesifik (contoh: `/job BPDLH`)
• `/skor` — Lihat semua skor A-G
• `/help` — Tampilkan pesan ini

💡 *Tips:*
- Cari lowongan dengan nama singkat: `BPDLH`, `ABT`, `GIS`
- Skor A = Sangat layak, B = Layak, C = Pertimbangkan, D = Kurang layak
"""
    await update.message.reply_text(help_text, parse_mode="Markdown")


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle regular messages - coba koneksi ke Hermes jika tersedia."""
    text = update.message.text.lower()
    
    # Jika user bilang "hermes", "agent", "vertex" - coba cek Hermes
    if "hermes" in text or "agent" in text or "vertex" in text:
        await update.message.reply_text(
            "🤖 *Vertex Agent* terhubung via file system.\n\n"
            "Untuk query langsung ke Hermes, kamu bisa:\n"
            "1. Jalankan di terminal: `hermes -p portfolio chat -q \" pertanyaan kamu \"`\n"
            "2. Atau buka Hermes desktop app\n\n"
            "Bot ini baca data dari file kerja Vertex kamu.",
            parse_mode="Markdown",
        )
    else:
        await update.message.reply_text(
            "🤖 Halo! Saya *Vertex Career Bot*.\n\n"
            "Ketik `/help` untuk lihat semua perintah yang tersedia.\n\n"
            "Atau ketik nama lowongan untuk detail, misalnya: `BPDLH` atau `ABT`.",
            parse_mode="Markdown",
        )


# ============ MAIN ============

def main():
    """Run the bot."""
    application = Application.builder().token(TOKEN).build()
    
    # Command handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("status", status))
    application.add_handler(CommandHandler("jobs", jobs))
    application.add_handler(CommandHandler("job", job_detail))
    application.add_handler(CommandHandler("skor", skor))
    application.add_handler(CommandHandler("help", help_command))
    
    # Message handler untuk teks biasa
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    
    # Jalankan bot
    print("🤖 Vertex Telegram Bot mulai...")
    print(f"   Token: {'*' * 20}...")
    print(f"   Data root: {DATA_ROOT}")
    print(f"   Jobs dir: {JOBS_DIR}")
    print("   Tekan Ctrl+C untuk berhenti")
    print()
    
    application.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()

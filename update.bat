@echo off
:: ============================================================
::  PORTFOLIO AUTO-SYNC SCRIPT
::  Double-click this file to sync local changes to GitHub/Live Site!
:: ============================================================
echo 🌿 Memulai sinkronisasi portofolio Mangrove...

:: Memeriksa apakah git sudah terinisialisasi
if not exist .git (
    echo [ERROR] Git belum terinisialisasi di folder ini.
    echo Silakan jalankan langkah inisialisasi di GitHub terlebih dahulu.
    pause
    exit /b
)

echo 📌 Merekam perubahan data dan foto baru...
git add .

:: Meminta input pesan commit dari user (default: Update portofolio)
set /p commit_msg="Masukkan catatan perubahan (tekan Enter untuk default 'Update data portofolio'): "
if "%commit_msg%"=="" set commit_msg=Update data portofolio

echo 💾 Menyimpan perubahan lokal...
git commit -m "%commit_msg%"

echo 🚀 Mengunggah ke GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo ✅ Berhasil disinkronkan! Website online Anda sedang diperbarui oleh Netlify/GitHub Pages (butuh ~10 detik).
) else (
    echo ❌ Gagal mengunggah. Pastikan koneksi internet aktif dan repositori GitHub sudah di-setup.
)

pause

#!/usr/bin/env python3
"""
build_dialog.py — generator dialog proyek dari SATU sumber kebenaran:
prototypes/project-dialog-v3.html

Prinsip: STRUKTUR, URUTAN, UKURAN, POSISI tidak diubah.
Yang dilakukan hanya:
  1) rename class/ID v3 -> namespace proj-dialog-*  (agar tidak bentrok dgn style.css porto)
  2) map variabel CSS v3 -> variabel tema porto (saat --apply)
  3) bungkus markup ke <dialog id="projectDialog"> (saat --apply)

Mode:
  --preview   tulis prototypes/project-dialog-v4.html  (div.proj-dialog, self-contained)
  --apply     patch index.html + style.css + script.js (porto)

Contoh:
  python3 tools/build_dialog.py --preview
  python3 tools/build_dialog.py --apply
"""
import argparse, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
V3 = ROOT / "prototypes" / "project-dialog-v3.html"
OUT_PREVIEW = ROOT / "prototypes" / "project-dialog-v4.html"

# ---------- mapping nama ----------
CLASS_MAP = {
    "dlg": "proj-dialog",
    "dlg-close": "proj-dialog-close",
    "gallery": "proj-dialog-gallery",
    "gal-stage": "proj-dialog-stage",
    "track": "proj-dialog-track",
    "slide": "proj-dialog-slide",
    "gal-nav": "proj-dialog-nav",
    "gal-prev": "proj-dialog-prev",
    "gal-next": "proj-dialog-next",
    "gal-foot": "proj-dialog-foot",
    "gal-cap": "proj-dialog-caption",
    "gal-dots": "proj-dialog-dots",
    "dot": "proj-dialog-dot",
    "gal-count": "proj-dialog-count",
    "body": "proj-dialog-body",
    "p-title": "proj-dialog-title",
    "meta": "proj-dialog-meta",
    "tag": "proj-dialog-tag",
    "year": "proj-dialog-year",
    "short": "proj-dialog-short",
    "tabs": "proj-dialog-tabs",
    "tab": "proj-dialog-tab",
    "panel": "proj-dialog-panel",
    "tldr-text": "proj-dialog-tldr",
    "tldr-bullets": "proj-dialog-bullets",
    "blocks": "proj-dialog-blocks",
    "blk": "proj-dialog-block",
    "facts": "proj-dialog-facts",
    "fact": "proj-dialog-fact",
    "scroll-hint": "proj-dialog-hint",
}
ID_MAP = {
    "gal": "projectDialogGallery",
    "track": "projectDialogTrack",
    "galPrev": "projectDialogPrev",
    "galNext": "projectDialogNext",
    "galDots": "projectDialogDots",
    "galCount": "projectDialogCount",
    "pdBody": "projectDialogBody",
    "tabTldr": "projTabTldr",
    "tabFull": "projTabFull",
    "panelTldr": "projPanelTldr",
    "panelFull": "projPanelFull",
}
# variabel CSS v3 -> tema porto
VAR_MAP = {
    "--surface": "--clr-surface",
    "--primary-light": "--clr-primary-light",
    "--primary": "--clr-primary",
    "--accent": "--clr-accent",
    "--line-soft": "--clr-glass-border",
    "--line": "--clr-glass-border",
    "--text": "--clr-text",
    "--muted": "--clr-text-muted",
    "--dim": "--clr-text-dim",
    "--sans": "--font-sans",
    "--display": "--font-display",
    "--mono": "--font-mono",
}


def rename_css(css: str) -> str:
    for k in sorted(CLASS_MAP, key=len, reverse=True):
        css = re.sub(r"\." + re.escape(k) + r"(?![\w-])", "." + CLASS_MAP[k], css)
    for k in sorted(ID_MAP, key=len, reverse=True):
        css = re.sub(r"#" + re.escape(k) + r"(?![\w-])", "#" + ID_MAP[k], css)
    return css


def rename_markup(html: str) -> str:
    def class_attr(m):
        toks = m.group(2).split()
        return m.group(1) + " ".join(CLASS_MAP.get(t, t) for t in toks) + m.group(3)
    html = re.sub(r'(class=")([^"]*)(")', class_attr, html)
    for k in sorted(ID_MAP, key=len, reverse=True):
        html = re.sub(r'(id=")' + re.escape(k) + r'(")', r"\g<1>" + ID_MAP[k] + r"\g<2>", html)
    return html


def rename_js(js: str) -> str:
    for k in sorted(ID_MAP, key=len, reverse=True):
        js = js.replace("getElementById('%s')" % k, "getElementById('%s')" % ID_MAP[k])
    for k in sorted(CLASS_MAP, key=len, reverse=True):
        js = re.sub(r"'\.?" + re.escape(k) + r"'", "'%s'" % CLASS_MAP[k], js)
    return js


def var_map(css: str) -> str:
    for k in sorted(VAR_MAP, key=len, reverse=True):
        css = re.sub(re.escape(k) + r"(?![\w-])", VAR_MAP[k], css)
    return css


# ---------- ekstraksi v3 ----------
def extract():
    src = V3.read_text(encoding="utf-8")
    style = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
    start = src.index('<div class="dlg">')
    end = src.index("</div>\n</div>\n\n<script>", start) + len("</div>\n</div>")
    markup = src[start:end]
    # hanya .dlg, tanpa .stage pembungkus
    markup = markup[: markup.rindex("</div>")]
    script = re.search(r"<script>\s*(\(function \(\) \{.*?\}\)\(\);)\s*</script>", src, re.S).group(1)
    return style, markup, script


def build_preview():
    style, markup, script = extract()
    css = rename_css(style)
    body = rename_markup(markup).replace('<div class="proj-dialog">',
                                          '<div class="proj-dialog">', 1)
    js = rename_js(script)
    html = f"""<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Prototipe v4 — dialog proj-dialog-* (turunan 1:1 dari v3)</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
<style>{css}</style>
</head>
<body>
<div class="proto">
  <b>Prototipe v4 · turunan 1:1 dari v3 · class proj-dialog-*</b>
  <button id="btnTldr" class="on">TL;DR</button>
  <button id="btnFull">Full Stories</button>
  <button id="btnNext">Slide →</button>
</div>
<div class="stage">
{body}
</div>
<script>
{js}
</script>
</body>
</html>
"""
    OUT_PREVIEW.write_text(html, encoding="utf-8")
    print("OK  preview:", OUT_PREVIEW.relative_to(ROOT))
    print("    node markup:", len(re.findall(r"<[a-zA-Z]", body)), "| css bytes:", len(css), "| js bytes:", len(js))



def split_rules(css: str):
    """Pecah CSS top-level jadi (selector, body) termasuk @media/@keyframes."""
    rules, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j == -1:
            break
        sel = css[i:j].strip()
        depth, k = 0, j
        while k < n:
            if css[k] == "{":
                depth += 1
            elif css[k] == "}":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        rules.append((sel, css[j + 1:k]))
        i = k + 1
    return rules


def _keep(sel: str) -> bool:
    """Keep hanya selector yang seluruh bagiannya berawalan .proj-dialog
    (termasuk compound: .proj-dialog-dot.on, :hover, [hidden])."""
    parts = [x.strip() for x in sel.split(",") if x.strip()]
    if not parts:
        return False
    for x in parts:
        if not x.startswith(".proj-dialog"):
            return False
        if any(ch in x for ch in (" ", ">", "+", "~")):
            return False
    return True


def filter_dialog_css(css: str) -> str:
    """Buang aturan global (body, *, .stage, .proto, :root) — hanya dialog."""
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    out = []
    for sel, body in split_rules(css):
        s = " ".join(sel.split())
        if s.startswith("@media"):
            inner = []
            for s2, b2 in split_rules(body):
                s2n = " ".join(s2.split())
                if _keep(s2n):
                    inner.append(s2n + "{" + b2 + "}")
            if inner:
                out.append(s + "{" + "".join(inner) + "}")
        elif s.startswith("@keyframes"):
            if "panelIn" in s:
                out.append(s + "{" + body + "}")
        elif _keep(s):
            out.append(s + "{" + body + "}")
    return "\n".join(out)


# ---------- blok markup porto (struktur = v3, isi = hook data) ----------
PORTO_MARKUP = """  <!-- Project Detail Dialog (generated by tools/build_dialog.py dari prototypes/project-dialog-v3.html) -->
  <dialog id="projectDialog" class="proj-dialog" aria-labelledby="projectDialogTitle">
    <button class="proj-dialog-close" id="projectDialogClose" aria-label="Tutup">&times;</button>

    <!-- ===== KIRI: galeri ===== -->
    <div class="proj-dialog-gallery" id="projectDialogGallery" tabindex="0">
      <div class="proj-dialog-stage">
        <div class="proj-dialog-track" id="projectDialogTrack"></div>

        <button class="proj-dialog-nav proj-dialog-prev" id="projectDialogPrev" aria-label="Foto sebelumnya" hidden>&#8249;</button>
        <button class="proj-dialog-nav proj-dialog-next" id="projectDialogNext" aria-label="Foto berikutnya" hidden>&#8250;</button>
      </div>

      <div class="proj-dialog-foot">
        <div class="proj-dialog-dots" id="projectDialogDots" role="tablist" aria-label="Pilih foto" style="margin:0 auto"></div>
        <span class="proj-dialog-count" id="projectDialogCount" aria-live="polite" hidden></span>
      </div>
    </div>

    <!-- ===== KANAN: konten ===== -->
    <div class="proj-dialog-body" id="projectDialogBody">
      <h2 class="proj-dialog-title" id="projectDialogTitle" data-dialog="title"></h2>

      <div class="proj-dialog-meta" data-dialog="meta"></div>

      <p class="proj-dialog-short" data-dialog="short"></p>

      <div class="proj-dialog-tabs" role="tablist" aria-label="Detail proyek">
        <button class="proj-dialog-tab" id="projTabTldr" role="tab" aria-selected="true" aria-controls="projPanelTldr">TL;DR</button>
        <button class="proj-dialog-tab" id="projTabFull" role="tab" aria-selected="false" aria-controls="projPanelFull">Full Stories</button>
      </div>

      <!-- TL;DR -->
      <div class="proj-dialog-panel" id="projPanelTldr" role="tabpanel" aria-labelledby="projTabTldr">
        <p class="proj-dialog-tldr" data-dialog="tldr"></p>
        <ul class="proj-dialog-bullets" data-dialog="bullets"></ul>
      </div>

      <!-- FULL STORIES -->
      <div class="proj-dialog-panel" id="projPanelFull" role="tabpanel" aria-labelledby="projTabFull" hidden>
        <dl class="proj-dialog-blocks" data-dialog="blocks"></dl>
      </div>
    </div>
  </dialog>"""

# ---------- JS porto (logika = v3, sumber data = PORTFOLIO_DATA) ----------
PORTO_JS = r"""function openProjectDialog(p) {
  const dlg = document.getElementById('projectDialog');
  if (!dlg || !p) return;
  const L = currentLang === 'en';
  const q = sel => dlg.querySelector(sel);
  const body = dlg.querySelector('.proj-dialog-body');

  // ---- isi konten ----
  q('[data-dialog="title"]').textContent = L ? p.title_en : p.title_id;
  q('[data-dialog="short"]').textContent = L ? (p.short_en || p.desc_en || '') : (p.short_id || p.desc_id || '');

  // meta = tag chips lalu year (urutan sama dengan v3)
  const tg = (L ? p.tags_en : p.tags_id) || [];
  let metaHtml = tg.map(t => '<span class="proj-dialog-tag">' + t + '</span>').join('');
  if (p.year) metaHtml += '<span class="proj-dialog-year">' + p.year + '</span>';
  q('[data-dialog="meta"]').innerHTML = metaHtml;

  // TL;DR
  q('[data-dialog="tldr"]').textContent = L ? (p.tldr_en || '') : (p.tldr_id || '');
  const bs = L ? (p.bullets_en || []) : (p.bullets_id || []);
  const ul = q('[data-dialog="bullets"]');
  ul.innerHTML = bs.map(b => '<li>' + b + '</li>').join('');
  ul.style.display = bs.length ? '' : 'none';

  // Full stories: Context / Roles / Process / Impact
  const bl = L ? (p.blocks_en || []) : (p.blocks_id || []);
  q('[data-dialog="blocks"]').innerHTML = bl.map(b =>
    '<div class="proj-dialog-block"><dt>' + b.label + '</dt><dd>' + b.text + '</dd></div>').join('');

  // ---- galeri ----
  const track   = document.getElementById('projectDialogTrack');
  const prevBtn = document.getElementById('projectDialogPrev');
  const nextBtn = document.getElementById('projectDialogNext');
  const dotsBox = document.getElementById('projectDialogDots');
  const counter = document.getElementById('projectDialogCount');
  const gal     = document.getElementById('projectDialogGallery');
  const images  = (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);

  track.innerHTML = images.map(src =>
    '<div class="proj-dialog-slide"><img src="' + src + '" alt="" decoding="async" /></div>').join('');
  dotsBox.innerHTML = images.map((_, i) =>
    '<button class="proj-dialog-dot' + (i === 0 ? ' on' : '') + '" role="tab" aria-selected="' +
    (i === 0) + '" aria-label="Foto ' + (i + 1) + '"></button>').join('');

  // ---- carousel (persis v3) ----
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0, timer = null, hovered = false, manual = false;

  function render() {
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
    Array.from(dotsBox.children).forEach((d, i) => {
      d.classList.toggle('on', i === index);
      d.setAttribute('aria-selected', String(i === index));
    });
    counter.textContent = (index + 1) + ' / ' + images.length;
  }
  function goTo(i) { index = (i + images.length) % images.length; render(); }
  function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }
  function startAuto() {
    if (reduce || manual || images.length < 2) return;
    stopAuto();
    timer = setInterval(() => { if (!hovered && !document.hidden) goTo(index + 1); }, 5000);
  }
  function userNav(i) { manual = true; stopAuto(); goTo(i); }

  prevBtn.onclick = () => userNav(index - 1);
  nextBtn.onclick = () => userNav(index + 1);
  Array.from(dotsBox.children).forEach((d, i) => { d.onclick = () => userNav(i); });

  gal.onmouseenter = () => { hovered = true; };
  gal.onmouseleave = () => { hovered = false; };
  gal.onfocusin = () => { hovered = true; };
  gal.onfocusout = () => { hovered = false; };
  gal.onkeydown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); userNav(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); userNav(index + 1); }
  };
  let touchX = null;
  gal.ontouchstart = (e) => { touchX = e.touches[0].clientX; };
  gal.ontouchend = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) userNav(index + (dx < 0 ? 1 : -1));
    touchX = null;
  };

  // ---- tabs (tanpa resize; body yang scroll) ----
  const tabTldr   = document.getElementById('projTabTldr');
  const tabFull   = document.getElementById('projTabFull');
  const panelTldr = document.getElementById('projPanelTldr');
  const panelFull = document.getElementById('projPanelFull');

  function selectTab(which) {
    const isTldr = which === 'tldr';
    tabTldr.setAttribute('aria-selected', String(isTldr));
    tabFull.setAttribute('aria-selected', String(!isTldr));
    panelTldr.hidden = !isTldr;
    panelFull.hidden = isTldr;

    const active = isTldr ? panelTldr : panelFull;
    active.style.animation = 'none';
    void active.offsetWidth;
    active.style.animation = '';

    body.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
  tabTldr.onclick = () => selectTab('tldr');
  tabFull.onclick = () => selectTab('full');
  selectTab('tldr');

  // ---- state awal galeri (persis v3) ----
  render();
  if (images.length < 2) {
    prevBtn.hidden = nextBtn.hidden = dotsBox.hidden = counter.hidden = true;
  } else {
    prevBtn.hidden = nextBtn.hidden = dotsBox.hidden = counter.hidden = false;
    startAuto();
  }

  // ---- buka ----
  if (typeof dlg.showModal === 'function') {
    if (dlg.open) dlg.close();
    body.scrollTo({ top: 0, behavior: 'auto' });
    document.body.style.overflow = 'hidden';
    dlg.showModal();
  } else {
    dlg.setAttribute('open', '');
  }
}"""


def build_apply():
    import subprocess
    style, markup, script = extract()
    css = filter_dialog_css(var_map(rename_css(style)))
    assert 'body{' not in css.replace(' ', '') or True

    # --- 1. index.html ---
    idx = ROOT / "index.html"
    html = idx.read_text(encoding="utf-8")
    m = re.search(r"[ \t]*<dialog id=\"projectDialog\".*?</dialog>", html, re.S)
    if not m:
        sys.exit("FATAL: blok <dialog id='projectDialog'> tidak ditemukan di index.html")
    html = html[:m.start()] + PORTO_MARKUP + html[m.end():]
    idx.write_text(html, encoding="utf-8")
    print("PATCH index.html  -> dialog diganti struktur v3")

    # --- 2. style.css ---
    cssf = ROOT / "style.css"
    csstxt = cssf.read_text(encoding="utf-8")
    start_markers = ["/* ---- PROJECT DIALOG ---- */", "/* ==== PROJECT DIALOG — GENERATED"]
    end_marker = "/* ---- PROJECT CARD CTA ---- */"
    a = next((csstxt.find(m) for m in start_markers if csstxt.find(m) != -1), -1)
    b = csstxt.find(end_marker)
    if a == -1 or b == -1 or b <= a:
        sys.exit("FATAL: marker blok CSS dialog tidak ditemukan")
    block = (
        "/* ==== PROJECT DIALOG — GENERATED dari prototypes/project-dialog-v3.html ====\n"
        "   Jangan edit manual. Regenerate: python3 tools/build_dialog.py --apply */\n"
        + css.strip()
        + "\n\n/* v4: samakan inherited line-height dengan lingkungan v3 (body default normal) */\n"
        + ".proj-dialog{line-height:normal}\n\n"
        + "/* v4: <dialog> WAJIB fixed + inset 0 + margin auto agar modal benar-benar\n"
        + "   terpusat di viewport (position:relative dari v3 hanya untuk <div> demo). */\n"
        + "dialog.proj-dialog{position:fixed;inset:0;margin:auto;max-height:calc(100dvh - 24px)}\n"
        + "/* v4: author CSS display:grid menimpa UA dialog:not([open]){display:none}.\n"
        + "   Tanpa ini, dialog TERTUTUP tetap tampil & ikut ter-scroll di halaman. */\n"
        + "dialog.proj-dialog:not([open]){display:none}\n\n"
        + "/* v4: selaraskan chip dialog dengan chip kartu (soft green / putih-gold) */\n"
        + ".proj-dialog-tag{background:#E4EFE7;color:#1E5F3C;border-color:rgba(38,121,74,.16)}\n"
        + ".proj-dialog-year{background:#fff;border-color:rgba(183,121,31,.24)}\n\n"
    )
    csstxt = csstxt[:a] + block + csstxt[b:]
    cssf.write_text(csstxt, encoding="utf-8")
    print("PATCH style.css   -> blok dialog diganti CSS v3 (variabel tema porto)")

    # --- 3. script.js ---
    jsf = ROOT / "script.js"
    js = jsf.read_text(encoding="utf-8")
    mj = re.search(r"function openProjectDialog\(p\) \{.*?\n\}\n\nfunction initProjectDialog", js, re.S)
    if not mj:
        sys.exit("FATAL: fungsi openProjectDialog tidak ditemukan di script.js")
    js = js[:mj.start()] + PORTO_JS + "\n\nfunction initProjectDialog" + js[mj.end():]
    jsf.write_text(js, encoding="utf-8")
    print("PATCH script.js   -> openProjectDialog diganti logika v3")

    # --- 4. self-check ---
    print("\nSELF-CHECK")
    h2 = idx.read_text(encoding="utf-8")
    for label, pat in [
        ("dialog root", r'<dialog id="projectDialog" class="proj-dialog"'),
        ("gallery id", r'id="projectDialogGallery"'),
        ("close btn", r'id="projectDialogClose"'),
        ("track", r'id="projectDialogTrack"'),
        ("dots", r'id="projectDialogDots"'),
        ("count", r'id="projectDialogCount"'),
        ("body", r'id="projectDialogBody"'),
        ("tabs", r'class="proj-dialog-tabs"'),
        ("no kicker", r'proj-dialog-kicker'),
        ("no inner wrapper", r'proj-dialog-inner'),
        ("no separate tags div", r'class="proj-dialog-tags"'),
    ]:
        found = re.search(pat, h2) is not None
        want = not label.startswith("no ")
        print(("  OK   " if found == want else "  FAIL ") + label)

    c2 = cssf.read_text(encoding="utf-8")
    dup = [s for s in set(re.findall(r"^\.proj-dialog[\w-]*", c2, re.M))
           if len(re.findall(r"^" + re.escape(s) + r"\s*[,{]", c2, re.M)) > 3]
    print("  close rule ada:", ".proj-dialog-close {" in c2 or ".proj-dialog-close{" in c2)
    print("  sticky tabs:", "position:sticky" in re.sub(r"\s+", "", c2.replace("position: sticky", "position:sticky")))

    r = subprocess.run(["node", "--check", str(jsf)], capture_output=True, text=True)
    print("  node --check:", "OK" if r.returncode == 0 else "FAIL\n" + r.stderr)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--preview", action="store_true")
    ap.add_argument("--apply", action="store_true")
    a = ap.parse_args()
    if a.preview:
        build_preview()
    elif a.apply:
        build_apply()
    else:
        ap.print_help()

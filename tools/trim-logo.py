#!/usr/bin/env python3
"""
trim-logo.py — Rapikan logo dengan memotong area transparan di sekelilingnya.

Kenapa perlu: banyak file logo PNG/SVG diekspor pada kanvas persegi dengan banyak
ruang kosong transparan. Akibatnya, saat ditampilkan di navbar, ukuran yang terlihat
jauh lebih kecil daripada ukuran kotak CSS-nya.

Cara pakai:
    python3 tools/trim-logo.py images/logo/LOGO-BARU.png
    python3 tools/trim-logo.py images/logo/LOGO-BARU.png --padding 12 --output images/logo/logo-nav.png

Hasil: file baru dengan akhiran "-trim.png" (atau sesuai --output).
File asli TIDAK diubah.
"""

import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Butuh Pillow. Jalankan: pip install Pillow")


def trim(src: str, output: str | None, padding: int) -> str:
    im = Image.open(src).convert("RGBA")
    bbox = im.split()[3].getbbox()

    if bbox is None:
        sys.exit(f"Gambar {src} seluruhnya transparan — tidak ada isi untuk dipotong.")

    left, top, right, bottom = bbox
    pad = padding

    # Jangan melebihi batas gambar
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(im.width, right + pad)
    bottom = min(im.height, bottom + pad)

    cropped = im.crop((left, top, right, bottom))

    if output is None:
        base, ext = os.path.splitext(src)
        output = f"{base}-trim{ext}"
    elif os.path.isdir(output):
        base, ext = os.path.splitext(os.path.basename(src))
        output = os.path.join(output, f"{base}-trim{ext}")

    cropped.save(output, optimize=True)

    def pct(v, total):
        return f"{v / total * 100:.0f}%"

    print(f"Sumber   : {src} ({im.width}x{im.height})")
    print(f"Bounding : {bbox[2]-bbox[0]}x{bbox[3]-bbox[1]} "
          f"({pct(bbox[2]-bbox[0], im.width)} lebar, {pct(bbox[3]-bbox[1], im.height)} tinggi)")
    print(f"Hasil    : {output} ({cropped.width}x{cropped.height})")
    print(f"Ukuran   : {os.path.getsize(src):,} -> {os.path.getsize(output):,} bytes")
    return output


def main() -> None:
    ap = argparse.ArgumentParser(description="Potong area transparan pada logo.")
    ap.add_argument("src", help="path file logo (PNG/WebP)")
    ap.add_argument("--output", "-o", default=None, help="path hasil (default: <nama>-trim.png)")
    ap.add_argument("--padding", "-p", type=int, default=8,
                    help="padding transparan yang disisakan dalam piksel (default: 8)")
    args = ap.parse_args()

    if not os.path.isfile(args.src):
        sys.exit(f"File tidak ditemukan: {args.src}")

    trim(args.src, args.output, args.padding)


if __name__ == "__main__":
    main()
# -*- coding: utf-8 -*-
"""Marka görselleri: favicon.svg, apple-touch-icon.png, og.png
   Çalıştır: python3 tools/make-brand.py"""
from PIL import Image, ImageDraw, ImageFont
import os, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BRAND = ROOT / "assets/img/brand"
BRAND.mkdir(parents=True, exist_ok=True)

PAPER = (244, 241, 234)
INK   = (25, 24, 21)
CLAY  = (156, 107, 69)
MUTED = (138, 131, 119)
LINE  = (223, 216, 202)

SERIF  = "/System/Library/Fonts/Supplemental/Georgia.ttf"
SERIF_I= "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
SANS   = "/System/Library/Fonts/Supplemental/Arial.ttf"
SANS_B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

def f(path, size):
    return ImageFont.truetype(path, size)

# ---------------------------------------------------------------- favicon.svg
(BRAND / "favicon.svg").write_text(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
    '<rect width="64" height="64" rx="6" fill="#191815"/>'
    '<text x="32" y="33" text-anchor="middle" dominant-baseline="central" '
    'font-family="Fraunces, Georgia, serif" font-size="36" font-weight="400" fill="#F4F1EA">N</text>'
    '<rect x="20" y="47" width="24" height="1.6" fill="#9C6B45"/>'
    '</svg>', encoding="utf-8")

# ------------------------------------------------------- apple-touch-icon.png
ico = Image.new("RGB", (180, 180), INK)
dr = ImageDraw.Draw(ico)
dr.text((90, 88), "N", font=f(SERIF, 96), fill=PAPER, anchor="mm")
dr.rectangle([58, 138, 122, 141], fill=CLAY)
ico.save(BRAND / "apple-touch-icon.png", optimize=True)

# ------------------------------------------------------------------- og.png
W, H = 1200, 630
og = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(og)

# yumuşak ışık bandı
band = Image.new("L", (W, H), 0)
bd = ImageDraw.Draw(band)
bd.polygon([(640, 0), (900, 0), (1200, H), (860, H)], fill=42)
og.paste(Image.new("RGB", (W, H), (255, 253, 248)), (0, 0), band)

# ince çerçeve
d.rectangle([48, 48, W - 49, H - 49], outline=LINE, width=1)

# ekipman çizgisi (reformer soyutlaması)
y = 470
for x0, x1 in [(700, 1090)]:
    d.line([(x0, y), (x1, y)], fill=(200, 192, 176), width=2)
    d.line([(x0, y + 26), (x1, y + 26)], fill=(200, 192, 176), width=2)
    d.line([(x0, y), (x0, y + 46)], fill=(200, 192, 176), width=2)
    d.line([(x1, y), (x1, y + 46)], fill=(200, 192, 176), width=2)
    d.rectangle([x0 + 70, y - 34, x0 + 220, y], outline=(200, 192, 176), width=2)

d.text((104, 150), "GAZİOSMANPAŞA · ANKARA", font=f(SANS_B, 20), fill=CLAY)
d.text((100, 208), "Daha iyi hareket edin.", font=f(SERIF, 74), fill=INK)
d.text((100, 292), "Daha güçlü hissedin.", font=f(SERIF, 74), fill=INK)
d.line([(104, 412), (300, 412)], fill=LINE, width=1)
d.text((104, 440), "Nilay's Pilates Studio", font=f(SERIF_I, 34), fill=INK)
d.text((104, 494), "Butik Pilates Stüdyosu  ·  Reformer  ·  Özel Ders", font=f(SANS, 22), fill=MUTED)

og.save(ROOT / "assets/img/og.png", optimize=True)
print("✓ favicon.svg · apple-touch-icon.png · og.png")

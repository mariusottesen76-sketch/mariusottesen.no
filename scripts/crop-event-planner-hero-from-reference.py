"""Crop landscape hero (1800×600) from the current demo reference screenshot."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / "scripts" / "assets" / "event-planner-demo-reference.png"
OUT = ROOT / "public" / "images" / "event-planner-hero.png"

TARGET_W, TARGET_H = 1800, 600
# Vertical offset after scaling to 1800 px width — balances hero, KPI and readiness incl. Budsjett & økonomi.
CROP_TOP = 140


def main() -> None:
    im = Image.open(REF)
    scale = TARGET_W / im.width
    scaled_h = int(im.height * scale)
    scaled = im.resize((TARGET_W, scaled_h), Image.Resampling.LANCZOS)
    crop = scaled.crop((0, CROP_TOP, TARGET_W, CROP_TOP + TARGET_H))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    crop.save(OUT, "PNG", optimize=True)
    print(f"Saved {OUT} ({TARGET_W}x{TARGET_H}) from reference crop top={CROP_TOP}")


if __name__ == "__main__":
    main()

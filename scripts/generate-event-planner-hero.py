"""Generate event-planner-hero.png — 1800×600 px, 3:1 landscape."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

from event_planner_demo_stats import (
    DAYS_LEFT,
    EVENT_NAME,
    PROGRAM_COUNT,
    RSVP_CONFIRMED,
    RSVP_PENDING,
    RSVP_UNCLEAR,
    STATUS_LABEL,
    TASKS_FOLLOWUP,
)

W, H = 1800, 600
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "event-planner-hero.png"

NAVY = (12, 22, 42)
NAVY_LIGHT = (18, 32, 58)
NAVY_CARD = (22, 38, 68)
SLATE = (148, 163, 184)
WHITE = (248, 250, 252)
ACCENT = (245, 158, 11)
ACCENT_SOFT = (251, 191, 36)
GREEN = (52, 211, 153)
AMBER = (251, 191, 36)
BLUE_SOFT = (96, 165, 250)
OUTLINE = (45, 65, 105)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def card(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int, int, int],
    radius: int = 18,
    accent: bool = False,
) -> None:
    fill = (28, 42, 74) if accent else NAVY_CARD
    outline = ACCENT if accent else OUTLINE
    width = 2 if accent else 2
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def main() -> None:
    img = Image.new("RGB", (W, H), NAVY)
    draw = ImageDraw.Draw(img)

    # Subtle horizontal accent glow left
    for i in range(320):
        t = 1 - i / 320
        draw.line([(i, 0), (i, H)], fill=(int(ACCENT[0] * 0.04 * t), int(ACCENT[1] * 0.05 * t), int(20 + 8 * t)))

    pad_x, pad_y = 56, 48
    content_h = H - pad_y * 2

    title_font = load_font(38, bold=True)
    event_font = load_font(34, bold=True)
    tagline_font = load_font(24)
    card_label_font = load_font(18, bold=True)
    stat_font = load_font(52, bold=True)
    stat_sub_font = load_font(17)
    ai_title_font = load_font(20, bold=True)
    ai_body_font = load_font(24, bold=True)
    ai_sub_font = load_font(18)

    # --- LEFT: branding ---
    left_w = 360
    lx = pad_x
    ly = pad_y + 24

    draw.text((lx, ly), "EVENT PLANNER", fill=WHITE, font=title_font)
    ly += 52
    draw.rounded_rectangle((lx, ly, lx + 96, ly + 5), radius=2, fill=ACCENT)
    ly += 28
    draw.text((lx, ly), EVENT_NAME, fill=ACCENT_SOFT, font=event_font)
    ly += 48
    draw.text((lx, ly), "Planlegg. Fordel ansvar.", fill=WHITE, font=tagline_font)
    ly += 30
    draw.text((lx, ly), "Følg opp.", fill=ACCENT_SOFT, font=tagline_font)

    # --- MIDDLE: 4 overview cards ---
    mid_x = pad_x + left_w + 32
    mid_w = 920
    card_gap = 20
    card_w = (mid_w - card_gap * 3) // 4
    card_h = content_h - 8
    card_y = pad_y + 4

    overview_cards = [
        (
            "DELTAKERE / RSVP",
            RSVP_CONFIRMED,
            "Bekreftet",
            GREEN,
            f"{RSVP_PENDING} avventer · {RSVP_UNCLEAR} uklart",
        ),
        ("OPPGAVER", TASKS_FOLLOWUP, "Krever oppfølging", AMBER, "prioriteres av AI"),
        ("PROGRAM", PROGRAM_COUNT, "Punkter", BLUE_SOFT, "Kick-off · Workshop"),
        ("STATUS", DAYS_LEFT, "Dager igjen", ACCENT_SOFT, STATUS_LABEL),
    ]

    for i, (label, value, sublabel, color, hint) in enumerate(overview_cards):
        cx = mid_x + i * (card_w + card_gap)
        card(draw, (cx, card_y, cx + card_w, card_y + card_h))
        draw.text((cx + 22, card_y + 22), label, fill=ACCENT_SOFT, font=card_label_font)
        draw.text((cx + 22, card_y + 58), value, fill=color, font=stat_font)
        draw.text((cx + 22, card_y + 128), sublabel, fill=WHITE, font=load_font(20, bold=True))
        draw.text((cx + 22, card_y + 158), hint, fill=SLATE, font=stat_sub_font)

        # Mini progress bar for visual interest
        bar_y = card_y + card_h - 36
        draw.rounded_rectangle((cx + 22, bar_y, cx + card_w - 22, bar_y + 8), radius=4, fill=NAVY_LIGHT)
        fill_w = int((card_w - 44) * (0.55 + i * 0.1))
        draw.rounded_rectangle((cx + 22, bar_y, cx + 22 + fill_w, bar_y + 8), radius=4, fill=color)

    # --- RIGHT: AI module ---
    right_x = mid_x + mid_w + 32
    right_w = W - pad_x - right_x
    card(draw, (right_x, card_y, right_x + right_w, card_y + card_h), accent=True)

    rx = right_x + 24
    ry = card_y + 24
    draw.text((rx, ry), "✦  AI-ASSISTENT", fill=ACCENT_SOFT, font=ai_title_font)
    ry += 36
    draw.text((rx, ry), "Neste prioritet", fill=SLATE, font=stat_sub_font)
    ry += 28
    draw.text((rx, ry), "Avklar agenda", fill=WHITE, font=ai_body_font)
    draw.text((rx, ry + 34), "og deltakere", fill=WHITE, font=ai_body_font)
    ry += 88
    draw.rounded_rectangle((rx, ry, right_x + right_w - 24, ry + 52), radius=12, fill=NAVY_LIGHT)
    draw.text((rx + 16, ry + 14), f"{TASKS_FOLLOWUP} oppgaver krever oppfølging", fill=BLUE_SOFT, font=ai_sub_font)
    ry += 72
    draw.text((rx, ry), "Planleggingsstøtte", fill=SLATE, font=stat_sub_font)
    ry += 26
    draw.text((rx, ry), "Prioritering  ·  Neste steg", fill=SLATE, font=load_font(16))

    # Outer frame subtle border
    draw.rounded_rectangle((24, 20, W - 24, H - 20), radius=24, outline=(35, 52, 88), width=2)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"Saved {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()

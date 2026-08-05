"""Generate event-planner-hjemmeside.png — 341×1024 px (1:3)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

from event_planner_demo_stats import (
    DAYS_LEFT,
    EVENT_DATE,
    EVENT_NAME,
    PROGRAM_ITEMS,
    RSVP_CONFIRMED,
    RSVP_PENDING,
    RSVP_UNCLEAR,
    STATUS_LABEL,
    TASKS_FOLLOWUP,
)

W, H = 341, 1024
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "event-planner-hjemmeside.png"

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


def card(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], accent: bool = False) -> None:
    fill = (28, 42, 74) if accent else NAVY_CARD
    outline = ACCENT if accent else OUTLINE
    draw.rounded_rectangle(xy, radius=10, fill=fill, outline=outline, width=1)


def main() -> None:
    img = Image.new("RGB", (W, H), NAVY)
    draw = ImageDraw.Draw(img)

    pad = 12
    cw = W - pad * 2
    gap = 16

    f_title = load_font(36, bold=True)
    f_tag = load_font(18)
    f_event = load_font(21, bold=True)
    f_sec = load_font(12, bold=True)
    f_label = load_font(12)
    f_val = load_font(16, bold=True)
    f_stat = load_font(30, bold=True)
    f_body = load_font(13)
    f_task = load_font(14, bold=True)

    y = 0

    header_h = 194
    draw.rounded_rectangle((0, 0, W, header_h), radius=0, fill=NAVY_LIGHT)
    draw.rectangle((0, header_h - 4, W, header_h), fill=ACCENT)

    title = "EVENT PLANNER"
    tw = draw.textlength(title, font=f_title)
    draw.text(((W - tw) / 2, 32), title, fill=WHITE, font=f_title)

    tag1 = "Planlegg. Fordel ansvar."
    tag2 = "Følg opp."
    t1w = draw.textlength(tag1, font=f_tag)
    t2w = draw.textlength(tag2, font=f_tag)
    draw.text(((W - t1w) / 2, 96), tag1, fill=WHITE, font=f_tag)
    draw.text(((W - t2w) / 2, 120), tag2, fill=ACCENT_SOFT, font=f_tag)

    y = header_h + gap

    card(draw, (pad, y, pad + cw, y + 56))
    ew = draw.textlength(EVENT_NAME, font=f_event)
    draw.text(((W - ew) / 2, y + 10), EVENT_NAME, fill=WHITE, font=f_event)
    dw = draw.textlength(EVENT_DATE, font=f_body)
    draw.text(((W - dw) / 2, y + 36), EVENT_DATE, fill=SLATE, font=f_body)
    y += 56 + gap

    draw.text((pad, y), "ARRANGEMENTSOVERSIKT", fill=ACCENT_SOFT, font=f_sec)
    y += 18
    card(draw, (pad, y, pad + cw, y + 82))
    draw.text((pad + 12, y + 14), EVENT_DATE, fill=WHITE, font=f_val)
    draw.text((pad + 12, y + 40), f"{DAYS_LEFT} dager igjen", fill=ACCENT_SOFT, font=load_font(15, bold=True))
    draw.rounded_rectangle((pad + cw - 96, y + 14, pad + cw - 12, y + 42), radius=8, fill=(34, 197, 94))
    draw.text((pad + cw - 88, y + 20), STATUS_LABEL, fill=NAVY, font=f_body)
    y += 82 + gap

    draw.text((pad, y), "DELTAKERE / RSVP", fill=ACCENT_SOFT, font=f_sec)
    y += 18
    gw = (cw - 8) // 3
    stats = [
        ("Bekreftet", RSVP_CONFIRMED, (18, 52, 44), GREEN),
        ("Avventer", RSVP_PENDING, (52, 42, 18), AMBER),
        ("Uklart", RSVP_UNCLEAR, (18, 42, 62), BLUE_SOFT),
    ]
    for i, (lbl, val, bg, col) in enumerate(stats):
        cx = pad + i * (gw + 4)
        draw.rounded_rectangle((cx, y, cx + gw, y + 68), radius=10, fill=bg, outline=OUTLINE, width=1)
        draw.text((cx + 6, y + 8), lbl, fill=SLATE, font=f_body)
        draw.text((cx + 6, y + 28), val, fill=col, font=f_stat)
    y += 68 + gap

    draw.text((pad, y), "OPPGAVER & ANSVAR", fill=ACCENT_SOFT, font=f_sec)
    y += 18
    for task_title, meta, col in [
        ("Bestill catering", "Arrangør · Pågår", AMBER),
        ("Send invitasjoner", "Medarrangør · Fullført", GREEN),
    ]:
        card(draw, (pad, y, pad + cw, y + 54))
        draw.text((pad + 10, y + 8), task_title, fill=WHITE, font=f_task)
        draw.text((pad + 10, y + 30), meta, fill=col, font=f_body)
        y += 54 + 8
    y += gap - 8

    draw.text((pad, y), "PROGRAM", fill=ACCENT_SOFT, font=f_sec)
    y += 18
    card(draw, (pad, y, pad + cw, y + 86))
    py = y + 12
    for time, item in PROGRAM_ITEMS:
        draw.text((pad + 12, py), time, fill=ACCENT_SOFT, font=f_body)
        draw.text((pad + 58, py), item, fill=WHITE, font=f_body)
        py += 24
    y += 86 + gap

    draw.text((pad, y), "AI-ASSISTENT", fill=ACCENT_SOFT, font=f_sec)
    y += 18
    ai_h = 118
    card(draw, (pad, y, pad + cw, y + ai_h), accent=True)
    draw.text((pad + 12, y + 12), "Neste prioritet", fill=ACCENT_SOFT, font=f_label)
    draw.text((pad + 12, y + 32), "Bekreft catering", fill=WHITE, font=load_font(17, bold=True))
    draw.text((pad + 12, y + 52), "og deltakerliste", fill=WHITE, font=load_font(17, bold=True))
    draw.text((pad + 12, y + 82), f"{TASKS_FOLLOWUP} oppgaver krever oppfølging", fill=SLATE, font=f_body)
    y += ai_h + gap

    footer_h = H - y - pad
    draw.rounded_rectangle((pad, y, pad + cw, H - pad), radius=10, fill=NAVY_LIGHT, outline=ACCENT, width=1)
    draw.text((pad + 12, y + footer_h // 2 - 18), "Event Planner", fill=WHITE, font=load_font(15, bold=True))
    draw.text((pad + 12, y + footer_h // 2 + 2), "AI-assistert planlegging", fill=SLATE, font=f_body)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"Saved {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()

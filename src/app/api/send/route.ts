import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailTableRows(
  rows: { label: string; value: string; isEmail?: boolean }[]
): string {
  return rows
    .map((row, index) => {
      const rowStyle = index % 2 === 1 ? ' style="background: #f8fafc;"' : "";
      const valueHtml = row.isEmail
        ? `<a href="mailto:${escapeHtml(row.value)}">${escapeHtml(row.value)}</a>`
        : escapeHtml(row.value);

      return `<tr${rowStyle}>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b; width: 220px;">${row.label}</td>
            <td style="padding: 8px 12px;">${valueHtml}</td>
          </tr>`;
    })
    .join("\n");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { navn, epost, telefon, firma, stilling, kategori, beskrivelse } = body;

    if (!kategori?.trim()) {
      return NextResponse.json(
        { error: "Velg hva du ønsker å komme i dialog om." },
        { status: 400 }
      );
    }

    const kategoriTekst = kategori.trim();

    // Sjekk at miljøvariabler er konfigurert
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "E-posttjenesten er ikke konfigurert. Bruk mailto-fallback.", fallback: true },
        { status: 503 }
      );
    }

    const tableRows: { label: string; value: string; isEmail?: boolean }[] = [
      { label: "Navn", value: navn },
      { label: "E-post", value: epost, isEmail: true },
    ];

    if (telefon?.trim()) {
      tableRows.push({ label: "Telefon", value: telefon.trim() });
    }
    if (firma?.trim()) {
      tableRows.push({ label: "Firma / virksomhet", value: firma.trim() });
    }
    if (stilling?.trim()) {
      tableRows.push({ label: "Stilling / rolle", value: stilling.trim() });
    }

    tableRows.push({
      label: "Hva ønsker personen å komme i dialog om?",
      value: kategoriTekst,
    });

    const htmlInnhold = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
          Ny henvendelse fra mariusottesen.no
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          ${buildEmailTableRows(tableRows)}
        </table>

        <div style="background: #f1f5f9; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h3 style="margin: 0 0 8px; color: #334155;">Kort melding</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(beskrivelse)}</p>
        </div>
      </div>
    `;

    const kopiHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
          Bekreftelse på din henvendelse
        </h2>
        <p style="color: #475569; line-height: 1.6;">
          Hei ${escapeHtml(navn)},<br/><br/>
          Takk for din henvendelse til Marius Ottesen Consulting.
          Jeg har mottatt meldingen din og tar kontakt så snart som mulig.
        </p>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
          Med vennlig hilsen,<br/>
          Marius Ottesen Consulting
        </p>
      </div>
    `;

    // Gmail SMTP-transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send til Marius
    await transporter.sendMail({
      from: `"Marius Ottesen Consulting" <${process.env.EMAIL_USER}>`,
      to: "marius.ottesen.76@gmail.com",
      replyTo: epost,
      subject: "Ny henvendelse fra mariusottesen.no",
      html: htmlInnhold,
    });

    // Send kopi til avsender
    await transporter.sendMail({
      from: `"Marius Ottesen Consulting" <${process.env.EMAIL_USER}>`,
      to: epost,
      subject: "Bekreftelse – Din henvendelse til Marius Ottesen Consulting",
      html: kopiHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("E-post-feil:", error);
    const message = error instanceof Error ? error.message : "Kunne ikke sende e-post";
    return NextResponse.json(
      { error: message, fallback: true },
      { status: 500 }
    );
  }
}

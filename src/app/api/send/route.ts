import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { navn, firma, epost, telefon, stilling, kategorier, budsjett, beskrivelse } = body;

    // Sjekk at miljøvariabler er konfigurert
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "E-posttjenesten er ikke konfigurert. Bruk mailto-fallback.", fallback: true },
        { status: 503 }
      );
    }

    const kategoriTekst = kategorier?.length > 0 ? kategorier.join(", ") : "Ikke spesifisert";
    const budsjettTekst = budsjett || "Ikke spesifisert";

    const htmlInnhold = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
          Ny forespørsel – Marius Ottesen Consulting
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b; width: 140px;">Navn</td>
            <td style="padding: 8px 12px;">${navn}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Firma</td>
            <td style="padding: 8px 12px;">${firma || "–"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Stilling / Tittel</td>
            <td style="padding: 8px 12px;">${stilling || "–"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">E-post</td>
            <td style="padding: 8px 12px;"><a href="mailto:${epost}">${epost}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Telefon</td>
            <td style="padding: 8px 12px;">${telefon || "–"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Kategori</td>
            <td style="padding: 8px 12px;">${kategoriTekst}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Budsjettramme</td>
            <td style="padding: 8px 12px;">${budsjettTekst}</td>
          </tr>
        </table>

        <div style="background: #f1f5f9; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h3 style="margin: 0 0 8px; color: #334155;">Prosjektbeskrivelse</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${beskrivelse}</p>
        </div>
      </div>
    `;

    const kopiHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
          Bekreftelse på din forespørsel
        </h2>
        <p style="color: #475569; line-height: 1.6;">
          Hei ${navn},<br/><br/>
          Takk for din henvendelse til Marius Ottesen Consulting. 
          Jeg har mottatt forespørselen din og vil ta kontakt så snart som mulig for en uforpliktende samtale.
        </p>
        <p style="color: #475569; font-size: 14px; margin-top: 24px;">
          Her er en kopi av det du sendte:
        </p>
        ${htmlInnhold}
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
      subject: `Ny forespørsel fra ${navn}${firma ? ` – ${firma}` : ""}`,
      html: htmlInnhold,
    });

    // Send kopi til avsender
    await transporter.sendMail({
      from: `"Marius Ottesen Consulting" <${process.env.EMAIL_USER}>`,
      to: epost,
      subject: "Bekreftelse – Din forespørsel til Marius Ottesen Consulting",
      html: kopiHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("E-post-feil:", error);
    return NextResponse.json(
      { error: error?.message || "Kunne ikke sende e-post", fallback: true },
      { status: 500 }
    );
  }
}

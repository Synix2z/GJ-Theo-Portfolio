import { NextResponse } from "next/server";
import { Resend } from "resend";

// Vérifie le format de l'e-mail
const isEmail = (v: string) =>
  v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Eviter l'injection de code dans le mail
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Ne garde que du texte
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  // Honeypot : champ caché que seuls les bots remplissent
  if (body.website) return NextResponse.json({ ok: true });

  // Nettoyage des champs avec une longueur maximale chacun
  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const subject = clean(body.subject, 150).replace(/[\r\n]+/g, " ");
  const message = clean(body.message, 5000);

  // Validation : aucun champ vide, e-mail au bon format
  if (!name || !subject || !message || !isEmail(email)) {
    return NextResponse.json({ error: "Champs invalides" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Site Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Requête invalide" }, { status: 400 });

  const { name, email, subject, message, website } = body as Record<string, string>;

  // Honeypot : on fait semblant que c'est OK pour ne pas informer les bots
  if (website) return NextResponse.json({ ok: true });

  if (!name?.trim() || !subject?.trim() || !message?.trim() || !isEmail(email ?? "")) {
    return NextResponse.json({ error: "Champs invalides" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Site Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `[Portfolio] ${subject.slice(0, 150)}`,
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
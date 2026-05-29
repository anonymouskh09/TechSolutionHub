import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS?.replace(/\s/g, "");

    if (!user || !pass) {
      console.error("SMTP credentials missing");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const html = `
      <h2>New contact form — TechSolutionHub</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "—").replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: `"TechSolutionHub Website" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try WhatsApp." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

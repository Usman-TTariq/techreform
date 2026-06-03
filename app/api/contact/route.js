import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getUserConfirmationEmail } from "@/app/utils/emailTemplate";

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Tech Reforms <info@techreforms.com>";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured. Set RESEND_API_KEY in .env" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailContent = getUserConfirmationEmail(name);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email.trim(),
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    if (name?.trim() || phone?.trim() || message?.trim()) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "info@techreforms.com",
        subject: `New contact form: ${name?.trim() || "No name"}`,
        html: `
          <p><strong>New contact form submission</strong></p>
          <p><strong>Name:</strong> ${name?.trim() || "—"}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${message?.trim() || "—"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

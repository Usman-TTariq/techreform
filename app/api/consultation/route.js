import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use RESEND_FROM_EMAIL after verifying techreforms.com at https://resend.com/domains
// Until then, Resend's verified address works for testing (you can only send TO your own email on free tier)
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
    const { name, businessName, email, phone, message } = body;

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Thank-you email to the person who submitted the form (from info@techreforms.com)
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email.trim(),
      subject: "Thank You for Connecting with Us",
      html: `
        <p>Hi${name?.trim() ? ` ${name.trim()}` : ""},</p>
        <p>Thank you for scheduling a free consultation with Tech Reforms.</p>
        <p>We've received your details and will get back to you shortly.</p>
        <p>Best regards,<br/><strong>Tech Reforms</strong></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    // Optional: send internal notification to info@techreforms.com with form data
    if (name?.trim() || businessName?.trim() || phone?.trim() || message?.trim()) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "info@techreforms.com",
        subject: `New consultation: ${businessName?.trim() || name?.trim() || "No name"}`,
        html: `
          <p><strong>New free consultation submission</strong></p>
          <p><strong>Name:</strong> ${name?.trim() || "—"}</p>
          <p><strong>Business:</strong> ${businessName?.trim() || "—"}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || "—"}</p>
          <p><strong>Description:</strong></p>
          <p>${message?.trim() || "—"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Consultation API error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Set RESEND_API_KEY in .env" },
        { status: 503 }
      );
    }
    const resend = new Resend(apiKey);
    const body = await request.json().catch(() => ({}));
    const domainName = body.name || "techreforms.com";

    const { data, error } = await resend.domains.create({ name: domainName });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      domainId: data?.id,
      message: `Domain ${domainName} created. Add the DNS records in Resend dashboard, then call POST /api/domains/verify with domainId: ${data?.id}`,
    });
  } catch (err) {
    console.error("Domain create error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create domain" },
      { status: 500 }
    );
  }
}

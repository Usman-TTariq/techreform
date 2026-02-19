import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
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

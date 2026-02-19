import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Set RESEND_API_KEY in .env" },
        { status: 503 }
      );
    }
    const resend = new Resend(apiKey);
    const { searchParams } = new URL(request.url);
    const domainId = searchParams.get("id") || process.env.RESEND_DOMAIN_ID;

    if (!domainId) {
      return NextResponse.json(
        { error: "Domain ID required. Pass ?id=xxx or set RESEND_DOMAIN_ID in .env" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.domains.get(domainId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, domain: data });
  } catch (err) {
    console.error("Domain get error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to get domain" },
      { status: 500 }
    );
  }
}

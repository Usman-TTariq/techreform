import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const domainId = body.domainId || process.env.RESEND_DOMAIN_ID;

    if (!domainId) {
      return NextResponse.json(
        { error: "Domain ID required. Pass { domainId: 'xxx' } or set RESEND_DOMAIN_ID in .env" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.domains.verify(domainId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      domain: data,
      message: data?.status === "verified" ? "Domain verified. You can now send from info@techreforms.com" : "Verification requested. Check Resend dashboard for DNS record status.",
    });
  } catch (err) {
    console.error("Domain verify error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to verify domain" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getArticles } from "@/lib/strapi";

/**
 * GET /api/blogs – proxy to test if Next.js server can fetch from Strapi.
 * Open http://localhost:3000/api/blogs in the browser; if you see blog data, the server fetch works.
 */
export async function GET() {
  try {
    const blogs = await getArticles({ limit: 30 });
    return NextResponse.json({ ok: true, count: blogs.length, data: blogs });
  } catch (e) {
    console.error("[API /api/blogs]", e);
    return NextResponse.json(
      { ok: false, error: e.message },
      { status: 500 }
    );
  }
}

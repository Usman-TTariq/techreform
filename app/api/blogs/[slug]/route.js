import { NextResponse } from "next/server";
import { getArticleBySlug } from "@/lib/strapi";

/**
 * GET /api/blogs/:slug – single blog by documentId/slug.
 */
export async function GET(request, { params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const slug = resolved?.slug;
  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }
  try {
    const blog = await getArticleBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, data: blog });
  } catch (e) {
    console.error("[API /api/blogs/[slug]]", e);
    return NextResponse.json(
      { ok: false, error: e.message },
      { status: 500 }
    );
  }
}

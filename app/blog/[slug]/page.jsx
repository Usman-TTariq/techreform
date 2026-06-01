import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BlogArticleBody from "../../components/blog-article-body";
import FaqSection from "../../components/faq-section";
import { notFound, permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

async function getBlogBySlug(slug) {
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/blogs/${encodeURIComponent(slug)}`, { cache: "no-store" });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data ?? null;
}

export async function generateMetadata({ params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const blog = await getBlogBySlug(resolved?.slug);
  if (!blog) return { title: "Blog | Tech Reforms" };
  return {
    title: blog.metaTitle ? `${blog.metaTitle} | Tech Reforms Blog` : `${blog.title} | Tech Reforms Blog`,
    description: blog.metaDescription || blog.excerpt || undefined,
    openGraph: blog.coverUrl ? { images: [blog.coverUrl] } : undefined,
    ...(blog.canonicalUrl && {
      alternates: { canonical: blog.canonicalUrl },
    }),
  };
}

export default async function BlogPostPage({ params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const slug = resolved?.slug;
  const article = slug ? await getBlogBySlug(slug) : null;

  if (!article) notFound();

  if (article.slug && article.slug !== slug) {
    permanentRedirect(`/blog/${article.slug}`);
  }

  return (
    <div>
      <Header />
      <article className="min-h-screen bg-[#0E0E0E] pt-8 pb-16">
        <div className="container px-4 max-w-[800px] mx-auto">
          <Link href="/blog" className="text-[#F74B1C] font-britanicaRegular text-[18px] hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>
          {(article.blogDate || article.publishedAt) && (
            <time className="text-gray-400 text-sm block mb-1" dateTime={article.blogDate || article.publishedAt}>
              {new Date(article.blogDate || article.publishedAt).toLocaleDateString("en-US", { dateStyle: "long" })}
            </time>
          )}
          <h1 className="font-britanicaBlack text-center text-white text-3xl sm:text-4xl md:text-[45px] leading-tight mb-4">
            {article.title}
          </h1>

          {article.coverUrl && (
            <div className="relative flex justify-center mb-8">
              <Image
                src={article.coverUrl}
                alt={article.altText || article.title}
                // fill
                className="object-cover !w-[80%] max-sm:w-full rounded-3xl"
                unoptimized={article.coverUrl.startsWith("http")}
                // sizes="(max-width: 800px) 100vw, 800px"
                width={1000}
                height={1000}
              />
            </div>
          )}
          <BlogArticleBody article={article} />
          {article.faq && article.faq.length > 0 && (
            <div className="mt-12">
              <FaqSection items={article.faq} />
            </div>
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
}

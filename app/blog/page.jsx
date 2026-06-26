import { headers } from "next/headers";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import BlogContentSection from "../components/blog-content-section";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Tech Reforms Blog",
  "url": "https://techreforms.com/blog",
  "description": "TechReforms \u2013 Premier digital agency offering mobile app development, scalable e-commerce solutions, & staff augmentation to grow your business online.",
  "publisher": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techreforms.com/images/hover-logo.png"
    }
  },
  "inLanguage": "en-US"
};

// http://localhost:3000/api/blogs
// http://localhost:1337/api/blogs
// http://localhost:1337/api/blogs?populate=coverUrl

const Blog = async () => {
    let blogs = [];
    try {
        const headersList = await headers();
        const host = headersList.get("host") || "localhost:3000";
        const protocol = host.includes("localhost") ? "http" : "https";
        const res = await fetch(`${protocol}://${host}/api/blogs`, { cache: "no-store" });
        if (res.ok) {
            const json = await res.json();
            blogs = Array.isArray(json.data) ? json.data : [];
        }
    } catch (_) {
        blogs = [];
    }
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <Header />
      <main>
            <GeneralHeroSection
                firstWord="Insights, "
                secondWord="Ideas &"
                thirdWord="Updates"
                forthWord=""
                fifthWord="from Our Blog"
                para="Stay updated with the latest trends, expert insights, and practical tips from our team. Our blog covers everything from technology and design to business growth—helping you learn, build, and stay ahead in the digital world."
                autoHeight={true}
            />
            <BlogContentSection blogs={blogs} />
            </main>

            <Footer />
        </div>
    );
};

export default Blog;

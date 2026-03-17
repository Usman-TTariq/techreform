import { headers } from "next/headers";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import BlogContentSection from "../components/blog-content-section";

export const dynamic = "force-dynamic";
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
            <Header />
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
            <Footer />
        </div>
    );
};

export default Blog;

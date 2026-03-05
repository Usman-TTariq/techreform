import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import BlogContentSection from "../components/blog-content-section";

const Blog = () => {
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
            <BlogContentSection />
            <Footer />
        </div>
    )
}

export default Blog;

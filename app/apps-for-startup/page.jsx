import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAreStartup from "../components/who-we-are-startup";
import StartupWhatWeOfferSection from "../components/startup-what-we-offer-section";
import StartupIndustriesMobile from "../components/startup-industries-mobile";
import StartupProcessSection from "../components/startup-process-section";
import StartupWhyChooseSection from "../components/startup-why-choose-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Online Startup Mobile App Development Services USA",
  description:
    "iOS, Android & cross-platform startup app development — with consulting, UI/UX, MVP, backend & QA support. Work with our team and launch your idea today.",
  alternates: { canonical: "/apps-for-startup" },
};

const STARTUP_TESTIMONIALS = [
  {
    name: "Alex Kim",
    role: "Founder — FitTrack (Seed funded $800K)",
    quote:
      "We raised our seed round with a TechReforms-built Flutter app. Investors were impressed — clean UI, stable build, full IP ownership documented. Went from idea to funded in 5 months. TechReforms built the product that made that possible.",
  },
  {
    name: "Sarah Rodriguez",
    role: "CEO — HomeServe Now",
    quote:
      "On-demand home services marketplace — two-sided app, Stripe Connect, real-time tracking. TechReforms delivered in 14 weeks. We hit 1,000 bookings in the first month. The architecture handled the growth without issues.",
  },
  {
    name: "Mark Peters",
    role: "CTO — TaskGrid SaaS",
    quote:
      "B2B SaaS product — web + mobile, Stripe subscriptions, multi-tenant. TechReforms used Next.js and Flutter simultaneously. Launched in 12 weeks. First 10 paying customers by week 14. The scalable architecture meant we didn't have to rebuild at 500 users.",
  },
  {
    name: "Jamie Lee",
    role: "Founder — LearnAI",
    quote:
      "AI-powered EdTech app — OpenAI API for personalized learning paths, React Native frontend, Node.js backend. TechReforms understood the AI integration deeply. 800 students onboarded in week one after Product Hunt launch.",
  },
];

const AppsForStartup = () => {
    return (
        <>
            <Header />
            <GeneralHeroSection
                firstWord="App Development for Startups"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord="| That Helps You Launch Faster"
                para="Build, test, and scale your idea with reliable Mobile App Development for Startups designed for real users, fast growth, and long-term success."
                buttonText="Launch Your Startup App — Free Strategy Call"
            />
            <WhoWeAreStartup />
            <StartupWhatWeOfferSection />
            <StartupIndustriesMobile firstWord="We Have" secondWord="Served" thirdWord="Industries" />
            <StartupProcessSection />
            <StartupWhyChooseSection />
            <TestimonialSection testimonials={STARTUP_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection {...PAGE_CONTACT.appsForStartup} />
            <Footer />
        </>
    )
}

export default AppsForStartup;

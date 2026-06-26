import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { EDUCATION_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { EDUCATION_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { EDUCATION_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import CaseStudiesSection from "../components/case-studies-section";
import { EDUCATION_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { EDUCATION_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const educationAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Education App Development",
  serviceType: "Education App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/education-app",
  description:
    "Tech Reforms builds custom education apps with live classes, progress tracking and secure payments for schools, coaching centers, and e-learning businesses.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Education App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Education App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live Class & Video Learning App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "School & Institute Management App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Education App Development" } },
    ],
  },
};

export const metadata = {
  title: "Education App Development Company in the USA | Tech Reforms",
  description:
    "Want your own e-learning or school management app instead of juggling spreadsheets and WhatsApp groups? Tech Reforms builds custom education apps with live classes, progress tracking & secure payments. Let's talk.",
  keywords: [
    "education app development",
    "e-learning app development",
    "school management app",
    "online learning platform",
    "LMS app development",
    "tutoring app",
    "student management app",
    "education app like Udemy",
    "education app like Byju's",
    "live class app",
  ],
  alternates: { canonical: "/education-app" },
};

const EDUCATION_APP_IMPACT_CARDS = [
  {
    value: "350+",
    label: "Apps already live",
    action: "Go see for yourself",
    href: "/portfolio",
    isLink: true,
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    value: "4.9★",
    label: "Rating on Clutch",
    action: "Real client reviews, not cherry-picked",
    href: "https://clutch.co/profile/tech-reforms",
    isLink: true,
    rounded: "",
  },
  {
    value: "$5K",
    label: "Is where pricing starts",
    action: "Fixed, no surprises later",
    isLink: false,
    rounded: "",
  },
  {
    value: "4–8 wk",
    label: "And your MVP is ready",
    action: "Test with real students",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const EDUCATION_APP_TESTIMONIALS = [
  {
    name: "Coaching Center Owner",
    role: "Texas · Tutoring & Coaching Center",
    quote:
      "We were managing classes through WhatsApp groups and spreadsheets before this, and it just wasn't scaling. Tech Reforms built us a proper learning app with class scheduling and student tracking, and our admin work has dropped massively. Parents can actually see attendance and progress now without calling us every week.",
  },
  {
    name: "Online Course Creator",
    role: "Florida · E-Learning & Online Courses",
    quote:
      "Our biggest worry was whether students would actually stick with an app instead of just watching free videos elsewhere. Tech Reforms built in progress tracking and quizzes that keep students engaged, and our course completion rate has genuinely improved since launch. It feels like a proper learning platform now, not just a video library.",
  },
  {
    name: "School Administrator",
    role: "California · K-12 School Management",
    quote:
      "We run a school with multiple grades and needed one app that teachers, students, and parents could all use differently. Tech Reforms set it up with separate dashboards for each, and it's made communication between school and home so much smoother. Even our less tech-savvy teachers picked it up quickly.",
  },
  {
    name: "EdTech Startup Founder",
    role: "New York · Live Online Classes",
    quote:
      "Live classes were a mess on our old setup, constant lag and dropped connections during peak hours. Tech Reforms rebuilt our video infrastructure properly, and now our live sessions run smoothly even with hundreds of students joined at once. Our support tickets about class issues have gone way down.",
  },
  {
    name: "Test Prep Institute Owner",
    role: "Illinois · Exam Preparation & Test Prep",
    quote:
      "We wanted students to actually practice between lessons, not just attend and forget. Tech Reforms built in practice quizzes and performance reports that show exactly where each student is struggling. Parents love the visibility, and it's honestly helped us retain more students term after term.",
  },
];

const EducationApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Let's Turn Your Teaching Business Into a"
          secondWord="Digital-First Learning Platform"
          breakAfterFirstWord
          thirdWord=""
          forthWord=""
          fifthWord=""
          para="So you're running a coaching center, a school, or maybe an online course business — and managing everything through spreadsheets, WhatsApp groups, and phone calls just isn't cutting it anymore. We get it. We've built education apps before that actually keep students engaged and parents in the loop, without you having to chase anyone for updates. That's what we do at Tech Reforms."
          para2="Tell us what you're teaching and how — live classes, recorded courses, school management, anything — and let's figure out what your app needs."
          buttonText="Talk to Us About Your Education App"
        />
        <OurImpactBoxesSection cards={EDUCATION_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...EDUCATION_APP_WHAT_WE_OFFER} />
        <ProcessSection {...EDUCATION_APP_PROCESS} />
        <WhyChooseSection {...EDUCATION_APP_WHY_CHOOSE} />
        <CaseStudiesSection {...EDUCATION_APP_CASE_STUDIES} />
        <FaqSection items={EDUCATION_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={EDUCATION_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.educationApp} />
      </main>

      <Footer />
    </>
  );
};

export default EducationApp;

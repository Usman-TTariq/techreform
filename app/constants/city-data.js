const cityShape = (overrides) => ({
  metaDescription: "PLACEHOLDER — to be written per city",
  heroHeadlinePrefix: "Custom",
  heroHeadlineAccent: "Mobile App Development Services",
  heroHeadlineSuffix: "for Intuitive, High-Growth Apps",
  heroIntro: "PLACEHOLDER — city-specific intro paragraph",
  industriesFirstWord: "We Have",
  industriesSecondWord: "Served",
  industriesThirdWord: "Industries",
  industriesIntro: "PLACEHOLDER — city-specific industries blurb",
  formIntro: "PLACEHOLDER — city-specific contact form intro",
  hideAnalytics: false,
  hideAppIntegration: false,
  hideFlutterComparison: false,
  ...overrides,
});

export const CITIES = {
  "new-york": cityShape({
    name: "New York",
    state: "NY",
    stateFull: "New York",
    slug: "new-york",
    metaTitle: "Top Mobile App Development Services & Experts in New York, NY",
    metaDescription:
      "Hire expert mobile app developers in New York, NY. Tech Reforms builds custom iOS, Android, and cross-platform apps for startups and enterprises — from design through launch.",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in New York",
    heroIntro: [
      "If you're building a mobile app in New York, you need a team that moves as fast as the city does — without cutting corners on quality.",
      "We partner with NYC startups racing to market, growing companies scaling their product, and enterprises that need secure, compliant apps built to perform under real-world pressure.",
      "From architecture and UI/UX to development, QA, and App Store launch — we handle the full build. And when your app is live, we stay on board for updates, fixes, and the features your users ask for next.",
    ],
    industriesIntro:
      "New York's market spans fintech, healthcare, media, retail, and professional services — and we've built mobile apps across all of them. Whether you're launching a consumer product in Manhattan or a B2B platform serving the tri-state area, we bring industry-aware development that fits how your users actually work.",
    formIntro:
      "Ready to build your mobile app in New York? Tell us about your project — we'll respond with a clear plan, realistic timeline, and what it takes to get your app to market.",
  }),
  "los-angeles": cityShape({
    name: "Los Angeles",
    state: "CA",
    stateFull: "California",
    slug: "los-angeles",
    metaTitle: "Top Mobile App Development Services & Experts in Los Angeles, CA",
    metaDescription:
      "Los Angeles mobile app development for startups and brands. Custom iOS, Android, and cross-platform apps — design, development, testing, launch, and ongoing support.",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Los Angeles",
    heroIntro: [
      "Los Angeles is full of bold ideas — and your mobile app deserves a build that matches that ambition.",
      "We work with LA startups, creator-led brands, and established businesses that need apps users actually want to open every day. Fast to market when it matters, built to scale when growth hits.",
      "Share your vision with us. We take care of design, development, testing, and launch — then stick around to iterate, optimize, and keep your app competitive as your audience grows.",
    ],
    industriesIntro:
      "From entertainment and lifestyle to health, fitness, and e-commerce, Los Angeles companies need apps that look great and perform flawlessly. We've delivered mobile products for brands that compete on experience — not just features — and we know what it takes to stand out in a crowded California market.",
    formIntro:
      "Building a mobile app in Los Angeles? Drop us your project details — we'll get back to you with next steps, scope options, and a straightforward path from idea to launch.",
  }),
  chicago: cityShape({
    name: "Chicago",
    state: "IL",
    stateFull: "Illinois",
    slug: "chicago",
    metaTitle: "Top Mobile App Development Services & Experts in Chicago, IL",
    metaDescription:
      "Chicago mobile app development for Midwest businesses. Custom iOS and Android apps built for reliability, security, and long-term growth — from MVP to enterprise scale.",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Chicago",
    heroIntro: [
      "Chicago businesses don't have time for apps that look good in a demo but fall apart in production. We build mobile products that hold up.",
      "Whether you're a startup validating an MVP, a mid-size company modernizing operations, or an enterprise rolling out a secure internal tool — we tailor the build to your goals and your users.",
      "You bring the idea. We handle architecture, design, native and cross-platform development, testing, and deployment. After launch, we stay available for maintenance, new features, and the roadmap ahead.",
    ],
    industriesIntro:
      "Chicago's economy runs on logistics, manufacturing, finance, healthcare, and professional services — sectors where mobile apps need to be dependable, not flashy for the sake of it. We've built solutions for field teams, customer-facing platforms, and internal tools that integrate cleanly with existing systems.",
    formIntro:
      "Have a mobile app project in Chicago? Send us the details — we'll reply with an honest assessment, recommended approach, and what a successful launch looks like for your business.",
  }),
  houston: cityShape({
    name: "Houston",
    state: "TX",
    stateFull: "Texas",
    slug: "houston",
    metaTitle: "Top Mobile App Development Services & Experts in Houston, TX",
    metaDescription:
      "Houston mobile app developers for energy, healthcare, and enterprise. Tech Reforms builds secure, scalable iOS and Android apps from concept through launch and support.",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Houston",
    heroIntro: [
      "Houston companies operate at scale — and your mobile app should be built with that same mindset from day one.",
      "We help startups ship fast, growing businesses replace outdated apps, and enterprises deploy secure solutions for field teams, customers, and internal operations across Texas and beyond.",
      "Tell us what you need built. We cover design, development, rigorous testing, and launch — and we don't walk away once the app is in the store. Ongoing support and iteration are part of how we work.",
    ],
    industriesIntro:
      "Energy, healthcare, logistics, and construction dominate Houston — industries where mobile apps must work offline, handle complex workflows, and meet strict security requirements. We've built apps for teams in the field, patient-facing platforms, and operational tools that keep large organizations running smoothly.",
    formIntro:
      "Planning a mobile app in Houston? Share your requirements with us — we'll respond with a practical plan, timeline estimate, and the right technology approach for your project.",
  }),
  dallas: cityShape({
    name: "Dallas",
    state: "TX",
    stateFull: "Texas",
    slug: "dallas",
    hideAnalytics: true,
    hideAppIntegration: true,
    hideFlutterComparison: true,
    metaTitle: "Top Mobile App Development Services & Experts in Dallas, TX",
    metaDescription:
      "Dallas mobile app development for startups and enterprises. Custom iOS, Android, and cross-platform apps built around your business goals — design, development, launch, and support.",
    heroHeadlinePrefix: "Mobile App Development Services in Dallas, TX —",
    heroHeadlineAccent: "Built Around Your Business,",
    heroHeadlineSuffix: "Not Our Convenience",
    heroIntro: [
      "If you have a mobile app idea and you're based in Dallas, this is where it gets built properly.",
      "We work with startups that need a market-ready product fast, growing businesses that have outgrown their current app, and enterprises that need something secure, scalable, and built to last. Whatever your stage, we build around your goals — not a generic template.",
      "Bring us your idea. We handle architecture, design, development, testing, and launch. And when your app goes live, we don't disappear — because that's usually when you need us most.",
    ],
    industriesIntro:
      "Dallas-Fort Worth is one of the fastest-growing tech and business hubs in the country — home to finance, healthcare, telecom, logistics, and retail companies that need mobile apps built for real users and real revenue. We've delivered products for startups going to market and enterprises modernizing legacy workflows across North Texas.",
    formIntro:
      "Got a mobile app idea in Dallas? Tell us what you're building — we'll get back to you with a clear scope, timeline, and the right stack to get your app live and growing.",
    ctaText: "Start Your Project →",
    ctaPhone: "(582) 233-5015",
    offerSection: {
      headlinePrefix: "Hire Mobile App Developers in Dallas",
      headlineAccent: "Who Actually Take Ownership of Your Product",
      headlineSuffix: "",
      stackedHeadline: true,
      body: "When you hire a mobile app developer in Dallas, you're not just buying code — you're trusting someone with your business idea, your timeline, and your budget. We treat every project like it's our own product on the line. Your deadlines are our deadlines, your problems are our problems, and your app doesn't leave our hands until it's genuinely ready to perform.",
      cards: [
        {
          title: "UI/UX Design & Prototyping",
          description:
            "Your app's design is the first thing Dallas users judge — and they judge it in seconds. We prototype every screen before development starts so you see exactly how your app looks, feels, and flows before a single line of code is written.",
        },
        {
          title: "App Security & Data Encryption",
          description:
            "Dallas businesses handling customer data can't afford a security gap. We build end-to-end encryption, secure authentication, and data protection protocols directly into your app's architecture from day one — not patched in after a breach.",
        },
        {
          title: "API Integration & Third-Party Services",
          description:
            "Payment gateways, CRMs, mapping tools, analytics platforms — your app needs to talk to other systems without breaking. We integrate third-party APIs cleanly so your app works as one connected product, not a collection of parts that barely hold together.",
        },
        {
          title: "Push Notifications & Real-Time Features",
          description:
            "Users forget apps they don't hear from. We build smart push notification systems and real-time features — live updates, instant messaging, dynamic content — that keep your Dallas users engaged and coming back without feeling spammed.",
        },
        {
          title: "App Testing & QA",
          description:
            "Every bug your team misses, your users find. We run full QA cycles across devices, OS versions, and user scenarios before your app goes live — so your Dallas launch day doesn't turn into a damage control day.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "Launching your app is not the finish line. OS updates, new device sizes, user feedback, performance issues — they all happen after go-live. We stay on as your Dallas app maintenance partner so your product keeps running the way it should, long after launch.",
        },
      ],
    },
    budgetSection: {
      headlinePrefix: "Your Dallas App Budget, ",
      headlineAccent: "Broken Down in 60 Seconds",
    },
    buildSection: {
      headlinePrefix: "How We Actually Build Your App — And Why",
      headlineAccent: "Dallas Businesses Don't Have to Chase Us for Updates",
      stackedHeadline: true,
      paragraphs: [
        "Here's what usually happens with other mobile app development companies in Dallas: you get a slick proposal, a confident kickoff call, and then three weeks of silence while you wonder if anyone is actually working on your project.",
        "We run differently. From day one, you know who is building your custom mobile app in Dallas, what they're working on this week, and exactly when you'll see something real. Not a status email. Not a progress bar. Actual working software you can tap through, break, and give feedback on — every two weeks without fail.",
        "We don't hand your Dallas app development project to a junior team after the contract is signed. The same senior mobile app developers in Dallas who scope your project are the ones who build it. And when your app goes live, we don't mark the ticket closed — because the real test is what happens when your actual users get their hands on it.",
      ],
      ctaText: "Get a Free Quote →",
    },
    estimationSection: {
      headlinePrefix: "Got a Mobile App Idea in Dallas?",
      headlineAccent: "Let's Talk Before You Spend a Single Dollar",
      headlineSuffix: "",
      stackedHeadline: true,
      body: "Tell us what you're building and we'll tell you exactly what it takes — timeline, budget, and the right approach for your idea. No commitment, no sales pressure, just a straight answer from a Dallas mobile app development team that's built this before.",
      ctaText: "Get Started →",
      ctaPhone: "(582) 233-5015",
      imageSrc: "/images/dallas-idea.webp",
      imageAlt: "Dallas mobile app idea consultation illustration",
    },
    engagementSection: {
      headlinePrefix: "Work With Our Dallas App Development Team",
      headlineAccent: "the Way That Actually Makes Sense for Your Business",
      stackedHeadline: true,
      supportingCopy:
        "Not every Dallas business is at the same stage — and a model designed for a funded startup makes no sense for an enterprise team, and vice versa. Pick the one that fits where you are right now.",
      models: [
        {
          badge: "For startups & MVPs",
          title: "Fixed Budget, Zero Surprises",
          description:
            "You have a clear idea, a set budget, and a deadline that isn't moving. We define the scope upfront, agree on the number, and deliver against it. What we quote in Dallas is what you pay — nothing added mid-project, nothing renegotiated at the finish line.",
        },
        {
          badge: "For evolving products",
          title: "Build as You Learn",
          description:
            "Some Dallas app projects don't have a fixed destination — they evolve as the market responds. You pay for what gets built each sprint, adjust priorities as you learn, and never get locked into a roadmap that stopped making sense three weeks ago.",
        },
        {
          badge: "For long-term growth",
          title: "Your Product, Our Full Attention",
          description:
            "Your Dallas app needs consistent development attention month after month — not a fresh team every few months who needs weeks just to understand your codebase. Our developers stay with your product long term, know every corner of it, and build faster because of it.",
        },
        {
          badge: "For in-house extension",
          title: "More Hands, Zero Hiring Headache",
          description:
            "You already have a development team in Dallas. You just need more hands on deck without going through a six-month hiring process. We drop senior mobile app developers into your existing workflow — same tools, same process, zero onboarding drama.",
        },
      ],
    },
    hipaaSection: {
      headlinePrefix: "HIPAA-Compliant Mobile App Development in Dallas",
      headlineAccent: "for Healthcare Businesses That Can't Risk a Data Breach",
      stackedHeadline: true,
      supportingCopy:
        "Healthcare apps in Dallas operate under strict federal regulations — and one compliance gap can cost you far more than the app ever made. We build HIPAA-compliant mobile applications with the right security architecture from day one, not patched in after a regulator asks questions.",
      features: [
        {
          title: "AES-256 Encryption",
          description:
            "Every piece of patient data your app touches — stored or moving — is encrypted at the strongest commercially available standard. Your users' information stays protected whether it's sitting in your database or travelling between systems.",
        },
        {
          title: "Role-Based Access Control",
          description:
            "Not everyone in your Dallas healthcare organization needs access to everything. We build granular permission systems with multi-factor authentication so the right people see the right data — and nobody else does.",
        },
        {
          title: "Audit Logs",
          description:
            "Every action taken inside your app is recorded with a timestamp and a user trail. When a compliance review happens, you have a complete, clean activity history ready — not a scramble to piece together what happened and when.",
        },
        {
          title: "BAA Support",
          description:
            "A Business Associate Agreement isn't optional under HIPAA — it's a legal requirement. We sign BAAs with every Dallas healthcare client we work with before development begins, so your compliance obligations are covered from the first line of code.",
        },
        {
          title: "Auto Session Timeout",
          description:
            "Unattended devices are one of the most common sources of unauthorized PHI access. We build automatic session logout into every healthcare app so patient data is never exposed because someone walked away from their phone.",
        },
        {
          title: "TLS 1.3 APIs",
          description:
            "Every API connection your app makes — to labs, EHRs, insurance systems, or any third-party service — runs over TLS 1.3 encryption. Data in transit stays secure across every endpoint, every time.",
        },
      ],
    },
    facilitiesSection: {
      headlinePrefix: "Why Dallas Businesses Build Their Apps With Us —",
      headlineAccent: "Not an Offshore Team, Not a Faceless Agency",
      headlineSuffix: "",
      stackedHeadline: true,
      paragraphs: [
        "Offshore teams look cheap on paper until your project goes silent for three weeks, the delivered code doesn't match what was scoped, and you're starting over with someone new. Big agencies look impressive until your project gets handed to a junior developer you've never met and a project manager who's juggling fifteen other clients.",
        "We're a Dallas mobile app development team that works differently. Being in the same timezone means you can schedule real conversations, review working builds together, and resolve problems the same day they surface — not three days later after an email thread that went nowhere.",
        "Every Dallas app project we take on is handled by the same senior team from kickoff to launch. No handoffs, no outsourcing the hard parts, no disappearing after delivery. Just a team that knows your product inside out and is accountable for what it ships.",
      ],
      ctaText: "See How We Work →",
      ctaAction: "scroll-how-we-work",
    },
    processSection: {
      headlinePrefix: "How We Take Your Dallas App",
      headlineAccent: "From a Rough Idea to a Live Product —",
      headlineSuffix: "Step by Step",
      cards: [
        {
          title: "Discovery & Scoping",
          description:
            "Before we write a single line of code, we dig into your business goals, your target users, and the problem your Dallas app needs to solve. We map user flows, define core features, and lock the project scope so development never goes off-track. This phase typically takes 2 to 4 weeks — and every dollar spent here saves five in development rework later.",
        },
        {
          title: "UI/UX Design & Prototyping",
          description:
            "We build clickable prototypes before development begins so you can see exactly how your app looks and behaves on a real screen. Every screen, tap, and transition is designed around how your Dallas users actually think — not how we assume they do. Design runs 3 to 6 weeks depending on complexity, and nothing moves to development until you've signed off on it.",
        },
        {
          title: "Development & Architecture",
          description:
            "This is where your Dallas mobile app gets built — in two-week sprints using clean, documented code structured for long-term scalability. We select the right stack for your product: Swift or Kotlin for native performance, Flutter or React Native for cross-platform efficiency. You see working software at the end of every sprint, not at the end of the project.",
        },
        {
          title: "QA Testing & Security Review",
          description:
            "QA is integrated from day one — developers never test their own code. Our QA team runs functional testing, performance testing, security audits, and device compatibility checks across iOS and Android before your Dallas app goes anywhere near the App Store or Google Play. Every bug found in testing is a crash your users never experience.",
        },
        {
          title: "Launch & Post-Launch Support",
          description:
            "Apple App Store review takes approximately 2 days; both platforms require separate assets and legal configuration — we handle all of it. After your Dallas app goes live, we monitor performance, track user behavior, and resolve issues as they surface. Launch day is not the end of our job. It's where the real data starts coming in.",
        },
      ],
    },
    whyPartnerSection: {
      headlinePrefix: "Why Dallas Businesses Choose",
      headlineAccent: "Tech Reforms",
      headlineSuffix: "as Their Mobile App Development Partner",
      paragraphs: [
        "Most Dallas businesses don't just need a developer — they need a team that understands their market, asks the right questions before building anything, and stays accountable long after the app goes live.",
        "We don't take on every project that comes through the door. We work with Dallas businesses where we're confident we can deliver something that actually moves the needle — and we tell you upfront if we're not the right fit. That honesty is rare in this industry, and it's exactly why the clients who work with us come back for their next project.",
        "Your idea deserves a team that treats it seriously. Let's talk about what we can build together.",
      ],
      ctaText: "Start Your Project →",
      ctaPhone: "(582) 233-5015",
    },
    faqSection: {
      headlinePrefix: "Frequently Asked Questions About",
      headlineAccent: "Mobile App Development in Dallas",
      items: [
        {
          question: "How much does it cost to build a mobile app in Dallas?",
          answer:
            "Mobile app development costs in Dallas typically range from $20,000 for a simple single-platform app to $200,000+ for a complex enterprise-grade product. The final number depends on your platform choice (iOS, Android, or cross-platform), the number of features, backend complexity, third-party integrations, and whether you need ongoing post-launch support. The most accurate way to get a number is to share your requirements with us directly — we provide detailed estimates broken down by phase, not a ballpark figure pulled from thin air.",
        },
        {
          question: "How long does it take to develop a mobile app in Dallas?",
          answer:
            "A focused MVP built for a Dallas startup typically takes 8 to 16 weeks from discovery to launch. A full-featured product with complex integrations, custom UI, and enterprise security requirements can take 6 to 12 months. Discovery and scoping takes 2 to 4 weeks, UI/UX design runs 3 to 6 weeks, and QA and App Store submission add another 2 to 4 weeks on top of development. Timelines are set at the beginning of every project and tracked sprint by sprint — you always know exactly where your Dallas app stands.",
        },
        {
          question: "Should I build a native app or a cross-platform app for my Dallas business?",
          answer:
            "It depends on your product requirements, not a blanket preference. Native apps built in Swift (iOS) or Kotlin (Android) deliver the highest performance and full access to device-specific features — the right choice for healthcare apps, fintech platforms, or any product where security and speed are non-negotiable. Cross-platform apps built in Flutter or React Native share up to 95% of code across iOS and Android, cutting your development cost and timeline significantly. We recommend the right stack after understanding your Dallas business goals — not based on what's easiest for us to build.",
        },
        {
          question: "Do you build HIPAA-compliant mobile apps in Dallas?",
          answer:
            "Yes. Dallas healthcare businesses working with patient data, appointment systems, telemedicine platforms, or any product handling Protected Health Information (PHI) require HIPAA-compliant architecture by law. We build end-to-end encryption, role-based access control, audit logging, auto session timeouts, TLS 1.3 API connections, and Business Associate Agreements (BAA) into every healthcare app we develop in Dallas — from the first line of code, not as an afterthought.",
        },
        {
          question: "What happens after my Dallas app goes live?",
          answer:
            "Launch day is not the finish line. The first 90 days after your Dallas app goes live are when real users surface edge cases your testing didn't catch, OS updates create compatibility issues, and user behavior reveals features that need adjustment. We offer post-launch maintenance, performance monitoring, bug resolution, and iterative feature development — so your app keeps improving based on real usage data rather than assumptions made before anyone had used it.",
        },
        {
          question: "Can you add AI features to my existing Dallas mobile app?",
          answer:
            "Yes. We integrate large language models, RAG pipelines, on-device ML, and APIs like GPT and Claude into existing mobile apps and new builds. AI features that actually make sense for Dallas businesses include intelligent search, personalized content recommendations, automated customer support workflows, predictive analytics, and real-time data processing. We don't add AI because it sounds impressive — we add it where it solves a specific problem your users have.",
        },
        {
          question: "How do I hire a mobile app developer in Dallas through Tech Reforms?",
          answer:
            "Start with a free consultation. You share your app idea, your business goals, and any constraints around timeline or budget. We ask the right questions, scope the project honestly, and put together a detailed proposal. If we're the right fit, we move into discovery within days — no lengthy procurement process, no committee of account managers. Just a direct conversation with the team that will actually build your Dallas app.",
        },
      ],
    },
  }),
};

export const CITY_SLUGS = Object.keys(CITIES);

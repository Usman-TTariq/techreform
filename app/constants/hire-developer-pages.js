const DEFAULT_OFFER_CARDS = (rolePlural, techShort) => [
  {
    title: "Flexible Hiring Models",
    desc: `Hire a ${rolePlural.slice(0, -1)} full-time, part-time, or on a project basis — whatever your sprint cycle demands. No rigid contracts. No recruitment overhead. Just the right talent, at the right scale, when you need it.`,
    buttonText: "See Hiring Models",
  },
  {
    title: `Dedicated ${rolePlural}`,
    desc: `Our ${techShort} engineers integrate directly into your stack, follow your Git workflow, and report to your team — not to us. Production-ready code from day one.`,
    buttonText: `Meet Our ${techShort} Team`,
  },
  {
    title: "Embedded Development Teams",
    desc: `Need more than one developer? We build ${techShort} teams aligned to your product goals — all managed as a single delivery unit embedded inside your organization.`,
    buttonText: `Build Your ${techShort} Team`,
  },
  {
    title: "On-Demand Talent",
    desc: `Urgent delivery window? We onboard pre-vetted ${techShort} developers within 72 hours. Whether you're plugging a skill gap or scaling fast, we match engineers who hit the ground running.`,
    buttonText: "Hire in 72 Hours",
  },
];

const DEFAULT_PROCESS_STEPS = (techShort, vettingFocus) => [
  {
    title: `Step 1: ${techShort} Requirement Discovery`,
    desc: `We map your full technical scope — architecture, integrations, tooling, and delivery timeline. The clearer the brief, the sharper the ${techShort} developer match.`,
    buttonText: "How It Works",
  },
  {
    title: `Step 2: Vetting ${techShort} Engineers`,
    desc: `Every developer is assessed on ${vettingFocus} — not just years of experience listed on a CV.`,
    buttonText: "Our Vetting Standards",
  },
  {
    title: "Step 3: You Interview. You Decide.",
    desc: `We shortlist the top 2–3 profiles for your review. You conduct technical interviews, evaluate cultural fit, and make the final call. No placement pressure.`,
    buttonText: "See Candidate Profiles",
  },
  {
    title: "Step 4: Onboard & Start Sprinting",
    desc: `Your developer joins your repo, attends standups, and contributes from the first sprint. We handle contracts, NDAs, and compliance — you stay focused on shipping.`,
    buttonText: "Get Started in 72 Hours",
  },
];

const DEFAULT_WHY_CARDS = (techShort, stackTags) => [
  {
    title: `${techShort}-Focused Specialists`,
    desc: `Our developers work primarily in ${techShort} — no generalist coders assigned to specialist work. Every engineer has delivered production systems in real client environments.`,
    tags: stackTags.slice(0, 3),
    buttonText: "View Developer Profiles",
  },
  {
    title: "NDA-Protected Engagement",
    desc: "Every engagement is covered by a signed NDA before work begins. Your architecture, source code, and product roadmap stay confidential — no exceptions.",
    tags: ["IP Protection", "Signed NDA", "Confidentiality"],
    buttonText: "See Our Security Standards",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Scale your team up or down based on your sprint cycle — no long-term contracts, no hidden fees. Hire one developer or a full team for enterprise rollout.",
    tags: ["Full-time", "Part-time", "Project-based"],
    buttonText: "Explore Hiring Models",
  },
  {
    title: "Cost-Efficient Without Compromise",
    desc: "Hiring through Tech Reforms costs significantly less than a local full-time hire — without sacrificing code quality, communication standards, or delivery accountability.",
    tags: ["No recruitment overhead", "Transparent pricing"],
    buttonText: "Compare Engagement Costs",
  },
];

const DEFAULT_FAQ_ITEMS = (roleLabel, rolePlural, techShort, stackList) => [
  {
    id: 1,
    question: `What does a ${roleLabel} do?`,
    answer: `A ${roleLabel} builds and maintains production software using ${techShort} and related technologies. At Tech Reforms, our ${rolePlural} also handle architecture decisions, API integrations, code reviews, and deployment pipelines aligned to your stack.`,
  },
  {
    id: 2,
    question: `How much does it cost to hire a ${roleLabel}?`,
    answer: `Cost depends on experience level, engagement model, and project scope. At Tech Reforms, hiring a dedicated ${roleLabel} costs significantly less than a local US or UK hire — without compromising on code quality or communication. We offer full-time, part-time, and fixed-scope pricing.`,
  },
  {
    id: 3,
    question: `How quickly can I onboard a ${roleLabel}?`,
    answer: `Most clients onboard within 72 hours of final selection. We maintain a pre-vetted bench — so you're not waiting for sourcing after you reach out. We shortlist 2–3 matched profiles within 24 hours.`,
  },
  {
    id: 4,
    question: "Will the developer work in my time zone?",
    answer: "Yes. Our developers work flexible hours and align with US, UK, UAE, and Australian time zones. Most maintain a 4–6 hour daily overlap with US Eastern and Pacific time zones for friction-free collaboration.",
  },
  {
    id: 5,
    question: `What technologies do your ${rolePlural} work with?`,
    answer: `Our ${rolePlural} are proficient in ${stackList}. For advanced projects we also cover CI/CD setup, automated testing, and production-scale performance optimization.`,
  },
  {
    id: 6,
    question: "Do you sign an NDA before starting?",
    answer: "Yes — a signed NDA is standard before any engagement begins. We also provide IP ownership clauses confirming all code written belongs entirely to you.",
  },
  {
    id: 7,
    question: `Can I hire a full ${techShort} development team?`,
    answer: `Yes. Tech Reforms builds dedicated teams tailored to your scope — lead developer, QA specialist, and integration engineers working as a single unit under your project manager. Scale mid-project without contract renegotiation.`,
  },
  {
    id: 8,
    question: `How do I evaluate a ${roleLabel} before hiring?`,
    answer: "You control the evaluation entirely. After we shortlist profiles, you conduct your own technical interview and cultural fit assessment. We also offer a trial engagement period before formalizing the arrangement.",
  },
];

function buildHirePage({
  slug,
  metaTitle,
  metaDescription,
  roleLabel,
  rolePlural,
  techShort,
  specialty,
  stackTags,
  vettingFocus,
  heroSecondWord,
  heroForthWord,
  heroPara,
  heroPara2,
  heroPara3,
  heroPara4,
  heroButtonText,
  whoWeAreP1,
  caseCategory,
  caseTitle,
  caseDescription,
  caseMetrics,
  faqSubtitle,
  faqTitleWhite,
  faqTitleAccent,
  faqStackList,
  statsOverride,
  caseStatsOverride,
  processDescription,
  whyParagraphs,
  whyButtonText,
  processIntroButton,
  processHeadlineAccent,
  processHeadlineWhite,
  processLabel,
  processSteps,
  whatWeOfferAccent,
  whatWeOfferHeadlineWhite,
  whatWeOfferCards,
  whyHeadlineWhite,
  whyHeadlineAccent,
  whyCards,
  faqItems,
  testimonials,
  hideWhoWeAre,
}) {
  const roleSingular = rolePlural.endsWith("s") ? rolePlural.slice(0, -1) : roleLabel;

  return {
    slug,
    metadata: {
      title: metaTitle,
      description: metaDescription,
      alternates: { canonical: `/${slug}` },
    },
    hero: {
      firstWord: "Hire ",
      secondWord: heroSecondWord ?? `Dedicated ${rolePlural}`,
      thirdWord: "",
      forthWord: heroForthWord ?? "| Who Ship. Not Just Code.",
      fifthWord: "",
      para:
        heroPara ??
        `Most ${rolePlural.toLowerCase()} write clean code. Few understand your product roadmap, deployment timelines, or what a missed sprint actually costs. At Tech Reforms, you hire ${techShort} engineers who work inside your workflow — integrated, accountable, and focused on your delivery goals.`,
      ...(heroPara2 ? { para2: heroPara2 } : {}),
      ...(heroPara3 ? { para3: heroPara3 } : {}),
      ...(heroPara4 ? { para4: heroPara4 } : {}),
      buttonText: heroButtonText ?? `Hire a ${roleSingular}`,
    },
    whoWeAre: {
      p1:
        whoWeAreP1 ??
        `We are not a general-purpose IT agency that added ${techShort} to a service list. Tech Reforms places dedicated ${techShort} specialists who live inside your ecosystem — ${specialty}. From MVP builds to enterprise systems with CI/CD and automated testing, we handle every phase. You stay focused on your product vision. We handle the engineering execution.`,
      buttonText: `Hire a ${roleSingular}`,
    },
    whatWeOffer: {
      headlineWhite: whatWeOfferHeadlineWhite ?? "Flexible Ways to Hire",
      headlineAccent: whatWeOfferAccent ?? rolePlural,
      cards: whatWeOfferCards ?? DEFAULT_OFFER_CARDS(rolePlural, techShort),
    },
    process: {
      label: processLabel ?? { firstWord: "OUR", secondWord: "HIRE", thirdWord: "PROCESS" },
      headlineWhite: processHeadlineWhite ?? "Our Proven Process to Build & Scale Your",
      headlineAccent: processHeadlineAccent ?? `${techShort} Development Team`,
      description:
        processDescription ??
        `Tech Reforms follows a precise 4-step hiring framework — built for ${techShort} projects. From requirement discovery to first sprint, every step gets the right developer inside your team without wasted time.`,
      introButton: processIntroButton ?? `Start Your ${techShort} Project`,
      steps: processSteps ?? DEFAULT_PROCESS_STEPS(techShort, vettingFocus),
    },
    whyChoose: {
      headlineWhite: whyHeadlineWhite ?? "Why Leading Businesses Choose Tech Reforms as Their",
      headlineAccent: whyHeadlineAccent ?? `${techShort} Development Partner`,
      paragraphs:
        whyParagraphs ?? [
          `Hundreds of ${rolePlural.toLowerCase()} are available online. What separates a good partner from a costly hiring mistake is accountability, technical depth, and zero-friction integration into your workflow.`,
          `At Tech Reforms, every ${roleSingular.toLowerCase()} we place is pre-vetted on real delivery — not just syntax. You get engineers who ship, communicate, and own their sprint commitments.`,
        ],
      stats:
        statsOverride ?? [
          // { value: "200+", label: `${techShort} projects delivered` },
          // { value: "72hrs", label: "Average onboarding time" },
          // { value: "98%", label: "Client retention rate" },
        ],
      cards: whyCards ?? DEFAULT_WHY_CARDS(techShort, stackTags),
      buttonText: whyButtonText ?? `Work With Our ${techShort} Team`,
    },
    caseStudies: {
      headlineWhite: `Real ${techShort} Projects.`,
      headlineAccent: "Real Results Delivered by Tech Reforms",
      intro: `These aren't portfolio screenshots. Each case study reflects a measurable ${techShort} project outcome — delivered on time, within scope, and built to scale.`,
      stats:
        caseStatsOverride ?? [
          // { value: "100+", label: `${techShort} projects` },
          // { value: "50+", label: `${techShort} engineers` },
          // { value: "98%", label: "On-time delivery" },
        ],
      caseStudy: {
        image: "/images/phones.png",
        imageAlt: `${techShort} project case study mockups`,
        category: caseCategory,
        title: caseTitle,
        description: caseDescription,
        metrics: caseMetrics,
        techTags: stackTags,
      },
    },
    faq: {
      titleWhite: faqTitleWhite ?? `${roleLabel}`,
      titleAccent: faqTitleAccent ?? "FAQ",
      subtitle: faqSubtitle ?? `Tech Reforms — Hire ${rolePlural}`,
      items: faqItems ?? DEFAULT_FAQ_ITEMS(roleLabel, rolePlural, techShort, faqStackList),
    },
    testimonials,
    hideWhoWeAre: hideWhoWeAre ?? false,
  };
}

export const HIRE_FLUTTER_PAGE = buildHirePage({
  slug: "hire-flutter",
  metaTitle: "Hire Flutter Developers for iOS, Android & Web Apps",
  metaDescription:
    "Top Flutter app development company in USA. We build high-performance iOS, Android & web apps with custom cross-platform solutions. Get a free quote today!",
  roleLabel: "Flutter Developer",
  rolePlural: "Flutter Developers",
  techShort: "Flutter",
  specialty: "cross-platform iOS, Android, Web, and Desktop from a single Dart codebase",
  stackTags: ["Flutter SDK", "Dart", "Firebase", "Stripe API"],
  vettingFocus: "widget architecture, Flutter SDK proficiency, Firebase and REST API integration, and real-world app delivery",
  faqStackList: "Flutter SDK, Dart, BLoC, Provider, GetX, Riverpod, Firebase, REST and GraphQL APIs, and App Store/Play Store deployment",
  caseCategory: "E-Commerce · USA",
  caseTitle: "Cross-Platform Shopping App Built in 10 Weeks",
  caseDescription:
    "The client needed a Flutter app with real-time inventory sync, payment gateway integration, and a unified codebase for iOS and Android — all within a 10-week delivery window.",
  caseMetrics: [
    { value: "10 wks", label: "Delivered in" },
    { value: "40%", label: "Cost vs native" },
    { value: "4.8★", label: "App store rating" },
  ],
});

export const HIRE_JAVA_PAGE = buildHirePage({
  slug: "hire-java",
  metaTitle: "Hire Java Developers | Dedicated Enterprise Java Engineers",
  metaDescription:
    "Hire expert Java developers for enterprise apps, microservices, and backend systems. Pre-vetted engineers onboard in 72 hours. Full-time, part-time, or project-based.",
  roleLabel: "Java Developer",
  rolePlural: "Java Developers",
  techShort: "Java",
  specialty: "Spring, microservices, REST APIs, and enterprise-grade backend systems",
  stackTags: ["Java 17+", "Spring Boot", "Microservices", "PostgreSQL"],
  vettingFocus: "Spring Framework, JVM performance, microservices architecture, and enterprise API design",
  faqStackList: "Java, Spring Boot, Spring Security, Hibernate, Kafka, PostgreSQL, Docker, and AWS deployment",
  caseCategory: "FinTech · USA",
  caseTitle: "Enterprise Banking API Rebuilt on Java Microservices",
  caseDescription:
    "A mid-size fintech needed to migrate a monolithic Java application to Spring Boot microservices — with zero downtime and PCI-compliant security throughout.",
  caseMetrics: [
    { value: "5 mo", label: "Delivered in" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "3x", label: "Deploy frequency" },
  ],
  hideWhoWeAre: true,
  heroSecondWord: "Dedicated Java Developers — Senior-Level Talent, Ready to Deploy",
  heroForthWord: "",
  heroPara:
    "Whether you need a dedicated Java developer for a long-term enterprise project, a backend specialist for your fintech platform, or a senior Java engineer to lead your e-commerce architecture — Tech Reforms connects you with verified talent in 72 hours or less. Our Java developers bring hands-on experience with Spring Boot, microservices architecture, REST API development, and cloud-native backend systems. No recruitment fees. No long-term commitments. Just skilled engineers who integrate with your team from day one.",
  heroButtonText: "Hire a Java Developer",
  whatWeOfferHeadlineWhite: "Flexible Java Developer Hiring Models",
  whatWeOfferAccent: "Built Around Your Project",
  whatWeOfferCards: [
    {
      title: "Dedicated Java Developer Hiring",
      desc: "Need a Java developer who works exclusively on your project? We assign a dedicated engineer who integrates directly with your team, follows your sprint cycles, and owns your backend from day one.",
      buttonText: "Hire Dedicated Developer",
    },
    {
      title: "Java Staff Augmentation",
      desc: "Scale your existing engineering team with pre-vetted Java developers — Spring Boot specialists, microservices architects, REST API engineers — without restructuring your entire hiring pipeline.",
      buttonText: "Scale Your Team",
    },
    {
      title: "Offshore Java Development Teams",
      desc: "Hire a full offshore Java development team for long-term enterprise projects, fintech platforms, or e-commerce backends. Senior-led, fully managed, and aligned with your timezone and delivery goals.",
      buttonText: "Build Offshore Team",
    },
    {
      title: "On-Demand Java Developers for Short-Term Projects",
      desc: "Launching fast? We place experienced Java developers within 72 hours for short-term builds, MVP development, legacy system migration, or critical deadline-driven backend work.",
      buttonText: "Hire in 72 Hours",
    },
  ],
  processLabel: { firstWord: "OUR", secondWord: "JAVA DEVELOPER", thirdWord: "HIRING PROCESS" },
  processHeadlineWhite: "How We Place the Right Java Developer on Your Project —",
  processHeadlineAccent: "Fast",
  processDescription:
    "From technical requirement mapping to developer onboarding — our Java hiring process is built for speed, precision, and zero friction. You stay in control at every step.",
  processIntroButton: "Start Hiring Java Developers",
  processSteps: [
    {
      title: "Share Your Technical Requirements",
      desc: "Tell us your stack, project scope, and timeline. Whether you need a Spring Boot specialist, a microservices architect, or a senior Java backend engineer — we map your exact needs before sourcing begins.",
      buttonText: "Share Requirements",
    },
    {
      title: "We Shortlist Pre-Vetted Java Developers",
      desc: "Our team screens Java developers against your technical requirements — assessing backend expertise, framework proficiency, system design skills, and real-world project experience. No raw resumes. Only qualified profiles.",
      buttonText: "See Shortlisted Profiles",
    },
    {
      title: "You Interview and Select",
      desc: "Review shortlisted Java developer profiles and conduct your own technical interviews. Full control stays with you — hire only the developer who meets your standards, no pressure, no lock-ins.",
      buttonText: "Interview Candidates",
    },
    {
      title: "Fast Onboarding — Developer Joins in 72 Hours",
      desc: "Once selected, your Java developer integrates directly into your workflows, tools, and sprint cycles. No ramp-up delays. No onboarding friction. They're productive from day one.",
      buttonText: "Onboard in 72 Hours",
    },
    {
      title: "Ongoing Support and Team Flexibility",
      desc: "Scale up, scale down, or swap developers as your project evolves. We provide continuous support throughout the engagement — ensuring delivery stays on track and your team stays aligned.",
      buttonText: "Get Ongoing Support",
    },
  ],
  whyHeadlineWhite: "Why Hire Java Developers",
  whyHeadlineAccent: "Through Tech Reforms?",
  whyParagraphs: [],
  // statsOverride: [
  //   { value: "72hrs", label: "Average placement time" },
  //   { value: "100%", label: "NDA-protected engagements" },
  //   { value: "Senior", label: "Vetted Java talent only" },
  // ],
  whyButtonText: "Hire Java Developers Today",
  whyCards: [
    {
      title: "Senior-Vetted Java Talent Only",
      desc: "Every Java developer we place is pre-screened for backend architecture, Spring Boot proficiency, and real-world delivery experience. You get engineers who've shipped production-grade systems — not just passed coding tests.",
      tags: [],
      buttonText: "View Developer Profiles",
    },
    {
      title: "No Long-Term Hiring Commitments",
      desc: "Hire a dedicated Java developer for a 2-week sprint or a 2-year enterprise build. Scale your team up or down as project demands shift — without recruitment overhead, notice periods, or contract penalties.",
      tags: [],
      buttonText: "Explore Hiring Models",
    },
    {
      title: "Full Code Ownership and NDA Protection",
      desc: "Every Java developer works under strict NDA. Your source code, architecture decisions, and proprietary systems remain 100% yours — from first commit to final delivery.",
      tags: [],
      buttonText: "See Our Security Standards",
    },
    {
      title: "Java Developers Ready in 72 Hours",
      desc: "No 6-week recruitment cycles. Once you confirm your requirements, we match you with a qualified Java developer — vetted, briefed, and ready to join your team within 72 hours.",
      tags: [],
      buttonText: "Hire in 72 Hours",
    },
  ],
  faqSubtitle: "Tech Reforms — Hire Java Developers",
  faqItems: [
    {
      id: 1,
      question: "How quickly can I hire a Java developer through Tech Reforms?",
      answer:
        "We typically match you with a pre-vetted Java developer within 72 hours of receiving your requirements. For senior roles or specialized skills like Java microservices or Spring Boot architecture, the process may take 96 to 120 hours depending on your technical specifications.",
    },
    {
      id: 2,
      question: "What Java technologies and frameworks do your developers specialize in?",
      answer:
        "Our Java developers have hands-on experience with Spring Boot, Spring MVC, Hibernate, Microservices Architecture, REST API development, Apache Kafka, Docker, Kubernetes, and cloud platforms including AWS and Google Cloud. We match developers to your specific stack — not just the language.",
    },
    {
      id: 3,
      question: "Can I hire a dedicated Java developer for a long-term enterprise project?",
      answer:
        "Yes. We place dedicated Java developers for both short-term sprints and long-term enterprise engagements. Your developer works exclusively on your project, follows your workflows, and scales with your team as the project grows.",
    },
    {
      id: 4,
      question: "Do you provide senior Java developers for fintech and e-commerce platforms?",
      answer:
        "Yes. We have senior Java developers with proven experience building high-transaction fintech systems, payment gateways, e-commerce backends, and enterprise SaaS platforms. All developers are screened for domain-specific backend experience before placement.",
    },
    {
      id: 5,
      question: "What is the difference between hiring a freelance Java developer and using Java staff augmentation?",
      answer:
        "A freelance Java developer works independently with no accountability to your internal processes. Java staff augmentation through Tech Reforms gives you a dedicated engineer who integrates into your team structure, follows your sprint cycles, reports through your project management tools, and operates under a formal NDA — with Tech Reforms managing the HR and compliance overhead.",
    },
    {
      id: 6,
      question: "Can I hire a remote Java developer who works in my timezone?",
      answer:
        "Yes. We place remote Java developers across US, European, and Asian timezones. When you share your requirements, timezone alignment is factored into the matching process from day one.",
    },
    {
      id: 7,
      question: "Is my source code and intellectual property protected when I hire a Java developer through Tech Reforms?",
      answer:
        "Absolutely. Every Java developer placement includes a signed NDA and IP protection agreement. Your codebase, architecture, and business logic remain 100% your property throughout and after the engagement.",
    },
    {
      id: 8,
      question: "Can I scale my Java development team up or down mid-project?",
      answer:
        "Yes. Our Java staff augmentation model is built for flexibility. You can add developers as your project scales, reduce team size after a major release, or swap engineers if your technical requirements shift — without penalties or long notice periods.",
    },
  ],
  testimonials: [
    {
      name: "Daniel Carter",
      role: "CTO, PayStream Financial | New York, USA",
      quote:
        "We needed a senior Java developer with Spring Boot experience for our fintech platform — someone who could jump in without a 3-week handholding period. Tech Reforms placed the right engineer in under 72 hours. He was reviewing our codebase on day one and pushing production-ready code by day three.",
    },
    {
      name: "Sophie Brennan",
      role: "VP of Engineering, NexaCommerce | London, UK",
      quote:
        "We'd burned two months trying to hire a Java microservices developer through traditional recruitment. Tech Reforms matched us with a pre-vetted engineer in four days. No fluff, no back-and-forth. The developer understood our architecture immediately and cut our API response time by 40% within the first sprint.",
    },
    {
      name: "Marcus Webb",
      role: "Head of Technology, TradeLoop | Austin, USA",
      quote:
        "Our e-commerce backend was collapsing under peak traffic. We needed an experienced Java developer fast — not someone who needed three weeks of onboarding. Tech Reforms delivered. The developer they placed had handled similar scale before and knew exactly what needed to change.",
    },
    {
      name: "Priya Nair",
      role: "Engineering Manager, CloudAxis Solutions | Toronto, Canada",
      quote:
        "We hired two dedicated Java developers through Tech Reforms for a long-term enterprise project. Eighteen months later, both are still with us. The quality of screening was genuinely different — these weren't just Java programmers, they were backend engineers who understood system design at scale.",
    },
  ],
});

export const HIRE_MAGENTO_PAGE = buildHirePage({
  slug: "hire-magento",
  metaTitle: "Hire Magento Developers in the USA | Build eCommerce That Actually Sells",
  metaDescription:
    "Hire dedicated Magento developers for Adobe Commerce, custom modules, and high-performance eCommerce stores. Onboard in 72 hours with Tech Reforms.",
  roleLabel: "Magento Developer",
  rolePlural: "Magento Developers",
  heroSecondWord: "Magento Developers in the USA",
  heroForthWord: "| Build eCommerce That Actually Sells",
  heroPara:
    "Looking to hire a Magento developer but tired of slow deliveries, missed deadlines, and developers who vanish after go-live?",
  heroPara2:
    "Whether you need a Magento 2 store built from scratch, a complex third-party integration, or an underperforming store fixed fast — we have the right developer ready for you.",
  heroPara3:
    "Vetted, experienced, and available to start within 48 hours — no hiring risk, no guesswork, just results.",
  heroPara4:
    "That's what Tech Reforms delivers, and that's why US businesses keep coming back to us.",
  techShort: "Magento",
  specialty: "Adobe Commerce, custom modules, theme development, and B2B/B2C storefront optimization",
  stackTags: ["Adobe Commerce", "PHP", "Hyvä", "Elasticsearch"],
  vettingFocus: "Magento 2 architecture, custom module development, checkout optimization, and performance tuning",
  faqStackList: "Magento 2, Adobe Commerce, PHP, Knockout.js, GraphQL, Elasticsearch, Redis, and payment gateway integrations",
  caseCategory: "eCommerce · USA",
  caseTitle: "Magento Store Migration with 40% Faster Page Load",
  caseDescription:
    "A retail brand needed Adobe Commerce migration from Magento 1 with custom checkout, ERP sync, and mobile-optimized Hyvä theme — without losing SEO rankings.",
  caseMetrics: [
    { value: "14 wks", label: "Delivered in" },
    { value: "40%", label: "Faster load time" },
    { value: "22%", label: "Conversion lift" },
  ],
  whatWeOfferHeadlineWhite: "Magento Development Services",
  whatWeOfferAccent: "Built Around Your Business",
  whatWeOfferCards: [
    {
      title: "Flexible Magento Hiring Models",
      desc: "Need one developer or an entire Magento team? We give you the flexibility to hire based on your project scope, timeline, and budget — no rigid contracts, no unnecessary overhead.",
      buttonText: "See Hiring Models",
    },
    {
      title: "Magento Store Development",
      desc: "From Magento 2 builds to custom theme development, our developers handle your entire store setup — giving you full control over design, functionality, and performance from day one.",
      buttonText: "Meet Our Magento Team",
    },
    {
      title: "Dedicated Magento Development Teams",
      desc: "Need ongoing Magento support? Get a dedicated developer who works exclusively on your store — aligned with your workflows, your tech stack, and your business goals.",
      buttonText: "Build Your Magento Team",
    },
    {
      title: "On-Demand Magento Expertise",
      desc: "Whether it's a urgent bug fix, a third-party integration, or a full platform migration — our Magento developers are ready to jump in and deliver fast, without a long onboarding process.",
      buttonText: "Hire in 72 Hours",
    },
  ],
  processHeadlineWhite: "How We Deliver the Right Magento Developer —",
  processHeadlineAccent: "Fast",
  processSteps: [
    {
      title: "Finding the Right Magento Talent",
      desc: "We don't pull from a generic pool. Every developer we match has hands-on Magento experience — store builds, custom modules, API integrations, and performance fixes. You get someone who's already solved your problem before.",
      buttonText: "Meet Magento Developers",
    },
    {
      title: "Quick Onboarding, Zero Disruption",
      desc: "Once you approve your developer, we handle the entire onboarding. They plug directly into your existing tools, workflows, and communication channels — no ramp-up delays, no productivity loss.",
      buttonText: "Start Onboarding",
    },
    {
      title: "Full Control Over Your Project",
      desc: "You manage the work. We handle the contract, compliance, and HR. Your Magento developer works under your direction — fully dedicated to your store, your sprint, and your deadlines.",
      buttonText: "Take Full Control",
    },
    {
      title: "Ongoing Support & Scalability",
      desc: "Your store needs change — and your team should too. Scale your Magento development capacity up or down based on project demand, without the cost and delay of traditional hiring.",
      buttonText: "Scale Your Team",
    },
  ],
  whyHeadlineWhite: "Why Choose Tech Reforms for",
  whyHeadlineAccent: "Magento Development?",
  whyParagraphs: [
    "Most businesses don't fail at Magento because of the platform — they fail because they hired the wrong developer. At Tech Reforms, we've spent years placing Magento specialists who deliver clean code, on-time releases, and stores that actually convert. This is what makes us different.",
  ],
  whyCards: [
    {
      title: "Magento-Specific Expertise",
      desc: "Our developers don't dabble in Magento on the side. Every specialist we place has deep, hands-on experience in Magento 2 architecture, extension development, and performance optimization — built from real projects, not tutorials.",
      tags: [],
      buttonText: "View Magento Specialists",
    },
    {
      title: "Secure & Compliant Development",
      desc: "Every Magento developer we place follows ISO/GDPR-compliant coding practices. Your store data, customer information, and payment workflows stay protected — no shortcuts, no compliance risks.",
      tags: [],
      buttonText: "See Security Standards",
    },
    {
      title: "Proven Track Record Across eCommerce",
      desc: "From startup stores to enterprise-level Magento builds, our developers have handled it all. We maintain a 98% client retention rate — not because we promise results, but because we consistently deliver them.",
      tags: [],
      buttonText: "See Client Results",
    },
    {
      title: "Flexible Engagement, Full Accountability",
      desc: "You get a dedicated Magento developer working under your direction — with Tech Reforms handling contracts, compliance, and continuity. Scale up, scale down, or switch focus anytime without friction.",
      tags: [],
      buttonText: "Explore Engagement Models",
    },
  ],
  faqTitleWhite: "Frequently Asked Questions About Hiring",
  faqTitleAccent: "Magento Developers",
  faqSubtitle: "",
  faqItems: [
    {
      id: 1,
      question: "What does a Magento developer do?",
      answer:
        "A Magento developer builds, customizes, and optimizes eCommerce stores on the Magento platform. This includes developing custom modules, integrating third-party APIs, fixing performance issues, handling Magento 2 migrations, and ensuring your store runs fast, secure, and conversion-ready.",
    },
    {
      id: 2,
      question: "How quickly can I hire a Magento developer through Tech Reforms?",
      answer:
        "Once you share your project requirements, we match you with a vetted Magento developer within 24 to 48 hours. Our pre-screened talent pool means you skip the lengthy recruitment process and get straight to building.",
    },
    {
      id: 3,
      question: "What is the difference between a Magento developer and a general PHP developer?",
      answer:
        "A general PHP developer understands the language — but Magento has its own architecture, module system, and eCommerce logic that takes years to master. A dedicated Magento developer knows the platform's core framework, theming structure, and extension ecosystem — reducing development time and costly mistakes.",
    },
    {
      id: 4,
      question: "Can I hire a Magento developer for a short-term project?",
      answer:
        "Yes. Tech Reforms offers flexible engagement models — whether you need a developer for a two-week bug fix, a three-month store build, or ongoing long-term support. You choose the timeline, and we match accordingly.",
    },
    {
      id: 5,
      question: "How do I know if the Magento developer is the right fit for my project?",
      answer:
        "Before placement, we align on your tech stack, project scope, and business goals. You get to evaluate the developer before committing — so there are no surprises after onboarding.",
    },
    {
      id: 6,
      question: "Do your Magento developers work on Magento 2?",
      answer:
        "Yes. All our Magento developers are experienced in Magento 2 — including Adobe Commerce (Magento Enterprise). Whether you need a new build, a migration from Magento 1, or advanced customization on Magento 2, we have the right specialist.",
    },
    {
      id: 7,
      question: "What industries have your Magento developers worked in?",
      answer:
        "Our Magento developers have delivered projects across fashion, electronics, healthcare supplies, B2B wholesale, food and beverage, and multi-vendor marketplace businesses — each with unique catalog structures, pricing logic, and integration requirements.",
    },
    {
      id: 8,
      question: "Is my store data and code secure when working with Tech Reforms?",
      answer:
        "Yes. Every developer placed through Tech Reforms operates under strict NDA agreements and ISO/GDPR-compliant development practices. Your codebase, customer data, and business logic stay fully protected.",
    },
  ],
});

export const HIRE_PYTHON_PAGE = buildHirePage({
  slug: "hire-python",
  metaTitle: "Hire Python Developers | Django, FastAPI & Data Engineering",
  metaDescription:
    "Hire expert Python developers for web apps, APIs, automation, and data pipelines. Pre-vetted engineers ready in 72 hours. Flexible engagement models.",
  roleLabel: "Python Developer",
  rolePlural: "Python Developers",
  heroSecondWord: "Python Developers in the USA —",
  heroForthWord: "On-Demand, No Long-Term Contracts",
  heroPara:
    "Let's be honest — finding a reliable Python developer in the US market is not easy.",
  heroPara2:
    "You spend weeks on recruitment, burn budget on wrong hires, and still end up waiting before a single line of code gets written.",
  heroPara3:
    "At Tech Reforms, we place senior Python developers directly into your team — people who hit the ground running and actually deliver.",
  heroPara4:
    "Short sprint or long-term build — we'll match you with the right developer based on your stack, your timeline, and your budget.",
  heroButtonText: "Let's Find Your Python Developer — Talk to Us Today",
  techShort: "Python",
  specialty: "Django, FastAPI, data engineering, automation, and ML-ready backend systems",
  stackTags: ["Django", "FastAPI", "PostgreSQL", "Celery"],
  vettingFocus: "Python architecture, async APIs, data pipeline design, and production deployment patterns",
  faqStackList: "Python, Django, FastAPI, Flask, Celery, Redis, PostgreSQL, Pandas, and AWS/GCP deployment",
  caseCategory: "SaaS · USA",
  caseTitle: "FastAPI Backend for Multi-Tenant SaaS Platform",
  caseDescription:
    "A SaaS startup needed a scalable Python backend with tenant isolation, Stripe billing, and real-time analytics — delivered in 12 weeks for their Series A launch.",
  caseMetrics: [
    { value: "12 wks", label: "Delivered in" },
    { value: "10K+", label: "Daily API calls" },
    { value: "99.5%", label: "API uptime" },
  ],
  whatWeOfferHeadlineWhite: "Simple, Powerful Python Hiring —",
  whatWeOfferAccent: "Exactly How Your Business Needs It",
  whatWeOfferCards: [
    {
      title: "Flexible Python Hiring Models",
      desc: "Not every project fits the same mold. Whether you need one developer for a 2-week sprint or a full Python team for six months — we build the engagement around your timeline, your budget, and your delivery goals. No rigid contracts. No unnecessary overhead.",
      buttonText: "Learn More",
    },
    {
      title: "Senior Python Developers, Ready to Deploy",
      desc: "When you hire Python developers through Tech Reforms, you get engineers who already know Django, FastAPI, REST APIs, and cloud integrations. They plug into your existing workflow from day one — no ramp-up time, no hand-holding required.",
      buttonText: "Learn More",
    },
    {
      title: "Dedicated Python Development Teams",
      desc: "Need consistent long-term output? We build you a dedicated Python team that works exclusively on your product — aligned with your sprint cycles, your tools, and your standards. Think of them as your in-house team, without the in-house cost.",
      buttonText: "Learn More",
    },
    {
      title: "On-Demand Python Talent Across the USA",
      desc: "Urgent requirement? We match you with pre-vetted Python developers across all US time zones within 48 hours. From early-stage startups to enterprise-level builds — the right talent, exactly when you need it.",
      buttonText: "Learn More",
    },
  ],
  processLabel: { firstWord: "OUR", secondWord: "PYTHON", thirdWord: "HIRING PROCESS" },
  processHeadlineWhite: "A Straightforward Process to",
  processHeadlineAccent: "Hire Python Developers in the USA",
  processSteps: [
    {
      title: "Tell Us What You Need",
      desc: "You share your project requirements, tech stack, and timeline. That's it. We don't ask for lengthy forms or multiple rounds of back-and-forth. One conversation is enough for us to understand exactly what kind of Python developer your team needs.",
      buttonText: "Learn More",
    },
    {
      title: "We Find the Right Python Developer",
      desc: "Our team screens candidates based on Python proficiency, framework experience — Django, FastAPI, Flask — and real project track record. You only see developers who are genuinely qualified, not just resume-matched.",
      buttonText: "Learn More",
    },
    {
      title: "You Interview & Select",
      desc: "You stay in full control. Review the shortlisted Python developers, run your own technical interview, and pick the one who fits your team culture and project goals. No pressure, no forced placements.",
      buttonText: "Learn More",
    },
    {
      title: "Quick Onboarding, Immediate Output",
      desc: "Once you finalize your developer, we handle the entire onboarding — contracts, tools access, workflow alignment. Your Python developer is ready to contribute from day one, not week three.",
      buttonText: "Learn More",
    },
  ],
  whyHeadlineWhite: "Why Choose",
  whyHeadlineAccent: "Tech Reforms?",
  whyParagraphs: [
    "When you're looking to hire Python developers in the USA, the real question isn't just about cost — it's about who actually delivers. At Tech Reforms, we don't just fill positions. We place Python engineers who understand your product, match your team's pace, and contribute from the very first week. From early-stage startups to scaling SaaS platforms — we've built Python teams that ship, not just sit.",
  ],
  whyCards: [
    {
      title: "No Recruitment Delays",
      desc: "You don't have time to spend weeks posting jobs and reviewing resumes. We shortlist the right Python developers for your project within 48 hours — so your build starts on schedule, not after it.",
      tags: [],
      buttonText: "Learn More",
    },
    {
      title: "Python Developers Who Actually Deliver",
      desc: "Every developer in our network is technically vetted across Django, FastAPI, Flask, and Python-based AI/ML frameworks. You get engineers with real project experience — not just impressive LinkedIn profiles.",
      tags: [],
      buttonText: "Learn More",
    },
    {
      title: "Industry-Specific Experience",
      desc: "Our Python developers have worked across fintech, healthcare, e-commerce, SaaS, and enterprise systems. They understand your domain, not just your tech stack — and that makes a real difference in output quality.",
      tags: [],
      buttonText: "Learn More",
    },
    {
      title: "Cost-Effective Without Cutting Corners",
      desc: "Hiring full-time Python developers in the USA is expensive. Our flexible model gives you senior-level talent at a fraction of the cost — with zero compromise on code quality, communication, or delivery standards.",
      tags: [],
      buttonText: "Learn More",
    },
  ],
  faqTitleWhite: "Frequently Asked Questions About Hiring",
  faqTitleAccent: "Python Developers",
  faqSubtitle: "",
  faqItems: [
    {
      id: 1,
      question: "How quickly can I hire a Python developer through Tech Reforms?",
      answer:
        "You can have a shortlisted Python developer ready within 48 hours. Once you finalize your requirements — tech stack, project scope, and timeline — we match you with pre-vetted candidates immediately. Most clients complete their selection within 3 to 5 business days.",
    },
    {
      id: 2,
      question: "What Python frameworks do your developers specialize in?",
      answer:
        "Our Python developers are experienced in Django, FastAPI, Flask, Celery, and SQLAlchemy. They also work across Python-based AI and ML frameworks including TensorFlow, PyTorch, and Scikit-learn — depending on your project needs.",
    },
    {
      id: 3,
      question: "Can I hire a Python developer for a short-term project?",
      answer:
        "Yes. We offer flexible engagement models — from a single two-week sprint to long-term dedicated hiring. You choose the duration, and we build the arrangement around your project timeline, not a fixed contract.",
    },
    {
      id: 4,
      question: "How do you ensure the quality of Python developers?",
      answer:
        "Every developer goes through a multi-step vetting process — technical assessment, framework-specific testing, communication screening, and past project review. You only meet developers who have already cleared our internal quality bar.",
    },
    {
      id: 5,
      question: "Do your Python developers work in US time zones?",
      answer:
        "Yes. Our developers are available across EST, CST, MST, and PST time zones. Whether you need full overlap or partial overlap hours, we match you with a developer who fits your team's working schedule.",
    },
    {
      id: 6,
      question: "What industries have your Python developers worked in?",
      answer:
        "Our Python engineers have delivered projects across fintech, healthcare, e-commerce, SaaS, AI/ML platforms, and enterprise software systems. Industry-specific experience means faster onboarding and better output from day one.",
    },
    {
      id: 7,
      question: "Is there a minimum contract period to hire a Python developer?",
      answer:
        "No. There is no mandatory minimum commitment. You can start with a short engagement and scale up based on your project needs. We keep the process flexible so you stay in control of your hiring decisions.",
    },
    {
      id: 8,
      question: "How is hiring through Tech Reforms different from a freelance platform?",
      answer:
        "Freelance platforms give you unvetted options and zero accountability. Tech Reforms gives you pre-screened, senior-level Python developers with dedicated support, contract management, and quality assurance throughout the engagement — not just at the point of hire.",
    },
  ],
});

export const HIRE_LARAVEL_PAGE = buildHirePage({
  slug: "hire-laravel",
  metaTitle: "Hire Laravel Developers | PHP Web App Specialists",
  metaDescription:
    "Hire dedicated Laravel developers for SaaS, APIs, and enterprise PHP applications. Pre-vetted Laravel engineers onboard in 72 hours with Tech Reforms.",
  roleLabel: "Laravel Developer",
  rolePlural: "Laravel Developers",
  techShort: "Laravel",
  specialty: "Laravel, Livewire, API development, and scalable PHP web applications",
  stackTags: ["Laravel 11", "PHP 8", "MySQL", "Redis"],
  vettingFocus: "Laravel architecture, Eloquent ORM, queue systems, API design, and security best practices",
  faqStackList: "Laravel, PHP, Livewire, Inertia.js, MySQL, Redis, Horizon, Sanctum, and AWS deployment",
  caseCategory: "Healthcare · USA",
  caseTitle: "HIPAA-Compliant Patient Portal on Laravel",
  caseDescription:
    "A healthcare provider needed a secure Laravel portal with appointment scheduling, EHR integration, and role-based access — audited for HIPAA compliance.",
  caseMetrics: [
    { value: "16 wks", label: "Delivered in" },
    { value: "HIPAA", label: "Compliant" },
    { value: "50K+", label: "Patients served" },
  ],
});

export const HIRE_NODE_PAGE = buildHirePage({
  slug: "hire-node-js",
  metaTitle: "Hire Node.js Developers | Express, NestJS & Real-Time APIs",
  metaDescription:
    "Hire expert Node.js developers for scalable APIs, microservices, and real-time applications. Dedicated engineers onboard in 72 hours.",
  roleLabel: "Node.js Developer",
  rolePlural: "Node.js Developers",
  techShort: "Node.js",
  specialty: "Express, NestJS, real-time APIs, and event-driven backend architecture",
  stackTags: ["Node.js", "NestJS", "TypeScript", "MongoDB"],
  vettingFocus: "async programming, REST/GraphQL APIs, WebSocket systems, and Node.js performance optimization",
  faqStackList: "Node.js, Express, NestJS, TypeScript, MongoDB, PostgreSQL, Redis, Socket.io, and Docker/Kubernetes",
  caseCategory: "Real-Time · USA",
  caseTitle: "Real-Time Collaboration Platform on Node.js",
  caseDescription:
    "A remote-work SaaS needed WebSocket-based collaboration, NestJS microservices, and MongoDB sharding — supporting 5,000 concurrent users from launch.",
  caseMetrics: [
    { value: "10 wks", label: "Delivered in" },
    { value: "5K", label: "Concurrent users" },
    { value: "<100ms", label: "Message latency" },
  ],
});

export const HIRE_SPRING_BOOT_PAGE = buildHirePage({
  slug: "hire-spring-boot",
  metaTitle: "Hire Spring Boot Developers | Enterprise Java Microservices",
  metaDescription:
    "Hire dedicated Spring Boot developers for microservices, cloud-native apps, and enterprise APIs. Pre-vetted engineers ready in 72 hours.",
  roleLabel: "Spring Boot Developer",
  rolePlural: "Spring Boot Developers",
  techShort: "Spring Boot",
  specialty: "Spring Boot microservices, cloud-native deployment, and enterprise API development",
  stackTags: ["Spring Boot 3", "Java 17", "Kafka", "AWS"],
  vettingFocus: "Spring Boot architecture, Spring Security, reactive programming, and cloud deployment patterns",
  faqStackList: "Spring Boot, Spring Cloud, Spring Security, Kafka, PostgreSQL, Docker, Kubernetes, and AWS/Azure",
  caseCategory: "Enterprise · USA",
  caseTitle: "Spring Boot Microservices for Logistics Platform",
  caseDescription:
    "A logistics company needed 12 Spring Boot microservices with Kafka event streaming, real-time tracking APIs, and AWS EKS deployment — replacing a legacy monolith.",
  caseMetrics: [
    { value: "6 mo", label: "Delivered in" },
    { value: "12", label: "Microservices" },
    { value: "60%", label: "Latency reduction" },
  ],
});

export const HIRE_POWER_BI_PAGE = buildHirePage({
  slug: "hire-power-bi",
  metaTitle: "Hire Power BI Developers | Dashboard & Analytics Experts",
  metaDescription:
    "Hire Power BI developers for dashboards, DAX modeling, and enterprise analytics. Dedicated BI engineers onboard in 72 hours with Tech Reforms.",
  roleLabel: "Power BI Developer",
  rolePlural: "Power BI Developers",
  techShort: "Power BI",
  specialty: "Power BI dashboards, DAX modeling, data warehouse integration, and executive reporting",
  stackTags: ["Power BI", "DAX", "Azure SQL", "Data Factory"],
  vettingFocus: "DAX optimization, data modeling, Power Query, and enterprise dashboard design",
  faqStackList: "Power BI, DAX, Power Query, Azure Synapse, SQL Server, Data Factory, and SharePoint embedding",
  caseCategory: "Analytics · USA",
  caseTitle: "Executive Dashboard Suite for Multi-Brand Retailer",
  caseDescription:
    "A retail group needed unified Power BI dashboards across 8 brands — with real-time sales KPIs, inventory forecasting, and role-based access for 200+ users.",
  caseMetrics: [
    { value: "8 wks", label: "Delivered in" },
    { value: "200+", label: "Dashboard users" },
    { value: "8", label: "Brands unified" },
  ],
  processHeadlineAccent: "Power BI Analytics Team",
  whatWeOfferAccent: "Power BI Developers",
});

export const HIRE_GOLANG_PAGE = buildHirePage({
  slug: "hire-golang",
  metaTitle: "Hire Golang Developers | High-Performance Backend Engineers",
  metaDescription:
    "Hire expert Golang developers for microservices, cloud infrastructure, and high-throughput APIs. Pre-vetted Go engineers ready in 72 hours.",
  roleLabel: "Golang Developer",
  rolePlural: "Golang Developers",
  techShort: "Golang",
  specialty: "Go microservices, cloud-native systems, and high-performance concurrent backend services",
  stackTags: ["Go", "gRPC", "Kubernetes", "PostgreSQL"],
  vettingFocus: "Go concurrency patterns, gRPC services, performance optimization, and cloud-native architecture",
  faqStackList: "Go, gRPC, Gin, Echo, PostgreSQL, Redis, Docker, Kubernetes, and AWS/GCP deployment",
  caseCategory: "Infrastructure · USA",
  caseTitle: "Go Microservices for High-Throughput Payment Gateway",
  caseDescription:
    "A fintech needed a Go-based payment processing layer handling 50K transactions per minute — with gRPC inter-service communication and sub-10ms latency.",
  caseMetrics: [
    { value: "50K/min", label: "Transactions" },
    { value: "<10ms", label: "Avg latency" },
    { value: "99.99%", label: "Uptime" },
  ],
});

export const HIRE_LLM_PAGE = buildHirePage({
  slug: "hire-llm",
  metaTitle: "Hire LLM Developers | AI & Large Language Model Engineers",
  metaDescription:
    "Hire LLM developers for RAG systems, AI agents, and production LLM integrations. Expert AI engineers onboard in 72 hours with Tech Reforms.",
  roleLabel: "LLM Developer",
  rolePlural: "LLM Developers",
  techShort: "LLM",
  specialty: "LLM integration, RAG pipelines, AI agents, and production-grade generative AI systems",
  stackTags: ["OpenAI", "LangChain", "Python", "Vector DB"],
  vettingFocus: "prompt engineering, RAG architecture, LLM fine-tuning, and production AI deployment",
  faqStackList: "OpenAI, Anthropic, LangChain, LlamaIndex, Pinecone, Python, FastAPI, and MLOps pipelines",
  caseCategory: "AI · USA",
  caseTitle: "RAG-Powered Enterprise Knowledge Assistant",
  caseDescription:
    "An enterprise client needed an internal AI assistant with RAG over 50K documents — secure tenant isolation, citation tracking, and Slack/Teams integration.",
  caseMetrics: [
    { value: "10 wks", label: "Delivered in" },
    { value: "50K", label: "Docs indexed" },
    { value: "92%", label: "Answer accuracy" },
  ],
  processHeadlineAccent: "LLM & AI Engineering Team",
});

export const TOP_APP_DEVELOPERS_PAGE = buildHirePage({
  slug: "top-app-developers",
  metaTitle: "Hire Top App Developers | iOS, Android & Cross-Platform Experts",
  metaDescription:
    "Hire top-rated app developers for iOS, Android, Flutter, and React Native. Pre-vetted mobile engineers onboard in 72 hours. Flexible staff augmentation.",
  roleLabel: "App Developer",
  rolePlural: "App Developers",
  techShort: "Mobile",
  specialty: "iOS, Android, Flutter, React Native, and full mobile product delivery",
  stackTags: ["iOS", "Android", "Flutter", "React Native"],
  vettingFocus: "mobile architecture, App Store deployment, cross-platform development, and production app delivery",
  heroSecondWord: "Top App Developers",
  heroForthWord: "| iOS, Android & Cross-Platform",
  heroPara:
    "Most app developers can build a screen. Few understand your product roadmap, App Store timelines, or what a missed launch actually costs. At Tech Reforms, you hire top mobile engineers who integrate into your workflow — shipping production apps, not just prototypes.",
  whoWeAreP1:
    "Tech Reforms is a mobile-first development partner — not a general IT shop. Our app developers specialize in iOS (Swift), Android (Kotlin), Flutter, and React Native. From MVP launches to enterprise apps with CI/CD and automated testing, we place developers who've shipped real products in production.",
  faqStackList: "Swift, Kotlin, Flutter, React Native, Firebase, REST APIs, App Store/Play Store deployment, and CI/CD",
  faqSubtitle: "Tech Reforms — Hire Top App Developers",
  caseCategory: "Mobile · USA",
  caseTitle: "Multi-Platform App Launch in 12 Weeks",
  caseDescription:
    "A startup needed simultaneous iOS and Android launch with shared backend, push notifications, and in-app payments — delivered by a dedicated 4-person mobile team.",
  caseMetrics: [
    { value: "12 wks", label: "Delivered in" },
    { value: "2", label: "Platforms launched" },
    { value: "4.7★", label: "Store rating" },
  ],
  whatWeOfferAccent: "Top App Developers",
  processHeadlineAccent: "Mobile Development Team",
  whyButtonText: "Work With Our App Team",
  statsOverride: [
    { value: "350+", label: "Apps delivered" },
    { value: "72hrs", label: "Average onboarding" },
    { value: "98%", label: "Client retention" },
  ],
});

export const HIRE_PAGES = {
  "hire-flutter": HIRE_FLUTTER_PAGE,
  "hire-java": HIRE_JAVA_PAGE,
  "hire-magento": HIRE_MAGENTO_PAGE,
  "hire-python": HIRE_PYTHON_PAGE,
  "hire-laravel": HIRE_LARAVEL_PAGE,
  "hire-node-js": HIRE_NODE_PAGE,
  "hire-spring-boot": HIRE_SPRING_BOOT_PAGE,
  "hire-power-bi": HIRE_POWER_BI_PAGE,
  "hire-golang": HIRE_GOLANG_PAGE,
  "hire-llm": HIRE_LLM_PAGE,
  "top-app-developers": TOP_APP_DEVELOPERS_PAGE,
};

export const HIRE_PAGE_SLUGS = Object.keys(HIRE_PAGES);

import Link from "next/link";
import ErpDevelopmentCostTable from "../components/faq-erp-section/erp-development-cost-table";

const FaqLink = ({ href, children }) => (
  <Link href={href} className="text-[#F74B1C] hover:underline">
    {children}
  </Link>
);

export const ERP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does custom ERP development cost in 2026?",
    answer: (
      <>
        <p>
          $8K–$500K+ depending on business size, modules, and platform. See our full cost breakdown below.
        </p>
        <ErpDevelopmentCostTable />
      </>
    ),
  },
  {
    id: 2,
    question: "How fast can you provide an ERP developer?",
    answer:
      "In most cases, we can onboard qualified ERP developers within 1–2 weeks, depending on the skills and experience required.",
  },
  {
    id: 3,
    question: "Can I increase or reduce the development team anytime?",
    answer:
      "Yes. Our ERP development model is designed to be flexible, allowing you to scale your team based on your current project demands.",
  },
  {
    id: 4,
    question: "Will the developer work in my time zone?",
    answer:
      "Absolutely. We align our remote ERP developers with your preferred US time zone to ensure smooth communication and collaboration.",
  },
  {
    id: 5,
    question: "What ERP platforms do you specialize in?",
    answer: (
      <>
        We provide SAP development services, Oracle, Microsoft Dynamics ERP, Odoo ERP, NetSuite ERP, and tailored{" "}
        <FaqLink href="/cloud">cloud-based ERP solutions</FaqLink>.
      </>
    ),
  },
  {
    id: 6,
    question: "Do you offer ERP migration services?",
    answer:
      "Yes, our ERP migration services help businesses move from legacy systems to modern cloud-based environments with minimal disruption.",
  },
  {
    id: 7,
    question: "How do I get started with Tech Reforms?",
    answer: (
      <>
        Fill out the <FaqLink href="/contact">contact form</FaqLink> or call{" "}
        <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">
          (582) 233-5015
        </a>
        . We schedule a discovery call, review your modules and workflows, and prepare a detailed ERP proposal — no commitment needed to start the conversation.
      </>
    ),
  },
];

export const DOCTOR_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does doctor app development cost in 2026?",
    answer:
      "Doctor app development typically costs between $3,000 and $80,000+, depending on complexity. Simple appointment booking apps start around $3K–$8K, while AI-powered, multi-specialty telemedicine platforms can run $40K–$80K+.",
  },
  {
    id: 2,
    question: "How fast can you build a doctor app?",
    answer:
      "Most doctor appointment apps take 6 to 12 weeks to build, depending on complexity. Basic booking apps launch faster, while apps with telemedicine, EHR integration, and billing features take longer.",
  },
  {
    id: 3,
    question: "Can I add new features after my doctor app is live?",
    answer:
      "Yes, you can add features like teleconsultation, patient loyalty programs, or multi-location support after launch. Doctor apps are built to scale as your practice grows.",
  },
  {
    id: 4,
    question: "Does a custom doctor app work with my existing EHR or PMS system?",
    answer:
      "Yes, custom doctor apps can usually integrate with existing EHR/EMR systems, payment gateways, and practice management software. Compatibility depends on the specific systems already in use.",
  },
  {
    id: 5,
    question: "Can you build an app for both in-clinic and online consultations?",
    answer:
      "Yes, we build doctor apps that support in-person appointment booking, telemedicine video calls, and follow-up chat — all within a single platform tailored to how your practice operates.",
  },
  {
    id: 6,
    question: "Will my doctor app work for multiple clinic locations?",
    answer:
      "Absolutely. We build multi-location doctor apps with centralized scheduling, location-based doctor search, and individual branch dashboards — so you can manage one clinic or an entire hospital network from one system.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the app is launched?",
    answer:
      "Yes, our doctor app development services include post-launch support — covering bug fixes, performance monitoring, and feature updates — so your app keeps running smoothly as your practice grows.",
  },
  {
    id: 8,
    question: "Will the app handle high patient traffic during peak hours?",
    answer:
      "Yes, we build doctor apps on scalable architecture designed to handle booking spikes during busy hours, so your system stays fast and reliable even during peak clinic periods.",
  },
  {
    id: 9,
    question: "Will I own the app and its source code?",
    answer:
      "Yes, once development is complete, you get full ownership of your doctor app, including the source code — so you're never locked into our agency for future changes or hosting.",
  },
  {
    id: 10,
    question: "Do you build apps for virtual-only practices without a physical clinic?",
    answer:
      "Yes, we specialize in telemedicine app development too — building virtual-first apps with streamlined appointment booking, secure HD video consultations, and e-prescription workflows, no physical clinic required.",
  },
];

export const TAXI_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does taxi app development cost in 2026?",
    answer:
      "Taxi app development typically costs between $5,000 and $90,000+, depending on complexity. Simple booking apps start around $5K–$10K, while AI-powered, multi-city dispatch apps can run $50K–$90K+.",
  },
  {
    id: 2,
    question: "How fast can you build a taxi app?",
    answer:
      "Most taxi booking apps take 6 to 12 weeks to build, depending on complexity. Basic ride-booking apps launch faster, while apps with live dispatch, fare calculation, and fleet management take longer.",
  },
  {
    id: 3,
    question: "Can I add new features after my taxi app is live?",
    answer:
      "Yes, you can add features like fare splitting, ride scheduling, or multi-city expansion after launch. Taxi apps are built to scale as your fleet grows.",
  },
  {
    id: 4,
    question: "Does a custom taxi app work with my existing dispatch or payment system?",
    answer:
      "Yes, custom taxi apps can usually integrate with existing dispatch software, payment gateways, and GPS tracking systems. Compatibility depends on the specific systems already in use.",
  },
  {
    id: 5,
    question: "Can you build an app for both riders and drivers?",
    answer:
      "Yes, we build taxi apps with separate rider and driver apps plus an admin dashboard, all connected within a single platform tailored to how your business operates.",
  },
  {
    id: 6,
    question: "Will my taxi app work for multiple cities?",
    answer:
      "Absolutely. We build multi-city taxi apps with centralized fleet management, zone-based pricing, and individual city dashboards, so you can manage one city or an entire region from one system.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the app is launched?",
    answer:
      "Yes, our taxi app development services include post-launch support, covering bug fixes, performance monitoring, and feature updates, so your app keeps running smoothly as your business grows.",
  },
  {
    id: 8,
    question: "Can the app handle high ride demand during peak hours?",
    answer:
      "Yes, we build taxi apps on scalable architecture designed to handle ride spikes during rush hours, so your system stays fast and reliable, even during peak demand.",
  },
  {
    id: 9,
    question: "Will I own the app and its source code?",
    answer:
      "Yes, once development is complete, you get full ownership of your taxi app, including the source code, so you're never locked into our agency for future changes or hosting.",
  },
  {
    id: 10,
    question: "Do you build apps for taxi businesses without a large fleet?",
    answer:
      "Yes, we specialize in solo and small-fleet taxi app development too, building lean booking apps with streamlined dispatch, real-time tracking, and minimal overhead, no large fleet needed.",
  },
];

export const GROCERY_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much will my grocery app actually cost?",
    answer:
      "Honestly, it depends on what you need. A simple single-store ordering app usually falls between $4,000–$10,000. If you want multi-vendor support, real-time inventory, and quick-commerce-level delivery, expect somewhere in the $30,000–$80,000+ range.",
  },
  {
    id: 2,
    question: "How long until we can actually launch?",
    answer:
      "For a straightforward grocery ordering app, around 6–10 weeks. If you're adding multi-vendor management, live inventory sync, or instant delivery logic, plan for closer to 12–16 weeks.",
  },
  {
    id: 3,
    question: "Can I start small and add features later?",
    answer:
      "Yes, and honestly that's what we'd recommend anyway. Most of our clients launch with ordering and delivery first, then add loyalty programs, subscriptions, or multi-vendor support once they see what their customers actually want.",
  },
  {
    id: 4,
    question: "Will this connect to the POS or inventory system I already use?",
    answer:
      "In most cases, yes. We've integrated with various POS and inventory systems before — we'll just need to look at what you're currently running to confirm.",
  },
  {
    id: 5,
    question: "Can you handle both delivery and in-store pickup?",
    answer:
      "Definitely. A lot of grocery businesses want both options, so we build that flexibility in from the start — customers choose delivery or pickup at checkout.",
  },
  {
    id: 6,
    question: "What happens if a product runs out of stock mid-order?",
    answer:
      "Good question — this trips up a lot of apps. We build real-time inventory checks so stock updates instantly, and we can set up auto-substitution suggestions instead of just cancelling the order.",
  },
  {
    id: 7,
    question: "Can the app support multiple grocery stores or vendors?",
    answer:
      "Yes, if that's the direction you're going. We build multi-vendor architecture with separate vendor dashboards and a central admin panel for you.",
  },
  {
    id: 8,
    question: "Do you stick around after the app goes live?",
    answer:
      "We do. Post-launch support is part of how we work — bug fixes, performance checks, and feature additions as your business grows, not a one-and-done handoff.",
  },
  {
    id: 9,
    question: "Can the app handle a rush, like weekend or holiday order spikes?",
    answer:
      "Yes, we design for that specifically. Grocery apps tend to get hit hard during weekends and holidays, so we build on infrastructure that scales with order volume instead of slowing down.",
  },
  {
    id: 10,
    question: "Will I actually own the app once it's done?",
    answer:
      "Completely. Source code, everything — it's yours. You're not stuck coming back to us forever just to make changes or manage hosting.",
  },
];

export const DELIVERY_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much will my delivery app actually cost?",
    answer:
      "It depends on scope. A simple single-fleet delivery app usually falls between $4,000–$10,000. If you want multi-vendor support, live route optimization, and rider management at scale, expect somewhere in the $30,000–$80,000+ range.",
  },
  {
    id: 2,
    question: "How long until we can actually launch?",
    answer:
      "For a straightforward delivery app, around 6–10 weeks. Add multi-vendor logic, advanced routing, or large-scale rider management, and plan for closer to 12–16 weeks.",
  },
  {
    id: 3,
    question: "Can I start small and add features later?",
    answer:
      "Yes, that's actually how most of our clients do it. Launch with basic ordering and tracking first, then add things like scheduled deliveries or rider incentive programs once you see what your business actually needs.",
  },
  {
    id: 4,
    question: "Will this work with riders I already have, or do I need new ones?",
    answer:
      "It works with whoever you've got. We build the rider app and dispatch system around your existing team — no need to replace anyone.",
  },
  {
    id: 5,
    question: "Can you build separate apps for customers, riders, and admin?",
    answer:
      "Yes, that's actually how we recommend building it — a customer app to order, a rider app to manage deliveries, and an admin dashboard for you to oversee everything from one place.",
  },
  {
    id: 6,
    question: "What happens if a rider can't make a delivery on time?",
    answer:
      "We build in automatic reassignment logic, so if a rider's delayed or unavailable, the system can shift the order to another rider nearby instead of leaving the customer waiting.",
  },
  {
    id: 7,
    question: "Can the app support multiple types of deliveries — food, parcels, groceries?",
    answer:
      "Yes, if that's the direction you're going. We can build flexible order categories so your app handles different delivery types within the same platform.",
  },
  {
    id: 8,
    question: "Do you stick around after the app goes live?",
    answer:
      "We do. Post-launch support is part of how we work — bug fixes, performance checks, and feature additions as your business grows, not a one-and-done handoff.",
  },
  {
    id: 9,
    question: "Can the app handle a sudden spike in orders, like during a promo or holiday?",
    answer:
      "Yes, we design specifically for that. Delivery apps tend to get hit hard during promotions and holidays, so we build on infrastructure that scales with order volume instead of slowing down or crashing.",
  },
  {
    id: 10,
    question: "Will I actually own the app once it's done?",
    answer:
      "Completely. Source code, everything — it's yours. You're not stuck coming back to us forever just to make a small change.",
  },
];

export const TRAVEL_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much will my travel app actually cost?",
    answer:
      "It depends on scope. A simple booking app for one service (just hotels, or just flights) usually falls between $5,000–$12,000. A full travel platform with flights, hotels, itineraries, and payment integration can run $40,000–$90,000+.",
  },
  {
    id: 2,
    question: "How long until we can actually launch?",
    answer:
      "For a straightforward booking app, around 8–12 weeks. A full-featured travel platform with multiple booking types and itinerary planning usually takes 14–20 weeks.",
  },
  {
    id: 3,
    question: "Can I start small and add features later?",
    answer:
      "Yes, and that's actually what we'd suggest. Most clients launch with one core booking type first, then add hotels, tours, or itinerary planning once they see what travelers are asking for.",
  },
  {
    id: 4,
    question: "Will this connect to flight and hotel inventory systems I already use?",
    answer:
      "In most cases, yes. We've integrated with various GDS, flight, and hotel inventory APIs before — we'll look at what you're currently working with to confirm.",
  },
  {
    id: 5,
    question: "Can the app support package deals, not just individual bookings?",
    answer:
      "Definitely. A lot of travel businesses want to bundle flights, hotels, and tours together, so we build that flexibility in so you can create and price packages however you want.",
  },
  {
    id: 6,
    question: "What happens if a traveler needs to cancel or change a booking?",
    answer:
      "Good question — this matters a lot in travel. We build in cancellation and modification flows based on your policies, so travelers can manage changes without calling your support line for everything.",
  },
  {
    id: 7,
    question: "Can the app handle multiple currencies and languages?",
    answer:
      "Yes, if you're serving travelers from different regions, we build in multi-currency pricing and multi-language support so the app works for your actual customer base, not just one market.",
  },
  {
    id: 8,
    question: "Do you stick around after the app goes live?",
    answer:
      "We do. Post-launch support is part of how we work — bug fixes, performance checks, and feature additions as your business grows, not a one-and-done handoff.",
  },
  {
    id: 9,
    question: "Can the app handle a rush during peak travel seasons?",
    answer:
      "Yes, we design for that specifically. Travel apps get hit hard during holiday seasons and sale periods, so we build on infrastructure that scales with booking volume instead of slowing down.",
  },
  {
    id: 10,
    question: "Will I actually own the app once it's done?",
    answer:
      "Completely. Source code, everything — it's yours. You're not stuck coming back to us forever just to make a small change.",
  },
];

export const EDUCATION_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much will my education app actually cost?",
    answer:
      "It depends on scope. A simple course or tutoring app usually falls between $4,000–$10,000. A full school management system with live classes, attendance, and parent dashboards can run $30,000–$70,000+.",
  },
  {
    id: 2,
    question: "How long until we can actually launch?",
    answer:
      "For a straightforward course or tutoring app, around 6–10 weeks. A full school management platform with multiple dashboards and live class features usually takes 12–16 weeks.",
  },
  {
    id: 3,
    question: "Can I start small and add features later?",
    answer:
      "Yes, and that's actually what we'd recommend. Most clients launch with core course content or class scheduling first, then add quizzes, progress reports, or parent dashboards once they see what's actually needed.",
  },
  {
    id: 4,
    question: "Will this work for live classes, or just recorded content?",
    answer:
      "Both, depending on what you need. We can build for live sessions, recorded courses, or a mix of both, whatever matches how you actually teach.",
  },
  {
    id: 5,
    question: "Can the app support multiple teachers and multiple batches?",
    answer:
      "Definitely. A lot of coaching centers and schools need this, so we build in role-based access so each teacher manages their own classes while you oversee everything centrally.",
  },
  {
    id: 6,
    question: "What happens if a student misses a live class?",
    answer:
      "We build in automatic recording and playback, so students can catch up on missed sessions without needing to ask the teacher to repeat anything.",
  },
  {
    id: 7,
    question: "Can parents track their child's progress through the app?",
    answer:
      "Yes, if that's something you want. We can build a separate parent dashboard showing attendance, grades, and progress, so parents stay informed without constant phone calls.",
  },
  {
    id: 8,
    question: "Do you stick around after the app goes live?",
    answer:
      "We do. Post-launch support is part of how we work — bug fixes, performance checks, and feature additions as your institute grows, not a one-and-done handoff.",
  },
  {
    id: 9,
    question: "Can the app handle a sudden rush of enrollments, like during admission season?",
    answer:
      "Yes, we design for that specifically. Education apps tend to get hit hard during enrollment periods, so we build on infrastructure that scales with demand instead of slowing down.",
  },
  {
    id: 10,
    question: "Will I actually own the app once it's done?",
    answer:
      "Completely. Source code, everything — it's yours. You're not stuck coming back to us forever just to make a small change.",
  },
];

export const LOGISTICS_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does logistics app development cost in 2026?",
    answer:
      "Logistics app development typically costs between $5,000 and $100,000+, depending on complexity. A basic delivery tracking app starts around $5K–$10K, while a full fleet management platform with AI routing and WMS integration can run $50K–$100K+.",
  },
  {
    id: 2,
    question: "How long does it take to build a logistics app?",
    answer:
      "Most logistics apps take 8 to 16 weeks to build, depending on the features involved. A simple delivery app with driver tracking can launch in 6–8 weeks, while a full-featured fleet management or 3PL platform takes longer.",
  },
  {
    id: 3,
    question: "Can I add new features after my logistics app goes live?",
    answer:
      "Yes, you can add features like AI route optimization, customer rating systems, or multi-city dispatching after launch. Logistics apps are built to scale as your operation grows.",
  },
  {
    id: 4,
    question: "Can your logistics app integrate with our existing ERP or WMS?",
    answer:
      "Yes, custom logistics apps can integrate with existing ERP systems, warehouse management software, and TMS platforms. Compatibility depends on the specific systems already in use.",
  },
  {
    id: 5,
    question: "Do you build apps for both B2B freight and B2C last-mile delivery?",
    answer:
      "Yes, we build logistics apps that support enterprise freight management, courier services, and consumer-facing last-mile delivery — including driver apps, dispatcher dashboards, and customer tracking portals, all within one platform.",
  },
  {
    id: 6,
    question: "Will the logistics app work across multiple cities or regions?",
    answer:
      "Absolutely. We build multi-region logistics apps with centralized dispatch management, location-based routing, and per-city operational controls — so you can manage one city or a national network from one system.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the logistics app is launched?",
    answer:
      "Yes, our logistics app development services include post-launch support covering bug fixes, performance monitoring, and feature updates — so your app keeps running smoothly as your business grows.",
  },
  {
    id: 8,
    question: "Can the app handle high shipment volumes during peak seasons?",
    answer:
      "Yes, we build logistics apps on scalable cloud architecture designed to handle volume spikes during peak periods, so your system stays fast and reliable even during the busiest days.",
  },
  {
    id: 9,
    question: "Will I own the app and its source code?",
    answer:
      "Yes, once development is complete, you get full ownership of your logistics app, including the source code — so you're never locked into our agency for future changes or hosting decisions.",
  },
  {
    id: 10,
    question: "Can you build an app specifically for a courier or same-day delivery startup?",
    answer:
      "Yes, we specialize in on-demand courier app development too — building delivery-first apps with instant booking, live driver tracking, proof-of-delivery, and customer notification systems tailored to fast-turnaround delivery businesses.",
  },
];

export const FITNESS_APP_FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does fitness app development cost in 2026?",
    answer:
      "Fitness app development typically costs between $5,000 and $80,000+, depending on complexity. A basic class booking app starts around $5K–$10K, while a full-featured gym management platform with AI, wearable integrations, and multi-location support can run $40K–$80K+.",
  },
  {
    id: 2,
    question: "How long does it take to build a fitness app?",
    answer:
      "Most fitness apps take 6 to 14 weeks to build. A simple gym booking app can launch in 4–6 weeks, while a full fitness platform with live streaming, AI coaching, and payment systems takes longer.",
  },
  {
    id: 3,
    question: "Can I add new features to my fitness app after launch?",
    answer:
      "Yes. Features like AI workout recommendations, nutrition tracking, or multi-gym support can be added after launch. Fitness apps are built to evolve as your member base grows.",
  },
  {
    id: 4,
    question: "Can your fitness app integrate with wearables like Apple Watch or Fitbit?",
    answer:
      "Yes, custom fitness apps can integrate with Apple HealthKit, Google Fit, Fitbit, Garmin, and other wearables to sync workout data, heart rate, and activity metrics directly into your app.",
  },
  {
    id: 5,
    question: "Do you build apps for both in-person gyms and online fitness businesses?",
    answer:
      "Yes. We build fitness apps that support in-person class bookings, physical gym check-ins, and fully remote on-demand platforms — including live streaming, video libraries, and virtual trainer sessions.",
  },
  {
    id: 6,
    question: "Can the fitness app handle multiple gym locations?",
    answer:
      "Absolutely. We build multi-location fitness apps with centralized member management, location-based class scheduling, and individual branch dashboards — so you can manage one studio or an entire chain from one system.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the fitness app launches?",
    answer:
      "Yes. Our fitness app development services include post-launch support covering bug fixes, performance monitoring, and feature updates — so your app keeps running smoothly as your member base scales.",
  },
  {
    id: 8,
    question: "Can the app handle high traffic during peak class booking windows?",
    answer:
      "Yes. We build fitness apps on scalable architecture designed to handle simultaneous booking spikes — so your system stays fast and reliable even when hundreds of members book the same popular class at once.",
  },
  {
    id: 9,
    question: "Will I own the fitness app and its source code?",
    answer:
      "Yes. Once development is complete, you get full ownership of your fitness app including the source code — so you are never locked into our agency for future changes or hosting decisions.",
  },
  {
    id: 10,
    question: "Can you build a white-label fitness app for my brand?",
    answer:
      "Yes. We build fully branded, white-label fitness apps with your logo, colors, and custom domain — so members experience your brand, not a generic platform, every time they open the app.",
  },
];

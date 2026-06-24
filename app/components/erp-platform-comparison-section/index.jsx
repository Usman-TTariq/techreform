import {
  Bot,
  Building2,
  Gamepad2,
  Glasses,
  LayoutGrid,
  Monitor,
  Package,
  Scan,
  Smartphone,
} from "lucide-react";
import PlatformComparisonSection, {
  RECOMMENDATION_GREEN,
  RECOMMENDATION_ORANGE,
  RECOMMENDATION_PURPLE,
} from "../platform-comparison-section";

const ERP_PLATFORMS = [
  {
    name: "Odoo ERP",
    Icon: Package,
    popular: false,
    rows: [
      { label: "Best for", value: "SMB / Startup" },
      { label: "Cost", value: "$15K – $40K" },
      { label: "Setup time", value: "8–14 weeks" },
      { label: "Customization", value: "High" },
      { label: "License", value: "Open source" },
    ],
    recommendation: "Best if: Small team, limited budget, fast launch needed",
    recommendationClass: RECOMMENDATION_GREEN,
  },
  {
    name: "MS Dynamics 365",
    Icon: LayoutGrid,
    popular: true,
    rows: [
      { label: "Best for", value: "Mid-Enterprise" },
      { label: "Cost", value: "$50K – $150K" },
      { label: "Setup time", value: "4–8 months" },
      { label: "Customization", value: "Medium-High" },
      { label: "License", value: "Microsoft 365" },
    ],
    recommendation: "Best if: Mid-size company, Office 365 already in use",
    recommendationClass: RECOMMENDATION_PURPLE,
  },
  {
    name: "SAP / Oracle",
    Icon: Building2,
    popular: false,
    rows: [
      { label: "Best for", value: "Large Enterprise" },
      { label: "Cost", value: "$100K – $500K+" },
      { label: "Setup time", value: "6–18 months" },
      { label: "Customization", value: "Medium" },
      { label: "License", value: "Expensive / annual" },
    ],
    recommendation: "Best if: 500+ employees, complex global operations",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
];

const AR_FRAMEWORKS = [
  {
    name: "ARKit — Apple iOS",
    shortName: "ARKit",
    Icon: Smartphone,
    popular: false,
    rows: [
      { label: "Platform", value: "iOS only" },
      { label: "Devices", value: "iPhone 6S+, iPad" },
      { label: "Performance", value: "Best on iOS", tone: "positive" },
      { label: "Face Tracking", value: "TrueDepth ✓", tone: "positive" },
      { label: "LiDAR Support", value: "Yes ✓", tone: "positive" },
      { label: "Best For", value: "iOS-first apps" },
    ],
    recommendation:
      "Choose if: Your audience is primarily iPhone users or you need Apple Vision Pro support.",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
  {
    name: "ARCore — Android",
    shortName: "ARCore",
    Icon: Bot,
    popular: true,
    rows: [
      { label: "Platform", value: "Android only" },
      { label: "Devices", value: "400M+ Android devices" },
      { label: "Performance", value: "Best on Android", tone: "positive" },
      { label: "Face Tracking", value: "Limited" },
      { label: "LiDAR Support", value: "Select devices" },
      { label: "Best For", value: "Android-first apps" },
    ],
    recommendation:
      "Choose if: Your audience uses Android or you need widest device reach.",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
  {
    name: "Vuforia — Enterprise",
    shortName: "Vuforia",
    Icon: Scan,
    popular: false,
    rows: [
      { label: "Platform", value: "iOS + Android" },
      { label: "Devices", value: "All + HoloLens" },
      { label: "Performance", value: "Good" },
      { label: "Marker Tracking", value: "Industry-best ✓", tone: "positive" },
      { label: "Enterprise Ready", value: "Yes ✓", tone: "positive" },
      { label: "Best For", value: "Industrial / training" },
    ],
    recommendation:
      "Choose if: Enterprise use case, marker tracking, or cross-platform needed.",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
];

const VR_PLATFORMS = [
  {
    name: "Standalone VR",
    Icon: Glasses,
    popular: true,
    rows: [
      { label: "Best Headset", value: "Meta Quest 3" },
      { label: "PC Required", value: "No ✓", tone: "positive" },
      { label: "Cost", value: "$35K – $80K", tone: "positive" },
      { label: "Setup", value: "Simple — anywhere", tone: "positive" },
      { label: "Graphics", value: "Good — mobile GPU" },
      { label: "Best For", value: "Training, retail, events" },
    ],
    recommendation:
      "Choose if: Mobile workforce, no PC infrastructure, wide deployment needed.",
    recommendationClass: RECOMMENDATION_PURPLE,
  },
  {
    name: "PC-Powered VR",
    Icon: Monitor,
    popular: false,
    rows: [
      { label: "Best Headset", value: "HTC Vive / Valve Index" },
      { label: "PC Required", value: "Yes — high-end" },
      { label: "Cost", value: "$60K – $200K" },
      { label: "Setup", value: "Fixed location" },
      { label: "Graphics", value: "Excellent — GPU power", tone: "positive" },
      { label: "Best For", value: "Simulation, architecture" },
    ],
    recommendation:
      "Choose if: High-fidelity simulation, fixed lab environment, maximum visual quality.",
    recommendationClass: RECOMMENDATION_GREEN,
  },
  {
    name: "Console VR",
    Icon: Gamepad2,
    popular: false,
    rows: [
      { label: "Best Headset", value: "PlayStation VR2" },
      { label: "PC Required", value: "No — PS5 only", tone: "positive" },
      { label: "Cost", value: "$50K – $150K" },
      { label: "Setup", value: "PS5 + PSVR2" },
      { label: "Graphics", value: "Very good", tone: "positive" },
      { label: "Best For", value: "Gaming, entertainment" },
    ],
    recommendation:
      "Choose if: Consumer gaming, entertainment experiences, existing PS5 user base.",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
];

const ErpPlatformComparisonSection = () => (
  <PlatformComparisonSection
    capsuleFirst="PLATFORM"
    capsuleSecond="COMPARISON"
    headline={
      <>
        <span className="text-white">SAP vs Oracle vs Odoo vs </span>
        <span className="text-[#C380FE]">Custom ERP</span>
        <span className="text-white"> — </span>
        <span className="text-[#F74B1C]">Which Is Right for You?</span>
      </>
    }
    description="The biggest decision before ERP development is platform selection. Wrong choice = wasted budget. Here is a direct comparison based on business size and budget."
    platforms={ERP_PLATFORMS}
    ctaText="Not sure which platform is right? Tell us your business size and budget — we'll recommend the right ERP in 24 hours →"
  />
);

export const ArFrameworkComparisonSection = () => (
  <PlatformComparisonSection
    capsuleFirst="FRAMEWORK"
    capsuleSecond="COMPARISON"
    headline={
      <>
        <span className="text-white">ARKit vs ARCore vs Vuforia — </span>
        <span className="text-[#F74B1C]">Which Is Right for You?</span>
      </>
    }
    description="The most common question before starting an AR project. Wrong framework = poor performance or incompatible devices."
    platforms={AR_FRAMEWORKS}
    ctaText="Not sure which framework is right? Tell us your target devices and use case — we'll recommend the right AR stack in 24 hours →"
  />
);

export const VrPlatformComparisonSection = () => (
  <PlatformComparisonSection
    capsuleFirst="PLATFORM"
    capsuleSecond="COMPARISON"
    headline={
      <>
        <span className="text-white">Standalone vs PC VR vs Console VR — </span>
        <span className="text-[#F74B1C]">Which Is Right for You?</span>
      </>
    }
    description="The wrong VR platform limits deployment and blows the budget. Compare standalone, PC-powered, and console VR by cost, setup, and use case before you start building."
    platforms={VR_PLATFORMS}
    ctaText="Not sure which VR platform fits? Tell us your use case and audience — we'll recommend the right platform in 24 hours →"
  />
);

export default ErpPlatformComparisonSection;

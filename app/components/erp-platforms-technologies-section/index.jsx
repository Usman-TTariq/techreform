import {
  Bot,
  Boxes,
  Building2,
  CircleDot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Glasses,
  Headset,
  LayoutGrid,
  Package,
  Scan,
  Smartphone,
} from "lucide-react";
import PlatformsTechnologiesSection from "../platforms-technologies-section";

const ERP_PLATFORMS = [
  { title: "SAP ERP", subtitle: "Large Enterprise", Icon: Building2 },
  { title: "Oracle ERP", subtitle: "Enterprise / Finance", Icon: Database },
  { title: "MS Dynamics 365", subtitle: "Mid-Enterprise", Icon: LayoutGrid },
  { title: "Odoo ERP", subtitle: "SMB / Startup", Icon: Package },
  { title: "NetSuite ERP", subtitle: "Cloud / Mid-market", Icon: Cloud },
  { title: "Custom ERP", subtitle: "Any business size", Icon: Code2 },
];

const ERP_TECH_STACK = [
  {
    title: "BACKEND",
    items: ["Node.js", "Python / Django", "Laravel / PHP", "Java Spring"],
  },
  {
    title: "DATABASE",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "CLOUD",
    items: ["AWS", "Azure", "Google Cloud", "Docker / K8s"],
  },
  {
    title: "INTEGRATIONS",
    items: ["Salesforce CRM", "QuickBooks", "Stripe / PayPal", "REST / GraphQL"],
  },
];

const AR_PLATFORMS = [
  { title: "ARKit", subtitle: "iOS AR — iPhone & iPad", Icon: Smartphone },
  { title: "ARCore", subtitle: "Android AR — all devices", Icon: Bot },
  { title: "WebAR", subtitle: "Browser-based AR", Icon: Globe },
  { title: "Unity XR", subtitle: "Cross-platform AR/VR", Icon: Boxes },
  { title: "Vuforia", subtitle: "Enterprise marker-based", Icon: Scan },
  { title: "Microsoft MRTK", subtitle: "HoloLens development", Icon: Glasses },
];

const AR_TECH_STACK = [
  {
    title: "AR FRAMEWORKS",
    items: ["ARKit 6", "ARCore", "Vuforia", "8th Wall (WebAR)"],
  },
  {
    title: "3D ENGINES",
    items: ["Unity XR", "Unreal Engine 5", "Three.js", "Babylon.js"],
  },
  {
    title: "3D & AI TOOLS",
    items: ["Blender", "Maya", "TensorFlow Lite", "Core ML"],
  },
  {
    title: "PLATFORMS & CLOUD",
    items: ["iOS & Android", "HoloLens 2", "Meta Quest", "Apple Vision Pro"],
  },
];

const VR_PLATFORMS = [
  { title: "Unity XR", subtitle: "Cross-platform VR — all headsets", Icon: Boxes },
  { title: "Unreal Engine 5", subtitle: "PC VR — photorealistic worlds", Icon: Cpu },
  { title: "OpenXR", subtitle: "Universal VR standard", Icon: CircleDot },
  { title: "Meta SDK", subtitle: "Quest 2, 3 & Pro", Icon: Headset },
  { title: "SteamVR / OpenVR", subtitle: "PC VR — HTC Vive, Valve Index", Icon: Gamepad2 },
  { title: "Microsoft MRTK", subtitle: "HoloLens mixed reality", Icon: Glasses },
];

const VR_TECH_STACK = [
  {
    title: "VR ENGINES",
    items: ["Unity XR Toolkit", "Unreal Engine 5", "WebXR / A-Frame", "Godot XR"],
  },
  {
    title: "SDKS & APIS",
    items: ["Meta SDK", "SteamVR SDK", "PlayStation VR2 SDK", "OpenXR Standard"],
  },
  {
    title: "3D & SIMULATION",
    items: ["Blender", "Maya", "NVIDIA PhysX", "Havok Physics"],
  },
  {
    title: "CLOUD & MULTIPLAYER",
    items: ["Photon Network", "AWS GameLift", "Mirror Networking", "WebRTC"],
  },
];

const ErpPlatformsTechnologiesSection = () => (
  <PlatformsTechnologiesSection
    capsuleFirst="ERP"
    capsuleSecond="PLATFORMS"
    headlineBefore="ERP Platforms & "
    headlineAccent="Technologies"
    headlineAfter=" We Work With"
    platforms={ERP_PLATFORMS}
    techStack={ERP_TECH_STACK}
  />
);

export const ArFrameworksTechnologiesSection = () => (
  <PlatformsTechnologiesSection
    capsuleFirst="AR"
    capsuleSecond="TECHNOLOGY"
    headlineBefore="AR "
    headlineAccent="Frameworks & Technologies"
    headlineAfter=" We Build With"
    description="We use industry-leading AR frameworks, 3D engines, and cloud platforms. The right stack is chosen based on your target device, use case, and budget."
    platforms={AR_PLATFORMS}
    techStack={AR_TECH_STACK}
  />
);

export const VrFrameworksTechnologiesSection = () => (
  <PlatformsTechnologiesSection
    capsuleFirst="VR"
    capsuleSecond="TECHNOLOGY"
    headlineBefore="VR "
    headlineAccent="Frameworks & Technologies"
    headlineAfter=" We Build With"
    description="We use industry-leading VR engines, SDKs, and multiplayer platforms. The right stack is chosen based on your target headset, use case, and performance requirements."
    platforms={VR_PLATFORMS}
    techStack={VR_TECH_STACK}
  />
);

export default ErpPlatformsTechnologiesSection;

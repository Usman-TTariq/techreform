"use client";

import {
  BarChart3,
  Bell,
  CreditCard,
  LineChart,
  Plug,
  Scan,
  ShieldCheck,
  Sparkles,
  View,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const FEATURES = [
  {
    title: "Multiple Payment Options",
    desc: "Support credit cards, debit cards, digital wallets, buy-now-pay-later, and in-store payment methods in your retail app, removing friction at the most critical moment of the customer journey.",
    icon: CreditCard,
  },
  {
    title: "Artificial Intelligence & Personalization",
    desc: "AI-powered product recommendations, smart search, and virtual try-on features that improve retail app conversion rates and reduce costly return rates.",
    icon: Sparkles,
  },
  {
    title: "Augmented Reality Shopping",
    desc: "Let customers visualize products in their environment before purchasing, a core feature of modern retail mobile apps that bridges the gap between browsing and buying with confidence.",
    icon: View,
  },
  {
    title: "Push Notifications & Re-engagement",
    desc: "Targeted, behavior-driven push notifications that bring customers back to your retail app—order updates, personalized promotions, back-in-stock alerts, and loyalty milestones.",
    icon: Bell,
  },
  {
    title: "Real-Time Analytics Dashboards",
    desc: "Monitor sales performance, customer behavior, return rates, and inventory movement from a unified dashboard built into your retail app.",
    icon: BarChart3,
  },
  {
    title: "Customer Data Security & PHI Safeguards",
    desc: "We build every retail mobile app to the highest data security standards, including PHI-compliant safeguards for health and wellness retail app categories.",
    icon: ShieldCheck,
  },
  {
    title: "POS, ERP & Third-Party Integrations",
    desc: "Connect your retail app to your existing point-of-sale system, ERP, warehouse management software, CRM, and marketing platforms for a fully unified retail technology ecosystem.",
    icon: Plug,
  },
  {
    title: "Image & Video Recognition",
    desc: "Enable customers to search for products visually within your retail app and help your brand connect with user-generated content across social platforms.",
    icon: Scan,
  },
  {
    title: "Advanced Data Analytics",
    desc: "Transform raw transaction and behavioral data into actionable retail insights—smarter inventory planning, more targeted marketing, and lower operational risk.",
    icon: LineChart,
  },
];

const RetailKeyFeaturesSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 z-10 w-full max-w-[100vw] box-border">
        <div className="text-center max-w-4xl mx-auto pb-8 sm:pb-10 md:pb-[52px]">
          <div className="flex justify-center pb-4 sm:pb-[22px]">
            <CapsuleLabel firstWord="KEY" secondWord="FEATURES" />
          </div>
          <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
            <span className="text-white">Key Features of Our </span>
            <span className="text-[#F74B1C]">Retail Mobile Apps</span>
          </h2>
          <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] text-white/90 pt-4 sm:pt-5 leading-relaxed">
            The Functionality That Turns Downloads into Revenue
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0"
              >
                <div className="group h-full rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(119,36,193,0.18)_0%,rgba(22,22,22,0.95)_45%)] p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-[#F74B1C]/70 hover:shadow-[0_8px_32px_rgba(247,75,28,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F74B1C]/15 border border-[#F74B1C]/30 flex items-center justify-center text-[#F74B1C] group-hover:bg-[#F74B1C] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-britanicaBlack text-[17px] sm:text-[19px] md:text-[20px] text-white leading-tight pb-2 sm:pb-3">
                        {feature.title}
                      </h3>
                      <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/80 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-10 sm:pt-12 flex justify-center">
          <Button text="Build Your Retail App" icon={false} onClick={goToContact} />
        </div>
      </div>
    </div>
  );
};

export default RetailKeyFeaturesSection;

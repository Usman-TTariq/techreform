"use client";

import Image from "next/image";
import {
  ClipboardCheck,
  Gift,
  LayoutGrid,
  Layers,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const APP_TYPES = [
  {
    title: "Loyalty & Reward Apps",
    desc: "Increase repeat purchase rates and customer lifetime value with a custom loyalty app that tracks purchases, awards points, and enables seamless reward redemption.",
    tags: ["Points & rewards", "Repeat purchases", "Customer retention"],
    icon: Gift,
    span: "col-span-12 lg:col-span-8",
    minH: "min-h-[260px] sm:min-h-[300px]",
  },
  {
    title: "eCommerce Shopping Apps",
    desc: "Native mobile shopping with intelligent search, personalized recommendations, secure checkout, and real-time order tracking in one place.",
    tags: ["Smart search", "Secure checkout", "Order tracking"],
    icon: ShoppingCart,
    span: "col-span-12 lg:col-span-4",
    minH: "min-h-[260px] sm:min-h-[300px]",
  },
  {
    title: "Retail Store Apps",
    desc: "Mobile tools for inventory lookup, clienteling, mobile POS, and in-store customer service for your whole sales floor.",
    tags: ["Mobile POS", "Clienteling", "Inventory lookup"],
    icon: Store,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    minH: "min-h-[240px]",
  },
  {
    title: "Retail Audit Apps",
    desc: "Store walkthroughs, photo-based compliance capture, and detailed reports in real time on any device, online or offline.",
    tags: ["Field audits", "Photo capture", "Offline mode"],
    icon: ClipboardCheck,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    minH: "min-h-[240px]",
  },
  {
    title: "Omnichannel Retail Apps",
    desc: "Unify online and in-store so customers can browse, reserve, track deliveries, and earn loyalty points everywhere they shop.",
    tags: ["Buy online", "Reserve in-store", "Unified loyalty"],
    icon: Layers,
    span: "col-span-12 lg:col-span-4",
    minH: "min-h-[240px]",
  },
  {
    title: "Merchandising Apps",
    desc: "Plan, execute, and evaluate product placement with photo capture, task management, and performance analytics.",
    tags: ["Planograms", "Task workflows", "Analytics"],
    icon: LayoutGrid,
    span: "col-span-12 md:col-span-6 lg:col-span-6",
    minH: "min-h-[220px]",
  },
  {
    title: "Supply Chain & Inventory Apps",
    desc: "Real-time inventory visibility, automated stock alerts, supplier management, and logistics tracking from warehouse to shelf.",
    tags: ["Stock alerts", "Supplier hub", "Logistics"],
    icon: Truck,
    span: "col-span-12 md:col-span-6 lg:col-span-6",
    minH: "min-h-[220px]",
  },
];

const RetailAppTypesSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[80%] sm:w-[55%] absolute -top-[30%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />
      <div className="container relative px-4 sm:px-4 z-10 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end pb-8 sm:pb-10 md:pb-[48px]">
          <div className="col-span-12 lg:col-span-8 min-w-0">
            <div className="pb-4 sm:pb-[22px] max-lg:flex max-lg:justify-center">
              <CapsuleLabel firstWord="RETAIL" secondWord="APP" thirdWord="TYPES" />
            </div>
            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[44px] md:leading-[52px] font-black break-words max-lg:text-center">
              <span className="text-white">Types of Retail Mobile Apps </span>
              <span className="text-[#F74B1C]">We Develop</span>
            </div>
            <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] text-white/90 pt-4 max-w-2xl leading-relaxed max-lg:text-center max-lg:mx-auto">
              Custom-Built for Every Corner of the Retail Industry
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end max-lg:justify-center">
            <Button text="Start Your Retail App" icon={false} onClick={goToContact} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {APP_TYPES.map((item) => {
            const Icon = item.icon;
            return (
            <article
              key={item.title}
              className={`${item.span} ${item.minH} min-w-0 group`}
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-[#C380FE]/50 bg-[#161616] p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-[#F74B1C] hover:shadow-[0_0_40px_rgba(247,75,28,0.15)]">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(119,36,193,0.22) 0%, transparent 55%, rgba(247,75,28,0.12) 100%)",
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F74B1C]/15 border border-[#F74B1C]/30 text-[#F74B1C] group-hover:bg-[#F74B1C] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="font-britanicaBlack text-[19px] sm:text-[22px] md:text-[24px] text-white leading-tight pb-3">
                    {item.title}
                  </h3>
                  <p className="font-britanicaRegular text-[13px] sm:text-[15px] text-white/80 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <ul className="flex flex-wrap gap-2 pt-5 mt-auto">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11px] sm:text-[12px] font-britanicaRegular text-white bg-[linear-gradient(90deg,rgba(245,133,226,0.35)_0%,rgba(147,64,255,0.45)_100%)] border border-white/10"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RetailAppTypesSection;

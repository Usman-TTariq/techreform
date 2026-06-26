"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { PAGE_CONTACT } from "@/app/constants/page-contact-config";

const WhatWeDoSection = dynamic(() => import("./what-we-do-section"));
const TransformingIdeas = dynamic(() => import("./transforming-ideas"));
const Marquee = dynamic(() => import("./marquee"));
const TestimonialSection = dynamic(() => import("./testimonial-section"));
const ThreeDTextRotationSection = dynamic(
  () => import("./3d-text-rotation-section")
);
const DetailFormSection = dynamic(() => import("./detail-form-section"));
const FaqHomeSection = dynamic(() => import("./faq-home-section"));

export default function HomeBelowFold() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(mount, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(mount, 200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <WhatWeDoSection />
      <TransformingIdeas />
      <Marquee />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.home} />
      <FaqHomeSection />
    </>
  );
}

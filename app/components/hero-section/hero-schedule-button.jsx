"use client";

import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

export default function HeroScheduleButton() {
  return (
    <Button
      text="Schedule a Free Consultation"
      icon={false}
      onClick={goToContact}
    />
  );
}

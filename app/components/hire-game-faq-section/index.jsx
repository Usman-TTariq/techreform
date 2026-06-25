"use client";

import HireFaqSection from "../hire-developer/hire-faq-section";
import { HIRE_GAME_FAQ_ITEMS } from "@/app/constants/hire-game-content";

const HireGameFaqSection = () => {
  return (
    <HireFaqSection
      titleWhite="Common Questions Before"
      titleAccent="You Hire a Game Developer"
      items={HIRE_GAME_FAQ_ITEMS}
    />
  );
};

export default HireGameFaqSection;

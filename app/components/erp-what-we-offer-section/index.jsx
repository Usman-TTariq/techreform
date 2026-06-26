import WhatWeOfferSection from "../what-we-offer-section";
import { ERP_WHAT_WE_OFFER } from "@/app/constants/what-we-offer-content";

const ErpWhatWeOfferSection = (props) => (
  <WhatWeOfferSection {...ERP_WHAT_WE_OFFER} {...props} />
);

export default ErpWhatWeOfferSection;

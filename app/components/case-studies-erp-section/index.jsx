import CaseStudiesSection from "../case-studies-section";
import { ERP_CASE_STUDIES } from "@/app/constants/case-studies-content";

const CaseStudiesErpSection = (props) => (
  <CaseStudiesSection {...ERP_CASE_STUDIES} {...props} />
);

export default CaseStudiesErpSection;

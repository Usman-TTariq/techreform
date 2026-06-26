import FaqSection from "../faq-section";
import { ERP_FAQ_ITEMS } from "@/app/constants/faq-content";

const FaqErpSection = (props) => <FaqSection items={ERP_FAQ_ITEMS} {...props} />;

export default FaqErpSection;

import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_MAGENTO_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_MAGENTO_PAGE.metadata;

const HireMagentoPage = () => <HireDeveloperPage content={HIRE_MAGENTO_PAGE} />;

export default HireMagentoPage;

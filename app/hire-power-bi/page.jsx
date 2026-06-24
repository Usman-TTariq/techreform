import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_POWER_BI_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_POWER_BI_PAGE.metadata;

const HirePowerBiPage = () => <HireDeveloperPage content={HIRE_POWER_BI_PAGE} />;

export default HirePowerBiPage;

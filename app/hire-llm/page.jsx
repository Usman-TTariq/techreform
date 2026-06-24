import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_LLM_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_LLM_PAGE.metadata;

const HireLlmPage = () => <HireDeveloperPage content={HIRE_LLM_PAGE} />;

export default HireLlmPage;

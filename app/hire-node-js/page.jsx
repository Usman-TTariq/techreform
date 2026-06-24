import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_NODE_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_NODE_PAGE.metadata;

const HireNodeJsPage = () => <HireDeveloperPage content={HIRE_NODE_PAGE} />;

export default HireNodeJsPage;

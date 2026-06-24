import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_JAVA_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_JAVA_PAGE.metadata;

const HireJavaPage = () => <HireDeveloperPage content={HIRE_JAVA_PAGE} />;

export default HireJavaPage;

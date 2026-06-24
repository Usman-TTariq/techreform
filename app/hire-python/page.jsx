import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_PYTHON_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_PYTHON_PAGE.metadata;

const HirePythonPage = () => <HireDeveloperPage content={HIRE_PYTHON_PAGE} />;

export default HirePythonPage;

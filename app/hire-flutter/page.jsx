import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_FLUTTER_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_FLUTTER_PAGE.metadata;

const HireFlutterPage = () => <HireDeveloperPage content={HIRE_FLUTTER_PAGE} />;

export default HireFlutterPage;

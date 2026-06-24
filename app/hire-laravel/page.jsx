import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_LARAVEL_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_LARAVEL_PAGE.metadata;

const HireLaravelPage = () => <HireDeveloperPage content={HIRE_LARAVEL_PAGE} />;

export default HireLaravelPage;

import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_GOLANG_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_GOLANG_PAGE.metadata;

const HireGolangPage = () => <HireDeveloperPage content={HIRE_GOLANG_PAGE} />;

export default HireGolangPage;

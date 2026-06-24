import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { HIRE_SPRING_BOOT_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = HIRE_SPRING_BOOT_PAGE.metadata;

const HireSpringBootPage = () => <HireDeveloperPage content={HIRE_SPRING_BOOT_PAGE} />;

export default HireSpringBootPage;

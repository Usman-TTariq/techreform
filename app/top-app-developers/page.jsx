import HireDeveloperPage from "../components/hire-developer/hire-developer-page";
import { TOP_APP_DEVELOPERS_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";
export const metadata = TOP_APP_DEVELOPERS_PAGE.metadata;

const TopAppDevelopersPage = () => <HireDeveloperPage content={TOP_APP_DEVELOPERS_PAGE} />;

export default TopAppDevelopersPage;

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import AuthPage from "./pages/authPage";
import BlogPage from "./pages/blogPage";
import BlogSinglePage from "./pages/blogSinglePage";
import ChangelogPage from "./pages/changelogPage";
import ContactPage from "./pages/contactPage";
import LicensePage from "./pages/licensePage";
import LocationPage from "./pages/locationPage";
import ServiceSinglePage from "./pages/serviceSinglePage";
import ServicesPage from "./pages/servicesPage";
import StyleGuidePage from "./pages/styleGuidePage";
import TeamPage from "./pages/teamPage";
import TeamSinglePage from "./pages/teamSinglePage";

//ErrorsPage
import Not_Found from "./pages/Errors/404_Page";

//Routes
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  SERVICES_ROUTE,
  SERVICES_SINGLE_ROUTE,
  TEAM_ROUTE,
  TEAM_SINGLE_ROUTE,
  CONTACT_ROUTE,
  BLOG_ROUTE,
  BLOG_SINGLE_ROUTE,
  LOCATION_ROUTE,
  LOGIN_ROUTE,
  STYLE_GUIDE_ROUTE,
  LICENSE_ROUTE,
  CHANGELOG_ROUTE,
} from "./links/consts";

//ErrorRoute
import { NOT_FOUND_ROUTE } from "./links/ExceptionRoute/consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: ABOUT_ROUTE,
    Component: AboutPage,
  },
  {
    path: SERVICES_ROUTE,
    Component: ServicesPage,
  },
  {
    path: SERVICES_SINGLE_ROUTE,
    Component: ServiceSinglePage,
  },
  {
    path: TEAM_ROUTE,
    Component: TeamPage,
  },
  {
    path: BLOG_ROUTE,
    Component: BlogPage,
  },
  {
    path: BLOG_SINGLE_ROUTE,
    Component: BlogSinglePage,
  },
  {
    path: LICENSE_ROUTE,
    Component: LicensePage,
  },
  {
    path: CHANGELOG_ROUTE,
    Component: ChangelogPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: LOCATION_ROUTE,
    Component: LocationPage,
  },
  {
    path: CONTACT_ROUTE,
    Component: ContactPage,
  },
  {
    path: TEAM_SINGLE_ROUTE,
    Component: TeamSinglePage,
  },
  {
    path: STYLE_GUIDE_ROUTE,
    Component: StyleGuidePage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: Not_Found,
  },
];

import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    pageTitle: "Software Developer",
    pageDescription: "Learn more about me",
    Component: Home,
  },
  {
    path: "/experience",
    name: "Experience",
    pageTitle: "Experience",
    pageDescription: "My experience as a software developer",
    Component: Experience,
  },
  {
    path: "/projects",
    name: "Projects",
    pageTitle: "Projects",
    pageDescription: "Projects that I have worked on",
    Component: Projects,
  },
  {
    path: "/experience#resume",
    name: "Resume",
    pageTitle: "Experience",
    pageDescription: "My experience as a software developer",
    Component: Experience,
  },
  {
    path: "/contact",
    name: "Contact",
    pageTitle: "Contact",
    pageDescription: "Get in touch with me",
    Component: Contact,
  },
  {
    path: "*",
    name: "PageNotFound",
    pageTitle: "404 Error",
    pageDescription: "Error, the page was not found",
    Component: PageNotFound,
  },
];

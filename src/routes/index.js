import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/experience",
    name: "Experience",
    Component: Experience,
  },
  {
    path: "/projects",
    name: "Projects",
    Component: Projects,
  },
  {
    path: "/experience#resume",
    name: "Resume",
    Component: Experience,
  },
  {
    path: "/contact",
    name: "Contact",
    Component: Contact,
  },
];

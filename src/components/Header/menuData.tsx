import { Menu } from "@/types/menu";

const menuData: Menu[] = [
{
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Architecture as a Service",
    path: "/architecture-as-a-service",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Expertise",
    path: "/#expertise",
    newTab: false,
  },
  // AI-Driven Architecture menu - hidden until platform is ready
  // {
  //   id: 3,
  //   title: "AI-Driven Architecture",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "AI Architecture Tools",
  //       path: "/ai-architecture/tools",
  //       newTab: false,
  //     },
  //     {
  //       id: 32,
  //       title: "Intelligent Design",
  //       path: "/ai-architecture/design",
  //       newTab: false,
  //     },
  //     {
  //       id: 33,
  //       title: "Automated Testing",
  //       path: "/ai-architecture/testing",
  //       newTab: false,
  //     },
  //     {
  //       id: 34,
  //       title: "Smart Analytics",
  //       path: "/ai-architecture/analytics",
  //       newTab: false,
  //     },
  //     {
  //       id: 35,
  //       title: "Predictive Modeling",
  //       path: "/ai-architecture/modeling",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Human-Centric Design",
        path: "/services/human-centric-design",
        newTab: false,
      },
      {
        id: 42,
        title: "Digital Transformation",
        path: "/services/digital-transformation",
        newTab: false,
      },
      {
        id: 43,
        title: "Solution Architecture",
        path: "/services/solution-architecture",
        newTab: false,
      },
      {
        id: 44,
        title: "Data Solutions",
        path: "/services/data-solutions",
        newTab: false,
      },

      {
        id: 45,
        title: "Platform Enablement",
        path: "/services/platform-enablement",
        newTab: false,
      },
    ],
  },
      {
    id: 5,
    title: "About",
    path: "/about",
        newTab: false,
      },
      {
    id: 6,
    title: "Perspectives",
    path: "/perspectives",
        newTab: false,
      },
      {
    id: 7,
    title: "Contact",
    path: "/contact",
        newTab: false,
  },
];
export default menuData;

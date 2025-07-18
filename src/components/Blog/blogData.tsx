import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Charting your digital initiatives using C4 Architecture Model",
    paragraph:
      "A practical guide to visualizing and communicating complex digital solutions using the C4 model. Learn how to break down your architecture into clear, actionable diagrams for teams and stakeholders.",
    image: "/images/blog/c4-architecture-hero.jpg",
    author: {
      name: "knowledge Management team",
      image: "/images/blog/author-01.png",
      designation: "Principal Consultant",
    },
    tags: ["C4 Model"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Leveraging TOGAF to Support Scaled Agile Digital Programs",
    paragraph:
      "Explore how TOGAF can be adapted to accelerate agile digital transformation at scale. Insights on integrating architecture frameworks with modern delivery practices.",
    image: "/images/blog/togaf-scaled-agile-hero.jpg",
    author: {
      name: "knowledge Management team",
      image: "/images/blog/author-02.png",
      designation: "Principal Consultant",
    },
    tags: ["TOGAF", "Agile"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "A Strategic Lens on Federal Identity, Credential, and Access Management (FICAM)",
    paragraph:
      "A deep dive into the challenges and opportunities in federal identity, credential, and access management. Strategies for building secure, scalable, and user-centric identity solutions in the public sector.",
    image: "/images/blog/digital-identity-hero.jpg",
    author: {
      name: "knowledge Management team",
      image: "/images/blog/author-03.png",
      designation: "Principal Consultant",
    },
    tags: ["Identity Management"],
    publishDate: "2024-08-12",
  },
];
export default blogData;

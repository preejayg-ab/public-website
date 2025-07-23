import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspect Blueprints - Architecting Extraordinary Digital Outcomes",
  description: "As your trusted partner, we have deep understanding of technology and the latest digital trends. We work with bold organizations to deliver from seed to scale.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183] mb-16 md:mb-20 lg:mb-28"></div>
      <Video />
      <AboutSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}

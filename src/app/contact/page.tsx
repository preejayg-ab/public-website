import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch | Aspect Infotech",
  description: "Start the conversation about your digital transformation. Get a no-obligation architecture assessment from our expert team.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="Start the conversation about your digital transformation. Our expert architects are ready to provide a comprehensive assessment."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

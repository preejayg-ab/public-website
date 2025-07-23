import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section id="expertise" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Areas of Expertise"
          paragraph="Ready to transform your digital landscape? Our expert team is here to architect extraordinary outcomes for your organization. Let's build something remarkable together."
          center
          mb="80px"
          width="800px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[4/5] max-w-[600px] min-h-[420px] text-center flex items-center justify-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/expertise-bg.png"
                alt="Our areas of expertise illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">
              {/* Human-Centric Design */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Human-Centric Design
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We focus on service and digital design that puts users at the core of transformation. By mapping customer journeys and uncovering pain points, we co-design and prototype intuitive digital experiences that delight users and drive meaningful business outcomes.
                </p>
              </div>

              {/* Digital Architecture Blueprinting */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Digital Architecture Blueprinting
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Using proven frameworks like C4, AI-driven design reviews, and deep expertise in cloud, containerisation, and data ecosystems, we create clear, scalable architecture blueprints. Our approach ensures solutions are secure, consistent, and aligned with your strategic goals.
                </p>
              </div>

              {/* SaaS and Platform Enablement */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  SaaS and Platform Enablement
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We streamline your adoption of best-in-class SaaS solutions to accelerate time-to-value. As a trusted software reseller and integration partner, we simplify procurement and deployment of platforms like Auth0 and ClickHouse—letting you focus on innovation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

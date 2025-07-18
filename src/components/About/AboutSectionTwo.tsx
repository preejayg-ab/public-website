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
            <div className="max-w-[470px]">
              {/* Solution Architecture */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Solution Architecture
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Modern application solutioning using micro frontends, microservices, custom off-the-shelf solution implementation and integration, and AWS cloud migration. Our architects design scalable, maintainable, and secure systems tailored to your business needs.
                </p>
              </div>

              {/* Identity and Access Management */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Identity & Access Management
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Customer identity management using Auth0, access management with OPA and OpenFGA, and identity governance leveraging SailPoint and Saviynt. We deliver robust, secure, and compliant IAM solutions for modern enterprises.
                </p>
              </div>

              {/* Digital Transformation */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Digital Transformation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We combine deep technical expertise in cloud, data, and automation with real-world pragmatism to modernize your technology landscape, optimize business processes, and drive measurable business value at scale.
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

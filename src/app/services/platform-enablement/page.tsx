import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Enablement | Aspect Blueprints",
  description: "Accelerate your digital strategy with the right platforms—deployed faster, integrated smarter.",
};

const PlatformEnablementPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Platform Enablement"
        description="Accelerate your digital strategy with the right platforms—deployed faster, integrated smarter."
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    SaaS and Platform Enablement
                  </h2>
                  <p className="mb-8 text-xl font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                    Modern digital ecosystems thrive on carefully chosen, well-integrated SaaS and off-the-shelf platforms. At AspectBlueprints, we help you cut through the complexity of selection, licensing, and deployment so you can get value faster—without compromising on architecture, governance, or scalability.
                  </p>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      What we offer
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Smart Platform Selection</h4>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Licensing and Procurement Simplified</h4>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Rapid Deployment and Integration</h4>
                      </div>
                       <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Architecture-First Thinking</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-center justify-between sm:mb-20">
            <div className="mb-10 w-full max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                Featured Platforms We Work With
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">🔹 ClickHouse – Lightning-Fast Analytical Database</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We help you deploy and integrate ClickHouse to power real-time analytics at scale. Whether you're building dashboards, processing event streams, or managing high-volume datasets, we ensure ClickHouse fits seamlessly into your data platform architecture with performance and resilience.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">🔹 Apache Superset – Open-Source Data Exploration & Dashboards</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Superset gives teams the power to explore and visualise data with ease. We assist in implementing and customising Superset to support self-service analytics, connect securely to your data sources, and create interactive dashboards tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PlatformEnablementPage;

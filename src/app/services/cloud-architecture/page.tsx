import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Architecture | Aspect Blueprints",
  description: "Develop scalable, secure cloud architecture for your mission-critical workloads. We help you choose the right cloud platform and design optimal cloud solutions.",
};

const CloudArchitecturePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cloud Architecture"
        description="Develop scalable, secure cloud architecture for your mission-critical workloads"
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                {/* <img
                  src="/images/services/cloud-architecture.svg"
                  alt="Cloud Architecture Illustration"
                  className="mx-auto mb-8 max-w-xs"
                /> */}
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Cloud Architecture
                  </h2>
                  <p className="mb-8 text-xl font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                    You are developing an infrastructure strategy and are deciding which cloud platform will best meet your business needs. You are looking for a scalable, secure cloud architecture to run your mission critical workloads.
                  </p>
                  <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    Our cloud architecture expertise helps you design and implement robust cloud solutions that deliver performance, security, and cost optimization while enabling rapid innovation and business growth.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Cloud Capabilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span className="text-black dark:text-white">Cloud technology strategy development</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span className="text-black dark:text-white">Cloud platform architecture design</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span className="text-black dark:text-white">Cloud migration strategy and planning</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span className="text-black dark:text-white">Cloud application architecture</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span className="text-black dark:text-white">Cloud operating model establishment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Cloud Benefits
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Scalability</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Elastic infrastructure that grows with your business</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Security</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Enterprise-grade security and compliance</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Cost Optimization</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Pay-as-you-use model with cost management</p>
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
                Cloud Architecture Services
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                We provide comprehensive cloud architecture services that help you design, implement, and optimize cloud solutions for your business needs.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cloud Technology Strategy</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Develop comprehensive cloud strategies that align with your business objectives and technology roadmap.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cloud Platform Architecture</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design robust cloud platform architectures that support your applications and workloads effectively.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cloud Migration Strategy</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Plan and execute cloud migration strategies that minimize risk and maximize business value.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cloud Application Architecture</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design cloud-native applications that leverage cloud capabilities for optimal performance and scalability.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cloud Operating Model</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Establish cloud operating models that ensure effective governance and operational excellence.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Multi-Cloud Strategy</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design multi-cloud architectures that provide flexibility and avoid vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-dark">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-center justify-between sm:mb-20">
            <div className="mb-10 w-full max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                Cloud Architecture Approach
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our systematic approach ensures successful cloud adoption with clear phases and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Assessment</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Evaluate current infrastructure and identify cloud migration opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Strategy</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Develop cloud strategy and select optimal cloud platforms and services.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Design</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design cloud architecture with security, scalability, and cost optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Implementation</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Implement cloud solutions with best practices and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-center justify-between sm:mb-20">
            <div className="mb-10 w-full max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                Why Choose Our Cloud Architecture?
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                We bring deep expertise in cloud architecture to help you build robust, scalable, and cost-effective cloud solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Scalable Design</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design cloud architectures that scale automatically with your business growth.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Security First</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Implement enterprise-grade security and compliance in all cloud solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Cost Optimization</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Optimize cloud costs through intelligent design and resource management.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Proven Expertise</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Leverage our experience with major cloud platforms and enterprise deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default CloudArchitecturePage;

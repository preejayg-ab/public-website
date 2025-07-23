import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Design | Aspect Blueprints",
  description: "AI-powered design processes that create optimal architecture patterns and solutions. Transform your design approach with intelligent automation and insights.",
};

const IntelligentDesignPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Intelligent Design"
        description="AI-powered design processes that create optimal architecture patterns and solutions"
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Intelligent Design Process
                  </h2>
                  <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    Our AI-driven design methodology combines human expertise with machine intelligence to create architectures that are not just functional, but optimal. We analyze thousands of patterns and scenarios to design solutions that scale, perform, and evolve.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Design Principles
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Data-driven decision making</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Pattern-based optimization</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Scalability-first approach</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Security by design</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Future-proof architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Design Intelligence Features
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Pattern Recognition</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">AI identifies optimal patterns for your specific use case</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Constraint Analysis</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Automatically considers technical and business constraints</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Performance Prediction</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Predicts performance characteristics before implementation</p>
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
                The Intelligent Design Methodology
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI-powered design process follows a systematic approach that ensures every architecture decision is data-driven and optimized for your specific requirements.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Discovery</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI analyzes your requirements, constraints, and existing systems to understand the full context.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Pattern Matching</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Identifies relevant architecture patterns from our extensive knowledge base and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Optimization</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI optimizes the design for performance, scalability, security, and maintainability.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Validation</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Simulates and validates the design against real-world scenarios and performance requirements.
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
                Design Intelligence Capabilities
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI design system provides comprehensive capabilities that transform how you approach solution architecture.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Performance Analysis</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI analyzes performance characteristics and predicts bottlenecks before they occur.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Security Assessment</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Automated security analysis identifies potential vulnerabilities and suggests mitigation strategies.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Scalability Planning</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Designs architectures that can scale seamlessly as your business grows and requirements evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default IntelligentDesignPage;

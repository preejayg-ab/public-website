import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Modeling | Aspect Blueprints",
  description: "AI-powered data modeling that creates optimal data architectures and patterns. Intelligent data design for scalable, efficient, and secure data solutions.",
};

const DataModelingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Data Modeling"
        description="AI-powered data modeling that creates optimal data architectures and patterns"
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    AI-Powered Data Modeling
                  </h2>
                  <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    Our AI-driven data modeling platform creates optimal data architectures that scale with your business. From conceptual design to physical implementation, we ensure your data models are efficient, secure, and future-ready.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Modeling Capabilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Intelligent data pattern recognition</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Automated schema optimization</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Data relationship mapping</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Performance-driven modeling</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Security and compliance integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Data Architecture Types
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Conceptual Modeling</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">High-level data structure and relationship design</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Logical Modeling</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Detailed data model with business rules and constraints</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Physical Modeling</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Database-specific implementation and optimization</p>
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
                Intelligent Data Modeling Process
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI-powered data modeling process ensures optimal data architecture design through intelligent analysis and pattern recognition.
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
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Requirements Analysis</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI analyzes business requirements and data needs to understand the complete context.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Pattern Recognition</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Identifies optimal data patterns and relationships based on industry best practices.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Optimization</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Optimizes data models for performance, scalability, and maintainability.
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
                Data Modeling Features
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI data modeling platform provides comprehensive capabilities for creating optimal data architectures.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Schema Design</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Intelligent database schema design with optimal table structures and relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Performance Tuning</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Optimize data models for maximum query performance and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Security Integration</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Built-in security features and compliance considerations in data models.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Scalability Planning</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Design data models that scale seamlessly as your data grows.
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
                Data Modeling Workflow
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our systematic approach ensures comprehensive and optimal data architecture design.
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
                Analyze business requirements, data sources, and existing data structures.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Conceptual Design</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Create high-level data models and entity relationship diagrams.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Logical Design</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Develop detailed logical data models with business rules and constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Physical Implementation</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Implement optimized physical data models for specific database platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default DataModelingPage;

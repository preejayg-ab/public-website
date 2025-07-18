import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Testing | Aspect Infotech",
  description: "AI-powered automated testing that ensures your architecture performs flawlessly. Intelligent test generation, execution, and analysis for robust solutions.",
};

const AutomatedTestingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Automated Testing"
        description="AI-powered automated testing that ensures your architecture performs flawlessly"
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    AI-Powered Automated Testing
                  </h2>
                  <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    Our AI-driven testing platform automatically generates, executes, and analyzes tests to ensure your architecture meets performance, security, and reliability standards. From unit tests to load testing, we cover every aspect of your solution.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Testing Capabilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Intelligent test case generation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Automated performance testing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Security vulnerability scanning</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Regression testing automation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Real-time test execution monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Testing Types
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Unit Testing</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Automated testing of individual components and functions</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Integration Testing</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Testing component interactions and data flow</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Load Testing</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Performance testing under various load conditions</p>
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
                Intelligent Testing Process
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI testing system continuously learns and adapts to your architecture, providing comprehensive coverage and intelligent insights.
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
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Test Generation</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI analyzes your code and requirements to automatically generate comprehensive test cases.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Execution & Monitoring</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Automated test execution with real-time monitoring and performance tracking.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Analysis & Reporting</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Intelligent analysis of test results with actionable insights and recommendations.
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
                Advanced Testing Features
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI testing platform provides advanced capabilities that go beyond traditional testing approaches.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Adaptive Testing</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI adapts test strategies based on code changes and previous test results.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Predictive Analysis</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Predicts potential issues before they occur using historical data and patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Performance Optimization</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Identifies performance bottlenecks and suggests optimization strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Security Scanning</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Automated security testing to identify vulnerabilities and compliance issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default AutomatedTestingPage; 
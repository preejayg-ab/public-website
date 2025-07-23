import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Analytics | Aspect Blueprints",
  description: "AI-powered performance analytics that continuously monitor and optimize your architecture. Real-time insights and predictive analytics for optimal system performance.",
};

const PerformanceAnalyticsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Performance Analytics"
        description="AI-powered performance analytics that continuously monitor and optimize your architecture"
      />
      
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    AI-Powered Performance Analytics
                  </h2>
                  <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    Our AI-driven analytics platform provides real-time insights into your architecture&#39;s performance, automatically identifying bottlenecks, predicting issues, and suggesting optimizations to ensure your systems run at peak efficiency.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Analytics Capabilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Real-time performance monitoring</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Predictive performance analysis</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Automated bottleneck detection</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Intelligent optimization recommendations</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-primary">✓</span>
                        <span>Capacity planning and forecasting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Analytics Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Response Time</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Monitor and optimize system response times</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Throughput</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Track system capacity and processing rates</p>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-dark">
                        <h4 className="font-semibold text-black dark:text-white">Resource Utilization</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">Monitor CPU, memory, and network usage</p>
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
                Real-Time Performance Monitoring
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI analytics platform continuously monitors your architecture, providing instant insights and proactive recommendations to maintain optimal performance.
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
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Live Monitoring</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Real-time tracking of system performance metrics with instant alerts and notifications.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Predictive Analysis</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI predicts potential performance issues before they impact your users or business operations.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Intelligent Insights</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Advanced analytics provide actionable insights and optimization recommendations.
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
                Advanced Analytics Features
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI analytics platform provides comprehensive performance insights and optimization capabilities.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Trend Analysis</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Identify performance trends and patterns over time to make informed decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Anomaly Detection</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Automatically detect unusual performance patterns and potential issues.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Capacity Planning</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Predict future resource needs and plan capacity accordingly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Auto-Optimization</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Automatically apply performance optimizations based on AI recommendations.
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
                Performance Optimization Workflow
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                Our AI-driven optimization process ensures your architecture continuously performs at its best.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Monitor</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Continuously monitor system performance across all components and services.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Analyze</h3>
              <p className="text-body-color dark:text-body-color-dark">
                AI analyzes performance data to identify bottlenecks and optimization opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Optimize</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Apply intelligent optimizations to improve performance and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Validate</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Validate optimization results and ensure performance improvements are sustained.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PerformanceAnalyticsPage;

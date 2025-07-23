import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Architecture as a Service | Aspect Blueprints",
  description: "Augment your architecture team with AI-driven design reviews, TOGAF content framework expertise, and modern C4 architecture modeling. Enterprise architecture tool expertise included.",
};

const ArchitectureAsAService = () => {
  return (
    <>
      <Breadcrumb
        pageName="Architecture as a Service"
        description="Augment your architecture team with deep expertise and AI-driven insights"
      />

      {/* Hero Section */}
      <section className="pt-16 pb-8 lg:pt-20 lg:pb-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Architecture as a Service
              </h1>
              <p className="mb-6 text-lg text-body-color dark:text-body-color-dark">
                A bespoke service catalogue specifically tailored to augment your architecture team with deep expertise in modeling, design documentation, and AI-driven architecture reviews.
              </p>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                In a world where demand for great architects has outstripped supply, our Architecture as a Service model shifts the focus to delivering exceptional outcomes through proven frameworks and cutting-edge AI tools.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                <img src="/images/services/architecture-service.jpg" alt="Architecture Excellence" className="w-full h-full object-cover" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Architecture Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Reduced Cost & Friction */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Reduced Cost & Friction
              </h3>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Aspect Blueprints brings significant experience in Architecture as a Service delivery, including well-proven engagements and mission-critical architecture support. Our team provides more breadth and depth in AaaS than most architecture providers.
              </p>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Flexible engagement models
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Scalable architecture support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Reduced overhead and complexity
                </li>
              </ul>
            </div>

            {/* Improved Speed & Accuracy */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Improved Speed & Accuracy
              </h3>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Our AI-driven architecture review capabilities and deep expertise in modern frameworks enable faster, more accurate architecture delivery while maintaining the highest quality standards.
              </p>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  AI-powered design validation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Automated quality checks
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Rapid iteration cycles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Core Capabilities
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Deep expertise in modern architecture frameworks and AI-driven design reviews
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
            {/* Architecture Modeling */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <div className="mb-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Architecture Modeling
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Expert modeling using TOGAF Content Framework and modern C4 architecture model. We create comprehensive, standards-compliant architecture artifacts that drive clarity and alignment.
              </p>
            </div>

            {/* Design Documentation */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <div className="mb-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Design Documentation
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Comprehensive documentation that captures architectural decisions, patterns, and implementation guidance. Our documentation ensures knowledge transfer and maintainability.
              </p>
            </div>

            {/* AI-Driven Reviews */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <div className="mb-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                AI-Driven Reviews
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Leverage AI-powered architecture review tools to identify potential issues, validate design patterns, and ensure compliance with best practices and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Expertise */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Framework Expertise
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Deep knowledge of industry-standard architecture frameworks and modern modeling approaches
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* TOGAF Content Framework */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                TOGAF Content Framework
              </h3>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Expert implementation of TOGAF Content Framework for enterprise architecture. We create comprehensive artifacts including:
              </p>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Architecture Vision and Requirements
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Business, Data, Application, and Technology Architectures
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Migration Planning and Implementation Governance
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Architecture Change Management
                </li>
              </ul>
            </div>

            {/* C4 Architecture Model */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                C4 Architecture Model
              </h3>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Modern software architecture modeling using the C4 model for clear, hierarchical documentation:
              </p>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Context Diagrams (Level 1)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Container Diagrams (Level 2)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Component Diagrams (Level 3)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Code Diagrams (Level 4)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Expertise */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Enterprise Architecture Tools
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Deep expertise in leading enterprise architecture and design tools
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Enterprise Architecture Tools */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Enterprise Architecture Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Sparx Systems Enterprise Architect</h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Comprehensive modeling platform for enterprise architecture, business process modeling, and software design with advanced collaboration features.
                  </p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">BiZZdesign HoriZZon</h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Enterprise architecture management platform with TOGAF support, strategic planning capabilities, and advanced analytics for decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Design Tools */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Architecture Design Tools
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Structurizr</h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    C4 model-based architecture documentation tool with code-based approach, version control integration, and automated diagram generation.
                  </p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Lucidchart</h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Collaborative diagramming platform for architecture modeling, process mapping, and team collaboration with real-time editing capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Get Started Today
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Four simple steps to augment your architecture team
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Understanding Your Architecture Needs
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Comprehensive assessment of your current architecture capabilities, gaps, and strategic objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Calibrating Your Service Catalogue
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Tailoring our architecture services to match your specific requirements and organizational context.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Establishing Service Governance
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Setting up clear roles, responsibilities, and processes for effective architecture service delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Putting in Place the Commercial Framework
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Establishing flexible engagement models and pricing structures that align with your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-body-color dark:text-body-color-dark mb-6">
              Once these are in place, you will have push-button access to quality assured architecture and technology outcomes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Let&#39;s Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchitectureAsAService;

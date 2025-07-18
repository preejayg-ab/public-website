import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Aspect Infotech",
  description: "Meet the passionate individuals at Aspect Infotech who form cohesive teams to activate large-scale transformation programs and bring client ambitions to life.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Trusted relationships are at the heart of everything that we do and our people are at the core of that."
      />

      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="mb-16 flex flex-wrap items-center justify-between sm:mb-20">
              <div className="mb-10 w-full max-w-4xl">
                <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                  Our Team
                </h1>
                <p className="text-xl font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-2xl">
                  We are a network of digital solutions and identity management experts, who are passionate about technology led transformations, forming cohesive teams to activate large-scale transformation programmes; simplify complex technology problems and bring client ambitions to life.
                </p>
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Our Sample Consultant Profiles</h3>

            <div className="grid gap-8 md:grid-cols-3 mb-10">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark max-w-2xl w-full">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">Digital Solution Architect</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  A seasoned architect with deep expertise in digital solutioning and customer identity management. He brings vast experience in solutioning and implementing modern digital experience through web and mobile.  He has deep knowledge of frond end technologies like React/Nextjs, Strapi and Adobe Experience Manager, as well as buidling and scaling containerised environment on AWS. His passion for technology-led transformation and practical, outcome-driven approach have helped organizations modernize securely and at scale.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark max-w-2xl w-full">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">CIAM Consultant</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Specialist in Customer Identity and Access Management (CIAM) with hands-on experience in designing and implementing secure, scalable identity solutions. Expert in platforms such as Auth0, Okta, and Azure AD B2C, and experienced in integrating identity with customer-facing applications. Successfully delivered a customer identity management solution for a renewal technology startup and led identity governance platform implementation for a progressive university.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark max-w-2xl w-full">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">Enterprise Architecture Consultant</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Experienced in enterprise architecture and in-depth architecture modeling. Skilled in TOGAF, ArchiMate, and C4 modeling, with a track record of developing clear, actionable architecture artefacts and roadmaps. Adept at facilitating architecture reviews, workshops, and aligning business and IT strategy through model-driven approaches.
                </p>
              </div>
            </div>

            {/*
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Principal Architect</h3>
                <p className="text-lg font-semibold text-primary">P Gangadhikar</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Leading our solution architecture practice with deep expertise in digital transformation and enterprise architecture.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Principal Consultant</h3>
                <p className="text-lg font-semibold text-primary">Digital Transformation</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Specializing in digital transformation strategies and helping organizations navigate complex technology landscapes.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Identity & Access Management Architect</h3>
                <p className="text-lg font-semibold text-primary">Max Krishnan</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Expert in cybersecurity and IAM solutions, ensuring robust protection for our clients' digital assets.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Cloud Architect</h3>
                <p className="text-lg font-semibold text-primary">Cloud Solutions</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Designing scalable cloud architectures that enable organizations to achieve their digital ambitions.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Data Architect</h3>
                <p className="text-lg font-semibold text-primary">Data Solutions</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Unlocking the full potential of data assets through strategic architecture and analytics solutions.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Architecture Modelling Consultant</h3>
                <p className="text-lg font-semibold text-primary">Aaryan M K</p>
                <p className="mt-3 text-body-color dark:text-body-color-dark">
                  Driving operational excellence in architecture modelling and ensuring seamless delivery of transformation programs.
                </p>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-center justify-between sm:mb-20">
            <div className="mb-10 w-full max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                How we work as a team
              </h2>
              <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl">
                <strong>Our people see themselves as an excellent, intelligent, delivery focused peer group.</strong> Aspect Infotech is considered a place of potential to make a real difference to clients. We are shapers and influencers and we are all prepared to stand out from the crowd in demonstrating true value in the architecture domain. We support and challenge each other on projects, always with the clients key business outcomes in mind.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Collaborative Excellence</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We work as a cohesive team, supporting and challenging each other to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Outcome Focused</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Every project is driven by clear business outcomes, ensuring our solutions deliver measurable value.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Innovation Driven</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We stay at the forefront of technology trends to bring innovative solutions that give our clients competitive advantage.
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
                Our Values
              </h2>
              <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl">
                <strong>Trusted relationships, excellence and contribution have been the foundations that have underpinned our team since day one.</strong>
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-dark">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Trusted Relationships</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We focus on what is best for you over and above any other consideration. Our relationships are built on trust, transparency, and mutual respect.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-dark">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Excellence</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We will do our best and be open to learn how to become better. Excellence is not a destination but a continuous journey of improvement.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-dark">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Contribution</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We drive ourselves to help others, whether through our client work, community partnerships, or supporting the next generation of architects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default AboutPage;

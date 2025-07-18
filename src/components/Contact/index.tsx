"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();
  const tallyTheme = theme === "dark" ? "dark" : "light";
  const tallySrc = `https://tally.so/r/mZk055?hideTitle=1&transparentBackground=1&dynamicHeight=1&dynamicWidth=1&theme=${tallyTheme}`;

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get Expert Architecture Support for Your Digital Transformation
              </h2>
              <p className="mb-4 text-base font-medium text-body-color">
                We help organisations to simplify and accelerate their digital transformation journeys by building clear, maintainable, and scalable architecture artefacts — from solution overviews to detailed design specifications and EA roadmaps
              </p>
              {/* Tally Form Iframe Embed */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden" style={{ minHeight: "1100px" }}>
                <iframe
                  data-tally-src={tallySrc}
                  src={tallySrc}
                  width="100%"
                  height="1100"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                  className="w-full"
                  style={{ border: 'none', background: 'transparent', display: 'block' }}
                ></iframe>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Our Office</h3>
              <p className="text-base text-body-color dark:text-body-color-dark mb-1">81-83 Campbell Street<br/>Surry Hills NSW 2010</p>
              <p className="text-base text-body-color dark:text-body-color-dark">ABN: 99659837653</p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

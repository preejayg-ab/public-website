import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="We believe a vision creates the path to quality"
                paragraph="The most ambitious projects in the world start with a vision. At Aspect Blueprints, we partner with our clients to deliver projects from seed to scale, with humility, an honest approach and deep commitment to your extraordinary outcomes."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
<div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Bold Vision Creation" />
                    <List text="Outcome oriented architecture" />
                    <List text="Deep Digital Expertise" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Intutively Human Centric" />
                    <List text="Data driven actionable insights" />
                    <List text="Confidence through simplicity" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="flex h-[400px] md:h-[500px] gap-0">
                {/* First column: single tall image */}
                <div className="relative h-full w-1/2 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/vision-tech-1.jpg"
                    alt="Digital vision photo 1"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Second column: two stacked images, each half height */}
                <div className="flex flex-col h-full w-1/2">
                  <div className="relative flex-1 rounded-t-lg overflow-hidden border-b border-white/10 dark:border-gray-900/10">
                    <Image
                      src="/images/about/vision-tech-2.jpg"
                      alt="Digital vision photo 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative flex-1 rounded-b-lg overflow-hidden">
                    <Image
                      src="/images/about/vision-tech-3.jpg"
                      alt="Digital vision photo 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

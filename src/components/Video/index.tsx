import Image from "next/image";

export default function Video() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* SectionTitle removed as requested */}
      </div>
      <div className="relative overflow-hidden">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
              <a href="/contact" aria-label="Contact">
                <div className="relative aspect-77/40 items-center justify-center cursor-pointer group">
                  <Image
                    src="/images/video/image.png"
                    alt="Architecture Excellence"
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                      <p className="text-lg opacity-90">Let's discuss your architecture needs</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
          {/* Background shape */}
        </div>
      </div>
    </section>
  );
}

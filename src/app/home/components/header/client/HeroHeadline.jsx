import React from 'react'
import Floating from "@/lib/component/animation/Floating";
import Pills from "@/lib/component/ui/Pills";

function HeroHeadline() {
  return (
      <div className="py-6 sm:py-8 max-w-5xl w-full">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <p className="font-mono uppercase tracking-wider text-xs">
                  a full-stack creative studio
              </p>
          </div>

          <div className="relative">
              <Floating className="animate-floating-slow hidden md:block absolute top-14 -left-5 z-10">
                  <Pills text="Big plans? Let's go 🚀" variant="black" />
              </Floating>

              <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] text-primary font-semibold leading-none tracking-tight">
                  Make work
              </h1>

              <div className="flex items-center gap-3">
                  <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] text-primary font-semibold leading-none tracking-tight">
                      that
                  </h1>
                  <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] font-normal italic leading-none tracking-tight text-zinc-400">
                      matters,
                  </h1>
              </div>

              <div className="relative">
                  <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] text-primary font-semibold leading-none tracking-tight">
                      ship work
                  </h1>
                  <Floating className="animate-floating hidden lg:block absolute right-48 top-1/2 -translate-y-1/2 z-10">
                      <Pills
                          text="From idea → live in 30 days ⚡"
                          variant="orange"
                      />
                  </Floating>
              </div>

              <div className="flex items-center gap-3">
                  <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] font-semibold text-primary leading-none tracking-tight">
                      that
                  </h1>
                  <h1 className="text-5xl sm:text-7xl xl:text-[clamp(4rem,10vw,8rem)] font-normal italic leading-none tracking-tight text-zinc-400">
                      moves.
                  </h1>
              </div>
          </div>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-primary max-w-xl">
              Photo, video, web, and IT — all under one roof. We treat every
              brand like our own.
          </p>

          <div className="mt-6 sm:mt-8">
              <Pills
                  text="Let's collaborate 🚀"
                  variant="black"
                  className="text-base px-6 py-3"
              />
          </div>
      </div>
  );
}

export default HeroHeadline
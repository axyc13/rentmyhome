import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Road() {
  return (
    <section className="relative min-h-screen flex items-center w-full overflow-hidden bg-red py-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-black via-[#1b1b1b] to-red/20" />
        <div className="absolute inset-0 road-texture" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none road-line-wrap">
          <svg
            className="road-line-svg"
            viewBox="0 0 20 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="10"
              y1="-300"
              x2="10"
              y2="1300"
              className="road-dash road-dash-a"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="mx-auto text-center">
          <div className="mb-6">
            <span className="text-base font-bold tracking-wide text-white lg:text-2xl">
              Building a Portfolio?
            </span>
          </div>
          <h2 className="mb-4 text-5xl font-serif font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Hit The Road To <span className="text-red">0%</span> Fees.*
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80">
            We love supporting ambitious Kiwi investors who are doing the hard
            yards to build a legacy. Sign up 4 properties with RMH, and we will
            manage your 5th with a 0% management fee.
          </p>

          <div className="mb-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="group flex flex-row gap-1 rounded-lg border lg:border-2 px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg text-white transition-colors hover:bg-red"
              href="/landlords"
            >
              <p>Learn More</p>
              <ArrowRight className="mt-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              className="group flex flex-row gap-1 rounded-lg border lg:border-2 px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg text-white transition-colors hover:bg-red"
              href="/"
            >
              <p>Contact Us</p>
              <ArrowRight className="mt-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

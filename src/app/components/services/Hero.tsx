"use client";

import Link from "next/link";
import { useAppraisal } from "@/src/app/components/common/AppraisalProvider";

export default function ServicesHero() {
  const { open } = useAppraisal();

  return (
    <section className="bg-white pt-30 pb-20">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="max-w-180">
          <span className="inline-block bg-red text-white text-[12px] font-semibold tracking-[2px] uppercase px-[18px] py-[7px] rounded-full mb-5">
            Auckland &amp; Waikato
          </span>

          <h1 className="font-serif font-bold text-[50px] sm:text-[56px] lg:text-[62px] leading-[1.1] mb-5">
            Residential Property <span className="text-red">Management</span>{" "}
            Services
          </h1>

          <p className="text-[#444] text-lg leading-loose max-w-155 mb-9">
            From tenant sourcing and rent collection to compliance and
            maintenance — we manage every aspect of your investment property so
            you don&apos;t have to.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => open()}
              className="bg-[#ee2125] text-white px-8 py-4.5 rounded-xl font-semibold text-[17px] hover:bg-black transition-colors"
            >
              Get Free Appraisal
            </button>
            <Link
              href="#services"
              className="border-2 border-[#ee2125] text-[#ee2125] px-8 py-4.25 rounded-xl font-semibold text-[17px] hover:bg-red hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

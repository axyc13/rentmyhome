"use client";

import Image from "next/image";
import building from "@/public/building.jpg";
import { useAppraisal } from "../common/AppraisalProvider";

export function CTA() {
  const { open } = useAppraisal();
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src={building}
          alt="Modern apartment building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(238_33_37/0.88)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white lg:text-5xl">
            No Hassle. No Surprise. Just results
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Let's find out what your property could be earning in today's
            Auckland or Waikato rental market.
          </p>

          <button
            type="button"
            onClick={() => open()}
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-base font-bold text-red transition-transform hover:-translate-y-0.5"
          >
            Get Your Free Investor Guide
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useAppraisal } from "@/src/app/components/common/AppraisalProvider";

export default function ServicesCTA() {
  const { open } = useAppraisal();

  return (
    <section
      className="text-white text-center py-30"
      style={{
        background:
          "linear-gradient(rgba(239,43,45,0.93), rgba(239,43,45,0.93)), url('/building.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-[90%] max-w-325">
        <h2 className="font-serif font-bold text-[54px] leading-[1.1] mb-4">
          Looking For Professional
          <br />
          Property Management?
        </h2>
        <p className="max-w-[650px] mx-auto leading-loose text-[17px] opacity-90 mb-10">
          Partner with Rent My Home for residential property management focused
          on communication, efficiency, and long-term investment performance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={() => open()}
            className="bg-white text-red font-bold px-8 py-[18px] rounded-[12px] text-base hover:bg-black hover:text-white transition-colors"
          >
            Request Free Appraisal
          </button>
          <Link
            href="/contact"
            className="border-2 border-white/70 text-white font-bold px-8 py-[18px] rounded-[12px] text-base hover:bg-white hover:text-red transition-colors"
          >
            Speak With Our Team
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/70 text-white font-bold px-8 py-[18px] rounded-[12px] text-base hover:bg-white hover:text-red transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

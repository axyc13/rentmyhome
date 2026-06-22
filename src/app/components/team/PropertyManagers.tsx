import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { referrals } from "@/src/app/lib/tenancy-routing";

export default function PropertyManagers() {
  return (
    <section className="bg-white py-30">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="mb-14 text-center">
          <h4 className="mb-3.5 text-[13px] font-semibold tracking-[2px] text-red uppercase">
            Our Team
          </h4>
          <h2 className="font-serif text-[38px] font-bold leading-[1.2] sm:text-[48px]">
            Apply Through Your{" "}
            <span className="text-red">Property Manager</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#666] leading-loose">
            Select your property manager below to begin your tenancy application
            — it goes directly to the right person on our team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {referrals.map((manager) => (
            <div
              key={manager.slug}
              className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-black/5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-black">
                    {manager.name}
                  </h3>
                  <p className="text-sm text-[#888]">Property Manager</p>
                </div>
              </div>

              <p className="text-[#666] leading-relaxed text-[15px]">
                Reliable property management across Auckland and Waikato with
                clear communication and consistent follow-through — from listing
                to ongoing management.
              </p>

              <Link
                href={`/tenants?referralManager=${manager.slug}#tenancy`}
                className="group mt-auto flex w-fit items-center gap-2 rounded-xl bg-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                Apply for tenancy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

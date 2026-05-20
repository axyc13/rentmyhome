import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const valuePoints = [
  "Flat 5.5% management fee",
  "Zero hidden fees",
  "7-day viewings available",
  "Property listed within 24 hours of sign-up",
];

export default function Banner() {
  return (
    <div>
      <section className="bg-[#f3f6f7] py-20">
        <div className="hidden lg:flex mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <article className="border border-gray-50 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] bg-white p-8 lg:p-10">
              <h2 className="mt-4 text-3xl font-serif font-bold text-black lg:text-4xl">
                Tailored service without the hidden "gotchas."
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700">
                We do not believe in overcharging, so we set our management fee
                at a flat 5.5%. To be honest, it is simply what we found to be a
                genuine, fair price for the work we do.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
                We do not operate on business-hours-only service either. We
                offer 7-day viewings to secure strong tenants quickly, and we
                will usually have your property live and listed within 24 hours
                of signing up.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
                Best of all, there are zero hidden fees. What you see is what
                you get.
              </p>
            </article>

            <article className="bg-red p-8 text-white lg:p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <p className="text-5xl font-serif font-bold text-white">5.5%</p>
              <p className="mt-6 text-base text-white/75">
                Comprehensive care that covers the hard yards. (Please beware of
                industry upfront fee scams!)
              </p>
              <div className="mt-8 space-y-4">
                {valuePoints.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-white" />
                    <span className="text-white/90 text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/landlords"
                className="mt-10 inline-flex items-center gap-2 font-semibold text-white hover:underline"
              >
                Explore landlord services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>

        <div className="flex lg:hidden mx-auto w-screen">
          <article className="bg-red p-8 text-white lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <p className="text-2xl font-serif font-bold text-white">
              Tailored service without the hidden "gotchas."
            </p>
            <p className="mt-6 text-sm bg-white rounded-[20px] text-red p-4">
              We keep it simple: <b>5.5%</b> + GST management fees. No fluff,
              just comprehensive care that covers the hard yards.
            </p>
            <Link
              href="/landlords"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-white hover:underline"
            >
              Explore landlord services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

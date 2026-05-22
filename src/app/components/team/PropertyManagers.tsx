import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { referrals } from "@/src/app/lib/tenancy-routing";

export default function PropertyManagers() {
  return (
    <section className="bg-white w-screen px-8 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {referrals.map((manager) => (
          <div
            key={manager.slug}
            className="border border-gray-200 p-8 bg-[#f9fdfe] flex flex-col gap-8"
          >
            <h1 className="text-3xl font-serif font-bold text-black">
              {manager.name}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Reliable property management across Auckland and Waikato and wider
              region with clear communication and consistent follow-through.
              From listing to ongoing management, handled properly.
            </p>
            <Link
              href={`/tenants?referralManager=${manager.slug}#tenancy`}
              className="flex flex-row w-fit group items-center gap-2 border border-red text-red px-4 py-2 rounded-lg font-semibold hover:bg-red hover:text-white transition-colors"
            >
              <span className="transition-colors group-hover:text-white">
                Apply for tenancy
              </span>
              <ExternalLink className="w-4 h-4 text-current transition-colors group-hover:text-white" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

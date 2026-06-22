"use client";

import { type FormEvent, useState } from "react";
import { useAppraisal } from "@/src/app/components/common/AppraisalProvider";

const includes = [
  "Current market rent",
  "Tenant demand insights",
  "Rental presentation tips",
  "Compliance requirements",
  "Maximising returns",
  "No obligation required",
];

export default function AppraisalBand() {
  const { open } = useAppraisal();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("auckland");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.sessionStorage.setItem(
      "home-appraisal-draft",
      JSON.stringify({ address, suburb: location }),
    );
    open(true);
  };

  return (
    <section className="bg-[#f8f8f8] py-30" id="appraisal">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">

          <div>
            <h4 className="text-[13px] text-red tracking-[2px] uppercase mb-3.5 font-semibold">
              Free &amp; No Obligation
            </h4>
            <h2 className="font-serif font-bold text-[40px] leading-[1.2] mb-5">
              Request A Free Rental Appraisal
            </h2>
            <p className="text-[#555] leading-loose mb-7">
              Want to know what your property could rent for in today&apos;s
              market? We provide free rental appraisals with expert advice
              tailored to your property.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#333] font-medium">
                  <span className="text-red font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] sm:p-10">
            <h2 className="font-serif font-bold text-4xl tracking-tight text-black">
              Get Your Free <span className="text-red">Rental Appraisal</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-black/65">
              Find out how much your property can earn with{" "}
              <span className="font-semibold text-red">Rent My Home.</span>
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Property Address"
                className="w-full rounded-xl border border-black/10 px-4 py-4 text-base text-black outline-none placeholder:text-black/45"
                required
              />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-black/10 px-4 py-4 text-base text-black outline-none"
              >
                <option value="auckland">Auckland</option>
                <option value="waikato">Waikato</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#ee2125] px-6 py-4 text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:bg-black"
              >
                Rent My Home
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

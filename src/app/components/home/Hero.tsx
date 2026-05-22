"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import dedicated from "@/public/dedicatedSupport.png";
import mile from "@/public/extraMile.png";
import seven from "@/public/sevenDay.png";
import house from "@/public/house.jpg";

const heroBadges = [
  {
    src: seven,
    alt: "7 day viewing",
  },
  {
    src: mile,
    alt: "extra mile",
  },
  {
    src: dedicated,
    alt: "dedicated support",
  },
] as const;

type AppraisalCardProps = {
  address: string;
  location: string;
  onAddressChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
};

function AppraisalCard({
  address,
  location,
  onAddressChange,
  onLocationChange,
  onSubmit,
  className = "",
}: AppraisalCardProps) {
  return (
    <div
      className={`rounded-[26px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] sm:p-10 ${className}`.trim()}
    >
      <h2 className="text-4xl font-serif font-bold tracking-tight text-black">
        Get Your Free <span className="text-red">Rental Appraisal</span>
      </h2>
      <p className="mt-4 text-base leading-7 text-black/65">
        Find out how much your property can earn with{" "}
        <span className="font-semibold text-red">Rent My Home.</span>
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <input
          type="text"
          value={address}
          onChange={(event) => onAddressChange(event.target.value)}
          placeholder="Property Address"
          className="w-full rounded-xl border border-black/10 px-4 py-4 text-base text-black outline-none placeholder:text-black/45"
          required
        />

        <select
          value={location}
          onChange={(event) => onLocationChange(event.target.value)}
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
  );
}

type HeroProps = {
  onOpenAppraisal: () => void;
};

export default function Hero({ onOpenAppraisal }: HeroProps) {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("auckland");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    window.sessionStorage.setItem(
      "home-appraisal-draft",
      JSON.stringify({
        address,
        suburb: location.toLowerCase(),
      }),
    );

    onOpenAppraisal();
  };

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden px-4 pt-4 pb-10 lg:flex lg:min-h-screen lg:items-center">
        <div className="absolute inset-0">
          <Image
            src={house}
            alt="Rent My Home property"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_34%,rgba(255,255,255,0.82)_48%,rgba(255,255,255,0.12)_74%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-18 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-black sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
                YOU <span className="text-red">OWN.</span>
                <br />
                WE <span className="text-red">MANAGE...</span>
              </h1>
              <p className="mt-6 hidden max-w-2xl text-lg text-black/80 lg:flex">
                Residential property management specialists across Auckland and
                Waikato. From 7 day viewing options to tailored service without
                the hidden gotchas.
              </p>
              <p className="mt-6 flex max-w-2xl text-lg font-bold text-black/80 lg:hidden">
                Trusted by 300+ Kiwi Landlords
              </p>

              <div className="mt-6 flex items-start gap-5 flex-row lg:mt-10 lg:gap-8">
                {heroBadges.map((badge) => (
                  <div key={badge.alt} className="w-22 sm:w-30 lg:w-33">
                    <div className="relative aspect-square w-full overflow-hidden rounded-full">
                      <Image
                        src={badge.src}
                        alt={badge.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AppraisalCard
              address={address}
              location={location}
              onAddressChange={setAddress}
              onLocationChange={setLocation}
              onSubmit={handleSubmit}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden py-16">
        <div className="mx-auto max-w-7xl px-8">
          <AppraisalCard
            address={address}
            location={location}
            onAddressChange={setAddress}
            onLocationChange={setLocation}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

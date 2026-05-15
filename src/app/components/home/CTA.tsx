"use client";

import Link from "next/link";
import Image from "next/image";
import building from "@/public/building.jpg";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src={building}
          alt="Modern apartment building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[color:rgb(238_33_37_/_0.88)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-serif font-bold tracking-tight text-white md:text-[3.5rem]">
            Let&apos;s Maximise Your Investment
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Get a free no-obligation rental appraisal and discover how Rent My
            Home can help you grow your property returns.
          </p>

          <Link
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-red transition-transform hover:-translate-y-0.5"
            href="/landlords"
          >
            Rent My Home
          </Link>
        </div>
      </div>
    </section>
  );
}

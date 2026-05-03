"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  ExternalLink,
  FileCheck2,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function ZeroPercent() {
  return (
    <div className="bg-red">
      <section className="relative py-16 flex items-center justify-center min-h-screen bg-linear-to-br from-black via-[#1b1b1b] to-red/20 text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-end">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide border border-white/35 rounded-full px-4 py-2 mb-6 w-fit">
            <MapPin className="w-4 h-4" />
            AUCKLAND & WAIKATO
          </p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Residential Property Management
          </h1>
          <p className="text-base lg:text-lg text-white/85 leading-relaxed">
            Prompt, reliable and transparent property management in Auckland &
            Hamilton. Clear communication and consistent service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#landlords"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/85 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red transition-colors"
            >
              Get Free Rental Appraisal
              <ArrowRight className="w-4 h-4" />
            </a>
              <a
                href="tel:+64224530098"
                className="inline-flex items-center justify-center gap-2 bg-red border-2 border-red px-6 py-3 rounded-lg font-semibold hover:bg-red transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {[
              "Google 4.9/5.0",
              "Facebook 5.0/5.0",
              "6+ years experience",
              "100% Healthy Homes compliance",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm text-white/95"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f9fdfe] min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-black mb-6">
              Why Us?
            </h2>
            <p className="text-base lg:text-lg text-black leading-relaxed">
              Managing a rental property should be straightforward. Poor
              communication and inconsistent service often make it difficult. At
              RMH, we keep things simple. We communicate clearly, move quickly,
              and ensure nothing gets missed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <article className="bg-white border border-gray-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-red mb-2">
                Fast
              </p>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                Fast Listing
              </h3>
              <p className="text-gray-700">
                Your property is live the same day you sign up.
              </p>
            </article>

            <article className="bg-white border border-gray-200   p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-red mb-2">
                Tenanting
              </p>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                7 Day Viewing
              </h3>
              <p className="text-gray-700">
                7 day viewing option available for tenants.
              </p>
            </article>

            <article className="bg-white border border-gray-200   p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-red mb-2">
                Track Record
              </p>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                Landlords Trust RMH
              </h3>
              <p className="text-gray-700">
                Trusted across Auckland and Hamilton by hundreds of property
                owners.
              </p>
              <Link
                href="/auckland"
                className="inline-flex items-center gap-2 mt-6 text-red font-semibold hover:underline"
              >
                Our story <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <article className="bg-white border border-gray-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-red mb-2">
                Compliance
              </p>
              <h1 className="text-2xl font-serif font-bold text-black mb-4">
                100% Healthy Homes Compliant
              </h1>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-red" />
                  Heating standards check
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-red" />
                  Insulation standards check
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-red" />
                  Ventilation & moisture checks
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-red" />
                  Draught stopping checks
                </li>
              </ul>
              <Link
                href="/landlords"
                className="inline-flex items-center gap-2 mt-6 text-red font-semibold hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <article className="bg-white border border-gray-200   p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-red mb-2">
                Reports
              </p>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                Timely Inspections
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <FileCheck2 className="w-4 h-4 mt-0.5 text-red" />
                  Move-In inspection
                </li>
                <li className="flex gap-2">
                  <FileCheck2 className="w-4 h-4 mt-0.5 text-red" />
                  Routine/periodic inspections
                </li>
                <li className="flex gap-2">
                  <FileCheck2 className="w-4 h-4 mt-0.5 text-red" />
                  Move-Out inspection
                </li>
                <li className="flex gap-2">
                  <FileCheck2 className="w-4 h-4 mt-0.5 text-red" />
                  Vacant/opening inspection
                </li>
              </ul>
            </article>

            <article className="bg-red text-white   p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/90 mb-2">
                Experience
              </p>
              <h3 className="text-2xl font-serif font-bold mb-4">
                6+ Years Managing NZ Properties
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 text-white" />
                  Auckland&apos;s competitive markets
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 text-white" />
                  Hamilton & Waikato coverage
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 text-white" />
                  300+ landlords managed to date
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 text-white" />
                  Trusted by investors & owners
                </li>
              </ul>
              <a
                href="#landlords"
                className="inline-flex items-center gap-2 mt-6 text-white font-semibold hover:underline"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-black mb-4">
            Managing properties across two cities.
          </h1>
          <p className="text-gray-700 max-w-3xl mb-12">
            Reliable property management with clear communication and consistent
            follow-through, from listing to ongoing management.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <article className="  border border-gray-200 p-8 bg-[#f9fdfe]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-black">
                    Auckland
                  </h4>
                  <p className="text-sm text-gray-600">
                    New Zealand&apos;s largest city
                  </p>
                </div>
                <Building2 className="w-9 h-9 text-red" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reliable property management across Auckland District and wider
                region with clear communication and consistent follow-through.
                From listing to ongoing management, handled properly.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://www.google.com/maps/place/Rent+My+Home+(A+Cube+Rentals+Ltd)+-+Residential+Property+Management/@-36.8792352,174.7758868,17.76z/data=!4m8!3m7!1s0x6d0d4da3579c05cf:0xfac8890e0cc4c1a6!8m2!3d-36.8791947!4d174.7760694!9m1!1b1!16s%2Fg%2F11khsq2cb6?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-red text-red px-4 py-2 rounded-lg font-semibold hover:bg-red hover:text-white transition-colors"
                >
                  Get Directions <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/auckland"
                  className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg font-semibold text-black hover:bg-gray-100 transition-colors"
                >
                  See Reviews
                </Link>
              </div>
            </article>

            <article className="  border border-gray-200 p-8 bg-[#f9fdfe]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-black">
                    Hamilton
                  </h4>
                  <p className="text-sm text-gray-600">Waikato Region</p>
                </div>
                <Building2 className="w-9 h-9 text-red" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reliable property management across Hamilton, Cambridge, and
                wider region with clear communication and consistent
                follow-through. From listing to ongoing management, handled
                properly.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://www.google.com/maps/place/Rentmyhome/@-37.7844029,175.2804463,15z/data=!4m15!1m8!3m7!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!2sRentmyhome!8m2!3d-37.7844256!4d175.2806003!10e5!16s%2Fg%2F11wnls_710!3m5!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!8m2!3d-37.7844256!4d175.2806003!16s%2Fg%2F11wnls_710?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-red text-red px-4 py-2 rounded-lg font-semibold hover:bg-red hover:text-white transition-colors"
                >
                  Get Directions <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/waikato"
                  className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg font-semibold text-black hover:bg-gray-100 transition-colors"
                >
                  See Reviews
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

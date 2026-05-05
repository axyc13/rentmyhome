import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Eye,
  HandCoins,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Prompt",
    description:
      "We move at the speed of the market. Your property is listed within 24 hours of sign-up to minimize vacancy time.",
    icon: Clock3,
  },
  {
    title: "Transparent",
    description:
      "We operate with total integrity. No hidden markups, no surprise admin fees, and clear communication at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Accessible",
    description:
      "We offer 7-day viewing options for tenants so we can meet strong applicants when they are actually ready to move.",
    icon: Eye,
  },
  {
    title: "Proven",
    description:
      "Over 300+ local and overseas property owners trust us to protect their investments across Auckland and Waikato.",
    icon: Users,
  },
  {
    title: "Reliable",
    description:
      "With 6+ years of proven systems, we handle compliance and cash flow carefully so you do not have to.",
    icon: BadgeCheck,
  },
];

const highlights = [
  "Residential property management in Auckland and Waikato",
  "Built on promptness, transparency, and reliability",
  "A home is more than an asset, and a happy tenant protects your investment",
  "Consistent service trusted by 300+ property owners",
];

const valuePoints = [
  "Flat 5.5% management fee",
  "Zero hidden fees",
  "7-day viewings available",
  "Property listed within 24 hours of sign-up",
];

export default function Page() {
  return (
    <>
      <div className="bg-red">
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-red">
            <div className="absolute inset-0 bg-linear-to-br from-black via-[#1b1b1b] to-red/20" />
            <div className="absolute inset-0 road-texture" />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div>
              <h1 className="max-w-4xl text-white text-5xl font-serif font-bold tracking-tight sm:text-6xl lg:text-7xl">
                About Us
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-[#f9fdfe] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
            <div>
              <h2 className="mt-4 text-4xl font-serif font-bold text-black lg:text-5xl">
                We manage homes with the same care we would want for our own.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-gray-700 lg:text-lg">
              <p>
                When you partner with us, you benefit from 6+ years of
                specialised expertise in the Auckland and Waikato markets. We
                understand that a home is more than just an asset, and we
                believe a happy tenant is the best insurance for your
                investment.
              </p>
              <p>
                That philosophy, paired with consistent service and practical
                systems, is why RMH is trusted by 300+ local and overseas
                property owners.
              </p>
              <div className="grid gap-3 pt-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-red" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-12 mt-4 text-4xl font-serif font-bold text-black lg:text-5xl">
              A straightforward service built around speed, honesty, and
              follow-through.
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="border border-gray-200 bg-[#f9fdfe] p-8"
                >
                  <pillar.icon className="h-8 w-8 text-red" />
                  <h3 className="mt-6 text-2xl font-serif font-bold text-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-700">
                    {pillar.description}
                  </p>
                </article>
              ))}
              <article className="bg-red p-8 text-white md:col-span-2 xl:col-span-1">
                <HandCoins className="h-8 w-8" />
                <h3 className="mt-3 text-3xl font-serif font-bold">
                  Lean management, focused service.
                </h3>
                <p className="mt-4 leading-7 text-white/85">
                  We have kept things lean so we can focus on what actually
                  matters: looking after your property properly, communicating
                  clearly, and acting quickly when it counts.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f6f7] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr,0.95fr]">
              <article className="border border-gray-200 bg-white p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
                  Less Is More
                </p>
                <h2 className="mt-4 text-4xl font-serif font-bold text-black lg:text-5xl">
                  A fair price, no extra noise.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                  We do not believe in overcharging, so we set our management
                  fee at a flat 5.5%. To be honest, it is simply what we found
                  to be a genuine, fair price for the work we do.
                </p>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
                  We do not operate on business-hours-only service either. We
                  offer 7-day viewings to secure strong tenants quickly, and we
                  will usually have your property live and listed within 24
                  hours of signing up.
                </p>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
                  Best of all, there are zero hidden fees. What you see is what
                  you get.
                </p>
              </article>

              <article className="bg-black p-8 text-white lg:p-10">
                <p className="text-6xl font-serif font-bold text-red">5.5%</p>
                <p className="mt-3 text-lg text-white/75">
                  Flat management fee with a transparent service model.
                </p>
                <div className="mt-8 space-y-4">
                  {valuePoints.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 shrink-0 text-red" />
                      <span className="text-white/90">{item}</span>
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
        </section>
      </div>
    </>
  );
}

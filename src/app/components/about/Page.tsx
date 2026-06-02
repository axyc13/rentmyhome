const whoWeAreCards = [
  {
    title: "Professional Management",
    description:
      "We manage residential properties with a modern, transparent, and stress-free approach tailored for landlords.",
  },
  {
    title: "Local Expertise",
    description:
      "With strong knowledge of the Auckland and Waikato rental markets, we help maximise property returns.",
  },
  {
    title: "Personalised Service",
    description:
      "Every property is treated with care, attention, and customised management strategies.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We believe trust, communication, and reliability are the foundation of successful partnerships.",
  },
];

const objectives = [
  {
    title: "We Are Prompt",
    description:
      "We move at the speed of modern real estate. Fast listings, immediate callbacks, and instant WhatsApp communication.",
  },
  {
    title: "We Are Reliable",
    description:
      "Through weekend viewings and 365-day emergency coverage, we are the partner you can depend on.",
  },
  {
    title: "We Are Transparent",
    description:
      "No upfront fee traps, no hidden admin costs, and no sugar-coated updates. Just straight talk.",
  },
];

const timeline = [
  { year: "2020", event: "Company Founded" },
  { year: "2022", event: "Expanded Across Auckland & Waikato" },
  { year: "2024", event: "Launched Road To 0% Initiative" },
  { year: "Today", event: "Trusted By Hundreds Of Landlords" },
];

const whyChooseCards = [
  {
    title: "7 Day Viewings",
    description:
      "Flexible viewing options to reduce vacancy periods and attract quality tenants faster.",
  },
  {
    title: "Extra-Mile Service",
    description:
      "We go beyond basic management by providing personalised support and proactive solutions.",
  },
  {
    title: "Dedicated WhatsApp Support",
    description:
      "Quick communication and instant support whenever landlords need assistance.",
  },
  {
    title: "Healthy Homes Compliance",
    description:
      "Ensuring properties meet all compliance standards and remain tenant-ready.",
  },
];

const whatWeOfferCards = [
  {
    title: "Ultra-Fast Marketing & Tenant Sourcing",
    points: [
      "24-Hour Listing Launch",
      "7-Day Tenant Viewings",
      "Rigorous Tenant Vetting",
    ],
  },
  {
    title: "Absolute Legal & Financial Compliance",
    points: [
      "Healthy Homes Standards",
      "Strict Rent Monitoring",
      "Routine Property Inspections",
    ],
  },
  {
    title: "Stress-Free Maintenance & Support",
    points: [
      "24/7 Emergency Repairs",
      "Your Tradespeople or Ours",
      "Direct WhatsApp Channel",
    ],
  },
  {
    title: "Detailed Reporting",
    points: [
      "Monthly Owner Statements",
      "Real-Time Property Updates",
      "Transparent Financial Reporting",
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-5">
            About Rent My Home
          </h4>
          <h1 className="font-serif font-bold text-black text-5xl lg:text-7xl leading-[1.1] mb-6">
            You <span className="text-red">Own.</span>
            <br />
            We <span className="text-red">Manage.</span>
          </h1>
          <p className="text-black/60 text-base lg:text-lg leading-[1.9] max-w-4xl mb-10">
            At Rent My Home, we don&apos;t just want to manage your
            properties&mdash;we want to help you scale them. We know that
            expanding a rental portfolio across Auckland and Waikato takes
            massive dedication, and we believe your property management company
            should match that energy. That&apos;s why we created the Road to 0%
            initiative for serious landlords. Most corporate agencies punish
            your growth with individual, rigid contracts that clip your ticket
            at every turn. We do the opposite.
          </p>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap justify-center gap-10 lg:gap-16 mb-10">
              {[
                { stat: "300+", label: "Happy Landlords" },
                { stat: "6+", label: "Years Experience" },
                { stat: "24/7", label: "Dedicated WhatsApp Support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center"
                >
                  <span className="font-serif font-bold text-red text-4xl lg:text-5xl">
                    {item.stat}
                  </span>
                  <span className="mt-1 text-sm text-black/60">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className=" bg-red  w-fit text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                Talk To Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#f9fdfe] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-3">
              Who We Are
            </p>
            <h2 className="font-serif font-bold text-black text-3xl lg:text-[2.875rem]">
              No <span className="text-red">Distractions.</span>
              <br />
              No <span className="text-red">Excuses.</span>
            </h2>
            <h3 className="mt-3 text-lg lg:text-xl font-semibold text-black/70">
              100% Dedicated to Residential Property Management.
            </h3>
            <p className="mt-5 text-base lg:text-lg leading-[1.8] text-black/60 lg:max-w-6xl mx-auto">
              Meet the team rewriting the standards of property management
              across Auckland and Waikato. We don&apos;t buy, we don&apos;t
              sell&mdash;we focus entirely on protecting your investment without
              the hidden corporate fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {whoWeAreCards.map((card) => (
              <article
                key={card.title}
                className="bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="font-serif font-bold text-black text-lg lg:text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-black/60 leading-[1.8] text-sm lg:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY OBJECTIVES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-3">
              Our Key Objectives
            </p>
            <h2 className="font-serif font-bold text-black text-3xl lg:text-[2.875rem]">
              What Drives Rent My Home
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-[1.8] text-black/60 max-w-3xl mx-auto">
              We don&apos;t just throw around words like Prompt, Reliable, and
              Transparent because they look good on a website. We live by them:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj) => (
              <article
                key={obj.title}
                className="bg-[#f9fdfe] rounded-[20px] p-9 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <h4 className="font-serif font-bold text-red text-xl mb-4">
                  {obj.title}
                </h4>
                <p className="text-black/60 leading-[1.8] text-sm lg:text-base">
                  {obj.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="bg-[#f9fdfe] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-3">
              Our History
            </p>
            <h2 className="font-serif font-bold text-black text-3xl lg:text-[2.875rem]">
              How Rent My Home Started
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            {/* Timeline */}
            <div className="relative pl-10 flex-1">
              <div className="absolute left-2.5 top-0 w-1 h-full bg-red rounded-full" />
              {timeline.map((step) => (
                <div key={step.year} className="relative mb-12 pl-10 last:mb-0">
                  <div className="absolute -left-0.75 top-1.5 w-6 h-6 rounded-full bg-white border-[5px] border-red" />
                  <h3 className="font-serif font-bold text-black text-2xl lg:text-3xl mb-1">
                    {step.year}
                  </h3>
                  <p className="text-black/60 text-base lg:text-lg">
                    {step.event}
                  </p>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-[1.2] space-y-6">
              <p className="text-black/60 text-base lg:text-lg leading-loose">
                Rent My Home was established with a simple vision&mdash;creating
                a reliable and modern property management company focused
                entirely on landlords and their investments.
              </p>
              <p className="text-black/60 text-base lg:text-lg leading-loose">
                Since our journey began, we have continuously worked towards
                building strong relationships, delivering consistent service,
                and helping property owners across Auckland and Waikato manage
                their investments confidently.
              </p>
              <p className="text-black/60 text-base lg:text-lg leading-loose">
                Today, Rent My Home proudly manages properties with a commitment
                to professionalism, transparency, and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif font-bold text-black text-3xl lg:text-[2.875rem]">
              Why Landlords Trust Rent My Home
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {whyChooseCards.map((card) => (
              <article
                key={card.title}
                className="bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="font-serif font-bold text-black text-lg lg:text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-black/60 leading-[1.8] text-sm lg:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#f9fdfe] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red mb-3">
              What We Offer
            </p>
            <h2 className="font-serif font-bold text-black text-3xl lg:text-[2.875rem]">
              How We Protect Your Asset
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-[1.8] text-black/60 max-w-3xl mx-auto">
              We handle everything from day one so you can sit back and enjoy
              the passive income. Here is exactly what our comprehensive,
              transparent 5.5% + GST management fee covers&mdash;with zero
              hidden surprises:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {whatWeOfferCards.map((card) => (
              <article
                key={card.title}
                className="bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="font-serif font-bold text-black text-lg lg:text-xl mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm lg:text-base text-black/60"
                    >
                      <span className="text-red font-bold mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

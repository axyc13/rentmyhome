const cards = [
  {
    title: "Hassle-Free Management",
    description:
      "From tenant communication to maintenance coordination, we keep the day-to-day moving without drama.",
  },
  {
    title: "Quality Tenant Placement",
    description:
      "Careful screening and practical leasing support help protect your property and reduce vacancy time.",
  },
  {
    title: "Sharper Rental Returns",
    description:
      "We combine local market knowledge with straight-up advice to position your property well.",
  },
  {
    title: "Responsive Communication",
    description:
      "Clear updates, dedicated support, and a team that actually follows through when something needs attention.",
  },
] as const;

export function WhyChoose() {
  return (
    <section className="bg-white px-4 py-8 flex items-center min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red">
            Why Choose Rent My Home
          </p>
          <h2 className="mt-4 text-4xl font-serif font-bold tracking-tight text-black lg:text-[2.875rem]">
            We Make Property Management Simple
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[20px] border border-black/5 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <h3 className="mt-3 text-2xl font-serif font-bold text-black">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-black/65">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Market-Ready in 24 Hours",
    description:
      "The clock starts the moment you sign up. We get your property live on major portals within 24 hours to maximize your cash flow.",
  },
  {
    title: "100% Callback Guarantee",
    description:
      "Communication shouldn't be a luxury. We answer every call. If we miss you, we call back immediately. You'll never have to chase us.",
  },
  {
    title: "You Keep Total Control",
    description:
      "If a pipe bursts at 2 AM, we handle the panic. But we aren't rigid corporate dictators—if you have your own preferred local tradespeople, we’ll log them and call them first. If not, we use our trusted Kiwi network. Your property, your choice.",
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
          <h2 className="mt-4 text-3xl font-serif font-bold tracking-tight text-black lg:text-[2.875rem]">
            We Make Property Management Simple
          </h2>
        </div>

        <div className="mt-4 lg:mt-12 grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[20px] border border-black/5 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5 hover:text-red"
            >
              <h3 className="mt-3 text-lg lg:text-2xl font-serif font-bold text-black ">
                {card.title}
              </h3>
              <p className="mt-4 text-sm lg:text-base leading-7 text-black/65">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

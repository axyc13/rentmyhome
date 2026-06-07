const cards = [
  {
    title: "Fast Responses",
    description:
      "No waiting days for replies. Our team stays active and responsive so landlords always stay informed.",
  },
  {
    title: "Modern Management",
    description:
      "From tenant sourcing to maintenance coordination, everything is handled professionally and efficiently.",
  },
  {
    title: "Growth-Focused",
    description:
      "Whether you own one rental or a growing portfolio, Rent My Home is designed to help landlords scale confidently.",
  },
];

export default function WhyContact() {
  return (
    <section className="py-30 bg-[#f8f8f8]">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            WHY LANDLORDS CONTACT
            <br />
            Rent My Home
          </h4>
          <h2 className="font-serif font-bold text-[36px] sm:text-[52px] leading-[1.2]">
            No Corporate Delays.
            <br />
            Just <span className="text-red">Real Support.</span>
          </h2>
          <p className="max-w-[760px] mx-auto text-[#666] leading-[1.9] text-lg mt-6.25">
            We built Rent My Home around fast communication, transparent
            management, and real relationships with landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7.5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white px-10 py-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2.5 transition-transform duration-300"
            >
              <h3 className="font-serif font-bold text-[26px] mb-4.5">
                {card.title}
              </h3>
              <p className="text-[#666] leading-[1.9]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

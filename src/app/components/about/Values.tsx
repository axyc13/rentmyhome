const values = [
  {
    title: "Fast Communication",
    description:
      "Real support from real people without waiting days for responses.",
  },
  {
    title: "Transparency",
    description: "No hidden surprises, confusing fees, or corporate fluff.",
  },
  {
    title: "Modern Systems",
    description:
      "Technology-driven management designed to simplify ownership.",
  },
  {
    title: "Growth Focused",
    description:
      "Helping landlords scale portfolios confidently and stress-free.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#f8f8f8] py-27.5 max-sm:py-20">
      <div className="mx-auto w-[90%] max-w-325">

        {/* section-title */}
        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            THE RMH DIFFERENCE
          </h4>
          <h2 className="font-serif font-bold text-black text-[38px] sm:text-[54px] leading-[1.2]">
            What We Stand For
          </h2>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6.25">
          {values.map((v) => (
            <article
              key={v.title}
              className="bg-white px-7.5 py-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2.5 transition-transform duration-300"
            >
              <h3 className="font-serif font-bold text-black text-2xl mb-3.75">
                {v.title}
              </h3>
              <p className="text-[#666] leading-[1.9]">{v.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

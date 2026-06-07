const values = [
  {
    title: "Fast Communication",
    description:
      "We believe landlords should never chase updates or wait days for responses.",
  },
  {
    title: "Real Relationships",
    description:
      "Every landlord and tenant interaction is built around trust, respect, and honesty.",
  },
  {
    title: "Modern Systems",
    description:
      "We combine technology and personal service to simplify property ownership.",
  },
  {
    title: "Growth Focused",
    description:
      "Our mission is helping landlords protect and grow their investments confidently.",
  },
];

export default function TeamValues() {
  return (
    <section className="bg-[#f8f8f8] py-27.5">
      <div className="mx-auto w-[90%] max-w-325">

        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            WHAT MAKES US DIFFERENT
          </h4>
          <h2 className="font-serif font-bold text-[38px] sm:text-[52px] leading-[1.2]">
            The Values Behind
            <br />
            Everything We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6.25">
          {values.map((v) => (
            <article
              key={v.title}
              className="bg-white px-7.5 py-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="font-serif font-bold text-black text-2xl mb-4.5">
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

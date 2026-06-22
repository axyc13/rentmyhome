const reasons = [
  {
    icon: "📍",
    title: "Local Market Knowledge",
    description:
      "We know Auckland and Waikato rental markets, tenant expectations, and suburb demand trends inside out.",
  },
  {
    icon: "🎯",
    title: "Proactive Management",
    description:
      "We focus on prevention, communication, and long-term property performance — not just reaction.",
  },
  {
    icon: "⚙️",
    title: "Reliable Systems",
    description:
      "From inspections to maintenance, our processes are built for consistency and efficiency.",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    description:
      "We keep landlords informed with clear updates and responsive support — always.",
  },
  {
    icon: "📈",
    title: "Investment-Focused",
    description:
      "We treat every property like a long-term asset — not just another listing on our books.",
  },
];

export default function WhyChooseServices() {
  return (
    <section className="bg-white py-30">
      <div className="mx-auto w-[90%] max-w-325">

        <div className="text-center mb-15">
          <h4 className="text-[13px] text-red tracking-[2px] uppercase mb-3.5 font-semibold">
            Why Choose Us
          </h4>
          <h2 className="font-serif font-bold text-[44px] leading-[1.2]">
            What Sets Rent My Home Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[20px] px-6 py-8 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-center hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-[#fff0f0] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[15px] leading-[1.3] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#777] leading-loose">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

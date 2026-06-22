const cards = [
  {
    icon: "🔍",
    title: "Tenant Sourcing & Screening",
    description:
      "Finding the right tenant is one of the most important parts of successful property management.",
    points: [
      "Employment verification",
      "Rental history checks",
      "Credit checks",
      "Reference checks",
      "Affordability assessments",
    ],
  },
  {
    icon: "📅",
    title: "7-Day Viewings",
    description:
      "We conduct viewings 7 days a week to maximise tenant enquiry opportunities and reduce vacancy periods.",
    points: [
      "Faster tenant placement",
      "Reduced vacancy loss",
      "Increased exposure",
      "Flexibility for prospective tenants",
    ],
  },
  {
    icon: "⚡",
    title: "Listed Within 24 Hours",
    description:
      "Once signed with Rent My Home, we aim to have your property professionally listed within 24 hours.",
    points: [
      "Listed on major rental platforms",
      "Professional listing copy",
      "Photography coordination",
      "Enquiries start sooner",
    ],
  },
  {
    icon: "💰",
    title: "Rent Collection & Arrears",
    description:
      "Consistent rental income is essential. Our systems monitor payments closely and act fast on any arrears.",
    points: [
      "Close rent payment monitoring",
      "Early arrears follow-up",
      "Professional tenant communication",
      "Landlords kept informed",
    ],
  },
  {
    icon: "🏠",
    title: "Routine Property Inspections",
    description:
      "Regular inspections identify issues before they become costly — detailed reports after every visit.",
    points: [
      "Interior & exterior checks",
      "Maintenance reporting",
      "Photo documentation",
      "Tenant compliance monitoring",
      "Preventative recommendations",
    ],
  },
  {
    icon: "🔧",
    title: "Maintenance Coordination",
    description:
      "We coordinate trusted tradespeople to keep your property maintained to a high standard.",
    points: [
      "Emergency repairs",
      "General & preventative maintenance",
      "Quotes & approvals",
      "Contractor coordination",
    ],
  },
  {
    icon: "✅",
    title: "Healthy Homes Compliance",
    description:
      "We help landlords stay on top of compliance requirements with minimal hassle.",
    points: [
      "Healthy Homes assessments",
      "Compliance coordination",
      "Required upgrades managed",
      "Documentation support",
    ],
  },
  {
    icon: "💬",
    title: "Dedicated WhatsApp Support",
    description:
      "Direct and fast communication — no waiting days for responses when you need an update.",
    points: [
      "Quick updates & queries",
      "Maintenance communication",
      "Inspection updates",
      "Day-to-day support",
    ],
  },
  {
    icon: "📊",
    title: "Owner Reporting & Updates",
    description:
      "Stay informed with clear, regular reporting on your property's performance and condition.",
    points: [
      "Inspection reports with photos",
      "Financial statements",
      "Maintenance summaries",
      "Transparent communication",
    ],
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-[#f8f8f8] py-30">
      <div className="mx-auto w-[90%] max-w-325">

        <div className="text-center mb-15">
          <h4 className="text-[13px] text-red tracking-[2px] uppercase mb-3.5 font-semibold">
            What We Do
          </h4>
          <h2 className="font-serif font-bold text-[44px] leading-[1.2]">
            All Our Services At A Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[22px] px-8 py-[38px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-t-4 border-transparent hover:border-red hover:shadow-[0_18px_50px_rgba(239,43,45,0.1)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-[54px] h-[54px] bg-[#fff0f0] rounded-[14px] flex items-center justify-center text-2xl mb-5">
                {card.icon}
              </div>
              <h3 className="font-serif font-bold text-[20px] mb-3.5">
                {card.title}
              </h3>
              <p className="text-[#666] text-[15px] leading-loose mb-5">
                {card.description}
              </p>
              <ul>
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="text-[13px] text-[#444] pl-5 relative py-1.5 border-b border-[#f5f5f5] last:border-none before:content-['✓'] before:text-red before:font-bold before:absolute before:left-0 before:text-[12px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

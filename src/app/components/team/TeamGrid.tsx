const members = [
  {
    name: "Brijesh",
    role: "Marketing Manager",
    bio: "Brijesh joined RMH during the early growth stage and helped expand the brand presence across Auckland and Waikato through digital marketing and strategic growth campaigns.",
  },
  {
    name: "Saumya",
    role: "Business Development Manager",
    bio: "Sawmya focuses on building strong landlord relationships while ensuring every client receives personalised support and proactive communication.",
  },
  {
    name: "Gaurav",
    role: "Property Manager",
    bio: "From maintenance coordination to tenant communication, Gaurav ensures properties remain professionally managed and landlords stay informed.",
  },
  {
    name: "Prashant",
    role: "Hamilton Branch Manager",
    bio: "Leading the Waikato expansion, Prashant helped rapidly grow the Hamilton branch through hard work, local relationships, and consistent landlord support.",
  },
  {
    name: "Aman",
    role: "Property Manager",
    bio: "Aman supports the Waikato portfolio by ensuring tenants and landlords receive reliable day-to-day communication and organised management support.",
  },
  {
    name: "Charmi",
    role: "Administration Support",
    bio: "Charmi helps keep RMH operations running smoothly by managing administration tasks and supporting the Waikato branch with efficient coordination.",
  },
];

export default function TeamGrid() {
  return (
    <section id="team" className="pb-27.5 scroll-mt-20">
      <div className="mx-auto w-[90%] max-w-325">
        {/* section-title */}
        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            THE PEOPLE BEHIND RMH
          </h4>
          <h2 className="font-serif font-bold text-[38px] sm:text-[52px] leading-[1.2] mb-5">
            Meet The Team
            <br />
            Behind The Growth
          </h2>
          <p className="max-w-212.5 mx-auto text-[#666] leading-loose text-[17px]">
            Every person at RMH plays an important role in helping landlords
            experience stress-free, modern property management with real
            communication and real support.
          </p>
        </div>

        {/* team-grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[35px]">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-start gap-[30px] p-[25px] hover:-translate-y-2.5 transition-transform duration-400"
            >
              {/* Photo placeholder — swap src when real photos are available */}
              <div className="w-full sm:w-55 h-50 sm:h-62.5 rounded-[20px] bg-[#e8e8e8] shrink-0 overflow-hidden"></div>

              <div className="flex-1">
                <h3 className="font-serif font-bold text-[30px] mb-2.5">
                  {m.name}
                </h3>
                <h5 className="text-red text-[15px] tracking-[1px] font-semibold mb-5">
                  {m.role}
                </h5>
                <p className="text-[#666] leading-[1.9] text-base">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

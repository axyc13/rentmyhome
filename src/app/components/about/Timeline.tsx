const steps = [
  {
    year: "2020",
    description:
      "The journey began inside a small garage office where Anuj entered the property management industry and realised landlords were constantly ignored by traditional agencies.",
  },
  {
    year: "2022",
    description:
      "On June 14, 2022, A Cube Rentals (now Rent My Home) was officially registered with one mission — communication first, landlords first.",
  },
  {
    year: "2024",
    description:
      "The team started growing rapidly with Brijesh, Sawmya, and Prashant helping expand RMH across Auckland and Hamilton.",
  },
  {
    year: "Today",
    description:
      "Rent My Home now manages 300+ properties while continuing to operate with the same honest, responsive, landlord-first mindset.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-30">
      <div className="mx-auto w-[90%] max-w-325">
        {/* section-title */}
        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            BUILT FROM THE GROUND UP
          </h4>
          <h2 className="font-serif font-bold text-black text-[38px] sm:text-[54px] leading-[1.2]">
            The Real RMH Story
          </h2>
        </div>

        {/* story-timeline */}
        <div className="relative py-10">
          {/* Vertical line: centred on md+, left-[15px] on mobile */}
          <div className="absolute top-0 bottom-0 w-1.25 rounded-[20px] bg-linear-to-b from-red to-black left-3.75 md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              // Step: no padding — dot is anchored to this element's edges
              <div
                key={step.year}
                className={[
                  "relative mb-12.5 md:w-1/2",
                  isLeft ? "" : "md:ml-[50%]",
                ].join(" ")}
              >
                {/* Dot — positioned against the step's edge, not the padded inner area */}
                <div
                  className={[
                    "absolute top-10 z-10 w-6.5 h-6.5 rounded-full bg-white border-[6px] border-red",
                    "shadow-[0_0_20px_rgba(239,43,45,0.3)]",
                    "left-0.5 md:left-auto",
                    isLeft ? "md:-right-3.25" : "md:-left-3.25",
                  ].join(" ")}
                />

                {/* Inner wrapper: carries the padding so the card clears the center line */}
                <div
                  className={[
                    "pl-14",
                    isLeft
                      ? "md:pl-0 md:pr-10 md:text-right"
                      : "md:pl-10 md:pr-0",
                  ].join(" ")}
                >
                  <div className="bg-white p-7.5 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="font-serif font-bold text-red text-[30px] mb-3.75">
                      {step.year}
                    </h3>
                    <p className="text-[#666] leading-[1.9] text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* history-content — sibling of story-timeline, same container */}
        <div className="mt-4">
          <p className="text-[#555] leading-loose text-lg mb-7">
            Every business story likes to talk about success, but ours honestly
            started with a phone that wouldn&apos;t stop ringing, a garage
            office, and one simple realization: the property management industry
            was broken.
            <br />
            <br />
            Back in 2020, Anuj entered the property management industry with
            zero prior experience but a massive work ethic and willingness to
            learn everything from the ground up. At the time, he joined a small
            agency called Fair Rentals where the team operated straight out of a
            garage. As both a Property Manager and Business Development Manager,
            Anuj was constantly on the front lines speaking directly with
            landlords, tenants, contractors, and investors every single day.
            Very quickly, one thing became impossible to ignore.
            <br />
            <br />
            Landlords across Auckland were frustrated.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            Calls were going unanswered. Emails were ignored for days. Property
            managers disappeared the moment problems started happening. And
            landlords were constantly being passed between junior staff members
            who barely understood their property history.
            <br />
            <br />
            Most agencies had become heavily focused on sales commissions while
            property management slowly became a secondary service quietly
            sitting in the background. Landlords felt disconnected from the very
            investments they had spent years building.
            <br />
            <br />
            Instead of accepting that broken system, Anuj decided to take a
            completely different approach.
          </p>

          <p className="text-center font-bold text-[22px] leading-loose text-black mb-7">
            No corporate scripts.
            <br />
            No fake promises.
            <br />
            No pretending to be unavailable.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            He simply focused on doing the basics properly: answering the phone,
            communicating honestly, treating people with respect, and actually
            being available when landlords needed help. That simple mindset
            changed everything.
            <br />
            <br />
            Within just one year, 42 landlords had joined the agency because
            they finally felt heard and properly supported. That was the moment
            the bigger vision became clear. Landlords deserved a property
            management company built entirely around transparency,
            communication, and accountability.
            <br />
            <br />
            So on June 14, 2022, Anuj officially registered A Cube Rentals — now
            known as Rent My Home.
          </p>

          <p className="text-center font-bold text-[22px] leading-loose text-black mb-7">
            No corporate scripts.
            <br />
            No fake promises.
            <br />
            No pretending to be unavailable.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            Just a cell phone, relentless work ethic, and a promise to do right
            by Kiwi landlords.
            <br />
            <br />
            By October 2023, 47 landlords had already trusted RMH with their
            investments because of the active communication and honest service
            approach. As the business kept growing, Anuj knew maintaining that
            level of service alone would become impossible. But instead of
            hiring random resumes, RMH focused on bringing in real people who
            genuinely cared about landlords and understood the company mindset.
            <br />
            <br />
            In January 2024, Brijesh joined as the first official employee,
            helping lead the marketing side of the business and spreading the
            RMH name further across Auckland. Only months later, the portfolio
            nearly doubled from 47 to 87 properties. To ensure landlords still
            received the same level of attention and communication, Sawmya
            joined the company as a Business Development Manager.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            At the same time, RMH was beginning to expand beyond Auckland.
            Hamilton quickly became the next major step in the journey. Prashant
            joined the Waikato expansion as Business Development Manager and
            immediately understood what RMH stood for: work hard, communicate
            fast, and build trust properly.
            <br />
            <br />
            In his very first year, Prashant signed an incredible 70 properties
            across the region. Because of his consistency and leadership, he was
            later promoted to Branch Manager. As the Hamilton office continued
            growing, Charm joined to handle administration while Aman came
            onboard as a Property Manager to support the expanding portfolio.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            Then in March 2026, the company reached another major milestone. RMH
            crossed 180 properties under management and continued growing
            rapidly through referrals, reputation, and long-term landlord trust.
            To strengthen operations even further, Gaurav joined the company as
            a dedicated Property Manager.
            <br />
            <br />
            Today, Rent My Home manages hundreds of properties across Auckland
            and Waikato.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            The business is no longer operating from a garage. But the mindset
            has never changed.
          </p>

          <p className="text-center font-bold text-[22px] leading-loose text-black mb-7">
            We still answer the phone.
            <br />
            We still communicate directly.
            <br />
            We still believe landlords deserve transparency, honesty, and
            proactive support without the corporate runaround.
          </p>

          <p className="text-[#555] leading-loose text-lg mb-7">
            Because at the end of the day, RMH was never built to become another
            faceless property management company. It was built to solve a real
            problem for real landlords. And honestly — we&apos;re only getting
            started.
          </p>
        </div>
      </div>
    </section>
  );
}

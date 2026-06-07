function HighlightLines({ lines }: { lines: string[] }) {
  return (
    <p className="text-center font-bold text-xl leading-[2.2] text-black my-8">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
}

export default function StoryContent() {
  return (
    <section className="bg-[#f9fdfe] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-7 text-black/60 text-lg leading-[2]">
        <p>
          Every business story likes to talk about success, but ours honestly
          started with a phone that wouldn&apos;t stop ringing, a garage office,
          and one simple realization: the property management industry was
          broken.
        </p>
        <p>
          Back in 2020, Anuj entered the property management industry with zero
          prior experience but a massive work ethic and willingness to learn
          everything from the ground up. At the time, he joined a small agency
          called Fair Rentals where the team operated straight out of a garage.
          As both a Property Manager and Business Development Manager, Anuj was
          constantly on the front lines speaking directly with landlords,
          tenants, contractors, and investors every single day. Very quickly, one
          thing became impossible to ignore — landlords across Auckland were
          frustrated.
        </p>
        <p>
          Calls were going unanswered. Emails were ignored for days. Property
          managers disappeared the moment problems started happening. And
          landlords were constantly being passed between junior staff members who
          barely understood their property history. Most agencies had become
          heavily focused on sales commissions while property management slowly
          became a secondary service quietly sitting in the background. Landlords
          felt disconnected from the very investments they had spent years
          building. Instead of accepting that broken system, Anuj decided to
          take a completely different approach.
        </p>

        <HighlightLines
          lines={[
            "No corporate scripts.",
            "No fake promises.",
            "No pretending to be unavailable.",
          ]}
        />

        <p>
          He simply focused on doing the basics properly: answering the phone,
          communicating honestly, treating people with respect, and actually
          being available when landlords needed help. That simple mindset changed
          everything. Within just one year, 42 landlords had joined the agency
          because they finally felt heard and properly supported. That was the
          moment the bigger vision became clear. Landlords deserved a property
          management company built entirely around transparency, communication,
          and accountability. So on June 14, 2022, Anuj officially registered A
          Cube Rentals — now known as Rent My Home.
        </p>

        <HighlightLines
          lines={[
            "No corporate scripts.",
            "No fake promises.",
            "No pretending to be unavailable.",
          ]}
        />

        <p>
          Just a cell phone, relentless work ethic, and a promise to do right by
          Kiwi landlords. By October 2023, 47 landlords had already trusted RMH
          with their investments because of the active communication and honest
          service approach. As the business kept growing, Anuj knew maintaining
          that level of service alone would become impossible. But instead of
          hiring random resumes, RMH focused on bringing in real people who
          genuinely cared about landlords and understood the company mindset. In
          January 2024, Brijesh joined as the first official employee, helping
          lead the marketing side of the business and spreading the RMH name
          further across Auckland. Only months later, the portfolio nearly
          doubled from 47 to 87 properties. To ensure landlords still received
          the same level of attention and communication, Sawmya joined the
          company as a Business Development Manager.
        </p>
        <p>
          At the same time, RMH was beginning to expand beyond Auckland.
          Hamilton quickly became the next major step in the journey. Prashant
          joined the Waikato expansion as Business Development Manager and
          immediately understood what RMH stood for: work hard, communicate
          fast, and build trust properly. In his very first year, Prashant signed
          an incredible 70 properties across the region. Because of his
          consistency and leadership, he was later promoted to Branch Manager.
          As the Hamilton office continued growing, Charm joined to handle
          administration while Aman came onboard as a Property Manager to
          support the expanding portfolio.
        </p>
        <p>
          Then in March 2026, the company reached another major milestone. RMH
          crossed 180 properties under management and continued growing rapidly
          through referrals, reputation, and long-term landlord trust. To
          strengthen operations even further, Gaurav joined the company as a
          dedicated Property Manager. Today, Rent My Home manages hundreds of
          properties across Auckland and Waikato.
        </p>
        <p>
          The business is no longer operating from a garage. But the mindset has
          never changed.
        </p>

        <HighlightLines
          lines={[
            "We still answer the phone.",
            "We still communicate directly.",
            "We still believe landlords deserve transparency, honesty, and proactive support without the corporate runaround.",
          ]}
        />

        <p>
          Because at the end of the day, RMH was never built to become another
          faceless property management company. It was built to solve a real
          problem for real landlords. And honestly — we&apos;re only getting
          started.
        </p>
      </div>
    </section>
  );
}

export default function VacancyContent() {
  return (
    <>
      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mb-6">
        Why Vacancy Periods Hurt Long-Term Rental Growth
      </h2>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Every vacant day costs landlords money. But beyond the immediate
        financial loss, long vacancy periods often create additional stress,
        reduce cash flow consistency, and increase uncertainty around investment
        performance.
      </p>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Professional property management is no longer just about collecting
        rent. Modern landlords need proactive communication, strategic marketing,
        tenant retention systems, and fast operational processes that keep
        properties occupied consistently.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        1. Launch Listings Within 24 Hours
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-4">
        One of the biggest mistakes agencies make is delaying listing launches.
        High-performing property managers move fast because tenant demand shifts
        quickly in competitive markets.
      </p>
      <ul className="list-disc pl-5 mb-7 space-y-3">
        {[
          "Professional photography",
          "Optimised listing descriptions",
          "Fast publishing across platforms",
          "Immediate enquiry management",
        ].map((item) => (
          <li key={item} className="text-[#555] leading-loose">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        2. Use Professional Property Marketing
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Properties with better presentation attract more enquiries, stronger
        applicants, and shorter vacancy periods. High-quality visuals and
        persuasive copywriting make a massive difference.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        3. Prioritise Tenant Communication
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Fast responses increase trust and improve conversion rates dramatically.
        Tenants often move on quickly when communication feels slow or
        unprofessional.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        4. Conduct Flexible Viewings
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Weekend and after-hours viewings increase accessibility for working
        professionals and help secure tenants faster.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        5. Improve Tenant Retention
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        The easiest way to reduce vacancy is preventing good tenants from
        leaving in the first place. Responsive maintenance and proactive
        communication create stronger long-term relationships.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        6. Price Properties Strategically
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Overpricing can leave properties sitting vacant for weeks. Smart pricing
        balances profitability with market demand.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        7. Work With Active Property Managers
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        The difference between passive and proactive management can completely
        change investment performance. Active managers consistently monitor
        enquiries, market trends, tenant behaviour, and vacancy risks.
      </p>

      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mt-15 mb-6">
        Final Thoughts
      </h2>
      <p className="text-[#555] leading-loose text-[17px]">
        Reducing vacancy periods isn&apos;t about luck. It&apos;s about systems,
        speed, communication, and proactive management strategies that protect
        rental income and improve tenant quality.
      </p>
    </>
  );
}

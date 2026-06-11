export default function TenantRetentionContent() {
  return (
    <>
      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mb-6">
        Why Communication Matters In Property Management
      </h2>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Tenants want fast responses, transparency, and support when issues
        arise. Poor communication is one of the biggest reasons tenants choose
        not to renew leases.
      </p>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Professional property management creates systems that keep tenants
        informed, supported, and confident throughout their tenancy.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Fast Response Times Build Trust
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        When maintenance requests or enquiries are handled quickly, tenants feel
        valued. Responsive communication increases satisfaction and reduces
        frustration.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Clear Expectations Prevent Problems
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Clear communication about inspections, maintenance, rent payments, and
        tenancy rules helps avoid misunderstandings before they become larger
        issues.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Consistent Support Creates Stability
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Tenants are more likely to stay long-term when they feel supported and
        respected by management.
      </p>
      <ul className="list-disc pl-5 mb-7 space-y-3">
        {[
          "Faster maintenance coordination",
          "Professional communication systems",
          "Dedicated support channels",
          "Better tenant experience",
        ].map((item) => (
          <li key={item} className="text-[#555] leading-loose">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        How RMH Approaches Communication
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        At RMH, we focus heavily on responsiveness and accessibility. Dedicated
        WhatsApp support and proactive updates help landlords and tenants stay
        connected without delays.
      </p>

      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mt-15 mb-6">
        Final Thoughts
      </h2>
      <p className="text-[#555] leading-loose text-[17px]">
        Good communication doesn&apos;t just improve tenant satisfaction — it
        protects rental income, reduces vacancies, and strengthens long-term
        investment performance.
      </p>
    </>
  );
}

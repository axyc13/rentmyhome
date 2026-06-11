export default function HealthyHomesContent() {
  return (
    <>
      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mb-6">
        Why Healthy Homes Standards Matter
      </h2>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Healthy Homes Standards were introduced to improve rental property
        conditions and ensure tenants live in warm, dry, and healthy
        environments. For landlords, compliance is no longer optional — it&apos;s
        a legal responsibility.
      </p>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Properties that fail to meet standards can lead to penalties, tenant
        complaints, and long-term maintenance problems. Professional property
        management helps landlords stay ahead of compliance requirements while
        protecting rental returns.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Key Areas Covered Under Healthy Homes
      </h3>
      <ul className="list-disc pl-5 mb-7 space-y-3">
        {[
          "Heating requirements",
          "Insulation standards",
          "Ventilation systems",
          "Moisture and drainage",
          "Draught stopping",
        ].map((item) => (
          <li key={item} className="text-[#555] leading-loose">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Heating Standards
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Rental homes must contain fixed heating devices capable of heating the
        main living area effectively. Proper heating improves comfort, tenant
        satisfaction, and long-term property quality.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Ventilation &amp; Moisture Control
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Good airflow and moisture prevention reduce mould risks and maintain
        healthier indoor environments. Kitchens and bathrooms must contain
        extractor fans meeting required standards.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Insulation Requirements
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Ceiling and underfloor insulation must meet minimum regulations to
        improve energy efficiency and indoor warmth.
      </p>

      <h3 className="font-serif font-bold text-[28px] mt-12 mb-5">
        Why Professional Management Helps
      </h3>
      <p className="text-[#555] leading-loose text-[17px] mb-6">
        Many landlords struggle to keep up with changing regulations.
        Professional property managers coordinate inspections, organise
        maintenance, and ensure properties remain compliant year-round.
      </p>

      <h2 className="font-serif font-bold text-[38px] leading-[1.2] mt-15 mb-6">
        Final Thoughts
      </h2>
      <p className="text-[#555] leading-loose text-[17px]">
        Healthy Homes compliance protects both landlords and tenants. Staying
        proactive reduces risks, improves tenant retention, and helps maintain
        long-term investment value.
      </p>
    </>
  );
}

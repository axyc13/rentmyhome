const included = [
  "Tenant Sourcing",
  "Rent Collection",
  "Routine Inspections",
  "Maintenance Coordination",
  "Healthy Homes Compliance",
  "Bond Lodgement",
  "Arrears Management",
  "Owner Reporting",
  "7-Day Viewings",
  "WhatsApp Support",
];

export default function ServicesIntro() {
  return (
    <section className="bg-[#f8f8f8] py-[60px] border-b border-[#eee]">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-15 items-center">

          <div>
            <h2 className="font-serif font-bold text-[38px] leading-[1.2] mb-5">
              You <span className="text-red">Own.</span> We{" "}
              <span className="text-red">Manage.</span>
            </h2>
            <p className="text-[#555] text-base leading-loose mb-4">
              At Rent My Home, we provide professional residential property
              management services across Auckland and Waikato — designed to
              make rental ownership simple, stress-free, and financially
              rewarding.
            </p>
            <p className="text-[#555] text-base leading-loose">
              Whether you own one rental or a growing portfolio, our systems
              are built to protect your investment, minimise vacancy, and
              create a better rental experience for both landlords and tenants.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-[35px] shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
            <h4 className="text-[15px] text-red tracking-[1px] uppercase mb-[18px] font-semibold">
              What&apos;s Included
            </h4>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
              {included.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#444] pl-5 relative before:content-['✓'] before:text-red before:font-bold before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

const infoSteps = [
  {
    number: "01",
    title: "Fast Response Times",
    description:
      "Applications are reviewed quickly by our property management team.",
  },
  {
    number: "02",
    title: "Professional Support",
    description:
      "Need help during the process? Our team stays available throughout your application.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "No chasing emails or waiting days for updates. We keep tenants informed properly.",
  },
];

export default function TenantFormSection() {
  return (
    <section id="tenant-form" className="bg-[#f8f8f8] py-16 scroll-mt-20">
      <div className="mx-auto w-[90%] max-w-325">
        {/* Section title */}
        <div className="text-center mb-17.5">
          <h4 className="text-[15px] text-red tracking-[2px] mb-3.75">
            RENTAL APPLICATION
          </h4>
          <h2 className="font-serif font-bold text-[38px] sm:text-[52px] leading-[1.2]">
            Apply For Your
            <br />
            Next Rental Home
          </h2>
        </div>

        {/* Info boxes — 3 across */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6.25 mb-17.5">
          {infoSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-7.5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex gap-5 items-start"
            >
              <div className="w-16 h-16 rounded-full bg-red text-white flex items-center justify-center font-bold text-xl shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="font-serif font-bold text-[20px] mb-2.5">
                  {step.title}
                </h4>
                <p className="text-[#666] text-[15px] leading-[1.8]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Tenancy form */}
    </section>
  );
}

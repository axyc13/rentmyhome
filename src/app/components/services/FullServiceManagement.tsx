const serviceItems = [
  "Rental appraisals",
  "Property marketing",
  "Photography coordination",
  "Tenant sourcing",
  "Open homes & viewings",
  "Tenant screening",
  "Tenancy agreements",
  "Bond lodgement",
  "Rent collection",
  "Routine inspections",
  "Maintenance coordination",
  "Arrears management",
  "Healthy Homes compliance",
  "Tribunal support",
  "End-of-tenancy management",
  "Owner reporting & updates",
];

export default function FullServiceManagement() {
  return (
    <section className="bg-white py-30" id="services">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <span className="inline-block bg-[#fff0f0] text-red font-semibold text-[13px] px-4 py-2 rounded-[8px]">
              Our Core Service
            </span>
            <h2 className="font-serif font-bold text-[40px] leading-[1.2] mt-5 mb-5">
              Full-Service Property <span className="text-red">Management</span>
            </h2>
            <p className="text-[#555] text-base leading-loose mb-4">
              We handle the complete day-to-day management of your rental
              property from start to finish. Our goal is simple — protect your
              property while maximising long-term returns.
            </p>
            <p className="text-[#555] text-base leading-loose">
              From the first rental appraisal right through to end-of-tenancy
              management, our experienced team is with you every step of the way.
            </p>
          </div>

          <div className="bg-white rounded-[22px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h4 className="text-sm text-red tracking-[1.5px] uppercase mb-5 font-semibold">
              Everything We Handle For You
            </h4>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {serviceItems.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#333] pl-[22px] relative leading-[1.5] before:content-['✓'] before:text-red before:font-bold before:absolute before:left-0"
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

import Image from "next/image";

const stats = [
  { value: "300+", label: "Managed Properties" },
  { value: "24/7", label: "Support Access" },
  { value: "5 Days", label: "Application Review" },
];

export default function TenantHero() {
  return (
    <section className="bg-white pt-30 pb-22.5 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-325 flex flex-col lg:flex-row items-center justify-between gap-17.5">
        {/* Left */}
        <div className="flex-1">
          <h4 className="text-[15px] text-red tracking-[2px] mb-5">
            TENANT APPLICATION
          </h4>
          <h1 className="font-serif font-bold text-black leading-[1.05] mb-7 text-[44px] sm:text-[58px] lg:text-[78px]">
            Find A Home
            <br />
            You&apos;ll Actually{" "}
            <span className="text-red">Love.</span>
          </h1>
          <p className="text-[#555] leading-loose text-lg mb-10 max-w-162.5">
            At Rent My Home, we believe renting should feel simple, transparent,
            and stress-free. Our modern tenant process is designed to help
            quality tenants secure great homes across Auckland and Waikato
            faster without endless delays or confusing communication.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-15 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="font-serif font-bold text-red text-[42px] leading-none mb-2">
                  {s.value}
                </h3>
                <p className="text-[#666] text-base">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#tenant-form"
            className="inline-block bg-red text-white font-semibold px-8.5 py-4.5 rounded-[14px] hover:-translate-y-0.75 transition-transform"
          >
            Apply Now
          </a>
        </div>

        {/* Right — masked image */}
        <div className="flex-1 flex justify-end w-full overflow-hidden">
          <Image
            src="/pic.jpg"
            alt="Rent My Home tenant"
            width={650}
            height={540}
            className="w-full max-w-162.5 object-cover rounded-[30px_0_0_30px] max-lg:rounded-[30px] max-lg:max-w-full max-lg:h-auto"
            style={{
              height: "540px",
              WebkitMaskImage:
                "linear-gradient(to left, black 75%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 75%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

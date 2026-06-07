import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-30 pb-22.5">
      <div className="mx-auto w-[90%] max-w-325 flex flex-col lg:flex-row items-center justify-between gap-17.5">
        {/* Left */}
        <div className="flex-1">
          <h4 className="text-[15px] text-red tracking-[2px] mb-5">OUR TEAM</h4>
          <h1 className="font-serif font-bold text-black leading-[1.05] mb-7 text-[44px] sm:text-[58px] lg:text-[78px]">
            REAL <span className="text-red">PEOPLE. </span>
            REAL <span className="text-red">SUPPORT.</span>
          </h1>
          <p className="text-[#555] leading-loose text-lg mb-10 max-w-162.5">
            Behind every property we manage is a team that genuinely cares about
            landlords, tenants, communication, and doing things properly. Rent
            My Home was built by hardworking people who believe property
            management should feel personal, proactive, and reliable.
          </p>
          <a
            href="#team"
            className="inline-block bg-red text-white font-semibold px-8.5 py-4.5 rounded-[14px] hover:-translate-y-1 transition-transform"
          >
            Meet The RMH Team
          </a>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-end w-full overflow-hidden">
          <Image
            src="/pic.jpg"
            alt="The Rent My Home team"
            width={650}
            height={560}
            className="w-full max-w-162.5 object-cover rounded-[30px_0_0_30px] max-lg:rounded-[30px] max-lg:max-w-full max-lg:h-auto"
            style={{
              height: "560px",
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

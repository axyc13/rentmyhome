import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-30 pb-20">
      <div className="mx-auto w-[90%] max-w-325">
        {/* about-flex */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-17.5">
          {/* about-left */}
          <div className="flex-1">
            <h4 className="text-[15px] font-medium text-red tracking-[2px] mb-5">
              OUR STORY
            </h4>
            <h1 className="font-serif font-bold text-black leading-[1.05] mb-7 text-[46px] sm:text-[58px] lg:text-[78px]">
              YOU <span className="text-red">OWN.</span>
              <br />
              WE <span className="text-red">MANAGE.</span>
            </h1>
            <p className="text-[#555] leading-loose text-lg mb-10">
              Built from long days, nonstop calls, and real relationships — Rent
              My Home was created to give Kiwi landlords the communication and
              support they were missing from traditional agencies.
            </p>
          </div>

          {/* about-right */}
          <div className="flex-1 flex justify-end w-full"></div>
        </div>

        {/* hero-btn */}
        <a
          href="/contact"
          className="block w-fit mt-5 mx-auto bg-red text-white font-semibold px-8.5 py-4.5 rounded-[14px] hover:-translate-y-1 transition-transform"
        >
          Talk To Our Team
        </a>
      </div>
    </section>
  );
}

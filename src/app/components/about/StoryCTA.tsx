export default function StoryCTA() {
  return (
    <section
      className="py-30 text-white text-center"
      style={{
        background:
          "linear-gradient(rgba(239,43,45,0.9),rgba(239,43,45,0.9)), url('/building.jpg') center/cover no-repeat",
      }}
    >
      <div className="mx-auto w-[90%] max-w-325">
        <h2 className="font-serif font-bold text-[40px] sm:text-[58px] leading-[1.15] mb-6.25">
          Your Property Journey Deserves Better
        </h2>
        <p className="max-w-190 mx-auto leading-[1.9] text-lg mb-8.75">
          Whether you own one property or an expanding portfolio, RMH is built
          to help landlords grow smarter with proactive management and real
          support.
        </p>
        <a
          href="/landlords"
          className="inline-block bg-white text-red font-bold px-9.5 py-4.5 rounded-[14px] hover:bg-black hover:text-white transition-colors"
        >
          Start With RMH
        </a>
      </div>
    </section>
  );
}

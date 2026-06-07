export default function FounderMessage() {
  return (
    <section className="pb-27.5">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="relative overflow-hidden bg-black text-white rounded-[35px] p-10 sm:p-17.5 flex flex-col lg:flex-row gap-20 items-start">

          {/* Red circle decoration */}
          <div className="absolute -top-30 -right-30 w-75 h-75 rounded-full bg-red/15 pointer-events-none" />

          {/* Left */}
          <div className="flex-[0.9] relative z-10">
            <h4 className="text-red tracking-[2px] text-[15px] mb-5">
              WORDS FROM THE FOUNDER
            </h4>
            <h2 className="font-serif font-bold text-[38px] sm:text-[52px] leading-[1.2]">
              Why Rent My Home
              <br />
              Was Built Differently
            </h2>
          </div>

          {/* Right */}
          <div className="flex-[1.3] relative z-10">
            {[
              `"When I first entered the property management industry, I quickly realised something was missing — real communication.`,
              `Landlords were constantly chasing updates, waiting days for replies, and feeling disconnected from the very investments they worked so hard to build.`,
              `I didn't start RMH to become another corporate agency. I started it because I genuinely believed landlords deserved better support, faster communication, and honest people they could trust.`,
              `What began in a garage with nothing more than hard work, consistency, and answering every phone call has now grown into a company trusted by hundreds of landlords across Auckland and Waikato.`,
              `But even as we continue growing, our mindset has never changed. We still believe in staying accessible, staying proactive, and treating every property like it truly matters — because it does.`,
              `At the end of the day, RMH was built by real people, for real landlords."`,
            ].map((para, i) => (
              <p
                key={i}
                className="text-[#ddd] leading-loose text-[17px] mb-5.5"
              >
                {para}
              </p>
            ))}

            <h3 className="font-serif font-bold text-[28px] mt-8.75">
              — Anuj
              <span className="block text-[15px] font-normal text-[#bbb] mt-2">
                Founder, Rent My Home
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

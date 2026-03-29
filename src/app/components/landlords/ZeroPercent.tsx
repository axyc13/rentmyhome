"use client";

import {
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ZeroPercent() {
  return (
    <div className="bg-[#ad0000]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-linear-to-br from-black via-[#1b1b1b] to-[#ad0000]/20 text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Welcome Landlord
            </h1>
          </div>
        </div>
      </section>

      {/* The Offer Section */}
      <section className="py-20 bg-[#f9fdfe]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-8">
                The Offer That
                <br />
                Changes the Game
              </h2>
              <p className="text-lg text-black mb-8 leading-relaxed">
                In a market where every dollar counts, forward-thinking property
                owners are no longer satisfied with traditional fee structures.
                At Rent My Home Limited, we've reimagined what property
                management should feel like — efficient, transparent, and
                genuinely rewarding.
              </p>
            </div>

            <div className="">
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ad0000] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">1.</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      First 5 Properties
                    </h3>
                    <p className="text-gray-700 text-base">
                      Only 5.5% + GST management fee
                    </p>
                  </div>
                </div>
              </div>

              <div className=" p-8 border-t">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">2.</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      6th Property or Referrals
                    </h3>
                    <p className="text-gray-700 text-base">Managed for FREE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 h-fit  bg-[#ad0000] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-serif font-bold mb-6">
                That's Right!
              </h3>
              <p className="text-2xl mb-6">
                Every 6th rental property — or every successful landlord
                referral — unlocks 0% management fees.
              </p>
              <p className="text-white/90 leading-relaxed">
                This isn't a short-term promotion — it's a long-term strategy
                designed to help you grow smarter, save more, and benefit from a
                partnership that truly values your trust.
              </p>
            </div>

            <div className="flex-1 mx-auto px-6 lg:px-8">
              <div className="flex items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-8">
                    Real Cost Savings.
                    <br />
                    Real Impact.
                  </h2>
                  <p className="text-base text-black mb-8 leading-relaxed">
                    Managing multiple properties often comes with increasing
                    overheads. Our approach flips that narrative by introducing
                    built-in savings at scale. The more you grow, the more you
                    save — without sacrificing professional oversight.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Reinvest savings into new acquisitions",
                      "Upgrade existing properties",
                      "Improve tenant experience",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ad0000] shrink-0" />
                        <span className="text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-20 bg-[#f9fdfe]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-16 text-center">
            Why This Model Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-[#ad0000] mb-4" />
              <h3 className="text-xl font-bold text-black mb-4">
                Growth Aligned
              </h3>
              <p className="text-gray-700">
                Our model is designed to grow with you. Unlike standard
                agencies, we benefit when you succeed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-[#ad0000] mb-4" />
              <h3 className="text-xl font-bold text-black mb-4">
                Rewards Momentum
              </h3>
              <p className="text-gray-700">
                As your portfolio expands, your average management cost
                decreases — savings that compound.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-[#ad0000] mb-4" />
              <h3 className="text-xl font-bold text-black mb-4">
                Proven Results
              </h3>
              <p className="text-gray-700">
                Improved rental yield, operational efficiency, and strategic
                growth without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Management Section */}
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-16 text-center">
            Professional Management
            <br />
            Without the Premium Price Tag
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Thorough tenant screening",
              "Routine inspections and reporting",
              "Rent collection and arrears management",
              "Compliance with NZ tenancy regulations",
              "Ongoing landlord support and advice",
              "Hands-on, personalised approach",
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 flex items-start gap-4"
              >
                <div className="bg-red w-5 h-5 mt-1 rounded-2xl" />
                <span className="text-lg text-gray-800">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 mt-12 text-lg leading-relaxed max-w-3xl mx-auto">
            Affordability never means compromise. We deliver professional
            property management with a hands-on, personalised approach that
            larger firms often overlook.
          </p>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#ad0000] rounded-2xl p-12 text-white">
              <Users className="w-16 h-16 mb-6 text-white/80" />
              <h2 className="text-3xl font-serif font-bold mb-6">
                Designed for Auckland & Waikato Investors
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                We proudly manage properties across Auckland and Waikato,
                supporting investors at every stage — from first-time landlords
                to experienced portfolio builders.
              </p>
              <a
                className="bg-white text-[#ad0000] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                href="#landlords"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold font-serif text-black mb-3">
                  Our Local Expertise Ensures:
                </h3>
              </div>
              {[
                {
                  title: "Accurate Rent Appraisals",
                  desc: "Market-aligned valuations based on local data",
                },
                {
                  title: "Market-Aligned Strategies",
                  desc: "Strategic positioning for maximum returns",
                },
                {
                  title: "Faster Tenant Placement",
                  desc: "Quick turnaround with quality applicants",
                },
                {
                  title: "Stronger Retention Outcomes",
                  desc: "Long-term tenancies and stability",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

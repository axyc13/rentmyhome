"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How quickly can Rent My Home list my property?",
    a: "We aim to have your property professionally listed within 24 hours of onboarding. Our team moves quickly to minimise vacancy periods and start attracting quality tenants as soon as possible.",
  },
  {
    q: "Do you only manage residential properties?",
    a: "Yes. Rent My Home is fully focused on residential property management. Unlike traditional agencies that split focus between sales and rentals, our entire system is built specifically for landlords and tenants.",
  },
  {
    q: "How do landlords communicate with your team?",
    a: "We provide direct communication through phone, email, and dedicated WhatsApp support. We believe landlords should never feel disconnected from their investment.",
  },
  {
    q: "Do you handle maintenance coordination?",
    a: "Absolutely. Our team coordinates maintenance requests, contractor communication, repairs, inspections, and follow-ups to ensure properties remain well-maintained and compliant.",
  },
  {
    q: "What areas do you service?",
    a: "Rent My Home currently services Auckland and Waikato, supporting landlords and tenants across multiple residential locations throughout the region.",
  },
  {
    q: "How often are property inspections completed?",
    a: "Routine inspections are carried out regularly throughout the tenancy period. We provide detailed reporting, photos, and updates so landlords always stay informed about their property condition.",
  },
  {
    q: "Can tenants contact the team directly for urgent issues?",
    a: "Yes. Tenants can contact our team directly regarding maintenance requests, emergencies, tenancy questions, or general support needs.",
  },
  {
    q: "Why do landlords choose Rent My Home over traditional agencies?",
    a: "Landlords choose RMH because of our communication, transparency, fast response times, and modern approach to property management. We focus entirely on management rather than sales-driven commissions.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-30">
      <div className="mx-auto w-[90%] max-w-325">

        {/* section-title */}
        <div className="text-center mb-17.5">
          <h4 className="text-red tracking-[2px] mb-3.75 text-[15px] font-medium">
            COMMON QUESTIONS
          </h4>
          <h2 className="font-serif font-bold text-[34px] sm:text-[52px] leading-[1.2]">
            Landlord &amp; Tenant FAQs
          </h2>
        </div>

        {/* faq-wrapper */}
        <div className="max-w-237.5 mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[22px] p-8 mb-6.25 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.25 transition-transform duration-300"
            >
              {/* Question row */}
              <button
                className="flex w-full items-center justify-between gap-5 cursor-pointer text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <h3 className="font-serif font-bold text-[20px] sm:text-2xl leading-[1.4] text-black">
                  {faq.q}
                </h3>
                <span className="text-[30px] text-red font-bold shrink-0 leading-none select-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer — animated with max-height */}
              <div
                className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pt-5.5 text-[#555] leading-loose text-[17px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* support-box */}
        <div className="mt-22.5 bg-black text-white text-center p-11.25 sm:p-17.5 rounded-[35px]">
          <h2 className="font-serif font-bold text-[34px] sm:text-[48px] mb-5">
            Still Have Questions?
          </h2>
          <p className="max-w-190 mx-auto leading-[1.9] text-lg text-[#ccc] mb-8.75">
            Our team is always ready to help landlords and tenants with honest
            advice, quick communication, and real support whenever needed.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red text-white font-semibold px-8.5 py-4.5 rounded-[14px] hover:bg-white hover:text-red transition-colors"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  );
}

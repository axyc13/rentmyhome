"use client";

import { useState } from "react";

const infoCards = [
  { title: "Call Us", text: "+64 22 453 0098" },
  { title: "Email Us", text: "info@rentmyhome.co.nz" },
  { title: "Location", text: "Auckland & Waikato, New Zealand" },
  {
    title: "Support Hours",
    text: "Monday - Sunday\n(Fast WhatsApp Support)",
  },
];

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      const res = await fetch("/api/contact", { method: "POST", body });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  const inputClass =
    "w-full px-5.5 py-4.5 border border-[#e4e4e4] rounded-[14px] text-[15px] bg-white outline-none transition-colors focus:border-red focus:bg-white placeholder-[#999]";

  return (
    <section className="pt-30 pb-20 relative overflow-hidden">
      {/* Red circle blur */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "rgba(239,43,45,0.05)",
          top: -180,
          right: -100,
          filter: "blur(30px)",
        }}
      />

      <div className="mx-auto w-[90%] max-w-325 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
        {/* Left */}
        <div className="flex-1">
          <h4 className="text-[15px] text-red tracking-[2px] mb-5">
            CONTACT RENT MY HOME
          </h4>
          <h1 className="font-serif font-bold text-black leading-[1.05] mb-7.5 text-[42px] sm:text-[58px] lg:text-[72px]">
            Let&apos;s <span className="text-red">Talk. </span>
            We&apos;re <span className="text-red">Ready.</span>
          </h1>
          <p className="text-[#555] leading-loose text-lg mb-10 max-w-162.5">
            Whether you&apos;re a landlord looking for stress-free property
            management, a tenant needing support, or an investor ready to scale
            your portfolio — our team is here to help with fast communication
            and real support.
          </p>

          {/* 2×2 info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6.25">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-7.5 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="font-serif font-bold text-[22px] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#666] text-base leading-[1.8] whitespace-pre-line">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1 w-full">
          <div className="bg-white p-12.5 rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="font-serif font-bold text-[42px] mb-4">
                  Message Sent!
                </h2>
                <p className="text-[#666] leading-[1.8] mb-8">
                  Thanks for reaching out. We&apos;ll get back to you as quickly
                  as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-red text-white font-semibold px-9.5 py-5 rounded-[14px] hover:-translate-y-0.75 transition-transform"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif font-bold text-[42px] mb-3.75">
                  Send Us A Message
                </h2>
                <p className="text-[#666] leading-[1.8] mb-8.75">
                  Fill out the form below and our team will get back to you as
                  quickly as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name *"
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5.5">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5.5">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number *"
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5.5">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="" disabled hidden>
                        Select Inquiry Type *
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Rental Appraisal">Rental Appraisal</option>
                      <option value="Tenant Application">
                        Tenant Application
                      </option>
                    </select>
                  </div>

                  <div className="mb-5.5">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your property or inquiry..."
                      className={`${inputClass} h-40 resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-red text-sm text-center mb-4">{error}</p>
                  )}

                  <p className="text-[#999] text-sm mb-5">
                    * Indicates mandatory fields
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border-none bg-red text-white py-5 rounded-[14px] text-base font-semibold cursor-pointer hover:-translate-y-0.75 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

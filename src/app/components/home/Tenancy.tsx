"use client";

import { useState } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function Tenancy() {
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = () => {
    window.open(
      "https://opnform.com/forms/pre-tenancy-application-form-hweeul-1",
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="tenancy"
      className="flex flex-col gap-10 items-center py-20 bg-blue-600"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Apply for Tenancy
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ready to find your perfect home? Fill out our tenancy application
              form online. We'll get back to you quickly.
            </p>

            <div className="space-y-4">
              {[
                "Simple online application form",
                "Takes just a few minutes",
                "No downloads required",
                "Response within 24-48 hours",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-white border">
            {submitted ? (
              <div className="text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Application Opened!
                </h3>
                <p className="text-gray-700 mb-3">
                  Your application form has opened in a new tab. Once submitted,
                  we'll be in touch within 24-48 hours.
                </p>
                <p className="text-sm text-gray-500 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  💡 Reminder: make sure to hit <strong>Submit</strong> on the
                  form in the other tab — your application isn't complete until
                  then.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full flex flex-row justify-center text-white bg-blue-600 text-lg px-3 py-2 rounded-lg border-2 hover:bg-blue-700 transition-colors hover:cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Ready to Apply?
                </h3>
                <p className="text-gray-600">
                  Our application form will only takes a few minutes to
                  complete. You should have the following information ready:
                </p>

                <div className="space-y-3">
                  {[
                    "Personal & contact details",
                    "Employment information",
                    "Rental history",
                    "References",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-gray-700 text-sm">
                        {index + 1}. {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleApplyClick}
                  className="w-full flex flex-row justify-center items-center text-white bg-blue-600 text-lg px-6 py-3 rounded-lg border-2 gap-2 hover:bg-blue-700 transition-colors hover:cursor-pointer"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Start Application</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  You'll be taken to our secure form. Your details are kept
                  private and never shared.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

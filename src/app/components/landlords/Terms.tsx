import React from "react";

export default function Terms() {
  return (
    <div>
      {/* Terms & Conditions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-black mb-12">
            Terms & Conditions*
          </h2>

          <div className="space-y-4 text-sm">
            {[
              "The offer becomes effective only once you or your referred landlord signs a property management agreement with us.",
              "The offer will be applicable only after the property has been successfully rented out.",
              "The property (or your referred landlord's property) must remain under our management for a minimum period of 3 months.",
              "Granny flats or sleepout units are not included as part of this offer.",
              "Casual or short-term rental agreements are excluded from this promotion.",
            ].map((term, idx) => (
              <div key={idx} className="flex gap-2 p-2">
                <span className="text-red font-bold shrink-0">•</span>
                <p className="text-gray-700">{term}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 italic">
            *For precise terms and conditions, please contact our team. This
            offer is subject to approval and verification.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Hero() {
  return (
    <div className="bg-red">
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-red">
          <div className="absolute inset-0 bg-linear-to-br from-black via-[#1b1b1b] to-red/20" />
          <div className="absolute inset-0 road-texture" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div>
            <h1 className="max-w-4xl text-white text-5xl font-serif font-bold tracking-tight sm:text-6xl lg:text-7xl">
              For Tenants
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

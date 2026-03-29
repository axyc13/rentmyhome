"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-linear-to-br from-[#1b1b1b] via-black/55 to-[#ad0000]/80"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        {/* Animated Road Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-20 bg-white/30 rounded-full animate-road-line"
                style={{
                  bottom: `${i * 15}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="text-lg lg:text-2xl text-white font-bold tracking-wide">
            Road To
          </span>
        </div>
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 tracking-tight">
          <span className="text-red">0%</span> Property
          <br />
          Management Fees*
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Exclusive and customised services that put landlords and tenants
          first. Experience the journey to hassle-free property management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            className="flex flex-row text-white hover:bg-[#ad0000] text-lg group px-6 py-4 rounded-lg border-2 gap-1"
            href="/landlords"
          >
            <p>I&apos;m a Landlord</p>
            <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            className="flex flex-row text-white hover:bg-[#ad0000] text-lg group px-6 py-4 rounded-lg border-2 gap-1"
            href="https://www.facebook.com/rentmyhomeltd"
            target="_blank"
          >
            <p>I&apos;m a Tenant</p>
            <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes road-line {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-50%) translateY(100vh);
            opacity: 0;
          }
        }
        .animate-road-line {
          animation: road-line 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

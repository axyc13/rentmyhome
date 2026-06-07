"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.avif";
import { Menu, X } from "lucide-react";
import { useAppraisal } from "./AppraisalProvider";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Landlord Hub", href: "/team" },
  { name: "Tenant Hub", href: "/tenants" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { open } = useAppraisal();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Rent My Home logo" className="w-25" />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[0.95rem] font-medium text-black transition-colors hover:text-red"
            >
              {item.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => open()}
            className="rounded-xl bg-[#ee2125] hover:cursor-pointer hover:bg-black px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            Get Free Appraisal
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="space-y-2 px-6 py-5">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-black transition-colors hover:text-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <div className="pt-3">
              <button
                type="button"
                className="block rounded-xl bg-red px-5 py-3 text-center text-sm font-semibold text-white hover:cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  open();
                }}
              >
                Get Free Appraisal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

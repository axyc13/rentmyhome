"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.avif";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/landlords" },
  { name: "About Us", href: "/aboutus" },
  { name: "Landlord Hub", href: "/landlords" },
  { name: "Tenant Hub", href: "/tenants" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault();
                  handleNavigation(item.href);
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/landlords"
            className="rounded-xl bg-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Get Free Appraisal
          </Link>
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
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <div className="pt-3">
              <Link
                href="/landlords"
                className="block rounded-xl bg-red px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Appraisal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.avif";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "For Tenants",
    href: "#tenancy",
  },
  { name: "For Landlords", href: "#landlords" },
  { name: "Our Team", href: "/placeholder" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-30" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black hover:underline transition-colors"
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault();
                  const element = document.getElementById(item.href.slice(1));
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a className="flex items-center gap-2 text-sm text-black hover:underline transition-colors">
            <Phone className="h-4 w-4" />
            <span>+64 22 543 4533</span>
          </a>
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-black hover:text-black transition-colors"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.href.slice(1),
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.avif";
import { ChevronDown, Menu, X } from "lucide-react";
import { useAppraisal } from "./AppraisalProvider";

type NavItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/story" },
      { name: "Our Team", href: "/team" },
    ],
  },
  { name: "Our Services", href: "/services" },
  { name: "Landlord Hub", href: "/" },
  { name: "Tenant Hub", href: "/tenants" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { open } = useAppraisal();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Rent My Home logo" className="w-25" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[0.95rem] font-medium text-black transition-colors hover:text-red"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Link>

                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-48 rounded-[18px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] py-3 overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-5 py-3 text-sm font-medium text-black hover:bg-[#f8f8f8] hover:text-red transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-[0.95rem] font-medium text-black transition-colors hover:text-red"
              >
                {item.name}
              </Link>
            ),
          )}
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="space-y-1 px-6 py-5">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-black transition-colors hover:text-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 border-l border-black/10 pl-4 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-1.5 text-sm text-black/70 hover:text-red transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
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

"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/landlords" },
  { name: "About", href: "/aboutus" },
  { name: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-18">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-3xl font-serif font-bold text-white">
                Rent My Home
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-8 text-white/72">
              You <span className="font-semibold text-red">own. </span>
              We <span className="font-semibold text-red">manage.</span>
              <br />
              Trusted by 300+ landlords across Auckland and Waikato with modern
              property management solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-serif font-bold">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/72 transition-colors hover:text-white"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.getElementById(
                          link.href.slice(1),
                        );
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-serif font-bold">Contact</h3>
            <ul className="space-y-4 text-white/72">
              <li>
                <a
                  href="tel:+64224530098"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  +64 22 453 0098
                </a>
              </li>
              <li>
                <a
                  href="mailto:receptionauck@rentmyhome.co.nz"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  info@rentmyhome.co.nz
                </a>
              </li>
              <li>Auckland and Waikato, New Zealand</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/45">
          <div className="flex justify-center gap-6 mb-3">
            <Link href="/privacy" className="hover:text-white/75 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/75 transition-colors">
              Terms of Use
            </Link>
            <Link href="/faq" className="hover:text-white/75 transition-colors">
              FAQ
            </Link>
          </div>
          © 2026 Rent My Home. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

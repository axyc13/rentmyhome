"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  landlords: [
    { name: "Rent Appraisal", href: "#landlords" },
    { name: "Why Choose Us", href: "/placeholder" },
  ],
  tenants: [
    {
      name: "Available Rentals",
      href: "https://www.facebook.com/acuberentalsltd/",
      target: "_blank",
    },
    { name: "Apply", href: "#tenancy" },
  ],
  company: [
    { name: "About Us", href: "/placeholder" },
    { name: "Our Team", href: "/placeholder" },
    { name: "Locations", href: "/placeholder" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/rentmyhomeltd",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/rentmyhome_acuberentals?igsh=cGJzMXJ2dXJnbnpj",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/a-cube-rentals-ltd/about/",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black scroll-mt-20">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-serif font-bold text-white">
                Rent My Home
              </span>
            </Link>
            <p className="text-white text-sm mb-6 max-w-xs">
              Professional property management services across Auckland and
              Waikato. Your roadmap to 0% management fees.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a className="flex items-center gap-3 text-white text-sm hover:underline transition-colors">
                <Phone className="h-4 w-4" />
                +64 22 453 0098
              </a>
              <a
                href="mailto:receptionauckland@rentmyhome.co.nz"
                className="flex items-center gap-3 text-white text-sm hover:underline transition-colors"
              >
                <Mail className="h-4 w-4" />
                receptionauckland@rentmyhome.co.nz
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Landlords</h4>
            <ul className="space-y-3">
              {footerLinks.landlords.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Tenants</h4>
            <ul className="space-y-3">
              {footerLinks.tenants.map((link) => (
                <li key={link.name}>
                  {link.target === "_blank" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white text-sm hover:underline transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const element = document.getElementById(
                            link.href.slice(1),
                          );
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm">
              © 2026 Rent My Home. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/placeholder"
                className="text-white text-sm hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/placeholder"
                className="text-white text-sm hover:underline transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

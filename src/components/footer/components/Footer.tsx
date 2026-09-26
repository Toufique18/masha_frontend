"use client";

import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  product: [
    { label: "How it work", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Risk Disclosure", href: "/risk-disclosure" },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full bg-[#E4DACD] dark:bg-[#1A1817] py-16 sm:py-20 lg:py-24 border-t border-[#183A3A]/10 dark:border-white/10 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-10 md:gap-14 lg:gap-20">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <h2
              className="text-[#183A3A] dark:text-[#EAE6DF] text-base sm:text-lg font-bold tracking-[0.08em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
              }}
            >
              PROP TRADER BODY
            </h2>
            <p
              className="text-[#6B5C63] dark:text-[#A89CA2] text-xs sm:text-[13.5px] leading-relaxed max-w-xs"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
                fontWeight: 400,
                lineHeight: "155%",
              }}
            >
              A risk-first AI trading agent for prop-firm futures accounts.
              Educational and risk-management decision support only.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div className="flex flex-col">
            <h3
              className="text-[#183A3A] dark:text-[#EAE6DF] text-base sm:text-lg font-medium mb-4"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
              }}
            >
              Product
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {FOOTER_LINKS.product.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#6B5C63] dark:text-[#A89CA2] hover:text-[#183A3A] dark:hover:text-[#EAE6DF] text-xs sm:text-[13.5px] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-newsreader), Newsreader, serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex flex-col">
            <h3
              className="text-[#183A3A] dark:text-[#EAE6DF] text-base sm:text-lg font-medium mb-4"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
              }}
            >
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#6B5C63] dark:text-[#A89CA2] hover:text-[#183A3A] dark:hover:text-[#EAE6DF] text-xs sm:text-[13.5px] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-newsreader), Newsreader, serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";

const PARTNERS = [
  { name: "TOPSTEP", href: "#" },
  { name: "APEX", href: "#" },
  { name: "FTMO", href: "#" },
  { name: "FUNDEDNEXT", href: "#" },
  { name: "THE 5%ERS", href: "#" },
  { name: "E8 MARKETS", href: "#" },
];

export const Partner = () => {
  return (
    <section className="w-full bg-[#F4EFE9] dark:bg-[#141313] border-y border-[#183A3A]/10 dark:border-white/10 py-10 sm:py-14 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <p
          className="text-center text-[#6B5C63] dark:text-[#A89CA2] text-sm sm:text-[15px] mb-6 sm:mb-8"
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontWeight: 400,
            lineHeight: "140%",
            letterSpacing: "0%",
          }}
        >
          Built to work with your prop firm&apos;s rulebook
        </p>

        {/* Partner Logos / Brands */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
          {PARTNERS.map((partner) => (
            <span
              key={partner.name}
              className="text-[#6B5C63] dark:text-[#A89CA2] text-sm sm:text-base tracking-[0.08em] font-medium transition-colors duration-200 hover:text-[#183A3A] dark:hover:text-[#EAE6DF]"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
                lineHeight: "140%",
              }}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;

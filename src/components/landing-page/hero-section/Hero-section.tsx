"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/assets/banner/bgImage.png";
import dashboardView from "@/assets/banner/Dashboardview.png";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4EFE9] dark:bg-[#141313] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-20">
      {/* Background Chart Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={bgImage}
          alt="Chart Background"
          fill
          priority
          className="object-cover object-center opacity-70 dark:opacity-15 mix-blend-multiply dark:mix-blend-luminosity"
        />
        {/* Subtle radial gradient overlay for focus */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#F4EFE9]/30 to-[#F4EFE9] dark:via-[#141313]/30 dark:to-[#141313]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#183A3A] dark:text-[#EAE6DF] text-center max-w-4xl mx-auto"
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: "0%",
          }}
        >
          Risk first. Rules visible. <br className="hidden sm:inline" />
          Decisions auditable.
        </h1>

        {/* Subtitle / Description */}
        <p
          className="mt-4 sm:mt-5 max-w-2xl mx-auto text-center text-[#6B5C63] dark:text-[#B3A6AB]"
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            letterSpacing: "0%",
          }}
        >
          An AI trading agent for prop-firm futures accounts. Every entry, hold,
          and exit is checked against your firm&apos;s exact rules before it
          happens - and every decision is traceable, start to finish.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center bg-[#183A3A] text-[#F4EFE9] hover:bg-[#122b2b] dark:bg-[#58bd91] dark:text-[#141313] dark:hover:bg-[#48a87f] px-5 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm"
          >
            Open dashboard
          </Link>
          <Link
            href="/#how-it-works"
            className="inline-flex items-center justify-center border border-[#183A3A]/25 text-[#183A3A] hover:bg-[#183A3A]/5 dark:border-white/20 dark:text-[#EAE6DF] dark:hover:bg-white/5 px-5 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
          >
            See how it work
          </Link>
        </div>

        {/* Dashboard Preview Image */}
        <div className="relative mt-12 sm:mt-16 mx-auto max-w-5xl lg:max-w-6xl">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2DDD3]/80 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.07)] bg-white/40 dark:bg-black/20 backdrop-blur-xs">
            <Image
              src={dashboardView}
              alt="Dashboard Preview"
              width={1200}
              height={720}
              priority
              className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

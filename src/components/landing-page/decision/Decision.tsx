"use client";

import React from "react";
import Image from "next/image";
import globeBg from "@/assets/landingPage/glove.png";

const STEPS = [
  {
    number: "1",
    title: "Rule check",
    description: "Validated against your firm's exact, versioned rule pack.",
  },
  {
    number: "2",
    title: "Risk check",
    description:
      "Dollar risk calculated from live drawdown buffer and daily limits.",
  },
  {
    number: "3",
    title: "Safety check",
    description:
      "Connection health, data freshness, and duplicate-order protection.",
  },
  {
    number: "4",
    title: "Order outcome",
    description:
      "Logged with a full trace - filled, rejected, or held, and why.",
  },
];

export const Decision = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-[#F4EFE9] dark:bg-[#141313] py-20 sm:py-28 lg:py-32"
    >
      {/* Globe Wireframe Background Image */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 z-0 pointer-events-none select-none flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-full min-h-[400px]">
          <Image
            src={globeBg}
            alt="Globe Network Background"
            fill
            priority
            className="object-contain object-bottom opacity-60 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Top Tagline */}
        <div className="text-center mb-4 sm:mb-5">
          <span
            className="text-[#2589FF] font-semibold text-xs sm:text-[13px] tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-newsreader), Newsreader, serif",
            }}
          >
            HOW IT WORK
          </span>
        </div>

        {/* Main Headline */}
        <h2
          className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#183A3A] dark:text-[#EAE6DF] text-center max-w-3xl mx-auto"
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "140%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Four checks, every single decision.
        </h2>

        {/* Subtitle */}
        <p
          className="mt-4 sm:mt-5 max-w-2xl mx-auto text-center text-[#6B5C63] dark:text-[#B3A6AB]"
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Nothing reaches the market until it clears all four - and every stage
          is logged.
        </p>

        {/* 4 Steps Flow */}
        <div className="relative mt-16 sm:mt-24">
          {/* Horizontal Connecting Line behind circles (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] bg-[#E2DDD3] dark:bg-white/10 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 relative z-10">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle Number */}
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-[#2589FF] bg-[#F4EFE9] dark:bg-[#1A1918] flex items-center justify-center text-[#2589FF] text-lg sm:text-xl font-normal transition-transform duration-300 group-hover:scale-105 shadow-xs">
                    <span
                      style={{
                        fontFamily: "var(--font-newsreader), Newsreader, serif",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  className="text-[#183A3A] dark:text-[#EAE6DF] mb-2.5"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className="text-[#6B5C63] dark:text-[#B3A6AB] max-w-[220px] mx-auto text-center"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#6B5C63",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decision;

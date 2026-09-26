"use client";

import React from "react";
import Image from "next/image";
import problemBg from "@/assets/problem/problem-section.png";

const PROBLEMS = [
  {
    tag: "THE PROBLEM",
    title: "A rule breach ends the account instantly",
    description: (
      <>
        The <span className="text-[#183A3A] dark:text-[#EAE6DF] font-medium">risk engine checks every trade</span> against your firm&apos;s exact daily loss and drawdown limits before it&apos;s placed - not after.
      </>
    ),
  },
  {
    tag: "THE PROBLEM",
    title: "Every firm's rulebook is different",
    description:
      "Versioned, firm-agnostic rule packs mean the same engine adapts to Topstep, Apex, or any program without a rebuild.",
  },
  {
    tag: "THE PROBLEM",
    title: "You can't see why a decision was made",
    description:
      "Every action leaves a full audit trail - rule check, risk check, safety check, order outcome - so nothing is a black box.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4EFE9] dark:bg-[#141313] py-20 sm:py-28 lg:py-32">
      {/* Background Chart Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={problemBg}
          alt="Problem Section Background"
          fill
          priority
          className="object-cover object-center opacity-65 dark:opacity-15 mix-blend-multiply dark:mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#F4EFE9]/20 to-[#F4EFE9] dark:via-[#141313]/20 dark:to-[#141313]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Top Tagline Badge */}
        <div className="text-center mb-4 sm:mb-5">
          <span
            className="text-[#2589FF] font-semibold text-xs sm:text-[13px] tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-newsreader), Newsreader, serif",
            }}
          >
            THE REAL PROBLEM
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
          Passing isn&apos;t the hard part. Staying inside the rules is.
        </h2>

        {/* Sub-paragraph */}
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
          Accounts rarely die from bad analysis. They die from account rules,
          drawdown limits, and time pressure colliding in real time - while a
          trader is mid-decision.
        </p>

        {/* 3-Column Problem Grid */}
        <div className="mt-16 sm:mt-20 border-t border-b border-[#E2DDD3]/90 dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2DDD3]/90 dark:divide-white/10">
            {PROBLEMS.map((problem, index) => (
              <div
                key={index}
                className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10 flex flex-col justify-start"
              >
                {/* Red Problem Tag */}
                <span
                  className="text-[#E5534B] dark:text-[#FF6467] uppercase mb-4"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {problem.tag}
                </span>

                {/* Subheading / Title */}
                <h3
                  className="text-[#183A3A] dark:text-[#EAE6DF] mb-3"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <div
                  className="text-[#6B5C63] dark:text-[#B3A6AB]"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    color: "#6B5C63",
                  }}
                >
                  {problem.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

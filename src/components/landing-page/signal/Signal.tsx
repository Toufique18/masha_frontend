"use client";

import React from "react";

const STATS = [
  {
    value: "42,918",
    label: "Rule checks run today",
  },
  {
    value: "99.98%",
    label: "Engine up-time this month",
  },
  {
    value: "12+",
    label: "Prop firms supported",
  },
  {
    value: "100%",
    label: "Of decisions with a full audit trail",
  },
];

const FEATURES = [
  {
    title: "Deterministic risk engine",
    description:
      "Drawdown, daily loss, and position sizing run in tested code - reproducible every time, regardless of how the AI phrases it.",
  },
  {
    title: "Firm-agnostic rule packs",
    description:
      "Versioned rules with source and effective date. Support a new firm by loading a rule pack - no core rewrite.",
  },
  {
    title: "Full audit trail",
    description:
      "Every decision traces back to the rule version, account state, and tool outputs that produced it.",
  },
  {
    title: "Emergency kill switch",
    description:
      "Flatten every position and disable the engine instantly, whenever you want control back.",
  },
  {
    title: "Multi-instrument support",
    description:
      "MES, MNQ, MYM, and M2K - with dated contracts resolved automatically, never hard-coded.",
  },
  {
    title: "Evaluation - Funded, same engine",
    description:
      "Pass your evaluation and activate the funded phase without switching systems.",
  },
];

export const Signal = () => {
  return (
    <section id="features" className="w-full bg-[#F4EFE9] dark:bg-[#141313] transition-colors duration-200">
      {/* 1. Statistics Bar */}
      <div className="w-full border-y border-[#183A3A]/10 dark:border-white/10 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#183A3A]/10 dark:divide-white/10 gap-y-8 md:gap-y-0">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-4 md:pt-0"
              >
                <span
                  className="text-3xl sm:text-4xl lg:text-[42px] text-[#183A3A] dark:text-[#EAE6DF] font-normal tracking-tight mb-2.5"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    lineHeight: "110%",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#6B5C63] dark:text-[#A89CA2] text-xs sm:text-[13px]"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    lineHeight: "140%",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Features Grid ("WHAT YOU GET") */}
      <div className="py-20 sm:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tagline */}
          <div className="text-center mb-4 sm:mb-5">
            <span
              className="text-[#2589FF] font-semibold text-xs sm:text-[13px] tracking-[0.18em] uppercase"
              style={{
                fontFamily: "var(--font-newsreader), Newsreader, serif",
              }}
            >
              WHAT YOU GET
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[38px] text-[#183A3A] dark:text-[#EAE6DF] text-center max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-newsreader), Newsreader, serif",
              fontWeight: 500,
              lineHeight: "135%",
              letterSpacing: "0%",
            }}
          >
            Built for account survival, not signals
          </h2>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-5 max-w-2xl mx-auto text-center text-[#6B5C63] dark:text-[#B3A6AB] text-sm sm:text-[14px]"
            style={{
              fontFamily: "var(--font-newsreader), Newsreader, serif",
              fontWeight: 400,
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            Accounts rarely die from bad analysis. They die from account rules,
            drawdown limits, and time pressure colliding in real time - while a
            trader is mid-decision.
          </p>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-[#EFE8DD]/75 dark:bg-[#1C1A19] border border-[#E2DDD3] dark:border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-start transition-all duration-200 hover:border-[#183A3A]/25 dark:hover:border-white/20 hover:shadow-xs"
              >
                <h3
                  className="text-base sm:text-[17px] text-[#183A3A] dark:text-[#EAE6DF] font-medium mb-2.5"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    lineHeight: "135%",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#6B5C63] dark:text-[#A89CA2] text-xs sm:text-[13.5px] leading-relaxed"
                  style={{
                    fontFamily: "var(--font-newsreader), Newsreader, serif",
                    fontWeight: 400,
                    lineHeight: "145%",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signal;

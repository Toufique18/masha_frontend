"use client";

import React from "react";

// Realistic candlestick data replicating the image's chart waveform
const CANDLESTICKS = [
  // Rise from bottom left
  { x: 20, high: 220, low: 265, open: 260, close: 235, type: "bull" },
  { x: 32, high: 195, low: 245, open: 240, close: 210, type: "bull" },
  { x: 44, high: 140, low: 220, open: 215, close: 155, type: "bull" },
  { x: 56, high: 130, low: 180, open: 155, close: 170, type: "bear" },
  { x: 68, high: 125, low: 160, open: 150, close: 135, type: "bull" },
  { x: 80, high: 70, low: 155, open: 140, close: 95, type: "bull" },
  { x: 92, high: 105, low: 160, open: 110, close: 145, type: "bear" },
  { x: 104, high: 90, low: 140, open: 135, close: 105, type: "bull" },
  { x: 116, high: 85, low: 130, open: 110, close: 95, type: "bull" },
  { x: 128, high: 95, low: 145, open: 100, close: 130, type: "bear" },
  { x: 140, high: 90, low: 135, open: 125, close: 105, type: "bull" },

  // Heavy drop down the middle
  { x: 152, high: 100, low: 185, open: 105, close: 175, type: "bear" },
  { x: 164, high: 165, low: 230, open: 175, close: 220, type: "bear" },
  { x: 176, high: 215, low: 260, open: 220, close: 250, type: "bear" },
  { x: 188, high: 245, low: 285, open: 250, close: 275, type: "bear" },

  // Bottom consolidation & spike
  { x: 200, high: 270, low: 310, open: 275, close: 300, type: "bear" },
  { x: 212, high: 260, low: 305, open: 295, close: 270, type: "bull" },
  { x: 224, high: 250, low: 290, open: 270, close: 280, type: "bear" },
  { x: 236, high: 275, low: 320, open: 280, close: 310, type: "bear" },
  { x: 248, high: 265, low: 355, open: 305, close: 275, type: "bull" }, // lowest bottom wick
  { x: 260, high: 240, low: 300, open: 280, close: 250, type: "bull" },

  // Rebound curve to the right
  { x: 272, high: 220, low: 270, open: 255, close: 230, type: "bull" },
  { x: 284, high: 230, low: 275, open: 235, close: 265, type: "bear" },
  { x: 296, high: 218, low: 268, open: 260, close: 240, type: "bull" },
  { x: 308, high: 215, low: 260, open: 240, close: 225, type: "bull" },
];

export const TradingChartArt: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[480px] lg:min-h-[600px] flex flex-col justify-between p-8 sm:p-12 xl:p-16 select-none bg-[#F4EFE9] text-[#1c1917]">
      {/* Top Meta Labels */}
      <div className="flex items-start justify-between font-space-grotesk tracking-tight">
        <div className="flex flex-col leading-none">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a]">
            US500
          </span>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a] mt-0.5">
            SHORT
          </span>
        </div>
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a]">
          11PP
        </div>
      </div>

      {/* Candlestick Chart SVG Graphic */}
      <div className="my-auto py-6 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 330 380"
          className="w-full max-w-[380px] h-auto drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {CANDLESTICKS.map((candle, idx) => {
            const isBull = candle.type === "bull";
            const topY = Math.min(candle.open, candle.close);
            const bodyHeight = Math.max(Math.abs(candle.open - candle.close), 4);
            const candleWidth = 7.5;

            return (
              <g key={idx} className="transition-all duration-300 hover:opacity-80">
                {/* Wick line */}
                <line
                  x1={candle.x + candleWidth / 2}
                  y1={candle.high}
                  x2={candle.x + candleWidth / 2}
                  y2={candle.low}
                  stroke="#232326"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Candle Body */}
                <rect
                  x={candle.x}
                  y={topY}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={isBull ? "#e2b39b" : "#232326"}
                  stroke="#232326"
                  strokeWidth="1"
                  rx="0.5"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Meta Labels */}
      <div className="flex items-end justify-between font-space-grotesk">
        <span className="text-sm sm:text-base font-semibold tracking-wider text-[#1a1a1a] uppercase">
          REDALERT TEAM
        </span>
        <span className="text-sm sm:text-base font-medium tracking-tight text-[#1a1a1a]">
          30.04
        </span>
      </div>
    </div>
  );
};

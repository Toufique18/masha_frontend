"use client";

import React, { useState } from "react";
import { MOCK_CANDLE_DATA } from "../../../constants/dashboard.mock";

export const TradingCandleChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Chart coordinate mapping
  // SVG viewport: width = 760, height = 360
  const chartWidth = 760;
  const chartHeight = 300;
  const paddingLeft = 50;
  const paddingRight = 60;
  const paddingTop = 30;
  const paddingBottom = 40;

  const minPrice = 5775;
  const maxPrice = 5905;
  const priceRange = maxPrice - minPrice;

  const getY = (price: number) => {
    return (
      paddingTop +
      (1 - (price - minPrice) / priceRange) * (chartHeight - paddingTop - paddingBottom)
    );
  };

  const candleCount = MOCK_CANDLE_DATA.length;
  const availableWidth = chartWidth - paddingLeft - paddingRight;
  const stepX = availableWidth / (candleCount - 1);

  // Generate path points for MA10 and MA20
  const ma10Points = MOCK_CANDLE_DATA.map((c, i) => {
    const x = paddingLeft + i * stepX;
    const y = getY(c.ma10 || c.close);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  const ma20Points = MOCK_CANDLE_DATA.slice(6).map((c, i) => {
    const x = paddingLeft + (i + 6) * stepX;
    const y = getY(c.ma20 || c.close - 10);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  const yPriceLabels = [5890, 5875, 5850, 5825, 5800, 5775];
  const timeLabels = [
    { label: "08:30", xPct: 0 },
    { label: "08:55", xPct: 0.14 },
    { label: "09:20", xPct: 0.28 },
    { label: "09:45", xPct: 0.42 },
    { label: "10:10", xPct: 0.56 },
    { label: "10:35", xPct: 0.7 },
    { label: "11:00", xPct: 0.84 },
    { label: "11:20", xPct: 0.94 },
    { label: "12:00", xPct: 1 },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-4 sm:p-5 font-urbanist shadow-xs">
      {/* Top Legend & Price Tag */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-xs font-semibold text-[#78716c] font-urbanist">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#3b82f6]" />
            <span>MA10</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#f59e0b]" />
            <span>MA20</span>
          </div>
        </div>

        {/* Current Active Price Marker */}
        <div className="bg-[#183935] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs font-urbanist">
          5,901.75
        </div>
      </div>

      {/* SVG Interactive Chart */}
      <div className="w-full overflow-x-auto select-none">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto min-w-[600px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal Price Grid Lines & Labels */}
          {yPriceLabels.map((price) => {
            const y = getY(price);
            const isTarget = price === 5890;
            return (
              <g key={price}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke={isTarget ? "#b0a89d" : "#f0ebe3"}
                  strokeWidth="1"
                  strokeDasharray={isTarget ? "4 4" : undefined}
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  className="fill-[#78716c] text-[10px] font-medium font-urbanist"
                >
                  {price.toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* MA20 Line (Orange) */}
          <path
            d={ma20Points}
            stroke="#f59e0b"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* MA10 Line (Dark Teal / Blue) */}
          <path
            d={ma10Points}
            stroke="#1e3a35"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Candlesticks */}
          {MOCK_CANDLE_DATA.map((candle, idx) => {
            const xCenter = paddingLeft + idx * stepX;
            const yHigh = getY(candle.high);
            const yLow = getY(candle.low);
            const yOpen = getY(candle.open);
            const yClose = getY(candle.close);

            const isBear = candle.type === "bear";
            const candleBodyTop = Math.min(yOpen, yClose);
            const candleBodyHeight = Math.max(Math.abs(yOpen - yClose), 4);
            const candleWidth = 9;

            const isHovered = hoveredIndex === idx;

            return (
              <g
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer transition-opacity"
                opacity={hoveredIndex !== null && !isHovered ? 0.6 : 1}
              >
                {/* Wick */}
                <line
                  x1={xCenter}
                  y1={yHigh}
                  x2={xCenter}
                  y2={yLow}
                  stroke={isBear ? "#ef4444" : "#1e3a35"}
                  strokeWidth="1.2"
                />

                {/* Candle Body */}
                <rect
                  x={xCenter - candleWidth / 2}
                  y={candleBodyTop}
                  width={candleWidth}
                  height={candleBodyHeight}
                  fill={isBear ? "#ef4444" : "#1e3a35"}
                  stroke={isBear ? "#dc2626" : "#112421"}
                  strokeWidth="0.8"
                  rx="0.5"
                />
              </g>
            );
          })}

          {/* X Axis Time Labels */}
          {timeLabels.map((item, idx) => {
            const x = paddingLeft + item.xPct * availableWidth;
            return (
              <text
                key={idx}
                x={x}
                y={chartHeight - 10}
                textAnchor="middle"
                className="fill-[#78716c] text-[10px] font-medium font-urbanist"
              >
                {item.label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

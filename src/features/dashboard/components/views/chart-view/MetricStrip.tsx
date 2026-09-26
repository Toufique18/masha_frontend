"use client";

import React from "react";
import { MOCK_PRICE_QUOTE } from "../../../constants/dashboard.mock";

export const MetricStrip: React.FC = () => {
  const metrics = [
    { label: "Tick size", value: MOCK_PRICE_QUOTE.secondaryTickSize },
    { label: "Tick value", value: `$${MOCK_PRICE_QUOTE.secondaryTickValue.toFixed(2)}` },
    { label: "Margin req.", value: `$${MOCK_PRICE_QUOTE.secondaryMarginReq}` },
    { label: "Avg volume", value: MOCK_PRICE_QUOTE.avgVolume },
    { label: "Max contr.", value: MOCK_PRICE_QUOTE.secondaryMaxContr },
    { label: "Instrument", value: MOCK_PRICE_QUOTE.secondaryInstrument },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-3 sm:p-4 font-urbanist shadow-xs">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
        {metrics.map((item, idx) => (
          <div key={idx} className="flex flex-col items-start sm:items-center">
            <span className="text-[11px] text-[#78716c] font-medium font-urbanist">
              {item.label}
            </span>
            <span className="text-sm sm:text-base font-bold text-[#1a1a1a] mt-0.5 font-urbanist">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

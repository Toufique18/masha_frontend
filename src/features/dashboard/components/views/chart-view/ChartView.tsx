"use client";

import React from "react";
import { MetricStrip } from "./MetricStrip";
import { PriceQuoteCard } from "./PriceQuoteCard";
import { TradingCandleChart } from "./TradingCandleChart";

export const ChartView: React.FC = () => {
  return (
    <div className="w-full space-y-3 font-urbanist">
      <PriceQuoteCard />
      <MetricStrip />
      <TradingCandleChart />
    </div>
  );
};

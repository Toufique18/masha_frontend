import { TradingChartArt } from "@/features/auth/components/TradingChartArt";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Authentication | AI Trading",
  description: "AI powered trading management software authentication",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#F4EFE9] flex items-stretch">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side: Candlestick Chart Illustration */}
        <div className="hidden lg:flex items-center justify-center border-r border-[#e8e1d7] relative">
          <TradingChartArt />
        </div>

        {/* Right Side: Auth Forms */}
        <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

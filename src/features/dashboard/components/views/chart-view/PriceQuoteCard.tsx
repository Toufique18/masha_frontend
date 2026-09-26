"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { MOCK_PRICE_QUOTE } from "../../../constants/dashboard.mock";

export const PriceQuoteCard: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState("MES · MESU6");

  const contracts = ["MES · MESU6", "ES · ESU6", "NQ · NQU6", "MNQ · MNQU6"];

  return (
    <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-4 sm:p-5 font-urbanist shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Instrument Selector & Live Price */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          {/* Instrument Dropdown */}
          <div className="mb-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ded8cf] bg-[#f7f4ef] text-xs sm:text-sm font-bold text-[#1a1a1a] hover:bg-[#efe9e0] transition-colors cursor-pointer font-urbanist focus:outline-hidden">
                  <span>{selectedContract}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#78716c]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44 font-urbanist bg-white shadow-lg border border-[#e5dfd7] rounded-xl p-1">
                {contracts.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => setSelectedContract(item)}
                    className="cursor-pointer font-medium text-xs sm:text-sm rounded-lg py-1.5"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Big Price & Change */}
          <div className="flex items-baseline gap-2.5 my-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#15803d] tracking-tight font-urbanist">
              {MOCK_PRICE_QUOTE.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#16a34a] font-urbanist">
              +{MOCK_PRICE_QUOTE.change.toFixed(2)} (+{MOCK_PRICE_QUOTE.changePercent.toFixed(2)}%)
            </span>
          </div>

          {/* Session Meta Subtext */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#78716c] font-medium mt-1 font-urbanist">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>{MOCK_PRICE_QUOTE.sessionStatus}</span>
            <span>{MOCK_PRICE_QUOTE.exchange} · {MOCK_PRICE_QUOTE.dateStr}</span>
          </div>
        </div>

        {/* Right: Key Stats Mini Table */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs border-t lg:border-t-0 lg:border-l border-[#f0ebe3] pt-3 lg:pt-0 lg:pl-6">
          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Open</span>
            <span className="font-bold text-[#dc2626] font-urbanist">{MOCK_PRICE_QUOTE.open.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Tick size</span>
            <span className="font-bold text-[#1a1a1a] font-urbanist">{MOCK_PRICE_QUOTE.tickSize}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Low</span>
            <span className="font-bold text-[#dc2626] font-urbanist">{MOCK_PRICE_QUOTE.low.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Tick Value</span>
            <span className="font-bold text-[#1a1a1a] font-urbanist">${MOCK_PRICE_QUOTE.tickValue.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">High</span>
            <span className="font-bold text-[#16a34a] font-urbanist">{MOCK_PRICE_QUOTE.high.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Margin req.</span>
            <span className="font-bold text-[#1a1a1a] font-urbanist">${MOCK_PRICE_QUOTE.marginReq.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Avg Vol(5d)</span>
            <span className="font-bold text-[#1a1a1a] font-urbanist">{MOCK_PRICE_QUOTE.avgVol5d}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#78716c] font-medium font-urbanist">Max contracts</span>
            <span className="font-bold text-[#1a1a1a] font-urbanist">{MOCK_PRICE_QUOTE.maxContracts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

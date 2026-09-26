"use client";

import React from "react";

export const LatencyStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2.5 font-urbanist">
      {/* Topstep GW */}
      <div className="bg-[#edf8f3] border border-[#d6ede2] rounded-xl p-2.5 flex flex-col justify-between">
        <span className="text-[9px] text-[#78716c] font-medium font-urbanist">
          Topstep GW
        </span>
        <span className="text-xs font-bold text-[#16a34a] font-urbanist mt-1">
          4ms
        </span>
      </div>

      {/* Market Data */}
      <div className="bg-[#edf8f3] border border-[#d6ede2] rounded-xl p-2.5 flex flex-col justify-between">
        <span className="text-[9px] text-[#78716c] font-medium font-urbanist">
          Market Data
        </span>
        <span className="text-xs font-bold text-[#16a34a] font-urbanist mt-1">
          Live · 11:20:47
        </span>
      </div>
    </div>
  );
};

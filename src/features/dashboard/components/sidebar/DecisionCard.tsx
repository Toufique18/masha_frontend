"use client";

import React from "react";
import { MOCK_CURRENT_DECISION } from "../../constants/dashboard.mock";

export const DecisionCard: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl border border-[#e7e1d8] p-3 sm:p-3.5 font-urbanist shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-[#8c857b] uppercase tracking-wider font-urbanist">
          CURRENT DECISION
        </span>
        <span className="text-[10px] text-[#8c857b] font-medium font-urbanist">
          {MOCK_CURRENT_DECISION.time}
        </span>
      </div>

      {/* Decision Box */}
      <div className="w-full border border-[#bbf7d0] bg-[#f0fdf4] rounded-md py-1.5 text-center mb-2">
        <span className="text-sm sm:text-base font-bold text-[#16a34a] tracking-wider font-urbanist">
          {MOCK_CURRENT_DECISION.action}
        </span>
      </div>

      {/* Checklist Checks */}
      <div className="flex items-center gap-2.5 mb-1.5 text-[10px] font-semibold text-[#16a34a] font-urbanist">
        <span>Rule ✓</span>
        <span>Risk ✓</span>
        <span>Safety ✓</span>
      </div>

      {/* Reasoning text */}
      <p className="text-[10px] text-[#57534e] leading-relaxed font-normal font-urbanist">
        {MOCK_CURRENT_DECISION.reason}
      </p>
    </div>
  );
};

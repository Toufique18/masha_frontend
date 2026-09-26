"use client";

import React from "react";
import { MOCK_RISK_DATA } from "../../../constants/dashboard.mock";

export const RiskView: React.FC = () => {
  const percentage = (MOCK_RISK_DATA.drawdownUsed / MOCK_RISK_DATA.drawdownLimit) * 100;

  return (
    <div className="w-full space-y-3.5 font-urbanist">
      {/* Main Draw down Card */}
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-5 sm:p-6 font-urbanist shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-4 font-urbanist">
          Draw down
        </h2>

        {/* Progress header */}
        <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
          <span className="text-[#78716c] font-medium font-urbanist">
            Draw down used
          </span>
          <div className="font-urbanist">
            <span className="font-bold text-[#d97706]">
              ${MOCK_RISK_DATA.drawdownUsed.toLocaleString()}
            </span>
            <span className="text-[#78716c] font-medium ml-1">
              of ${MOCK_RISK_DATA.drawdownLimit.toLocaleString()} limit
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3.5 bg-[#e7dfd5] rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#183935] rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Buffer Remaining */}
        <div className="flex items-center justify-between text-xs sm:text-sm pb-6 border-b border-[#f0ebe3]">
          <span className="text-[#78716c] font-medium font-urbanist">
            Buffer remaining before hard stop
          </span>
          <span className="font-bold text-[#0284c7] font-urbanist">
            ${MOCK_RISK_DATA.bufferRemaining.toLocaleString()}
          </span>
        </div>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">
          <div>
            <div className="text-[11px] text-[#78716c] font-medium mb-1 font-urbanist">
              Consecutive losses
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#1a1a1a] font-urbanist">
              {MOCK_RISK_DATA.consecutiveLosses} of {MOCK_RISK_DATA.maxConsecutiveLosses}
            </div>
          </div>

          <div>
            <div className="text-[11px] text-[#78716c] font-medium mb-1 font-urbanist">
              Trades today
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#1a1a1a] font-urbanist">
              {MOCK_RISK_DATA.tradesToday}
            </div>
          </div>

          <div>
            <div className="text-[11px] text-[#78716c] font-medium mb-1 font-urbanist">
              Daily loss used
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#1a1a1a] font-urbanist">
              ${MOCK_RISK_DATA.dailyLossUsed} of ${MOCK_RISK_DATA.dailyLossLimit.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

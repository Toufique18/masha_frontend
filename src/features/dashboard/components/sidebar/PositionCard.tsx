"use client";

import React from "react";
import { MOCK_CURRENT_POSITION } from "../../constants/dashboard.mock";

export const PositionCard: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl border border-[#e7e1d8] p-3 sm:p-3.5 font-urbanist shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="text-[10px] font-semibold text-[#8c857b] uppercase tracking-wider mb-2 font-urbanist">
        CURRENT POSITION
      </div>

      <div className="space-y-2">
        <div>
          <div className="text-[10px] text-[#8c857b] font-medium font-urbanist">Instrument</div>
          <div className="text-xs font-semibold text-[#1a1a1a] font-urbanist mt-0.5">
            {MOCK_CURRENT_POSITION.instrument}
          </div>
        </div>

        <div>
          <div className="text-[10px] text-[#8c857b] font-medium font-urbanist">Side</div>
          <div className="text-xs font-bold text-[#16a34a] font-urbanist mt-0.5">
            {MOCK_CURRENT_POSITION.side}
          </div>
        </div>

        <div>
          <div className="text-[10px] text-[#8c857b] font-medium font-urbanist">Qty</div>
          <div className="text-xs font-semibold text-[#1a1a1a] font-urbanist mt-0.5">
            x {MOCK_CURRENT_POSITION.qty}
          </div>
        </div>

        <div>
          <div className="text-[10px] text-[#8c857b] font-medium font-urbanist">Entry</div>
          <div className="text-xs font-semibold text-[#1a1a1a] font-urbanist mt-0.5">
            {MOCK_CURRENT_POSITION.entryPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
        </div>

        <div className="pt-2 border-t border-[#f0ebe3]">
          <div className="text-[10px] text-[#8c857b] font-medium font-urbanist">Unrealized P&L</div>
          <div className="text-sm font-bold text-[#16a34a] font-urbanist mt-0.5">
            +${MOCK_CURRENT_POSITION.unrealizedPnl.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

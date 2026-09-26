"use client";

import React from "react";
import { MOCK_AUDIT_TRAIL } from "../../constants/dashboard.mock";

export const AuditTrail: React.FC = () => {
  return (
    <div className="w-full font-urbanist">
      <div className="text-[10px] font-semibold text-[#8c857b] uppercase tracking-wider mb-2 font-urbanist">
        AUDIT TRAIL
      </div>

      <div className="space-y-1.5">
        {MOCK_AUDIT_TRAIL.map((item) => {
          const badgeStyles =
            item.status === "FILLED"
              ? "bg-[#f0fdf4] text-[#16a34a] border-[#86efac]"
              : item.status === "WAIT"
              ? "bg-[#fffbeb] text-[#d97706] border-[#fde68a]"
              : "bg-[#fff1f2] text-[#ef4444] border-[#fca5a5]";

          return (
            <div
              key={item.id}
              className="w-full bg-white rounded-lg border border-[#e7e1d8] px-2.5 py-1.5 flex items-center justify-between gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] font-urbanist"
            >
              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-tight ${badgeStyles} font-urbanist`}
                >
                  {item.status}
                </span>
                <span className="text-[9.5px] text-[#8c857b] font-medium font-urbanist">
                  {item.time}
                </span>
              </div>
              <span className="text-[10.5px] font-medium text-[#1a1a1a] truncate text-right font-urbanist">
                {item.details}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

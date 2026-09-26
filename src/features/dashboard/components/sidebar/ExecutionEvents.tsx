"use client";

import React from "react";
import { MOCK_EXECUTION_EVENTS } from "../../constants/dashboard.mock";

export const ExecutionEvents: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl border border-[#e7e1d8] p-3 sm:p-3.5 font-urbanist shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="text-[10px] font-semibold text-[#8c857b] uppercase tracking-wider mb-2 font-urbanist">
        EXECUTION EVENTS
      </div>

      <div className="divide-y divide-[#f2ede6]">
        {MOCK_EXECUTION_EVENTS.map((evt, idx) => {
          const dotColor =
            evt.type === "filled"
              ? "bg-[#16a34a]"
              : evt.type === "held"
              ? "bg-[#d97706]"
              : "bg-[#dc2626]";

          return (
            <div
              key={evt.id}
              className={`flex items-start gap-2 ${
                idx === 0 ? "pb-2" : idx === MOCK_EXECUTION_EVENTS.length - 1 ? "pt-2" : "py-2"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-1 shrink-0`} />
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#1a1a1a] leading-snug font-urbanist">
                  {evt.title}
                </span>
                <span className="text-[9px] text-[#8c857b] font-medium font-urbanist mt-0.5">
                  {evt.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

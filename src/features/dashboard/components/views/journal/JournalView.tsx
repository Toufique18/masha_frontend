"use client";

import React from "react";
import { MOCK_TRADE_JOURNAL } from "../../../constants/dashboard.mock";

export const JournalView: React.FC = () => {
  return (
    <div className="w-full space-y-3.5 font-urbanist">
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-5 font-urbanist shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-4 font-urbanist">
          Trade Journal
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-urbanist min-w-[540px]">
            <thead>
              <tr className="border-b border-[#f0ebe3] text-[#78716c] text-xs font-semibold">
                <th className="py-2.5 font-medium">Time</th>
                <th className="py-2.5 font-medium">Contract</th>
                <th className="py-2.5 font-medium">Side</th>
                <th className="py-2.5 font-medium">Qty</th>
                <th className="py-2.5 font-medium">Entry</th>
                <th className="py-2.5 font-medium">Exit</th>
                <th className="py-2.5 font-medium">P&L</th>
                <th className="py-2.5 font-medium">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f7f4ef] text-xs sm:text-sm">
              {MOCK_TRADE_JOURNAL.map((item) => {
                const isProfitable = item.pnl !== null && item.pnl > 0;
                const isLoss = item.pnl !== null && item.pnl < 0;

                const sideColor =
                  item.side === "Long" ? "text-[#16a34a]" : "text-[#dc2626]";

                return (
                  <tr key={item.id} className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 text-[#1a1a1a] font-medium font-urbanist">
                      {item.time}
                    </td>
                    <td className="py-3.5 text-[#1a1a1a] font-medium font-urbanist">
                      {item.contract}
                    </td>
                    <td className={`py-3.5 font-bold ${sideColor} font-urbanist`}>
                      {item.side}
                    </td>
                    <td className="py-3.5 text-[#1a1a1a] font-medium font-urbanist">
                      {item.qty}
                    </td>
                    <td className="py-3.5 text-[#1a1a1a] font-medium font-urbanist">
                      {item.entry.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 text-[#1a1a1a] font-medium font-urbanist">
                      {item.exit !== null
                        ? item.exit.toLocaleString("en-US", { minimumFractionDigits: 2 })
                        : "-"}
                    </td>
                    <td
                      className={`py-3.5 font-bold font-urbanist ${
                        isProfitable
                          ? "text-[#16a34a]"
                          : isLoss
                          ? "text-[#dc2626]"
                          : "text-[#78716c]"
                      }`}
                    >
                      {item.pnl !== null
                        ? `${item.pnl > 0 ? "+" : ""}$${item.pnl.toFixed(2)}`
                        : "-"}
                    </td>
                    <td className="py-3.5 text-[#78716c] font-medium font-urbanist">
                      {item.source}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

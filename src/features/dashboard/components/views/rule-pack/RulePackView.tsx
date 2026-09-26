"use client";

import React from "react";
import { MOCK_RULE_PACK } from "../../../constants/dashboard.mock";

export const RulePackView: React.FC = () => {
  return (
    <div className="w-full space-y-3.5 font-urbanist">
      {/* Top Banner Card */}
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-5 font-urbanist shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#16a34a] tracking-tight font-urbanist">
              {MOCK_RULE_PACK.name}
            </h2>
            <p className="text-xs text-[#78716c] font-medium mt-1 font-urbanist">
              {MOCK_RULE_PACK.version} · {MOCK_RULE_PACK.effectiveDate} · {MOCK_RULE_PACK.source}
            </p>
          </div>

          <div className="text-xs font-bold text-[#16a34a] font-mono tracking-tight shrink-0">
            {MOCK_RULE_PACK.syncStatus}
          </div>
        </div>
      </div>

      {/* Rules Table Card */}
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-4 sm:p-5 font-urbanist shadow-xs overflow-x-auto">
        <table className="w-full text-left border-collapse font-urbanist">
          <thead>
            <tr className="border-b border-[#f0ebe3] text-[#78716c] text-xs font-semibold">
              <th className="py-2.5 font-medium">Rule</th>
              <th className="py-2.5 font-medium">Value</th>
              <th className="py-2.5 font-medium text-right sm:text-left">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f7f4ef] text-xs sm:text-sm">
            {MOCK_RULE_PACK.rules.map((item) => (
              <tr key={item.id} className="hover:bg-[#faf8f5] transition-colors">
                <td className="py-3.5 font-semibold text-[#1a1a1a] font-urbanist">
                  {item.rule}
                </td>
                <td className="py-3.5 font-medium text-[#44403c] font-urbanist">
                  {item.value}
                </td>
                <td className="py-3.5 font-medium text-[#78716c] text-right sm:text-left font-urbanist">
                  {item.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

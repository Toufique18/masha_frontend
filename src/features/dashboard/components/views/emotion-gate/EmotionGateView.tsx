"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { MOCK_EMOTION_QUESTIONS } from "../../../constants/dashboard.mock";

export const EmotionGateView: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, "yes" | "no" | null>>({
    "eq-1": null,
    "eq-2": null,
    "eq-3": null,
  });

  const handleSelect = (id: string, val: "yes" | "no") => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    if (val === "yes") {
      toast.warning("Safety gate active: Cool down or reduce position sizing recommended.");
    } else {
      toast.success("Gate check passed.");
    }
  };

  return (
    <div className="w-full space-y-3.5 font-urbanist">
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-5 sm:p-6 font-urbanist shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-5 font-urbanist">
          Pre-trade emotion gate
        </h2>

        <div className="divide-y divide-[#f0ebe3]">
          {MOCK_EMOTION_QUESTIONS.map((item) => {
            const currentAnswer = answers[item.id];

            return (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-urbanist"
              >
                <div className="max-w-xl">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1a1a1a] font-urbanist">
                    {item.question}
                  </h3>
                  <p className="text-[11px] text-[#78716c] font-medium mt-1 font-urbanist">
                    {item.subtext}
                  </p>
                </div>

                {/* Yes / No Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSelect(item.id, "yes")}
                    className={`px-4 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer font-urbanist ${
                      currentAnswer === "yes"
                        ? "bg-[#fee2e2] border-[#fca5a5] text-[#dc2626]"
                        : "bg-[#f7f4ef] border-[#ded8cf] text-[#44403c] hover:bg-[#efe9e0]"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelect(item.id, "no")}
                    className={`px-4 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer font-urbanist ${
                      currentAnswer === "no"
                        ? "bg-[#dcfce7] border-[#86efac] text-[#16a34a]"
                        : "bg-[#f7f4ef] border-[#ded8cf] text-[#44403c] hover:bg-[#efe9e0]"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

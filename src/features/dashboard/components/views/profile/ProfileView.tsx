"use client";

import React from "react";

export const ProfileView: React.FC = () => {
  return (
    <div className="w-full space-y-4 font-urbanist">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] font-urbanist tracking-tight">
        Account profile
      </h1>

      {/* Account Profile Card */}
      <div className="w-full bg-white rounded-xl border border-[#e5dfd7] p-5 sm:p-6 font-urbanist shadow-xs">
        {/* 3 Metrics: Prop firm, Account size, Time zone */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <span className="text-xs text-[#78716c] font-medium font-urbanist">
              Prop firm
            </span>
            <div className="text-sm sm:text-base font-semibold text-[#1a1a1a] mt-1 font-urbanist">
              Topstep
            </div>
          </div>

          <div>
            <span className="text-xs text-[#78716c] font-medium font-urbanist">
              Account size
            </span>
            <div className="text-sm sm:text-base font-semibold text-[#1a1a1a] mt-1 font-urbanist">
              $50,000
            </div>
          </div>

          <div>
            <span className="text-xs text-[#78716c] font-medium font-urbanist">
              Time zone
            </span>
            <div className="text-sm sm:text-base font-semibold text-[#1a1a1a] mt-1 font-urbanist">
              America/Vancouver
            </div>
          </div>
        </div>
      </div>

      {/* Account Progression Milestones */}
      <div className="w-full py-8 sm:py-10 px-2 sm:px-6 font-urbanist">
        <div className="relative">
          {/* Connecting Track Line */}
          <div className="absolute top-2 left-6 right-6 h-1.5 bg-[#ded8cf] rounded-full" />

          {/* 3 Milestone checkpoints */}
          <div className="relative z-10 flex items-start justify-between">
            {/* Step 1: Evaluation */}
            <div className="flex flex-col items-start max-w-[180px]">
              <div className="w-4 h-4 rounded-full bg-[#183935] ring-4 ring-[#F4EFE9] mb-3 ml-4" />
              <div className="font-semibold text-xs sm:text-sm text-[#1a1a1a] font-urbanist">
                Evaluation
              </div>
              <div className="text-[11px] text-[#78716c] font-medium mt-0.5 font-urbanist">
                In progress
              </div>
            </div>

            {/* Step 2: Payout activation */}
            <div className="flex flex-col items-center max-w-[200px] text-center">
              <div className="w-4 h-4 rounded-full bg-[#183935] ring-4 ring-[#F4EFE9] mb-3" />
              <div className="font-semibold text-xs sm:text-sm text-[#1a1a1a] font-urbanist">
                Payout activation
              </div>
              <div className="text-[11px] text-[#78716c] font-medium mt-0.5 font-urbanist">
                Requires client action
              </div>
            </div>

            {/* Step 3: Funded */}
            <div className="flex flex-col items-end max-w-[220px] text-right">
              <div className="w-4 h-4 rounded-full bg-[#ded8cf] ring-4 ring-[#F4EFE9] mb-3 mr-4" />
              <div className="font-semibold text-xs sm:text-sm text-[#78716c] font-urbanist">
                Funded
              </div>
              <div className="text-[11px] text-[#78716c] font-medium mt-0.5 font-urbanist">
                Same AI engine, new rule pack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

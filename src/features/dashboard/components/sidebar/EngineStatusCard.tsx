"use client";

import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { toast } from "sonner";
import { MOCK_ENGINE_STATUS } from "../../constants/dashboard.mock";

export const EngineStatusCard: React.FC = () => {
  const [isRunning, setIsRunning] = useState(MOCK_ENGINE_STATUS.isRunning);

  const handleToggle = (checked: boolean) => {
    setIsRunning(checked);
    if (checked) {
      toast.success("AI Trading Engine resumed.");
    } else {
      toast.warning("AI Trading Engine paused.");
    }
  };

  return (
    <div className="w-full bg-white rounded-xl border border-[#e7e1d8] p-3 sm:p-3.5 font-urbanist shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isRunning ? "bg-[#16a34a]" : "bg-[#9ca3af]"
            }`}
          />
          <span
            className={`text-xs sm:text-sm font-semibold font-urbanist ${
              isRunning ? "text-[#16a34a]" : "text-[#78716c]"
            }`}
          >
            {isRunning ? "Running" : "Paused"}
          </span>
        </div>
        <Switch
          checked={isRunning}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-[#183935] data-[state=unchecked]:bg-[#ded8cf] scale-90"
        />
      </div>
      <div className="text-[10px] text-[#8c857b] font-medium mt-1 font-urbanist">
        Uptime: {MOCK_ENGINE_STATUS.uptime} · {MOCK_ENGINE_STATUS.environment}
      </div>
    </div>
  );
};

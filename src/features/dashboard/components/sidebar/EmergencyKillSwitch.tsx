"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

export const EmergencyKillSwitch: React.FC = () => {
  const handleKill = () => {
    toast.error("EMERGENCY: Flattening all positions and disabling AI trading engine!", {
      duration: 5000,
    });
  };

  return (
    <div className="w-full bg-[#fff7f7] border border-[#fed7dc] rounded-xl p-3 sm:p-3.5 font-urbanist shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <div className="text-[10px] font-semibold text-[#f43f5e] mb-2 leading-tight uppercase font-urbanist">
        CONFIRM: Flatten all positions and disable AI?
      </div>
      <Button
        onClick={handleKill}
        className="w-full bg-[#ff3850] hover:bg-[#e0283f] text-white font-semibold text-xs sm:text-sm py-2 h-auto rounded-lg shadow-xs transition-colors cursor-pointer font-urbanist"
      >
        Kill Switch
      </Button>
    </div>
  );
};

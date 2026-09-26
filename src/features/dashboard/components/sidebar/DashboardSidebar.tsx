"use client";

import React from "react";
import { AuditTrail } from "./AuditTrail";
import { DecisionCard } from "./DecisionCard";
import { EmergencyKillSwitch } from "./EmergencyKillSwitch";
import { EngineStatusCard } from "./EngineStatusCard";
import { ExecutionEvents } from "./ExecutionEvents";
import { LatencyStats } from "./LatencyStats";
import { PositionCard } from "./PositionCard";

export const DashboardSidebar: React.FC = () => {
  return (
    <div className="w-full space-y-3 font-urbanist select-none">
      <EngineStatusCard />
      <DecisionCard />
      <PositionCard />
      <ExecutionEvents />
      <LatencyStats />
      <EmergencyKillSwitch />
      <AuditTrail />
    </div>
  );
};

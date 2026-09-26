import { RiskView } from "@/features/dashboard/components/views/risk/RiskView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk View | AI Control Center",
  description: "Drawdown monitor, buffer limits, and daily loss tracking",
};

export default function RiskPage() {
  return <RiskView />;
}

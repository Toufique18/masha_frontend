import { ChartView } from "@/features/dashboard/components/views/chart-view/ChartView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chart View | AI Control Center",
  description: "Live interactive trading chart and technical indicators",
};

export default function ChartTabPage() {
  return <ChartView />;
}

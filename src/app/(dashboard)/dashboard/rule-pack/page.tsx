import { RulePackView } from "@/features/dashboard/components/views/rule-pack/RulePackView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rule Pack View | AI Control Center",
  description: "Active Topstep rules and risk parameters",
};

export default function RulePackPage() {
  return <RulePackView />;
}

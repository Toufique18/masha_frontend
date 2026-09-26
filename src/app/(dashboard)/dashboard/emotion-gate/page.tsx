import { EmotionGateView } from "@/features/dashboard/components/views/emotion-gate/EmotionGateView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emotion Gate | AI Control Center",
  description: "Pre-trade psychology checks and emotion safety gates",
};

export default function EmotionGatePage() {
  return <EmotionGateView />;
}

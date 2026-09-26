import { JournalView } from "@/features/dashboard/components/views/journal/JournalView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Journal | AI Control Center",
  description: "Automated trade execution logs and profit/loss journal",
};

export default function JournalPage() {
  return <JournalView />;
}

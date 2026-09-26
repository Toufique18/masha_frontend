"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TABS = [
  { label: "Chart", href: "/dashboard/chart", aliases: ["/dashboard", "/dashboard/chart"] },
  { label: "Rule Pack", href: "/dashboard/rule-pack", aliases: ["/dashboard/rule-pack"] },
  { label: "Risk", href: "/dashboard/risk", aliases: ["/dashboard/risk"] },
  { label: "Journal", href: "/dashboard/journal", aliases: ["/dashboard/journal"] },
  { label: "Emotion Gate", href: "/dashboard/emotion-gate", aliases: ["/dashboard/emotion-gate"] },
  { label: "Profile", href: "/dashboard/profile", aliases: ["/dashboard/profile"] },
];

export const DashboardNavTabs: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#F4EFE9] border-b border-[#e5dfd7] px-4 sm:px-8 font-urbanist flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none">
      {TABS.map((tab) => {
        const isActive = tab.aliases.includes(pathname);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "py-3 text-xs sm:text-sm transition-all whitespace-nowrap relative font-urbanist",
              isActive
                ? "text-[#1a1a1a] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1a1a1a]"
                : "text-[#78716c] font-medium hover:text-[#1a1a1a]"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};

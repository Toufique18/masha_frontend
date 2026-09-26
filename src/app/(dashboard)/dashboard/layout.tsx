import { DashboardHeader } from "@/features/dashboard/components/layout/DashboardHeader";
import { DashboardNavTabs } from "@/features/dashboard/components/layout/DashboardNavTabs";
import { DashboardSidebar } from "@/features/dashboard/components/sidebar/DashboardSidebar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Trading Control Center | Dashboard",
  description: "AI powered automated trading management platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#F4EFE9] flex flex-col font-urbanist text-[#1a1a1a]">
      {/* Top Fixed Header with pure white background */}
      <DashboardHeader />

      {/* Main Body: Left Content Area (Cream bg) + Right Sidebar Panel (White bg with border-l) */}
      <div className="flex-1 w-full flex flex-col lg:flex-row items-stretch">
        {/* Left Side: Tabs + Main View Content */}
        <div className="flex-1 min-w-0 bg-[#F4EFE9] flex flex-col">
          {/* Tab Navigation */}
          <DashboardNavTabs />

          {/* Main View Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-7">
            {children}
          </main>
        </div>

        {/* Right Side: Sidebar in Pure White Panel with Left Border */}
        <aside className="w-full lg:w-[315px] xl:w-[330px] shrink-0 bg-white border-t lg:border-t-0 lg:border-l border-[#e5dfd7] p-4 sm:p-5">
          <DashboardSidebar />
        </aside>
      </div>
    </div>
  );
}

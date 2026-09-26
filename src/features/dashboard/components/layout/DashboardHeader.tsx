"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { MOCK_USER } from "../../constants/dashboard.mock";

export const DashboardHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-[#e5dfd7] px-4 sm:px-8 py-3.5 flex items-center justify-between font-urbanist select-none">
      {/* Left: Brand / Title */}
      <div className="flex flex-col">
        <h1 className="text-xs sm:text-sm font-bold tracking-wider text-[#1a1a1a] uppercase font-urbanist">
          AI CONTROL CENTER
        </h1>
        <span className="text-[11px] text-[#78716c] font-medium font-urbanist">
          Engine v1
        </span>
      </div>

      {/* Right Side Stats & Profile */}
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Account Balance */}
        <div className="text-right flex flex-col">
          <div className="text-[11px] text-[#78716c] font-medium font-urbanist leading-tight">
            Account Balance
          </div>
          <div className="text-sm sm:text-base font-bold text-[#1a1a1a] font-urbanist">
            ${MOCK_USER.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
        </div>

        {/* Risk Budget Remaining */}
        <div className="text-right flex flex-col">
          <div className="text-[11px] text-[#78716c] font-medium font-urbanist leading-tight">
            Risk Budget Remaining Today
          </div>
          <div className="text-sm sm:text-base font-bold text-[#d97706] font-urbanist">
            ${MOCK_USER.riskBudgetRemaining.toFixed(2)}
          </div>
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2.5 pl-2 py-1 rounded-lg hover:bg-black/5 transition-colors text-left focus:outline-hidden cursor-pointer">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs sm:text-sm font-bold text-[#1a1a1a] tracking-tight font-urbanist">
                  {MOCK_USER.name}
                </span>
                <span className="text-[11px] text-[#78716c] font-medium font-urbanist">
                  {MOCK_USER.account}
                </span>
              </div>
              <Avatar className="h-8 w-8 rounded-full ring-1 ring-[#ded8cf]">
                <AvatarImage src={MOCK_USER.avatarUrl} alt={MOCK_USER.name} />
                <AvatarFallback className="bg-[#183935] text-white text-xs font-bold font-urbanist">
                  BS
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="w-3.5 h-3.5 text-[#78716c]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 font-urbanist bg-[#f7f4ef] shadow-md border border-[#ded8cf] rounded-2xl p-2 space-y-1">
            <DropdownMenuItem asChild className="cursor-pointer rounded-xl py-2.5 px-3 hover:bg-black/5 text-xs sm:text-sm font-semibold text-[#1a1a1a] focus:bg-black/5">
              <button
                type="button"
                onClick={() => toast.info("Add account modal")}
                className="flex items-center justify-center gap-1.5 w-full text-center cursor-pointer font-urbanist"
              >
                <span>Add account</span>
                <span className="text-base font-bold leading-none">+</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#ded8cf] my-0.5" />
            <DropdownMenuItem asChild className="cursor-pointer rounded-xl py-2.5 px-3 hover:bg-black/5 text-xs sm:text-sm font-semibold text-[#1a1a1a] focus:bg-black/5">
              <Link href="/sign-in" className="flex items-center justify-center gap-2 w-full text-center font-urbanist">
                <span>Log Out</span>
                <LogOut className="w-3.5 h-3.5 text-[#78716c]" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

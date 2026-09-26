"use client";

import Switcher from "@/components/switcher/Switcher";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";
import { DesktopMenu } from "./DesktopMenu";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const { isAuthenticated, token } = useAuth();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background dark:bg-surface-deep border-y border-[#183A3A]/15 dark:border-white/10 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <DesktopMenu />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href={isAuthenticated && token ? "/dashboard" : "/login"}
              className="hidden sm:inline-flex items-center justify-center border border-[#183A3A] text-[#183A3A] hover:bg-[#183A3A] hover:text-[#F4EFE9] dark:border-[#58bd91] dark:text-[#58bd91] dark:hover:bg-[#58bd91] dark:hover:text-[#141313] px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200"
            >
              Open dashboard
            </Link>
            <Switcher />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};


"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Logo } from "./Logo";
import { navLinks } from "./DesktopMenu";

export const MobileMenu = () => {
  const { isAuthenticated, token } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-1.5 h-9 w-9 text-[#183A3A] dark:text-[#58bd91]"
        >
          <Menu className="!h-6 !w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-80 bg-background dark:bg-[#191818] border-r border-[#183A3A]/10 dark:border-white/10"
      >
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link href="/" onClick={handleLinkClick}>
              <Logo />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col mt-8 gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="block py-2.5 px-4 font-medium text-base text-[#183A3A] dark:text-neutral-200 hover:bg-[#183A3A]/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-[#183A3A]/10 dark:border-white/10">
            <Link
              href={isAuthenticated && token ? "/dashboard" : "/login"}
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full border border-[#183A3A] text-[#183A3A] hover:bg-[#183A3A] hover:text-[#F4EFE9] dark:border-[#58bd91] dark:text-[#58bd91] dark:hover:bg-[#58bd91] dark:hover:text-[#141313] px-4 py-2.5 rounded-lg font-medium text-sm transition-all"
            >
              Open dashboard
            </Link>
          </div>
        </nav>
        <SheetDescription className="sr-only">
          Navigation Menu
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};


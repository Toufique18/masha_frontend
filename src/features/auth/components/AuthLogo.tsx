"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface AuthLogoProps {
  className?: string;
  href?: string;
}

export const AuthLogo: React.FC<AuthLogoProps> = ({ className, href = "/" }) => {
  const content = (
    <div className={cn("inline-flex items-center gap-3", className)}>
      {/* 4-petal geometric flower/clover logo icon */}
      <svg
        className="w-7 h-7 text-[#0f382c] dark:text-[#58bd91]"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top petal */}
        <path d="M12 2C10.6 4.8 10.6 7.2 12 10C13.4 7.2 13.4 4.8 12 2Z" />
        {/* Bottom petal */}
        <path d="M12 22C10.6 19.2 10.6 16.8 12 14C13.4 16.8 13.4 19.2 12 22Z" />
        {/* Left petal */}
        <path d="M2 12C4.8 10.6 7.2 10.6 10 12C7.2 13.4 4.8 13.4 2 12Z" />
        {/* Right petal */}
        <path d="M22 12C19.2 10.6 16.8 10.6 14 12C16.8 13.4 19.2 13.4 22 12Z" />
      </svg>
      <span className="font-space-grotesk font-bold text-2xl tracking-tight text-[#1a1a1a] dark:text-white">
        AI Trading
      </span>
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block transition-opacity hover:opacity-90">{content}</Link>;
  }

  return content;
};

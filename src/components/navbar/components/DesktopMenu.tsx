"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it work", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
];

export const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="md:flex hidden items-center gap-8 lg:gap-10">
      {navLinks.map((item) => {
        const isActive =
          pathname === item.href || (item.href === "/" && pathname === "");
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`text-sm lg:text-base transition-colors duration-200 ${
              isActive
                ? "font-bold text-[#183A3A] dark:text-[#58bd91]"
                : "font-normal text-[#183A3A]/65 hover:text-[#183A3A] dark:text-[#9eaba7] dark:hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};


import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "font-newsreader font-black text-2xl sm:text-3xl tracking-tight text-[#183A3A] dark:text-[#58bd91] select-none",
        className
      )}
    >
      LOGO
    </span>
  );
};


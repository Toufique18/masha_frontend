"use client";

import React from "react";

interface TickerItem {
  id: string;
  type: "status" | "buffer" | "market";
  label?: string;
  status?: string;
  value?: string;
  suffix?: string;
  symbol?: string;
  price?: string;
  change?: string;
  isPositive?: boolean;
}

const TICKER_DATA: TickerItem[] = [
  {
    id: "1",
    type: "status",
    label: "PACK Topstep v3",
    status: "synced",
  },
  {
    id: "2",
    type: "buffer",
    label: "DAILY BUFFER",
    value: "$1,214",
    suffix: "remaining",
  },
  {
    id: "3",
    type: "market",
    symbol: "MES",
    price: "5812.25",
    change: "+0.34%",
    isPositive: true,
  },
  {
    id: "4",
    type: "market",
    symbol: "MNQ",
    price: "20,441.50",
    change: "-0.12%",
    isPositive: false,
  },
  {
    id: "5",
    type: "market",
    symbol: "MYM",
    price: "40,988.25",
    change: "+0.34%",
    isPositive: true,
  },
  {
    id: "6",
    type: "market",
    symbol: "MNQ",
    price: "20,441.50",
    change: "-0.12%",
    isPositive: false,
  },
  {
    id: "7",
    type: "market",
    symbol: "MES",
    price: "5812.25",
    change: "+0.34%",
    isPositive: true,
  },
];

export const PointScroll = () => {
  // Repeating the items for seamless infinite scroll
  const items = [...TICKER_DATA, ...TICKER_DATA];

  return (
    <div
      className="w-full overflow-hidden bg-[#F3EEE5] dark:bg-[#1A1918] border-y border-[#E2DDD3] dark:border-white/10 py-2.5 select-none"
      style={{
        fontFamily: "var(--font-newsreader), Newsreader, serif",
        fontSize: "14px",
        lineHeight: "140%",
        letterSpacing: "0%",
        fontWeight: 400,
      }}
    >
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-center gap-2 whitespace-nowrap px-6 md:px-8"
          >
            {item.type === "status" && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#75716B] dark:text-[#A8A49E]">
                  {item.label}
                </span>
                <span className="text-[#4E9873] dark:text-[#58bd91]">
                  {item.status}
                </span>
              </div>
            )}

            {item.type === "buffer" && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#75716B] dark:text-[#A8A49E]">
                  {item.label}
                </span>
                <span className="text-[#2C2A28] dark:text-[#EAE6DF] font-medium">
                  {item.value}
                </span>
                <span className="text-[#75716B] dark:text-[#A8A49E]">
                  {item.suffix}
                </span>
              </div>
            )}

            {item.type === "market" && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#75716B] dark:text-[#A8A49E]">
                  {item.symbol}
                </span>
                <span className="text-[#2C2A28] dark:text-[#EAE6DF] font-medium">
                  {item.price}
                </span>
                <span
                  className={
                    item.isPositive
                      ? "text-[#4E9873] dark:text-[#58bd91]"
                      : "text-[#C55D54] dark:text-[#FF6467]"
                  }
                >
                  {item.change}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointScroll;

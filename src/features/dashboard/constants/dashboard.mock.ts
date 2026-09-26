import {
  IAuditTrailItem,
  ICandleData,
  ICurrentDecision,
  ICurrentPosition,
  IDashboardUser,
  IEmotionQuestion,
  IEngineStatus,
  IExecutionEvent,
  IPriceQuote,
  IRiskOverview,
  IRulePackInfo,
  ITradeJournalItem,
} from "../types/dashboard.types";

export const MOCK_USER: IDashboardUser = {
  name: "BEHZAD SHIRANI",
  account: "Topstep, PX-7719-2261",
  balance: 51214.8,
  riskBudgetRemaining: 122.0,
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
};

export const MOCK_ENGINE_STATUS: IEngineStatus = {
  isRunning: true,
  uptime: "4h 18m 32s",
  environment: "Topstep Sim Env",
};

export const MOCK_CURRENT_DECISION: ICurrentDecision = {
  action: "BUY",
  time: "11:20:47",
  rulePassed: true,
  riskPassed: true,
  safetyPassed: true,
  reason:
    "Momentum breakout above MA20 with RSI(14) at 68.4 — within bullish threshold.",
};

export const MOCK_CURRENT_POSITION: ICurrentPosition = {
  instrument: "MESU6",
  side: "LONG",
  qty: 1,
  entryPrice: 5895.0,
  unrealizedPnl: 33.75,
};

export const MOCK_EXECUTION_EVENTS: IExecutionEvent[] = [
  {
    id: "evt-1",
    type: "filled",
    title: "Order filled · 1 MESU6 long @ 5,895.00",
    time: "11:18:42",
  },
  {
    id: "evt-2",
    type: "held",
    title: "Order held · RSI overbought — safety gate",
    time: "11:14:07",
  },
  {
    id: "evt-3",
    type: "rejected",
    title: "Order rejected · daily loss threshold hit",
    time: "11:06:33",
  },
];

export const MOCK_AUDIT_TRAIL: IAuditTrailItem[] = [
  {
    id: "aud-1",
    status: "FILLED",
    time: "11:18:42",
    details: "1 MESU6 long @ 5,895.00",
  },
  {
    id: "aud-2",
    status: "WAIT",
    time: "11:14:07",
    details: "Signal detected — RSI overbought gate",
  },
  {
    id: "aud-3",
    status: "REJECTED",
    time: "11:06:33",
    details: "Approaching daily loss limit",
  },
  {
    id: "aud-4",
    status: "FILLED",
    time: "10:52:18",
    details: "1 MESU6 long @ 5,879.75",
  },
];

export const MOCK_PRICE_QUOTE: IPriceQuote = {
  symbol: "MES",
  contract: "MESU6",
  price: 5901.75,
  change: 21.75,
  changePercent: 0.37,
  sessionStatus: "Session open · 11:20:47",
  sessionTime: "11:20:47",
  exchange: "CME Globex",
  dateStr: "09-2026 · EST",
  open: 5884.5,
  low: 5872.5,
  high: 5872.5,
  avgVol5d: "184.2k",
  tickSize: 0.25,
  tickValue: 1.25,
  marginReq: 1760,
  maxContracts: 1,
  avgVolume: "842K",
  secondaryTickSize: 0.25,
  secondaryTickValue: 1.25,
  secondaryMarginReq: 40,
  secondaryMaxContr: 3,
  secondaryInstrument: "MES",
};

export const MOCK_CANDLE_DATA: ICandleData[] = [
  { time: "08:30", open: 5780, high: 5790, low: 5775, close: 5788, ma10: 5782, ma20: 5779, type: "bull" },
  { time: "08:40", open: 5788, high: 5805, low: 5785, close: 5802, ma10: 5786, ma20: 5782, type: "bull" },
  { time: "08:50", open: 5802, high: 5812, low: 5798, close: 5810, ma10: 5792, ma20: 5786, type: "bull" },
  { time: "08:55", open: 5810, high: 5818, low: 5805, close: 5815, ma10: 5798, ma20: 5790, type: "bull" },
  { time: "09:05", open: 5815, high: 5828, low: 5812, close: 5825, ma10: 5805, ma20: 5795, type: "bull" },
  { time: "09:15", open: 5825, high: 5830, low: 5815, close: 5820, ma10: 5810, ma20: 5800, type: "bear" },
  { time: "09:20", open: 5820, high: 5822, low: 5808, close: 5812, ma10: 5814, ma20: 5805, type: "bear" },
  { time: "09:30", open: 5812, high: 5820, low: 5805, close: 5815, ma10: 5817, ma20: 5810, type: "bull" },
  { time: "09:40", open: 5815, high: 5828, low: 5812, close: 5825, ma10: 5821, ma20: 5814, type: "bull" },
  { time: "09:45", open: 5825, high: 5835, low: 5822, close: 5832, ma10: 5826, ma20: 5818, type: "bull" },
  { time: "09:55", open: 5832, high: 5842, low: 5830, close: 5840, ma10: 5831, ma20: 5822, type: "bull" },
  { time: "10:05", open: 5840, high: 5848, low: 5836, close: 5842, ma10: 5836, ma20: 5826, type: "bull" },
  { time: "10:10", open: 5842, high: 5845, low: 5832, close: 5835, ma10: 5840, ma20: 5830, type: "bear" },
  { time: "10:20", open: 5835, high: 5848, low: 5832, close: 5845, ma10: 5844, ma20: 5835, type: "bull" },
  { time: "10:30", open: 5845, high: 5858, low: 5842, close: 5855, ma10: 5850, ma20: 5840, type: "bull" },
  { time: "10:35", open: 5855, high: 5865, low: 5852, close: 5862, ma10: 5857, ma20: 5845, type: "bull" },
  { time: "10:45", open: 5862, high: 5872, low: 5858, close: 5868, ma10: 5864, ma20: 5850, type: "bull" },
  { time: "10:55", open: 5868, high: 5875, low: 5858, close: 5860, ma10: 5870, ma20: 5855, type: "bear" },
  { time: "11:00", open: 5860, high: 5875, low: 5855, close: 5870, ma10: 5875, ma20: 5860, type: "bull" },
  { time: "11:10", open: 5870, high: 5885, low: 5868, close: 5880, ma10: 5882, ma20: 5866, type: "bull" },
  { time: "11:20", open: 5880, high: 5895, low: 5878, close: 5890, ma10: 5890, ma20: 5872, type: "bull" },
  { time: "11:30", open: 5890, high: 5905, low: 5888, close: 5901.75, ma10: 5898, ma20: 5880, type: "bull" },
];

export const MOCK_RULE_PACK: IRulePackInfo = {
  name: "Active rule pack - Topstep . 50K",
  version: "Version 3.2",
  effectiveDate: "effective 2026-07-01",
  source: "source: TopstepX rule pack API, not manually entered",
  syncStatus: "Verified - synced from TopstepX 09:40 today",
  rules: [
    {
      id: "r-1",
      rule: "Profit target",
      value: "$3,000",
      type: "Hard",
    },
    {
      id: "r-2",
      rule: "Max draw down",
      value: "$2,000 (trailing)",
      type: "Hard",
    },
    {
      id: "r-3",
      rule: "Daily loss limit",
      value: "$1,000",
      type: "Hard",
    },
    {
      id: "r-4",
      rule: "Max contracts -MES",
      value: "1 (plan cap)",
      type: "Plan",
    },
    {
      id: "r-5",
      rule: "Consistency rule",
      value: "50% of profit target / day",
      type: "Hard",
    },
    {
      id: "r-6",
      rule: "News blackout",
      value: "±5 min high-impact events",
      type: "Hard",
    },
  ],
};

export const MOCK_RISK_DATA: IRiskOverview = {
  drawdownUsed: 786,
  drawdownLimit: 2000,
  bufferRemaining: 1214,
  consecutiveLosses: 1,
  maxConsecutiveLosses: 2,
  tradesToday: 3,
  dailyLossUsed: 392,
  dailyLossLimit: 1000,
};

export const MOCK_TRADE_JOURNAL: ITradeJournalItem[] = [
  {
    id: "tr-1",
    time: "09:41:P03",
    contract: "MESU6",
    side: "Long",
    qty: 1,
    entry: 5905.75,
    exit: null,
    pnl: null,
    source: "AI engine",
  },
  {
    id: "tr-2",
    time: "09:41:P03",
    contract: "MESU6",
    side: "Long",
    qty: 1,
    entry: 5905.75,
    exit: 5905.75,
    pnl: -18.75,
    source: "AI engine",
  },
  {
    id: "tr-3",
    time: "09:41:P03",
    contract: "MESU6",
    side: "Short",
    qty: 1,
    entry: 5905.75,
    exit: 5905.75,
    pnl: -28.75,
    source: "AI engine",
  },
  {
    id: "tr-4",
    time: "09:41:P03",
    contract: "MESU6",
    side: "Short",
    qty: 1,
    entry: 5905.75,
    exit: 5905.75,
    pnl: 31.25,
    source: "AI engine",
  },
];

export const MOCK_EMOTION_QUESTIONS: IEmotionQuestion[] = [
  {
    id: "eq-1",
    question: "Have you already taken a meaningful loss today?",
    subtext: "Yes + new trade shortly after ➔ cool down / reduce size",
  },
  {
    id: "eq-2",
    question: "Are you trying to win back the loss?",
    subtext: "Revenge intent ➔ stop or cooldown",
  },
  {
    id: "eq-3",
    question: "Have you already taken a meaningful loss today?",
    subtext: "Yes + new trade shortly after ➔ cool down / reduce size",
  },
];

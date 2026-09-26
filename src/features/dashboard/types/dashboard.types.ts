export interface IDashboardUser {
  name: string;
  account: string;
  balance: number;
  riskBudgetRemaining: number;
  avatarUrl?: string;
}

export interface IEngineStatus {
  isRunning: boolean;
  uptime: string;
  environment: string;
}

export interface ICurrentDecision {
  action: "BUY" | "SELL" | "HOLD";
  time: string;
  rulePassed: boolean;
  riskPassed: boolean;
  safetyPassed: boolean;
  reason: string;
}

export interface ICurrentPosition {
  instrument: string;
  side: "LONG" | "SHORT";
  qty: number;
  entryPrice: number;
  unrealizedPnl: number;
}

export interface IExecutionEvent {
  id: string;
  type: "filled" | "held" | "rejected";
  title: string;
  time: string;
}

export interface IAuditTrailItem {
  id: string;
  status: "FILLED" | "WAIT" | "REJECTED";
  time: string;
  details: string;
}

export interface IPriceQuote {
  symbol: string;
  contract: string;
  price: number;
  change: number;
  changePercent: number;
  sessionStatus: string;
  sessionTime: string;
  exchange: string;
  dateStr: string;
  open: number;
  low: number;
  high: number;
  avgVol5d: string;
  tickSize: number;
  tickValue: number;
  marginReq: number;
  maxContracts: number;
  avgVolume: string;
  secondaryTickSize: number;
  secondaryTickValue: number;
  secondaryMarginReq: number;
  secondaryMaxContr: number;
  secondaryInstrument: string;
}

export interface ICandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  ma10?: number;
  ma20?: number;
  type: "bull" | "bear";
}

export interface IRuleItem {
  id: string;
  rule: string;
  value: string;
  type: "Hard" | "Plan";
}

export interface IRulePackInfo {
  name: string;
  version: string;
  effectiveDate: string;
  source: string;
  syncStatus: string;
  rules: IRuleItem[];
}

export interface IRiskOverview {
  drawdownUsed: number;
  drawdownLimit: number;
  bufferRemaining: number;
  consecutiveLosses: number;
  maxConsecutiveLosses: number;
  tradesToday: number;
  dailyLossUsed: number;
  dailyLossLimit: number;
}

export interface ITradeJournalItem {
  id: string;
  time: string;
  contract: string;
  side: "Long" | "Short";
  qty: number;
  entry: number;
  exit: number | null;
  pnl: number | null;
  source: string;
}

export interface IEmotionQuestion {
  id: string;
  question: string;
  subtext: string;
  defaultAnswer?: "yes" | "no" | null;
}

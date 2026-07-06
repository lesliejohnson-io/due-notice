import { useState, useRef, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Check,
  CheckCircle2,
  CreditCard,
  Calendar,
  Bell,
  Users,
  Settings,
  LayoutDashboard,
  Clock,
  Award,
  Plus,
  Trash2,
  ChevronRight,
  Sun,
  Moon,
  X,
  AlertTriangle,
  Building2,
  DollarSign,
  LogOut,
  ChevronLeft,
  Smartphone,
  Edit2,
  Download,
  Star,
  Fingerprint,
} from "lucide-react";

// ── Phone Frame ───────────────────────────────────────────────────────────────

function PhoneFrame({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(145deg, #1a1c20, #23262c)"
          : "linear-gradient(145deg, #d0d4da, #e8eaed)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      {/* Outer phone shell */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        {/* Volume buttons (left) */}
        <div
          style={{
            position: "absolute",
            left: -4,
            top: 108,
            width: 4,
            height: 28,
            background: "#3a3a3c",
            borderRadius: "3px 0 0 3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -4,
            top: 148,
            width: 4,
            height: 48,
            background: "#3a3a3c",
            borderRadius: "3px 0 0 3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -4,
            top: 208,
            width: 4,
            height: 48,
            background: "#3a3a3c",
            borderRadius: "3px 0 0 3px",
          }}
        />
        {/* Power button (right) */}
        <div
          style={{
            position: "absolute",
            right: -4,
            top: 152,
            width: 4,
            height: 72,
            background: "#3a3a3c",
            borderRadius: "0 3px 3px 0",
          }}
        />

        {/* Phone body */}
        <div
          style={{
            width: 390,
            background: "#1c1c1e",
            borderRadius: 54,
            padding: 6,
            boxShadow:
              "0 60px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 2px 4px rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Screen */}
          <div
            style={{
              height: 844,
              borderRadius: 48,
              overflow: "hidden",
              position: "relative",
              background: "#000",
            }}
          >
            {/* Dynamic island */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 126,
                height: 36,
                background: "#000",
                borderRadius: 20,
                zIndex: 50,
              }}
            />

            {/* App content fills screen */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {children}
            </div>

            {/* Home indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 134,
                height: 5,
                background: "rgba(255,255,255,0.35)",
                borderRadius: 3,
                zIndex: 50,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Due Notice Logo ───────────────────────────────────────────────────────────

function DueNoticeLogo({
  size = "md",
}: {
  size?: "sm" | "md";
}) {
  const sm = size === "sm";
  return (
    <div
      className={`flex items-center ${sm ? "gap-2" : "gap-2.5"} shrink-0`}
    >
      <svg
        viewBox="0 0 32 32"
        className={sm ? "w-7 h-7" : "w-9 h-9"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="32" height="32" rx="7" fill="#002159" />
        {/* $ sign */}
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontFamily="Lato, sans-serif"
          fontWeight="900"
        >
          $
        </text>
        {/* Notice dot */}
        <circle cx="25.5" cy="6.5" r="4.5" fill="#31b237" />
      </svg>
      <span
        className={`font-black tracking-tight text-foreground ${sm ? "text-base" : "text-xl"}`}
      >
        Due Notice
      </span>
    </div>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type Screen = "login" | "2fa" | "app";
type View =
  | "dashboard"
  | "payment"
  | "history"
  | "payors"
  | "notifications"
  | "account";

interface Loan {
  id: string;
  name: string;
  servicer: string;
  balance: number;
  interestRate: number;
  minPayment: number;
  dueDate: string;
  status: "current" | "due-soon" | "overdue";
  type: "federal" | "private";
}

interface Payment {
  id: string;
  date: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  loan: string;
  payor: string;
}

interface BankAccount {
  id: string;
  name: string;
  last4: string;
  type: "checking" | "savings";
  isPrimary: boolean;
}

interface GuestPayor {
  id: string;
  name: string;
  email: string;
  permissions: string[];
  lastActivity: string | null;
  status: "active" | "pending";
}

// ── Mock Data ─────────────────────────────────────────────────────────────────

const LOANS: Loan[] = [
  {
    id: "L001",
    name: "Direct Subsidized Loan",
    servicer: "MOHELA",
    balance: 18420.5,
    interestRate: 4.53,
    minPayment: 189.0,
    dueDate: "2026-07-15",
    status: "due-soon",
    type: "federal",
  },
  {
    id: "L002",
    name: "Direct Unsubsidized Loan",
    servicer: "MOHELA",
    balance: 9840.0,
    interestRate: 5.05,
    minPayment: 104.0,
    dueDate: "2026-07-15",
    status: "due-soon",
    type: "federal",
  },
  {
    id: "L003",
    name: "Graduate Private Loan",
    servicer: "Earnest",
    balance: 24600.75,
    interestRate: 6.99,
    minPayment: 287.0,
    dueDate: "2026-07-22",
    status: "current",
    type: "private",
  },
];

const PAYMENTS: Payment[] = [
  {
    id: "P001",
    date: "2026-06-15",
    amount: 580.0,
    status: "completed",
    loan: "Federal Loans",
    payor: "You",
  },
  {
    id: "P002",
    date: "2026-06-22",
    amount: 287.0,
    status: "completed",
    loan: "Graduate Private Loan",
    payor: "You",
  },
  {
    id: "P003",
    date: "2026-05-15",
    amount: 580.0,
    status: "completed",
    loan: "Federal Loans",
    payor: "Margaret Chen",
  },
  {
    id: "P004",
    date: "2026-05-22",
    amount: 287.0,
    status: "completed",
    loan: "Graduate Private Loan",
    payor: "You",
  },
  {
    id: "P005",
    date: "2026-07-15",
    amount: 580.0,
    status: "pending",
    loan: "Federal Loans",
    payor: "You",
  },
  {
    id: "P006",
    date: "2026-04-15",
    amount: 580.0,
    status: "completed",
    loan: "Federal Loans",
    payor: "You",
  },
];

const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: "B001",
    name: "Chase Total Checking",
    last4: "4821",
    type: "checking",
    isPrimary: true,
  },
  {
    id: "B002",
    name: "Wells Fargo Savings",
    last4: "9043",
    type: "savings",
    isPrimary: false,
  },
];

const GUEST_PAYORS_INIT: GuestPayor[] = [
  {
    id: "G001",
    name: "Margaret Chen",
    email: "margaret.chen@gmail.com",
    permissions: ["view_balances", "make_payments"],
    lastActivity: "2026-06-15",
    status: "active",
  },
  {
    id: "G002",
    name: "Robert Patel",
    email: "robert.patel@icloud.com",
    permissions: ["make_payments"],
    lastActivity: null,
    status: "pending",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);

const fmtDate = (s: string) =>
  new Date(s + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const daysUntil = (s: string) =>
  Math.ceil(
    (new Date(s + "T12:00:00").getTime() - Date.now()) /
      86400000,
  );

// ── Login Screen ──────────────────────────────────────────────────────────────

function LoginScreen({
  onNext,
  onBiometric,
}: {
  onNext: () => void;
  onBiometric: () => void;
}) {
  const [email, setEmail] = useState("jordan.hayes@gmail.com");
  const [password, setPassword] = useState("mypassword");
  const [showPw, setShowPw] = useState(false);
  const [bioState, setBioState] = useState<
    "idle" | "scanning" | "success"
  >("idle");

  const handleBiometric = () => {
    setBioState("scanning");
    setTimeout(() => {
      setBioState("success");
      setTimeout(onBiometric, 600);
    }, 1400);
  };

  return (
    <div className="min-h-full bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <div className="mb-10">
            <DueNoticeLogo />
          </div>
          <h1 className="font-display text-3xl text-foreground mb-2">
            Welcome back.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sign in to manage your student loans securely.
          </p>
        </div>

        {/* Biometric */}
        <div className="flex flex-col items-center mb-7">
          <button
            onClick={handleBiometric}
            disabled={bioState !== "idle"}
            className="group relative flex flex-col items-center gap-3 focus:outline-none"
          >
            <div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                bioState === "success"
                  ? "bg-green-100 dark:bg-green-900/30"
                  : bioState === "scanning"
                    ? "bg-primary/10"
                    : "bg-input-background hover:bg-primary/10 border border-border group-hover:border-primary/40"
              }`}
            >
              {bioState === "scanning" && (
                <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
              )}
              <Fingerprint
                size={38}
                className={`transition-colors duration-300 ${
                  bioState === "success"
                    ? "text-green-600 dark:text-green-400"
                    : bioState === "scanning"
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-xs font-medium transition-colors ${
                bioState === "success"
                  ? "text-green-600 dark:text-green-400"
                  : bioState === "scanning"
                    ? "text-primary"
                    : "text-muted-foreground"
              }`}
            >
              {bioState === "idle" && "Use Face ID or Touch ID"}
              {bioState === "scanning" && "Verifying…"}
              {bioState === "success" && "Verified"}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">
            or sign in with password
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Password
              </label>
              <button className="text-xs text-primary hover:underline">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-11 rounded-xl bg-input-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
              />
              <button
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPw ? (
                  <EyeOff size={15} />
                ) : (
                  <Eye size={15} />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors mt-2"
          >
            Continue to verification
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 leading-relaxed">
          Protected by 256-bit encryption and
          <br />
          two-factor authentication
        </p>
      </div>
    </div>
  );
}

// ── 2FA Screen ────────────────────────────────────────────────────────────────

function TwoFAScreen({
  onVerify,
  onBack,
}: {
  onVerify: () => void;
  onBack: () => void;
}) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [remember, setRemember] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleDigit = (i: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = digit;
    setCode(next);
    if (digit && i < 5) inputRefs[i + 1].current?.focus();
    if (next.every((d) => d !== "")) {
      setTimeout(onVerify, 400);
    }
  };

  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[i] && i > 0) {
      inputRefs[i - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (text.length === 6) {
      setCode(text.split(""));
      setTimeout(onVerify, 400);
    }
    e.preventDefault();
  };

  return (
    <div className="min-h-full bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={15} /> Back
        </button>

        <div className="mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
            <Smartphone size={22} className="text-primary" />
          </div>
          <h1 className="font-display text-3xl text-foreground mb-2">
            Verify identity
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Enter the 6-digit code from your authenticator app
            to continue.
          </p>
        </div>

        <div
          className="flex gap-1.5 mb-5 w-full"
          onPaste={handlePaste}
        >
          {code.map((d, i) => (
            <input
              key={i}
              ref={inputRefs[i]}
              maxLength={1}
              value={d}
              onChange={(e) => handleDigit(i, e.target.value)}
              onKeyDown={(e) => handleKey(i, e)}
              className="flex-1 min-w-0 h-12 text-center text-lg font-mono rounded-lg bg-input-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          ))}
        </div>

        <label className="flex items-start gap-3 cursor-pointer mb-5 select-none">
          <div
            onClick={() => setRemember(!remember)}
            className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
              remember
                ? "bg-primary border-primary"
                : "border-border"
            }`}
          >
            {remember && (
              <Check
                size={10}
                className="text-primary-foreground"
              />
            )}
          </div>
          <div>
            <span className="text-sm text-foreground">
              Remember this device for 30 days
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">
              You won&apos;t need to verify again on this device
              for 30 days.
            </p>
          </div>
        </label>

        <button
          onClick={onVerify}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 text-sm font-medium transition-colors"
        >
          Verify and sign in
        </button>

        <button className="w-full text-center text-xs text-primary hover:underline mt-4 py-1">
          Use SMS backup code instead
        </button>
      </div>
    </div>
  );
}

// ── Sidebar Nav ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    id: "dashboard" as View,
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "payment" as View,
    label: "Make a Payment",
    icon: CreditCard,
  },
  {
    id: "history" as View,
    label: "Payment History",
    icon: Clock,
  },
  { id: "payors" as View, label: "Guest Payors", icon: Users },
  {
    id: "notifications" as View,
    label: "Notifications",
    icon: Bell,
  },
  { id: "account" as View, label: "Account", icon: Settings },
];

function Sidebar({
  view,
  onNav,
  isDark,
  toggleDark,
  onLogout,
}: {
  view: View;
  onNav: (v: View) => void;
  isDark: boolean;
  toggleDark: () => void;
  onLogout: () => void;
}) {
  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border bg-card h-screen sticky top-0">
      <div className="px-5 py-5 border-b border-border">
        <DueNoticeLogo size="sm" />
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNav(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
              view === item.id
                ? "bg-primary text-primary-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <item.icon size={15} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-border space-y-1">
        <button
          onClick={toggleDark}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
          {isDark ? "Light mode" : "Dark mode"}
        </button>
        <div className="px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-mono font-medium shrink-0">
            JH
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">
              Jordan Hayes
            </p>
            <p className="text-xs text-muted-foreground truncate">
              jordan.hayes@gmail.com
            </p>
          </div>
          <button
            onClick={onLogout}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            title="Sign out"
          >
            <LogOut size={13} />
          </button>
        </div>
      </div>
    </aside>
  );
}

// ── Mobile Header ─────────────────────────────────────────────────────────────

function MobileHeader({
  view,
  isDark,
  toggleDark,
}: {
  view: View;
  isDark: boolean;
  toggleDark: () => void;
}) {
  const title =
    NAV_ITEMS.find((n) => n.id === view)?.label ?? "Due Notice";
  return (
    <header className="md:hidden sticky top-0 z-10 flex items-center justify-between px-4 py-3.5 bg-muted dark:bg-[#001a47] border-b border-border">
      <DueNoticeLogo size="sm" />
      <button
        onClick={toggleDark}
        className="text-muted-foreground hover:text-foreground transition-colors p-1"
      >
        {isDark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </header>
  );
}

// ── Mobile Bottom Nav ─────────────────────────────────────────────────────────

function BottomNav({
  view,
  onNav,
}: {
  view: View;
  onNav: (v: View) => void;
}) {
  const items = [
    {
      id: "dashboard" as View,
      icon: LayoutDashboard,
      label: "Home",
    },
    { id: "payment" as View, icon: CreditCard, label: "Pay" },
    { id: "history" as View, icon: Clock, label: "History" },
    { id: "payors" as View, icon: Users, label: "Payors" },
    { id: "account" as View, icon: Settings, label: "Account" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-muted dark:bg-[#001a47] border-t border-border flex z-10">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNav(item.id)}
          className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
            view === item.id
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          <item.icon size={18} />
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ── Dashboard View ────────────────────────────────────────────────────────────

function DashboardView({ onPay }: { onPay: () => void }) {
  const totalBalance = LOANS.reduce((s, l) => s + l.balance, 0);
  const nextDueLoan = LOANS.reduce((min, l) =>
    daysUntil(l.dueDate) < daysUntil(min.dueDate) ? l : min,
  );
  const nextPaymentTotal = LOANS.filter(
    (l) => l.dueDate === nextDueLoan.dueDate,
  ).reduce((s, l) => s + l.minPayment, 0);
  const daysLeft = daysUntil(nextDueLoan.dueDate);
  const lastPayment = PAYMENTS.find(
    (p) => p.status === "completed",
  );

  // Streak: 8 of 12 months toward "Year of Discipline"
  const streakMonths = 8;
  const streakGoal = 12;
  const streakPct = Math.round(
    (streakMonths / streakGoal) * 100,
  );

  return (
    <div className="p-5 md:p-8 max-w-4xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl text-foreground">
            Good morning, Jordan.
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <button
          onClick={onPay}
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
        >
          <CreditCard size={14} />
          Make a Payment
        </button>
      </div>

      {/* Consolidated balance + payment card — elevated hero */}
      <div className="bg-card dark:bg-[#0d52b0] border border-border rounded-[8px] overflow-hidden w-full shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        {/* Green accent stripe */}
        <div className="h-[4px] w-full bg-[#31b237]" />
        <div className="flex flex-col gap-4 px-4 py-4">
          {/* Label row */}
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-bold uppercase tracking-[0.24px] text-muted-foreground">
              total loans balance
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.24px] text-muted-foreground">
              {LOANS.length} loans
            </p>
          </div>

          {/* Big balance — larger */}
          <p className="font-display text-[40px] leading-[40px] tracking-[-1px] text-foreground">
            {fmt(totalBalance)}
          </p>

          {/* Last paid */}
          {lastPayment && (
            <p className="text-[12px] font-bold tracking-[-0.24px] text-[#31b237] dark:text-[#51ca58]">
              Paid {fmt(lastPayment.amount)} on{" "}
              {fmtDate(lastPayment.date)}
            </p>
          )}

          {/* Next payment info */}
          <div className="flex items-center justify-between pt-1 border-t border-border">
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">
                next payment
              </p>
              <p className="text-[13px] text-foreground font-bold mt-0.5">
                {fmtDate(nextDueLoan.dueDate)}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">
                amount due
              </p>
              <p className="text-[13px] text-foreground font-bold mt-0.5">
                {fmt(nextPaymentTotal)}
              </p>
            </div>
            {daysLeft <= 14 && (
              <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-[#f59e0b]/40 dark:bg-[#fde047]/30 text-[#002159] dark:text-[#fde047]">
                {daysLeft}d left
              </span>
            )}
          </div>

          {/* Pay Now button */}
          <button
            onClick={onPay}
            className="relative w-full rounded-[10px] py-3 text-[16px] font-bold text-foreground dark:text-white text-center transition-opacity hover:opacity-80"
          >
            <span
              aria-hidden
              className="absolute inset-[-1px] rounded-[11px] border border-[#31b237] pointer-events-none"
            />
            Pay Now:&nbsp;&nbsp;{fmt(nextPaymentTotal)}
          </button>
        </div>
      </div>

      {/* Streak progress strip */}
      <div className="bg-card rounded-lg px-4 py-3 border border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Payment Streak
          </span>
          <span className="text-xs text-foreground font-bold">
            {streakMonths} on-time payments
          </span>
        </div>
        <div className="relative h-[4px] rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#31b237]"
            style={{ width: `${streakPct}%` }}
          />
        </div>
        <p className="text-[11px] text-muted-foreground mt-1.5">
          Streaks like this don&apos;t happen by accident.{" "}
          <span
            className="text-[14px]"
            style={{ filter: "saturate(2)" }}
          >
            🔥
          </span>
        </p>
      </div>

      {/* Loans */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Your Loans
        </h2>
        <div className="space-y-3">
          {LOANS.map((loan) => (
            <div
              key={loan.id}
              className="bg-card border border-border rounded-[8px] px-4 py-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        loan.type === "federal"
                          ? "bg-primary/15 text-primary dark:bg-white/10 dark:text-white/70"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {loan.type === "federal"
                        ? "Federal"
                        : "Private"}
                    </span>
                    {loan.status === "due-soon" && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#f59e0b]/40 dark:bg-[#fde047]/30 text-[#002159] dark:text-[#fde047]">
                        Due Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">
                    {loan.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {loan.servicer} · {loan.interestRate}% APR
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono font-bold text-foreground">
                    {fmt(loan.balance)}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    balance
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Minimum due
                  </p>
                  <p className="font-mono text-sm font-bold text-foreground">
                    {fmt(loan.minPayment)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[11px] text-muted-foreground">
                    Due date
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {fmtDate(loan.dueDate)}
                  </p>
                </div>
                <button
                  onClick={onPay}
                  className="text-sm text-[#51ca58] hover:opacity-80 font-bold transition-opacity"
                >
                  Pay →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Recent Activity · Past 30 Days
          </h2>
          <ChevronRight
            size={14}
            className="text-muted-foreground"
          />
        </div>
        <div className="bg-card border border-border rounded-[8px] overflow-hidden">
          {PAYMENTS.slice(0, 4).map((p, i) => (
            <div
              key={p.id}
              className={`flex items-center gap-4 px-4 py-3.5 ${
                i < 3 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-muted-foreground">
                  {fmtDate(p.date)}
                </p>
                <p className="text-sm font-bold text-foreground truncate">
                  {p.loan}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {p.payor}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className={`font-mono text-sm font-bold ${
                    p.status === "completed"
                      ? "text-[#51ca58]"
                      : p.status === "pending"
                        ? "text-[#f59e0b]"
                        : "text-red-400"
                  }`}
                >
                  -{fmt(p.amount)}
                </p>
                <p className="text-[11px] text-muted-foreground capitalize">
                  {p.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Payment View (multi-step) ─────────────────────────────────────────────────

function PaymentView({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedLoans, setSelectedLoans] = useState<string[]>(
    [],
  );
  const [amounts, setAmounts] = useState<
    Record<
      string,
      { type: "min" | "custom" | "full"; custom: string }
    >
  >({});
  const [payDate, setPayDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [bankId, setBankId] = useState(BANK_ACCOUNTS[0].id);
  const [payorType, setPayorType] = useState<"self" | string>(
    "self",
  );
  const [agreed, setAgreed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [confirmRef] = useState(
    () =>
      `LS-${Date.now().toString(36).toUpperCase().slice(-8)}`,
  );

  const toggleLoan = (id: string) => {
    setSelectedLoans((prev) =>
      prev.includes(id)
        ? prev.filter((l) => l !== id)
        : [...prev, id],
    );
    if (!amounts[id]) {
      setAmounts((prev) => ({
        ...prev,
        [id]: { type: "min", custom: "" },
      }));
    }
  };

  const getAmount = (loan: Loan) => {
    const a = amounts[loan.id];
    if (!a || a.type === "min") return loan.minPayment;
    if (a.type === "full") return loan.balance;
    return parseFloat(a.custom) || 0;
  };

  const totalPayment = selectedLoans.reduce((s, id) => {
    const loan = LOANS.find((l) => l.id === id);
    return loan ? s + getAmount(loan) : s;
  }, 0);

  const selectedBank = BANK_ACCOUNTS.find(
    (b) => b.id === bankId,
  )!;
  const selectedPayorName =
    payorType === "self"
      ? "Jordan Hayes (you)"
      : (GUEST_PAYORS_INIT.find((g) => g.id === payorType)
          ?.name ?? "");

  const isAfterDue = LOANS.some(
    (l) => selectedLoans.includes(l.id) && payDate > l.dueDate,
  );

  const guestPayor =
    payorType !== "self"
      ? GUEST_PAYORS_INIT.find((g) => g.id === payorType)
      : null;

  if (requestSent && guestPayor) {
    return (
      <div className="p-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[65vh] text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Bell size={28} className="text-primary" />
        </div>
        <h2 className="font-display text-2xl text-foreground mb-2">
          Request sent
        </h2>
        <p className="text-muted-foreground text-sm mb-1">
          {guestPayor.name} has been notified and can complete
          this payment.
        </p>
        <p className="text-xs text-muted-foreground mb-8 font-mono">
          {guestPayor.email}
        </p>
        <button
          onClick={onDone}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="p-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[65vh] text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
          <CheckCircle2
            size={32}
            className="text-green-600 dark:text-green-400"
          />
        </div>
        <h2 className="font-display text-2xl text-foreground mb-2">
          Payment submitted
        </h2>
        <p className="text-muted-foreground text-sm mb-1">
          {fmt(totalPayment)} will process within 1–2 business
          days.
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          Confirmation:{" "}
          <span className="font-mono text-foreground">
            {confirmRef}
          </span>
        </p>
        <button
          onClick={onDone}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const STEPS = [
    "Select loans",
    "Schedule",
    "Review",
    "Disclosures",
  ];

  return (
    <div className="p-5 md:p-8 max-w-2xl mx-auto space-y-5">
      {/* Step indicator — bar style matching Figma */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Make a Payment
        </h1>
        <div className="flex items-center gap-3 mb-1">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-[4px] rounded-full transition-colors ${
                step > i + 1
                  ? "bg-[#22c55e]"
                  : step === i + 1
                    ? "bg-[#4ade80]"
                    : "bg-[#6b7280]/40"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Step {step} of {STEPS.length} — {STEPS[step - 1]}
        </p>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Choose which loans to include and the payment amount
            for each.
          </p>
          {LOANS.map((loan) => (
            <div
              key={loan.id}
              className={`bg-card border rounded-xl p-5 transition-colors ${
                selectedLoans.includes(loan.id)
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  onClick={() => toggleLoan(loan.id)}
                  className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center cursor-pointer shrink-0 transition-colors ${
                    selectedLoans.includes(loan.id)
                      ? "bg-primary border-primary"
                      : "border-border"
                  }`}
                >
                  {selectedLoans.includes(loan.id) && (
                    <Check
                      size={10}
                      className="text-primary-foreground"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p
                        className="font-medium text-foreground text-sm cursor-pointer"
                        onClick={() => toggleLoan(loan.id)}
                      >
                        {loan.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Balance:{" "}
                        <span className="font-mono">
                          {fmt(loan.balance)}
                        </span>{" "}
                        · Due {fmtDate(loan.dueDate)}
                      </p>
                    </div>
                  </div>

                  {selectedLoans.includes(loan.id) && (
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-2">
                        {(
                          [
                            {
                              type: "min" as const,
                              label: `Min — ${fmt(loan.minPayment)}`,
                            },
                            {
                              type: "full" as const,
                              label: `Payoff — ${fmt(loan.balance)}`,
                            },
                            {
                              type: "custom" as const,
                              label: "Custom",
                            },
                          ] as const
                        ).map((opt) => (
                          <button
                            key={opt.type}
                            onClick={() =>
                              setAmounts((prev) => ({
                                ...prev,
                                [loan.id]: {
                                  ...prev[loan.id],
                                  type: opt.type,
                                },
                              }))
                            }
                            className={`flex-1 py-1.5 px-1 rounded-lg text-xs font-medium border transition-colors ${
                              (amounts[loan.id]?.type ??
                                "min") === opt.type
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-input-background border-border text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {amounts[loan.id]?.type === "custom" && (
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                            $
                          </span>
                          <input
                            type="number"
                            min="1"
                            placeholder="0.00"
                            value={
                              amounts[loan.id]?.custom ?? ""
                            }
                            onChange={(e) =>
                              setAmounts((prev) => ({
                                ...prev,
                                [loan.id]: {
                                  ...prev[loan.id],
                                  custom: e.target.value,
                                },
                              }))
                            }
                            className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-input-background border border-border text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {selectedLoans.length > 0 && (
            <div className="bg-primary/8 border border-primary/20 rounded-xl px-4 py-3.5 flex items-center justify-between">
              <span className="text-sm text-foreground">
                Total payment
              </span>
              <span className="font-mono font-medium text-foreground text-base">
                {fmt(totalPayment)}
              </span>
            </div>
          )}

          <button
            onClick={() => setStep(2)}
            disabled={selectedLoans.length === 0}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground rounded-xl py-3 text-sm font-medium transition-colors"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Payment date
            </label>
            <input
              type="date"
              value={payDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setPayDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
            />
            {isAfterDue && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 flex items-center gap-1.5">
                <AlertTriangle size={12} />
                This date is after a due date. Late fees may
                apply.
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Pay from
            </label>
            <div className="space-y-2">
              {BANK_ACCOUNTS.map((b) => (
                <label
                  key={b.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                    bankId === b.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:bg-accent/50"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                      bankId === b.id
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    {bankId === b.id && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <Building2
                    size={14}
                    className="text-muted-foreground shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {b.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      ···· {b.last4} · {b.type}
                      {b.isPrimary ? " · Primary" : ""}
                    </p>
                  </div>
                  <input
                    type="radio"
                    className="sr-only"
                    checked={bankId === b.id}
                    onChange={() => setBankId(b.id)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Payor
            </label>
            <div className="space-y-2">
              {(
                [
                  {
                    id: "self",
                    name: "Jordan Hayes",
                    sub: "You (account holder)",
                    initials: "JH",
                  },
                  ...GUEST_PAYORS_INIT.filter(
                    (g) =>
                      g.status === "active" &&
                      g.permissions.includes("make_payments"),
                  ).map((g) => ({
                    id: g.id,
                    name: g.name,
                    sub: "Guest payor",
                    initials: g.name
                      .split(" ")
                      .map((n) => n[0])
                      .join(""),
                  })),
                ] as {
                  id: string;
                  name: string;
                  sub: string;
                  initials: string;
                }[]
              ).map((p) => (
                <label
                  key={p.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                    payorType === p.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:bg-accent/50"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                      payorType === p.id
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    {payorType === p.id && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                      p.id === "self"
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {p.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {p.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {p.sub}
                    </p>
                  </div>
                  <input
                    type="radio"
                    className="sr-only"
                    checked={payorType === p.id}
                    onChange={() => setPayorType(p.id)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-border text-foreground rounded-xl py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() =>
                payorType !== "self"
                  ? setRequestSent(true)
                  : setStep(3)
              }
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 text-sm font-medium transition-colors"
            >
              {payorType !== "self" ? "Send Request" : "Review"}
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-5">
          <p className="text-sm text-muted-foreground">
            Review every detail before submitting. Payments
            cannot be cancelled once processed.
          </p>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {[
              {
                label: "Total amount",
                value: fmt(totalPayment),
                mono: true,
                large: true,
              },
              {
                label: "Payment date",
                value: new Date(
                  payDate + "T12:00:00",
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }),
              },
              {
                label: "From account",
                value: `${selectedBank.name} ···· ${selectedBank.last4}`,
                mono: true,
              },
              { label: "Payor", value: selectedPayorName },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-5 py-4 ${
                  i < 3 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm text-muted-foreground">
                  {row.label}
                </span>
                <span
                  className={`text-sm font-medium text-foreground ${
                    row.mono ? "font-mono" : ""
                  } ${row.large ? "text-base" : ""}`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <p className="px-5 py-3 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
              Loans included
            </p>
            {selectedLoans.map((id, i) => {
              const loan = LOANS.find((l) => l.id === id)!;
              return (
                <div
                  key={id}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < selectedLoans.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <span className="text-sm text-foreground">
                    {loan.name}
                  </span>
                  <span className="font-mono text-sm text-foreground">
                    {fmt(getAmount(loan))}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-muted/40 rounded-xl px-4 py-3.5 text-xs text-muted-foreground leading-relaxed">
            Payments typically process within 1–2 business days.
            If your payment date falls on a weekend or federal
            holiday, it will be processed the next business day.
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => setStep(2)}
              className="flex-1 border border-border text-foreground rounded-xl py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => {
                setAgreed(false);
                setStep(4);
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 text-sm font-medium transition-colors"
            >
              Review Disclosures
            </button>
          </div>
        </div>
      )}

      {/* Step 4 — Disclosures */}
      {step === 4 &&
        (() => {
          const serviceFee = totalPayment * 0.015;
          const totalWithFee = totalPayment + serviceFee;
          return (
            <div className="space-y-4">
              {/* Header */}
              <div className="px-1">
                <p className="text-[13px] font-black uppercase tracking-[0.39px] text-foreground">
                  Review before continuing
                </p>
                <p className="text-[12px] text-muted-foreground mt-0.5">
                  Read disclosures, accept terms, and confirm
                  your payment.
                </p>
              </div>

              {/* Scrollable disclosure panel */}
              <div className="bg-[#01337d] rounded-[8px] overflow-hidden relative">
                <div className="overflow-y-auto max-h-[280px] px-4 py-3 space-y-3 text-[11px] leading-[16px] text-[#f9fafb] [scrollbar-width:thin] [scrollbar-color:#0967d2_rgba(62,76,89,0.5)]">
                  <p className="font-black uppercase tracking-wider text-[11px]">
                    Payment Authorization
                  </p>
                  <p className="font-normal">
                    By submitting this payment, you authorize
                    Due Notice to initiate an ACH debit from
                    your designated bank account. This
                    authorization remains in effect until
                    cancelled in writing. Payments submitted
                    before 5:00 PM ET on a business day will be
                    processed the same day.
                  </p>

                  <p className="font-black uppercase tracking-wider text-[11px] pt-1">
                    Service Fee Disclosure
                  </p>
                  <p className="font-normal">
                    A service fee of 1.5% of your total payment
                    amount will be charged for each transaction.
                    This fee is non-refundable. Borrowers
                    enrolled in AutoPay who have made 3 or more
                    consecutive on-time payments are eligible
                    for a fee waiver.
                  </p>

                  <p className="font-black uppercase tracking-wider text-[11px] pt-1">
                    Bundled Payment Terms
                  </p>
                  <p className="font-normal">
                    Payments made through Due Notice are applied
                    proportionally across all active loan
                    accounts. Individual loan servicers may take
                    1–3 business days to reflect updated
                    balances. Due Notice is not responsible for
                    servicer-side processing delays.
                  </p>

                  <p className="font-black uppercase tracking-wider text-[11px] pt-1">
                    Cancellation Policy
                  </p>
                  <p className="font-normal">
                    Scheduled payments may be cancelled up to 2
                    business days before the scheduled date.
                    Same-day payments cannot be cancelled once
                    submitted. To cancel a scheduled payment,
                    visit the Payments tab or contact support.
                  </p>

                  <p className="font-black uppercase tracking-wider text-[11px] pt-1">
                    Data & Privacy
                  </p>
                  <p className="font-normal">
                    Your banking credentials are encrypted and
                    stored using bank-level security. Due Notice
                    does not sell or share your financial data
                    with third parties. See our full Privacy
                    Policy at duenotice.com/privacy.
                  </p>
                </div>
                {/* Fade-out gradient at bottom to signal scrollability */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#01337d] to-transparent" />
              </div>

              {/* Checkbox agreement */}
              <div
                className={`border rounded-[4px] p-3 transition-colors ${
                  agreed
                    ? "border-[#f59e0b] bg-[#002159]"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => setAgreed(!agreed)}
                    className={`w-5 h-5 mt-0.5 rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-colors ${
                      agreed
                        ? "bg-[#f59e0b] border-[#f59e0b]"
                        : "bg-background border-[#f59e0b]"
                    }`}
                  >
                    {agreed && (
                      <Check size={11} className="text-white" />
                    )}
                  </button>
                  <div className="text-[12px] text-[#f9fafb] leading-[1.4]">
                    <p className="font-bold">
                      I have read the disclosures and agree to
                    </p>
                    <p className="font-normal mt-1">
                      authorize the ACH debit of{" "}
                      <span className="font-bold font-mono">
                        {fmt(totalWithFee)}
                      </span>
                    </p>
                    <p className="font-normal">
                      acknowledge the{" "}
                      <span className="font-bold">
                        1.5% service fee of {fmt(serviceFee)}
                      </span>
                    </p>
                    <p className="font-normal">
                      the{" "}
                      <span className="font-bold underline cursor-pointer">
                        Terms of Service and Privacy Policy
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Confirm Payment button — matches Figma: green tinted bg, muted text when unchecked */}
              <div className="bg-[#002159] rounded-[8px] p-3">
                <button
                  onClick={() => agreed && setConfirmed(true)}
                  className={`w-full rounded-[10px] py-3 text-[16px] font-bold text-center transition-all ${
                    agreed
                      ? "bg-[rgba(34,197,94,0.5)] text-white hover:bg-[rgba(34,197,94,0.65)] cursor-pointer"
                      : "bg-[rgba(34,197,94,0.3)] text-white/50 cursor-not-allowed"
                  }`}
                >
                  Confirm Payment:&nbsp;&nbsp;
                  {fmt(totalWithFee)}
                </button>
              </div>

              <button
                onClick={() => setStep(3)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                ← Back to review
              </button>
            </div>
          );
        })()}
    </div>
  );
}

// ── History View ──────────────────────────────────────────────────────────────

function HistoryView() {
  const [filter, setFilter] = useState<
    "all" | "completed" | "pending" | "failed"
  >("all");
  const filtered =
    filter === "all"
      ? PAYMENTS
      : PAYMENTS.filter((p) => p.status === filter);

  return (
    <div className="p-5 md:p-8 max-w-3xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl md:text-3xl text-foreground">
          Payment History
        </h1>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors">
          <Download size={12} /> Export
        </button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(
          ["all", "completed", "pending", "failed"] as const
        ).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium capitalize border transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="hidden sm:grid grid-cols-4 px-5 py-3 border-b border-border">
          {["Date", "Description", "Payor", "Amount"].map(
            (h) => (
              <p
                key={h}
                className="text-xs text-muted-foreground uppercase tracking-wider"
              >
                {h}
              </p>
            ),
          )}
        </div>
        {filtered.length === 0 ? (
          <div className="px-5 py-14 text-center text-sm text-muted-foreground">
            No payments found.
          </div>
        ) : (
          filtered.map((p, i) => (
            <div
              key={p.id}
              className={`flex sm:grid sm:grid-cols-4 items-center gap-3 px-5 py-4 ${
                i < filtered.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <p className="font-mono text-sm text-foreground">
                {fmtDate(p.date)}
              </p>
              <div>
                <p className="text-sm text-foreground">
                  {p.loan}
                </p>
                <span
                  className={`text-xs capitalize ${
                    p.status === "completed"
                      ? "text-green-600 dark:text-green-400"
                      : p.status === "pending"
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground hidden sm:block">
                {p.payor}
              </p>
              <p className="font-mono text-sm font-medium text-foreground ml-auto sm:ml-0">
                {fmt(p.amount)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ── Guest Payors View ─────────────────────────────────────────────────────────

function PayorsView() {
  const [payors, setPayors] = useState<GuestPayor[]>(
    GUEST_PAYORS_INIT,
  );
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPerms, setNewPerms] = useState<string[]>([
    "make_payments",
  ]);

  const togglePerm = (p: string) =>
    setNewPerms((prev) =>
      prev.includes(p)
        ? prev.filter((x) => x !== p)
        : [...prev, p],
    );

  const addPayor = () => {
    if (!newEmail.trim() || !newName.trim()) return;
    setPayors((prev) => [
      ...prev,
      {
        id: `G${Date.now()}`,
        name: newName.trim(),
        email: newEmail.trim(),
        permissions: newPerms,
        lastActivity: null,
        status: "pending",
      },
    ]);
    setNewName("");
    setNewEmail("");
    setNewPerms(["make_payments"]);
    setShowAdd(false);
  };

  const revoke = (id: string) =>
    setPayors((prev) => prev.filter((p) => p.id !== id));

  const PERM_LABELS: Record<string, string> = {
    view_balances: "View loan balances",
    make_payments: "Make payments",
    view_history: "View payment history",
  };

  return (
    <div className="p-5 md:p-8 max-w-3xl mx-auto space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl text-foreground">
            Guest Payors
          </h1>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Invite trusted people to make payments on your
            behalf. They only see what you allow.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shrink-0"
        >
          <Plus size={14} /> Invite Guest
        </button>
      </div>

      {showAdd && (
        <div className="bg-card border border-primary/40 rounded-xl p-5 space-y-4">
          <h3 className="font-medium text-foreground text-sm">
            Invite a guest payor
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">
                Full name
              </label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Margaret Chen"
                className="w-full px-3.5 py-2.5 rounded-lg bg-input-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">
                Email address
              </label>
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                type="email"
                placeholder="guest@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-input-background border border-border text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground mb-2">
              Permissions — choose what this person can do
            </label>
            <div className="space-y-2.5">
              {Object.entries(PERM_LABELS).map(
                ([key, label]) => (
                  <label
                    key={key}
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <div
                      onClick={() => togglePerm(key)}
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                        newPerms.includes(key)
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {newPerms.includes(key) && (
                        <Check
                          size={10}
                          className="text-primary-foreground"
                        />
                      )}
                    </div>
                    <span className="text-sm text-foreground">
                      {label}
                    </span>
                  </label>
                ),
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => setShowAdd(false)}
              className="flex-1 border border-border text-foreground rounded-xl py-2.5 text-sm hover:bg-accent/50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={addPayor}
              disabled={!newName.trim() || !newEmail.trim()}
              className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground rounded-xl py-2.5 text-sm font-medium transition-colors"
            >
              Send Invitation
            </button>
          </div>
        </div>
      )}

      {payors.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 text-center text-sm text-muted-foreground">
          No guest payors yet. Invite someone to get started.
        </div>
      ) : (
        <div className="space-y-3">
          {payors.map((p) => (
            <div
              key={p.id}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-mono shrink-0">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-foreground text-sm">
                        {p.name}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          p.status === "active"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {p.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => revoke(p.id)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors shrink-0"
                >
                  <Trash2 size={12} /> Revoke
                </button>
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                {p.permissions.map((perm) => (
                  <span
                    key={perm}
                    className="text-xs px-2.5 py-1 bg-muted rounded-lg text-muted-foreground"
                  >
                    {PERM_LABELS[perm] ?? perm}
                  </span>
                ))}
              </div>

              {p.lastActivity && (
                <p className="text-xs text-muted-foreground mt-3">
                  Last active: {fmtDate(p.lastActivity)}
                </p>
              )}
              {!p.lastActivity && p.status === "pending" && (
                <p className="text-xs text-muted-foreground mt-3">
                  Invitation sent — awaiting acceptance
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Notifications View ────────────────────────────────────────────────────────

function Toggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-10 h-5.5 h-[22px] rounded-full transition-colors ${
        value ? "bg-primary" : "bg-muted"
      }`}
      role="switch"
      aria-checked={value}
    >
      <span
        className={`absolute top-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
          value ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function NotificationsView() {
  const [reminders, setReminders] = useState({
    days7: true,
    days3: false,
    days1: false,
  });
  const [confirmations, setConfirmations] = useState({
    submitted: true,
    processed: true,
  });

  const SectionCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <p className="px-5 py-3.5 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
        {title}
      </p>
      <div className="divide-y divide-border">{children}</div>
    </div>
  );

  const Row = ({
    label,
    sub,
    value,
    onChange,
  }: {
    label: string;
    sub: string;
    value: boolean;
    onChange: (v: boolean) => void;
  }) => (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          {label}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
          {sub}
        </p>
      </div>
      <Toggle value={value} onChange={onChange} />
    </div>
  );

  return (
    <div className="p-5 md:p-8 max-w-2xl mx-auto space-y-5">
      <div>
        <h1 className="font-display text-2xl md:text-3xl text-foreground">
          Notifications
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Control when Due Notice contacts you. No promotional
          messages, ever.
        </p>
      </div>

      <SectionCard title="Due Date Reminders">
        <Row
          label="7 days before due date"
          sub="Recommended — gives you time to transfer funds if needed"
          value={reminders.days7}
          onChange={(v) =>
            setReminders((p) => ({ ...p, days7: v }))
          }
        />
        <Row
          label="3 days before due date"
          sub="Good if you pay close to the due date"
          value={reminders.days3}
          onChange={(v) =>
            setReminders((p) => ({ ...p, days3: v }))
          }
        />
        <Row
          label="1 day before due date"
          sub="A final heads-up before the deadline"
          value={reminders.days1}
          onChange={(v) =>
            setReminders((p) => ({ ...p, days1: v }))
          }
        />
      </SectionCard>

      <SectionCard title="Payment Confirmations">
        <Row
          label="Payment submitted"
          sub="Sent when your payment enters processing"
          value={confirmations.submitted}
          onChange={(v) =>
            setConfirmations((p) => ({ ...p, submitted: v }))
          }
        />
        <Row
          label="Payment processed"
          sub="Sent when funds have cleared"
          value={confirmations.processed}
          onChange={(v) =>
            setConfirmations((p) => ({ ...p, processed: v }))
          }
        />
      </SectionCard>

      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
            <AlertTriangle
              size={15}
              className="text-destructive"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              Failed payment alerts
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              These cannot be disabled. You will always be
              notified immediately if a payment fails so you can
              act before it becomes a late payment on your
              account.
            </p>
          </div>
          <div className="shrink-0 mt-0.5">
            <div className="relative w-10 h-[22px] rounded-full bg-primary opacity-50 pointer-events-none">
              <span className="absolute top-0.5 right-0.5 w-[18px] h-[18px] rounded-full bg-white shadow" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Due Notice sends only transactional notifications. We do
        not send re-engagement nudges, promotional offers, or
        streak-loss warnings.
      </p>
    </div>
  );
}

// ── Account View ──────────────────────────────────────────────────────────────

function AccountView() {
  const SectionCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <p className="px-5 py-3.5 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
        {title}
      </p>
      <div className="divide-y divide-border">{children}</div>
    </div>
  );

  const InfoRow = ({
    label,
    value,
    mono = false,
  }: {
    label: string;
    value: string;
    mono?: boolean;
  }) => (
    <div className="flex items-center gap-4 px-5 py-3.5">
      <span className="text-xs text-muted-foreground w-28 shrink-0">
        {label}
      </span>
      <span
        className={`text-sm text-foreground flex-1 ${mono ? "font-mono" : ""}`}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div className="p-5 md:p-8 max-w-2xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl md:text-3xl text-foreground">
          Account
        </h1>
        <button className="flex items-center gap-1.5 text-sm text-primary hover:underline">
          <Edit2 size={13} /> Edit
        </button>
      </div>

      <SectionCard title="Personal Information">
        <InfoRow label="Full name" value="Jordan Hayes" />
        <InfoRow
          label="Email"
          value="jordan.hayes@gmail.com"
          mono
        />
        <InfoRow label="Phone" value="+1 (415) 555-0192" mono />
        <InfoRow label="Account #" value="LS-00041-8832" mono />
        <InfoRow label="Member since" value="November 2024" />
      </SectionCard>

      <SectionCard title="Bank Accounts">
        {BANK_ACCOUNTS.map((b) => (
          <div
            key={b.id}
            className="flex items-center gap-3 px-5 py-4"
          >
            <Building2
              size={14}
              className="text-muted-foreground shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                {b.name}
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                ···· {b.last4} · {b.type}
                {b.isPrimary ? " · Primary" : ""}
              </p>
            </div>
            <button className="text-xs text-muted-foreground hover:text-destructive transition-colors shrink-0">
              Remove
            </button>
          </div>
        ))}
        <div className="px-5 py-4">
          <button className="flex items-center gap-2 text-sm text-primary hover:underline">
            <Plus size={13} /> Add bank account
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Security">
        {[
          {
            label: "Password",
            sub: "Last changed 3 months ago",
            action: "Change",
          },
          {
            label: "Two-factor authentication",
            sub: "Authenticator app · Active",
            action: "Manage",
          },
          {
            label: "Active sessions",
            sub: "2 devices signed in",
            action: "Review",
          },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 px-5 py-4"
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                {row.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {row.sub}
              </p>
            </div>
            <button className="text-xs text-primary hover:underline shrink-0">
              {row.action}
            </button>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Your Data">
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-sm font-medium text-foreground">
              Download my data
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Export all account data as JSON or CSV
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-xs text-primary hover:underline shrink-0">
            <Download size={12} /> Export
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-sm font-medium text-destructive">
              Delete my account
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Permanently removes all data within 30 days
            </p>
          </div>
          <button className="text-xs text-destructive hover:underline shrink-0">
            Delete
          </button>
        </div>
      </SectionCard>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [view, setView] = useState<View>("dashboard");
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark((d) => !d);

  if (screen === "login") {
    return (
      <div className={isDark ? "dark" : ""}>
        <LoginScreen
          onNext={() => setScreen("2fa")}
          onBiometric={() => setScreen("app")}
        />
      </div>
    );
  }

  if (screen === "2fa") {
    return (
      <div className={isDark ? "dark" : ""}>
        <TwoFAScreen
          onVerify={() => setScreen("app")}
          onBack={() => setScreen("login")}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-screen overflow-hidden bg-background ${isDark ? "dark" : ""}`}
    >
      <Sidebar
        view={view}
        onNav={setView}
        isDark={isDark}
        toggleDark={toggleDark}
        onLogout={() => {
          setScreen("login");
          setView("dashboard");
        }}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileHeader
          view={view}
          isDark={isDark}
          toggleDark={toggleDark}
        />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {view === "dashboard" && (
            <DashboardView onPay={() => setView("payment")} />
          )}
          {view === "payment" && (
            <PaymentView onDone={() => setView("dashboard")} />
          )}
          {view === "history" && <HistoryView />}
          {view === "payors" && <PayorsView />}
          {view === "notifications" && <NotificationsView />}
          {view === "account" && <AccountView />}
        </main>
      </div>
      <BottomNav view={view} onNav={setView} />
    </div>
  );
}

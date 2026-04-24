import { CSSProperties } from "react";

/* ==========================================================
   TOPOGRAPHIC CONTOUR PATTERN (SVG)
   ========================================================== */
const TopoPattern = ({ color = "rgba(255,255,255,0.06)" }: { color?: string }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 360 225"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Horizontal contour lines */}
    {Array.from({ length: 18 }, (_, i) => {
      const baseY = 230 - i * 14;
      const a1 = 8 + (i % 4) * 4;
      const a2 = -(6 + ((i + 2) % 3) * 5);
      return (
        <path
          key={`w-${i}`}
          d={`M-10,${baseY} C60,${baseY + a1} 120,${baseY + a2} 180,${baseY + a1 * 0.5} S300,${baseY + a2 * 0.7} 370,${baseY + a1 * 0.3}`}
          stroke={color}
          strokeWidth="0.8"
        />
      );
    })}
    {/* Right concentric ellipses */}
    {Array.from({ length: 8 }, (_, i) => (
      <ellipse
        key={`er-${i}`}
        cx="300"
        cy={80 + i * 3}
        rx={6 + i * 10}
        ry={4 + i * 7}
        stroke={color}
        strokeWidth="0.7"
      />
    ))}
    {/* Left concentric ellipses */}
    {Array.from({ length: 6 }, (_, i) => (
      <ellipse
        key={`el-${i}`}
        cx="65"
        cy={165 + i * 2}
        rx={5 + i * 9}
        ry={3 + i * 6}
        stroke={color}
        strokeWidth="0.7"
      />
    ))}
    {/* Center ripple cluster */}
    {Array.from({ length: 4 }, (_, i) => (
      <ellipse
        key={`ec-${i}`}
        cx="185"
        cy={120 + i * 2}
        rx={4 + i * 7}
        ry={3 + i * 5}
        stroke={color}
        strokeWidth="0.5"
      />
    ))}
  </svg>
);

/* ==========================================================
   CONTACTLESS NFC ICON
   ========================================================== */
const ContactlessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <path
      d="M8 10 C12 10, 14 12, 14 14 C14 16, 12 18, 8 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M8 7 C14 7, 18 10, 18 14 C18 18, 14 21, 8 21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.65"
    />
    <path
      d="M8 4 C16 4, 22 8, 22 14 C22 20, 16 24, 8 24"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.45"
    />
    <path
      d="M8 1 C18 1, 26 6, 26 14 C26 22, 18 27, 8 27"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.3"
    />
  </svg>
);

/* ==========================================================
   VANTEDGE MINI LOGO
   ========================================================== */
const VantedgeLogo = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
      <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-primary-foreground transform rotate-[135deg] translate-x-[1px] -translate-y-[1px]" />
    </div>
    <span className="text-white font-bold text-xs">Vantedge</span>
  </div>
);

/* ==========================================================
   REUSABLE CREDIT CARD COMPONENT
   ========================================================== */
interface CreditCardProps {
  title: string;
  amount: string;
  gradient: string;
  topoColor: string;
  style?: CSSProperties;
}

const CreditCard = ({
  title,
  amount,
  gradient,
  topoColor,
  style,
}: CreditCardProps) => (
  <div
    className="absolute rounded-[24px] overflow-hidden border border-white/10"
    style={{
      width: 360,
      height: 225,
      left: 30,
      background: gradient,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      ...style,
    }}
  >
    <TopoPattern color={topoColor} />

    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <span className="text-white/60 font-semibold text-xs">
          {title}
        </span>
        <span className="text-white font-bold text-xl tracking-tight">
          {amount}
        </span>
      </div>

      <div className="flex justify-center -mt-2">
        <ContactlessIcon />
      </div>

      <div className="flex items-end justify-between">
        <span className="text-white/30 font-mono text-xs">
          •••• •••• •••• 8829
        </span>
        <VantedgeLogo />
      </div>
    </div>
  </div>
);

/* ==========================================================
   DARK GLASS POCKET
   ========================================================== */
const DarkGlassPocket = () => (
  <div
    className="absolute left-0 pointer-events-none"
    style={{ top: 170, width: 420, height: 220, zIndex: 30 }}
  >
    <svg
      viewBox="0 0 420 220"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="glassGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      <path
        d="M0,18 C60,8 130,38 210,30 C290,22 360,45 420,12 L420,220 L0,220 Z"
        fill="url(#glassGradient)"
        className="backdrop-blur-2xl border-t border-white/10"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
    </svg>

    <div className="absolute left-[48px]" style={{ top: 70 }}>
      <p className="text-white/40 text-xs font-semibold mb-3">
        Total Earnings
      </p>
      <p className="text-white text-4xl font-bold tracking-tight">
        $12,040.<span className="text-primary">30</span>
      </p>
    </div>
  </div>
);

/* ==========================================================
   MAIN ANIMATION PAGE
   ========================================================== */
const AnimationPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10" />

      <style>{`
        @keyframes darkCard {
          0%, 12%   { top: 65px;  z-index: 20; transform: scale(0.98); filter: brightness(0.5); }
          24%, 40%  { top: 55px;  z-index: 35; transform: scale(1);    filter: brightness(1); }
          54%, 68%  { top: 0px;   z-index: 10; transform: scale(0.97); filter: brightness(0.3); }
          82%, 100% { top: 65px;  z-index: 20; transform: scale(0.98); filter: brightness(0.5); }
        }

        @keyframes redCard {
          0%, 40%   { top: 0px;  z-index: 10; transform: scale(0.97); filter: brightness(0.3); }
          54%, 68%  { top: 55px; z-index: 35; transform: scale(1);    filter: brightness(1); }
          82%, 100% { top: 0px;  z-index: 10; transform: scale(0.97); filter: brightness(0.3); }
        }
      `}</style>

      <div className="relative" style={{ width: 420, height: 390 }}>
        {/* --- Glass Wallet Base --- */}
        <div
          className="absolute"
          style={{
            width: 400,
            height: 345,
            left: 10,
            top: 30,
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(40px)",
            borderRadius: 32,
            zIndex: 5,
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)",
          }}
        />

        <DarkGlassPocket />

        <CreditCard
          title="Nexus Rewards"
          amount="$8,280.30"
          gradient="linear-gradient(140deg, #0ea5e9 0%, #0369a1 100%)"
          topoColor="rgba(255,255,255,0.1)"
          style={{
            animation: "darkCard 8s ease-in-out infinite",
            animationDelay: "0.5s",
            top: 65,
            zIndex: 20,
            transform: "scale(0.98)",
          }}
        />

        <CreditCard
          title="Node Incentives"
          amount="$3,760.00"
          gradient="linear-gradient(145deg, #6366f1 0%, #4338ca 100%)"
          topoColor="rgba(255,255,255,0.1)"
          style={{
            animation: "redCard 8s ease-in-out infinite",
            animationDelay: "0.5s",
            top: 0,
            zIndex: 10,
            transform: "scale(0.97)",
          }}
        />
      </div>
    </div>
  );
};

export default AnimationPage;
import { useEffect, useState } from "react";

const STATUS_LINES = [
  "Initialising creative engine...",
  "Calibrating chai levels: ████░░░ 71%",
  "Loading pixel magic...",
  "Stamping with love — India",
];

export function BootScreen() {
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("booted") === "1") {
      setDone(true);
      return;
    }
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUS_LINES.length);
    }, 850);
    const exitT = setTimeout(() => setExiting(true), 3000);
    const doneT = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("booted", "1");
    }, 3550);
    return () => {
      clearInterval(id);
      clearTimeout(exitT);
      clearTimeout(doneT);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "var(--clr-bg)" }}
    >
      {/* Pichwai corners */}
      {[
        { top: 18, left: 18, rot: 0 },
        { top: 18, right: 18, rot: 90 },
        { bottom: 18, right: 18, rot: 180 },
        { bottom: 18, left: 18, rot: 270 },
      ].map((p, i) => (
        <svg
          key={i}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute"
          style={{
            ...p,
            transform: `rotate(${p.rot}deg)`,
            opacity: 0,
            animation: `riseIn 600ms ${400 + i * 250}ms ease-out forwards`,
          }}
        >
          <path
            d="M5 5 Q40 5 40 40 M5 5 Q5 40 40 40"
            fill="none"
            stroke="var(--clr-gold)"
            strokeWidth="1"
            opacity="0.9"
          />
          <circle cx="20" cy="20" r="3" fill="var(--clr-marigold)" />
          <path d="M14 20 a6 6 0 0 1 12 0" stroke="var(--clr-gold)" strokeWidth="0.8" fill="none" />
        </svg>
      ))}

      <div className="flex flex-col items-center gap-6 px-6">
        <div className="text-[13px] tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--clr-muted)" }}>
          Loading ... <span className="caret" />
        </div>

        {/* Letterbox SVG */}
        <svg width="120" height="160" viewBox="0 0 120 160">
          <ellipse cx="60" cy="148" rx="28" ry="4" fill="rgba(0,0,0,0.35)" />
          <rect x="55" y="80" width="10" height="70" fill="#2a0707" />
          <rect x="30" y="60" width="60" height="80" rx="4" fill="var(--clr-vermillion)" stroke="#3a0c0c" strokeWidth="2" />
          <path d="M28 60 Q60 30 92 60 Z" fill="#1a0303" />
          <rect x="40" y="78" width="40" height="6" fill="#1a0303" />
          <g style={{ transformOrigin: "60px 84px", animation: "slotOpen 2.4s ease-in-out infinite" }}>
            <rect x="40" y="78" width="40" height="6" fill="var(--clr-paper)" />
          </g>
          <rect x="44" y="100" width="32" height="18" rx="2" fill="var(--clr-paper)" />
          <text x="60" y="113" textAnchor="middle" fill="var(--clr-bg)" fontSize="7" fontFamily="JetBrains Mono">KRSNA</text>
        </svg>

        {/* progress */}
        <div className="w-64 h-[2px] overflow-hidden" style={{ background: "rgba(240,230,196,0.15)" }}>
          <div
            className="h-full"
            style={{
              background: "var(--clr-paper)",
              width: "100%",
              transform: "translateX(-100%)",
              animation: "loadbar 3.2s linear forwards",
            }}
          />
        </div>

        <div
          className="text-[11px] h-4 min-w-[280px] text-center"
          style={{ fontFamily: "var(--font-mono)", color: "var(--clr-marigold)" }}
        >
          {STATUS_LINES[statusIdx]}
        </div>
      </div>

      <style>{`@keyframes loadbar { to { transform: translateX(0); } }`}</style>

      {exiting && (
        <div
          className="absolute left-0 top-0 w-full h-[120vh]"
          style={{
            background: "var(--clr-bg)",
            animation: "scanWipe 500ms ease-in forwards",
          }}
        />
      )}
    </div>
  );
}

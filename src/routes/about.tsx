import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, PichwaiStrip } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Krishna Thakur" },
      { name: "description", content: "About Krishna Thakur" },
      { property: "og:title", content: "About | Krishna Thakur" },
      { property: "og:description", content: "Designer, researcher, and engineer with experience across Web3, mobile, and civic technology." },
    ],
  }),
  component: About,
});

const STATS = [
  { v: "2+", l: "Years Building" },
  { v: "+5", l: "Shipped Projects" },
  { v: "2", l: "Happy Clients" },
  { v: "∞", l: "Cups of Chai" },
];

const EXPERIENCE = [
  {
    range: "JUN 2025 - AUG 2025",
    company: "ABCI - Artificial Blockchain Intelligence",
    role: "Product & Interface Design (Blockchain)",
    bullets: [
      "Designed Bridge Order and limit-order trading flows, expanding routing options and lifting order-routing efficiency.",
      "Shipped a live on-chain limit-order system - create, cancel, execute - reducing failed orders by an estimated 25%.",
      "Led the migration UX from Uniswap v2 to v3 patterns; tick-range visualisations improved capital efficiency by 30%.",
    ],
  },
  {
    range: "APR 2025 - MAY 2025",
    company: "QuadB Technologies",
    role: "UI Designer & Front-end",
    bullets: [
      "Launched an on-chain Tap-to-Earn loop inspired by Space War - daily active users grew ~15% during the pilot.",
      "Delivered a modular React + Tailwind component kit, cutting UI assembly time by 20% across the product team.",
      "Partnered with engineering to keep theme tokens consistent across 4 product surfaces.",
    ],
  },
];

const EDUCATION = [
  {
    range: "2022 - 2026",
    company: "Jaypee University of Engineering and Technology",
    role: "B.Tech, Computer Science and Engineering",
    bullets: [
      "Studying systems, distributed services, and human-computer interaction - bridging code and craft.",
      "Independent design practice on the side: 15+ shipped interfaces across Web3, civic tech, and indie tools.",
    ],
  },
];

function About() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-14 md:pt-20">
      <SectionHeader eyebrow="02 / ABOUT" title="The Person Behind the Pixels" />

      <div className="grid md:grid-cols-[280px_1fr] gap-10 mb-16 items-start">
        {/* Pichwai medallion photo */}
        <div className="mx-auto md:mx-0">
          <div className="relative w-[240px] h-[240px]">
            <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <ellipse
                    key={i}
                    cx="120"
                    cy="30"
                    rx="14"
                    ry="26"
                    fill="none"
                    stroke="var(--clr-gold)"
                    strokeWidth="1.5"
                    transform={`rotate(${angle} 120 120)`}
                    opacity="0.85"
                  />
                );
              })}
              <circle cx="120" cy="120" r="78" fill="none" stroke="var(--clr-vermillion)" strokeWidth="2" />
            </svg>
            <div
              className="absolute rounded-full overflow-hidden flex items-center justify-center"
              style={{
                inset: "44px",
              }}
            >
              <img
                src="/port.jpeg"
                alt="Krishna Thakur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5"
            style={{ background: "var(--clr-surface)", border: "1px solid var(--clr-border)", borderRadius: "999px" }}
          >
            <span className="dot-pulse" />
            <span className="text-[12px]" style={{ color: "var(--clr-text)", fontFamily: "var(--font-body)" }}>
              Available for Work
            </span>
          </div>
        </div>

        <div>
          <p className="text-[16px] leading-[1.8]" style={{ color: "var(--clr-text)" }}>
            I&apos;m Krishna - a designer-engineer living in India. I grew up around
            sign-painters, sari shops, and tea stalls - and a lot of what I make today is shaped by
            that visual world. I work across product design, interaction, and front-end engineering,
            often partnering with small teams shipping technical products to non-technical people.
          </p>
          <p className="mt-4 text-[16px] leading-[1.8]" style={{ color: "var(--clr-text)" }}>
            I care about clarity, rhythm, and what happens before the user ever opens the app.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="p-4 text-center"
                style={{
                  background: "var(--clr-surface)",
                  border: "1px solid var(--clr-border)",
                  borderRadius: "6px",
                }}
              >
                <div className="text-[28px] font-bold" style={{ color: "var(--clr-gold)", fontFamily: "var(--font-display)" }}>
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PichwaiStrip className="mb-10" />

      {/* Experience Timeline */}
      <TimelineSection title="Experience Timeline" entries={EXPERIENCE} />

      <div className="h-10" />

      {/* Education Timeline */}
      <TimelineSection title="Education" entries={EDUCATION} />
    </div>
  );
}

type TimelineEntry = {
  range: string;
  company: string;
  role: string;
  bullets: string[];
};

function TimelineSection({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  return (
    <div
      className="relative p-6 md:p-10"
      style={{
        background: "var(--clr-surface)",
        borderRadius: "8px",
        borderTop: "3px solid var(--clr-gold)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        className="text-[28px] mb-8 paint-chip"
        style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
      >
        {title}
      </h2>

      <div className="relative pl-8 md:pl-12">
        <div
          className="absolute left-2 top-2 bottom-2 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--clr-vermillion) 0 6px, transparent 6px 12px)",
          }}
        />

        <div className="space-y-12">
          {entries.map((e, i) => (
            <div key={i} className="relative">
              <span
                className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full transition-transform hover:scale-150"
                style={{
                  background: "var(--clr-vermillion)",
                  border: "1.5px solid var(--clr-gold)",
                  boxShadow: "0 0 0 4px var(--clr-surface)",
                }}
              />
              <div
                className="inline-block px-2.5 py-1 text-[10px] mb-3"
                style={{
                  background: "var(--clr-vermillion)",
                  color: "var(--clr-paper)",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "4px",
                  letterSpacing: "0.08em",
                }}
              >
                {e.range}
              </div>
              <div className="text-[17px] font-bold" style={{ color: "var(--clr-gold)", fontFamily: "var(--font-body)" }}>
                {e.company}
              </div>
              <div className="text-[14px] italic mb-3" style={{ color: "var(--clr-marigold)" }}>
                {e.role}
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-[14px] leading-[1.7]" style={{ color: "var(--clr-text)" }}>
                    <span style={{ color: "var(--clr-vermillion)" }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

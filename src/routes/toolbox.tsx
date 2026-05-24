import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/toolbox")({
  head: () => ({
    meta: [
      { title: "Toolbox | Krishna Thakur" },
      { name: "description", content: "The craft kit — design, development, research, and collaboration tools Krishna uses to ship work." },
      { property: "og:title", content: "Toolbox | Krishna Thakur" },
      { property: "og:description", content: "Vintage-stamp inspired tool kit: design, dev, research, collaboration." },
    ],
  }),
  component: Toolbox,
});

type Tool = { name: string; since: string; yrs: string; level: number; tone: string };

const GROUPS: { title: string; tools: Tool[] }[] = [
  {
    title: "Programming Languages",
    tools: [
      { name: "Kotlin", since: "2023", yrs: "3 YRS", level: 90, tone: "#E8961E" },
      { name: "Java", since: "2024", yrs: "4 YRS", level: 85, tone: "#4A7C74" },
      { name: "JavaScript", since: "2023", yrs: "3 YRS", level: 92, tone: "#F5C842" },
      { name: "SQL", since: "2023", yrs: "4 YRS", level: 80, tone: "#4A7C74" },
      { name: "Go", since: "2025", yrs: "2 YRS", level: 82, tone: "#C0392B" },
      { name: "Solidity", since: "2024", yrs: "2 YRS", level: 75, tone: "#F5C842" },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React.js", since: "2023", yrs: "3 YRS", level: 95, tone: "#4A7C74" },
      { name: "Next.js", since: "2023", yrs: "3 YRS", level: 90, tone: "#E8961E" },
      { name: "Tailwind CSS", since: "2023", yrs: "3 YRS", level: 92, tone: "#C0392B" },
      { name: "TypeScript", since: "2023", yrs: "3 YRS", level: 90, tone: "#F5C842" },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "REST APIs", since: "2023", yrs: "3 YRS", level: 88, tone: "#4A7C74" },
      { name: "gRPC", since: "2024", yrs: "2 YRS", level: 80, tone: "#E8961E" },
      { name: "WebSockets", since: "2023", yrs: "3 YRS", level: 85, tone: "#C0392B" },
      { name: "Concurrent Systems", since: "2024", yrs: "2 YRS", level: 78, tone: "#F5C842" },
      { name: "Distributed Services", since: "2024", yrs: "2 YRS", level: 80, tone: "#4A7C74" },
      { name: "Docker", since: "2023", yrs: "3 YRS", level: 88, tone: "#E8961E" },
      { name: "Docker Compose", since: "2023", yrs: "3 YRS", level: 85, tone: "#C0392B" },
    ],
  },
  {
    title: "Web3",
    tools: [
      { name: "Smart Contracts", since: "2024", yrs: "2 YRS", level: 85, tone: "#4A7C74" },
      { name: "ERC-20", since: "2024", yrs: "2 YRS", level: 78, tone: "#E8961E" },
      { name: "ERC-721", since: "2024", yrs: "2 YRS", level: 78, tone: "#C0392B" },
      { name: "Hardhat", since: "2024", yrs: "2 YRS", level: 80, tone: "#F5C842" },
      { name: "Foundry", since: "2024", yrs: "2 YRS", level: 77, tone: "#4A7C74" },
      { name: "Ethers.js", since: "2024", yrs: "2 YRS", level: 82, tone: "#E8961E" },
      { name: "Web3.js", since: "2024", yrs: "2 YRS", level: 78, tone: "#C0392B" },
      { name: "IPFS", since: "2024", yrs: "2 YRS", level: 82, tone: "#F5C842" },
      { name: "Alchemy", since: "2024", yrs: "2 YRS", level: 80, tone: "#4A7C74" },
      { name: "MetaMask", since: "2024", yrs: "2 YRS", level: 83, tone: "#E8961E" },
      { name: "Rainbow Kit SDK", since: "2024", yrs: "2 YRS", level: 74, tone: "#C0392B" },
      { name: "Web3Storage", since: "2024", yrs: "2 YRS", level: 70, tone: "#F5C842" },
      { name: "Pinata", since: "2024", yrs: "2 YRS", level: 72, tone: "#4A7C74" },
    ],
  },
  {
    title: "Mobile App",
    tools: [
      { name: "Jetpack Compose", since: "2023", yrs: "3 YRS", level: 80, tone: "#E8961E" },
      { name: "Android SDK", since: "2023", yrs: "3 YRS", level: 85, tone: "#C0392B" },
      { name: "Retrofit", since: "2023", yrs: "3 YRS", level: 75, tone: "#F5C842" },
      { name: "Hilt (Dagger Hilt)", since: "2023", yrs: "3 YRS", level: 78, tone: "#4A7C74" },
      { name: "RoomDB", since: "2023", yrs: "3 YRS", level: 82, tone: "#E8961E" },
      { name: "Android Studio", since: "2023", yrs: "3 YRS", level: 88, tone: "#C0392B" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    tools: [
      { name: "Firebase", since: "2022", yrs: "4 YRS", level: 85, tone: "#4A7C74" },
      { name: "Supabase", since: "2023", yrs: "3 YRS", level: 80, tone: "#E8961E" },
      { name: "MySQL", since: "2022", yrs: "4 YRS", level: 82, tone: "#C0392B" },
      { name: "PostgreSQL", since: "2023", yrs: "3 YRS", level: 88, tone: "#F5C842" },
      { name: "Firestore", since: "2022", yrs: "4 YRS", level: 80, tone: "#4A7C74" },
      { name: "Git", since: "2022", yrs: "4 YRS", level: 90, tone: "#E8961E" },
      { name: "GitHub", since: "2022", yrs: "4 YRS", level: 88, tone: "#C0392B" },
      { name: "Postman", since: "2023", yrs: "3 YRS", level: 80, tone: "#F5C842" },
      { name: "Remix IDE", since: "2024", yrs: "2 YRS", level: 75, tone: "#4A7C74" },
      { name: "Vercel", since: "2023", yrs: "3 YRS", level: 90, tone: "#C0392B" },
    ],
  },
];

function Stamp({ t }: { t: Tool }) {
  return (
    <div
      className="group relative transition-transform hover:-translate-y-1"
      style={{
        padding: "6px",
        background: "var(--clr-paper)",
        color: "var(--clr-bg)",
        borderRadius: "4px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
        outline: "2px dotted var(--clr-bg)",
        outlineOffset: "-4px",
      }}
    >
      <div
        className="p-3"
        style={{
          background: "var(--clr-paper)",
          border: "1px dashed rgba(0,0,0,0.2)",
          borderRadius: "2px",
        }}
      >
        <div className="flex justify-between items-center text-[9px] mb-2" style={{ color: "var(--clr-vermillion)", fontFamily: "var(--font-mono)" }}>
          <span className="font-bold tracking-widest">INDIA</span>
          <span className="font-bold">{t.yrs}</span>
        </div>

        <div
          className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-sm text-[20px] font-bold"
          style={{ background: t.tone, color: "var(--clr-paper)", fontFamily: "var(--font-display)" }}
        >
          {t.name[0]}
        </div>

        <div className="text-center text-[13px] font-bold mb-1 leading-tight" style={{ fontFamily: "var(--font-body)", color: "var(--clr-bg)" }}>
          {t.name}
        </div>
        <div className="text-center text-[9px]" style={{ fontFamily: "var(--font-mono)", color: "rgba(0,0,0,0.55)" }}>
          SINCE {t.since}
        </div>

        <div className="mt-2 h-[3px] w-full" style={{ background: "rgba(0,0,0,0.15)" }}>
          <div className="h-full" style={{ width: `${t.level}%`, background: "var(--clr-vermillion)" }} />
        </div>
      </div>

      {/* cancellation mark */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 transition-opacity"
      >
        <circle cx="50" cy="50" r="32" fill="none" stroke="var(--clr-vermillion)" strokeWidth="3" />
        <line x1="22" y1="22" x2="78" y2="78" stroke="var(--clr-vermillion)" strokeWidth="3" />
        <line x1="78" y1="22" x2="22" y2="78" stroke="var(--clr-vermillion)" strokeWidth="3" />
      </svg>
    </div>
  );
}

function Toolbox() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-14 md:pt-20">
      <SectionHeader eyebrow="03 / TOOLBOX" title="My Craft Kit" />

      <div
        className="p-5 md:p-8 space-y-10"
        style={{
          background: "var(--clr-surface)",
          borderRadius: "10px",
          border: "1px solid var(--clr-border)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          transform: "perspective(1000px) rotateX(1.2deg)",
        }}
      >
        {GROUPS.map((g) => (
          <section key={g.title}>
            <div className="flex items-center gap-3 mb-4">
              <h3
                className="text-[22px]"
                style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
              >
                {g.title}
              </h3>
              <div className="flex-1 gold-rule" />
              <span className="text-[10px]" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
                {String(g.tools.length).padStart(2, "0")} ITEMS
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {g.tools.map((t) => (
                <Stamp key={t.name} t={t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

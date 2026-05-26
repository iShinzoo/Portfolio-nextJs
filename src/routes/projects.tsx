import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Krishna Thakur" },
      { name: "description", content: "Selected interface and product design work — Web3, mobile, civic tech, and indie tools." },
      { property: "og:title", content: "Selected Work | Krishna Thakur" },
      { property: "og:description", content: "A pinboard of interface and product design work from Madhya Pradesh, India." },
    ],
  }),
  component: ProjectsPage,
});

const FILTERS = ["All", "UI/UX", "Web", "Mobile", "Backend", "Vibe Code"] as const;

function Card({ p }: { p: Project }) {
  const noLive = !p.liveUrl;
  const noGit = !p.githubUrl;
  return (
    <article
      className="pin-tilt relative p-3 pb-3"
      style={{
        background: "var(--clr-paper)",
        color: "var(--clr-bg)",
        borderRadius: "2px",
        boxShadow: "0 10px 24px rgba(0,0,0,0.55)",
      }}
    >
      <span
        aria-hidden
        className="push-pin absolute left-1/2 -translate-x-1/2 -top-1.5 z-10"
      />

      <div
        className="aspect-[16/10] flex items-center justify-center text-[42px] font-bold mb-3"
        style={{
          background: "linear-gradient(135deg, var(--clr-surface) 0%, var(--clr-surface-2) 100%)",
          color: "var(--clr-gold)",
          fontFamily: "var(--font-display)",
          borderRadius: "2px",
        }}
      >
        {
          /(\.(png|jpe?g|webp|gif|svg))$/i.test(p.icon) || p.icon.startsWith("/") ? (
            <img
              src={p.icon}
              alt={`${p.title} preview`}
              className="object-cover w-full h-full"
              style={{ borderRadius: "2px" }}
            />
          ) : (
            p.icon
          )}
      </div>

      <h3
        className="text-[16px] font-bold leading-tight"
        style={{ fontFamily: "var(--font-body)", color: "var(--clr-bg)" }}
      >
        {p.title}
      </h3>
      <p
        className="mt-1.5 text-[12px] leading-[1.5] line-clamp-2 mb-3"
        style={{ color: "var(--clr-surface-2)", fontFamily: "var(--font-body)" }}
      >
        {p.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.tags.slice(0, 3).map((t, i) => (
          <span
            key={t}
            className="inline-block px-2 py-[3px] text-[9px] font-bold tracking-wider"
            style={{
              background: "var(--clr-vermillion)",
              color: "var(--clr-paper)",
              fontFamily: "var(--font-body)",
              transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})`,
            }}
          >
            {t.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="flex gap-1.5 mt-auto">
        <a
          href={p.liveUrl ?? "#"}
          target={p.liveUrl ? "_blank" : undefined}
          rel="noreferrer"
          aria-disabled={noLive}
          tabIndex={noLive ? -1 : 0}
          onClick={(e) => noLive && e.preventDefault()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-bold transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--clr-vermillion)",
            color: "var(--clr-paper)",
            borderRadius: "3px",
            opacity: noLive ? 0.4 : 1,
            cursor: noLive ? "not-allowed" : "pointer",
            fontFamily: "var(--font-body)",
          }}
        >
          <IconExternalLink size={14} stroke={2} /> Live Preview
        </a>
        <a
          href={p.githubUrl ?? "#"}
          target={p.githubUrl ? "_blank" : undefined}
          rel="noreferrer"
          aria-disabled={noGit}
          tabIndex={noGit ? -1 : 0}
          onClick={(e) => noGit && e.preventDefault()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] transition-colors"
          style={{
            border: "1px solid rgba(94,30,30,0.4)",
            color: "var(--clr-surface-2)",
            background: "transparent",
            borderRadius: "3px",
            opacity: noGit ? 0.4 : 1,
            cursor: noGit ? "not-allowed" : "pointer",
            fontFamily: "var(--font-body)",
          }}
        >
          <IconBrandGithub size={14} stroke={2} /> GitHub
        </a>
      </div>
    </article>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category.includes(filter as any))),
    [filter],
  );

  return (
    <div className="mx-auto max-w-[1280px] px-5 md:px-10 pt-14 md:pt-20">
      <SectionHeader eyebrow="04 / PROJECTS" title="Selected Work" />

      <div className="flex flex-wrap gap-1 mb-8">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 text-[12px] font-bold transition-transform"
              style={{
                background: active ? "var(--clr-paper)" : "var(--clr-surface)",
                color: active ? "var(--clr-bg)" : "var(--clr-muted)",
                borderBottom: active ? "2px solid var(--clr-vermillion)" : "2px solid transparent",
                borderRadius: "4px 4px 0 0",
                transform: active ? "translateY(-3px)" : "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
              }}
            >
              {f.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div
        className="cork p-5 md:p-8 rounded-lg"
        style={{ border: "1px solid var(--clr-border)", boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 pt-3">
          {filtered.map((p) => (
            <Card key={p.slug} p={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}

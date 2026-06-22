import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowRight,
  IconDownload,
  IconBrandUpwork,
} from "@tabler/icons-react";
import { PichwaiStrip } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Thakur" },
      {
        name: "description",
        content:
          "Visual storyteller and developer from Madhya Pradesh, India. Crafting interfaces with chai and pixels since 2022.",
      },
      { property: "og:title", content: "Krishna Thakur" },
      {
        property: "og:description",
        content: "Visual storyteller and developer from Madhya Pradesh, India.",
      },
    ],
  }),
  component: Home,
});

const ROLES = [
  "Backend Developer",
  "Frontend Developer",
  "Mobile Developer",
  "Blockchain Developer",
];

function useTypewriter(words: string[], holdMs = 2500) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      deleting ? 45 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, holdMs]);

  return text;
}

function Home() {
  const role = useTypewriter(ROLES);

  return (
    <div className="relative">
      <section className="mx-auto max-w-[1280px] px-5 md:px-10 pt-14 md:pt-20 grid md:grid-cols-[40fr_60fr] gap-10 md:gap-14 items-center min-h-[calc(100vh-160px)]">
        {/* LEFT — Identity card */}
        <div className="w-full max-w-[360px] mx-auto md:mx-0 rise-in">
          <div
            className="relative p-3"
            style={{
              background: "var(--clr-paper)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(120,40,40,0.18)",
            }}
          >
            {/* perforated edge ring */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle 4px at 8px 8px, var(--clr-bg) 3px, transparent 3.5px) 0 0 / 14px 14px",
                mixBlendMode: "multiply",
                opacity: 0.45,
                maskImage:
                  "linear-gradient(to right, black 0 12px, transparent 12px calc(100% - 12px), black calc(100% - 12px) 100%), linear-gradient(to bottom, black 0 12px, transparent 12px calc(100% - 12px), black calc(100% - 12px) 100%)",
                WebkitMaskComposite: "source-over" as any,
              }}
            />

            <div className="relative">
              <div
                className="inline-block px-2 py-[3px] mb-2 text-[10px] font-bold tracking-wider"
                style={{
                  border: "1.5px solid var(--clr-vermillion)",
                  color: "var(--clr-vermillion)",
                  fontFamily: "var(--font-body)",
                  transform: "rotate(-3deg)",
                }}
              >
                ★ PHOTO ★
              </div>
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/port.jpeg"
                  alt="Krishna Thakur"
                  className="w-full h-full object-cover"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--clr-paper)",
                  }}
                />
              </div>
              <div className="my-3 h-[1px]" style={{ background: "var(--clr-vermillion)" }} />

              <div
                className="space-y-1.5 text-[11px]"
                style={{ color: "var(--clr-bg)", fontFamily: "var(--font-body)" }}
              >
                <div>
                  <span className="text-[9px] uppercase tracking-widest opacity-60">Name:</span>{" "}
                  <span
                    className="text-[15px] font-bold"
                    style={{ color: "var(--clr-vermillion)" }}
                  >
                    Krishna Thakur
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest opacity-60">Role:</span>{" "}
                  <span className="text-[12px]">Software Developer</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest opacity-60">Location:</span>{" "}
                  <span className="text-[12px]">INDIA</span>
                </div>
              </div>

              <div
                className="mt-3 pt-2 border-t text-[9px] tracking-widest text-center"
                style={{
                  borderColor: "rgba(0,0,0,0.15)",
                  color: "var(--clr-vermillion)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ESTD. 2022 · INDIA · NO. 176219
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Hero text */}
        <div className="rise-in" style={{ animationDelay: "120ms" }}>
          <div
            className="text-[11px] mb-4 uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--clr-muted)",
              letterSpacing: "0.18em",
            }}
          >
            Estd. 2022 · Madhya Pradesh, India
          </div>

          <h1
            className="paint-chip text-[52px] md:text-[80px] leading-[0.95]"
            style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
          >
            Krishna
            <br />
            Thakur
          </h1>

          <div
            className="mt-5 text-[20px] md:text-[24px] h-[1.6em]"
            style={{
              color: "var(--clr-marigold)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            {role}
            <span className="caret" />
          </div>

          <p
            className="mt-6 max-w-[520px] text-[15px] leading-[1.75]"
            style={{ color: "var(--clr-text)" }}
          >
            I design interfaces that feel both modern and rooted. From distributed order systems to
            civic tools that work on 2G - I help teams ship products that respect people&apos;s
            time, attention, and context.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold transition-all"
              style={{
                background: "var(--clr-vermillion)",
                color: "var(--clr-paper)",
                borderRadius: "4px",
                boxShadow: "0 4px 0 #6e1a14, 0 8px 16px rgba(0,0,0,0.4)",
                fontFamily: "var(--font-body)",
              }}
            >
              View My Work <IconArrowRight size={16} stroke={2.5} />
            </Link>
            <a
              href="https://drive.google.com/file/d/1fkJ9D_7_5P5E6vKaxvi5_c0jSsSrwkSR/view?usp=drive_link"
              target="_blank"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold transition-all"
              style={{
                border: "1.5px dashed var(--clr-gold)",
                color: "var(--clr-gold)",
                borderRadius: "4px",
                background: "transparent",
                fontFamily: "var(--font-body)",
              }}
            >
              <IconDownload size={16} stroke={2} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { Icon: IconBrandGithub, label: "GitHub", href: "https://github.com/iShinzoo" },
              {
                Icon: IconBrandLinkedin,
                label: "LinkedIn",
                href: "https://linkedin.com/in/krishnathakur1",
              },
              {
                Icon: IconBrandUpwork,
                label: "Upwork",
                href: "https://www.upwork.com/freelancers/~013f72067fbb24b287?mp_source=share",
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px] transition-colors hover:text-[var(--clr-marigold)]"
                style={{
                  background: "var(--clr-surface)",
                  border: "1px solid var(--clr-border)",
                  borderRadius: "999px",
                  color: "var(--clr-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Icon size={14} stroke={1.8} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 mt-12">
        <PichwaiStrip />
      </div>
    </div>
  );
}

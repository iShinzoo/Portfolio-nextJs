import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandUpwork,
} from "@tabler/icons-react";
import { SectionHeader, PichwaiStrip } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Krishna Thakur" },
      { name: "description", content: "Send a letter — Krishna is open to design collaborations, freelance work, and full-time roles." },
      { property: "og:title", content: "Send a Letter — Krishna Thakur" },
      { property: "og:description", content: "Get in touch for design collaborations and product work." },
    ],
  }),
  component: Contact,
});

const FIELDS = [
  { name: "name", label: "From", placeholder: "Your name", type: "input" },
  { name: "email", label: "Return Address", placeholder: "you@example.com", type: "input" },
  { name: "subject", label: "Subject", placeholder: "What's this about?", type: "input" },
  { name: "message", label: "Message", placeholder: "Tell me about your project, or just say hi.", type: "textarea" },
] as const;

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-14 md:pt-20">
      <SectionHeader eyebrow="05 / CONTACT" title="Send a Letter" />

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">
        {/* Letter sheet */}
        <div
          className="relative p-6 md:p-10"
          style={{
            background: "var(--clr-paper)",
            color: "var(--clr-bg)",
            borderRadius: "4px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(120,40,40,0.15)",
          }}
        >
          <PichwaiStrip className="-mx-6 md:-mx-10 -mt-6 md:-mt-10 mb-6" />

          <div
            className="italic text-[22px] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--clr-bg)" }}
          >
            Dear Visitor,
          </div>

          {sent ? (
            <div className="py-16 text-center">
              <div className="text-[60px] mb-3">✉</div>
              <div className="text-[20px] mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--clr-vermillion)" }}>
                Letter posted!
              </div>
              <div className="text-[13px]" style={{ color: "var(--clr-surface-2)" }}>
                I&apos;ll write back as soon as I can. Until then — take care.
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label
                    className="block text-[9px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--clr-vermillion)", fontFamily: "var(--font-mono)" }}
                  >
                    ★ {f.label} ★
                  </label>
                  {f.type === "textarea" ? (
                    <textarea
                      required
                      rows={5}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent py-2 text-[15px] focus:outline-none italic-placeholder resize-none"
                      style={{
                        borderBottom: "1px dotted var(--clr-surface-2)",
                        color: "var(--clr-bg)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                  ) : (
                    <input
                      required
                      type={f.name === "email" ? "email" : "text"}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent py-2 text-[15px] focus:outline-none"
                      style={{
                        borderBottom: "1px dotted var(--clr-surface-2)",
                        color: "var(--clr-bg)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-[13px] transition-transform active:scale-90"
                  style={{
                    background: "var(--clr-vermillion)",
                    color: "var(--clr-paper)",
                    boxShadow:
                      "inset 0 0 0 3px rgba(240,230,196,0.25), 0 8px 24px rgba(0,0,0,0.45)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  SEND
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <aside
          className="p-6"
          style={{
            background: "var(--clr-surface)",
            border: "1px solid var(--clr-border)",
            borderRadius: "6px",
          }}
        >
          <div className="space-y-5">
            {[
              { l: "FROM", v: "krishe7t8rr@gmail.com", color: "var(--clr-marigold)" },
              { l: "LOCATION", v: "Madhya Pradesh, India" },
              { l: "POSTCODE", v: "PIN 470113" },
            ].map((r) => (
              <div key={r.l}>
                <div className="text-[9px] tracking-widest mb-1" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
                  {r.l}
                </div>
                <div className="text-[14px]" style={{ color: r.color ?? "var(--clr-text)", fontFamily: "var(--font-body)" }}>
                  {r.v}
                </div>
              </div>
            ))}

            <div>
              <div className="text-[9px] tracking-widest mb-1" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
                STATUS
              </div>
              <div className="inline-flex items-center gap-2 text-[14px]" style={{ color: "var(--clr-text)" }}>
                <span className="dot-pulse" /> Available for Work
              </div>
            </div>
          </div>

          <div className="my-6 gold-rule" />

          <div className="text-[10px] tracking-widest mb-3" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}>
            POST OFFICES
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { Icon: IconBrandGithub, label: "GitHub", href: "https://github.com/iShinzoo" },
              { Icon: IconBrandLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/krishnathakur1" },
              { Icon: IconBrandX, label: "Twitter", href: "https://x.com/i_krsna4" },
              {
                Icon: IconBrandUpwork,
                label: "Upwork",
                href: "https://www.upwork.com/freelancers/~013f72067fbb24b287?mp_source=share",
              }
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 p-3 transition-colors hover:bg-[var(--clr-surface-2)]"
                style={{
                  background: "rgba(0,0,0,0.15)",
                  border: "1px solid var(--clr-border)",
                  borderRadius: "4px",
                }}
              >
                <Icon size={18} stroke={1.7} color="var(--clr-marigold)" />
                <span className="text-[9px]" style={{ color: "var(--clr-muted)", fontFamily: "var(--font-body)" }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

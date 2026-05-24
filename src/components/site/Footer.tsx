import { IconBrandGithub, IconBrandLinkedin, IconBrandDribbble, IconBrandUpwork } from "@tabler/icons-react";

const tickerItems = [
  "Backend Developer",
  "Frontend Developer",
  "Mobile Developer",
  "Blockchain Developer",
  "Madhya Pradesh, India",
  "Made with love in India",
  "Available for work - 2026",
  "Crafted with chai + pixels",
];

export function Footer() {
  return (
    <footer
      className="relative z-10 w-full"
      style={{
        height: "56px",
        background: "var(--clr-bg-darker)",
        borderTop: "1px solid var(--clr-border)",
      }}
    >
      <div className="mx-auto h-full max-w-[1400px] flex items-center justify-between gap-4 px-4 md:px-8">
        <div
          className="hidden md:block text-[11px]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--clr-muted)" }}
        >
          Handcrafted with chai + pixels - Krishna Thakur © 2026
        </div>

        <div className="flex-1 overflow-hidden max-w-[460px] hidden sm:block">
          <div
            className="marquee-track text-[11px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clr-muted)" }}
          >
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <span style={{ color: "var(--clr-vermillion)" }}>✦</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/iShinzoo", Icon: IconBrandGithub, label: "GitHub" },
            { href: "https://linkedin.com/in/krishnathakur1", Icon: IconBrandLinkedin, label: "LinkedIn" },
            {
                Icon: IconBrandUpwork,
                label: "Upwork",
                href: "https://www.upwork.com/freelancers/~013f72067fbb24b287?mp_source=share",
              },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="transition-colors"
              style={{ color: "var(--clr-muted)" }}
            >
              <Icon size={18} stroke={1.6} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

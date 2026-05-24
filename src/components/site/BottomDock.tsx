import { Link, useRouterState } from "@tanstack/react-router";
import {
  IconHome,
  IconUser,
  IconTools,
  IconFolders,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useState } from "react";

const items = [
  { to: "/", label: "Home", Icon: IconHome },
  { to: "/about", label: "About", Icon: IconUser },
  { to: "/toolbox", label: "Toolbox", Icon: IconTools },
  { to: "/projects", label: "Projects", Icon: IconFolders },
  { to: "/contact", label: "Contact", Icon: IconMail },
] as const;

const externals = [
  { href: "https://github.com/iShinzoo", label: "GitHub", Icon: IconBrandGithub },
  { href: "https://linkedin.com/in/krishnathakur1", label: "LinkedIn", Icon: IconBrandLinkedin },
];

function isActive(currentPath: string, to: string) {
  if (to === "/") return currentPath === "/";
  return currentPath.startsWith(to);
}

/* ---------- DESKTOP / TABLET DOCK ---------- */
function DesktopDock() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      aria-label="Primary"
      className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-50 items-end gap-1 px-5 py-2 rounded-[40px]"
      style={{
        background: "rgba(42, 8, 8, 0.92)",
        border: "1px solid var(--clr-vermillion)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(245,200,66,0.1)",
      }}
    >
      {items.map(({ to, label, Icon }) => {
        const active = isActive(path, to);
        const isHover = hovered === to;
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            onMouseEnter={() => setHovered(to)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-col items-center justify-end px-3 py-1 group"
            style={{
              transition: "transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: isHover ? "translateY(-12px) scale(1.35)" : "scale(1)",
            }}
          >
            {isHover && (
              <span
                className="absolute -top-9 px-2 py-1 text-[10px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--clr-paper)",
                  color: "var(--clr-bg)",
                  borderRadius: "3px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
              >
                {label}
              </span>
            )}
            <Icon
              size={22}
              stroke={1.6}
              color={active ? "var(--clr-gold)" : "var(--clr-muted)"}
            />
            <span
              className="hidden lg:block mt-0.5 text-[9px] uppercase tracking-wider"
              style={{
                color: active ? "var(--clr-marigold)" : "var(--clr-muted)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.12em",
              }}
            >
              {label}
            </span>
            {active && (
              <span
                className="absolute -bottom-1 w-1 h-1 rounded-full"
                style={{ background: "var(--clr-vermillion)" }}
              />
            )}
          </Link>
        );
      })}

      <span
        aria-hidden
        className="self-stretch mx-2 my-2 w-px"
        style={{ background: "var(--clr-border)" }}
      />

      {externals.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="relative flex flex-col items-center justify-end px-3 py-1 transition-colors hover:-translate-y-1"
          style={{ transition: "transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        >
          <Icon size={22} stroke={1.6} color="var(--clr-muted)" />
          <span
            className="hidden lg:block mt-0.5 text-[9px] uppercase tracking-wider"
            style={{
              color: "var(--clr-muted)",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.12em",
            }}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}

/* ---------- MOBILE DOCK (separate component) ---------- */
function MobileDock() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{
        height: "60px",
        paddingBottom: "env(safe-area-inset-bottom)",
        background: "rgba(42, 8, 8, 0.97)",
        borderTop: "1.5px solid var(--clr-vermillion)",
        backdropFilter: "blur(10px)",
      }}
    >
      {items.map(({ to, label, Icon }) => {
        const active = isActive(path, to);
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className="flex-1 flex flex-col items-center justify-center gap-[3px] active:scale-[0.92] transition-transform duration-100"
          >
            <Icon
              size={22}
              stroke={1.6}
              color={active ? "var(--clr-gold)" : "var(--clr-muted)"}
            />
            <span
              className="text-[8px] uppercase tracking-wider"
              style={{
                color: active ? "var(--clr-marigold)" : "var(--clr-muted)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </span>
            {active && (
              <span
                className="absolute bottom-[6px] w-1 h-1 rounded-full"
                style={{ background: "var(--clr-vermillion)" }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function BottomDock() {
  return (
    <>
      <DesktopDock />
      <MobileDock />
    </>
  );
}

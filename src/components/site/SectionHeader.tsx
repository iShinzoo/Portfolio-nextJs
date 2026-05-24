type Props = {
  eyebrow: string;
  title: string;
};

export function SectionHeader({ eyebrow, title }: Props) {
  return (
    <header className="mb-10 md:mb-14">
      <div
        className="text-[10px] uppercase tracking-[0.25em] mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clr-muted)" }}
      >
        {eyebrow}
      </div>
      <h1
        className="paint-chip text-[44px] md:text-[72px] leading-[0.95]"
        style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
      >
        {title}
      </h1>
      <div className="gold-rule mt-4 w-32" />
    </header>
  );
}

export function PichwaiStrip({ className = "" }: { className?: string }) {
  return <div className={`pichwai-strip ${className}`} aria-hidden />;
}

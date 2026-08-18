export default function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-faint">
        <span className="text-green">#</span>
        {label}
      </div>
      <h2 className="mb-9 font-display text-[clamp(24px,3.4vw,32px)] font-semibold tracking-tight">{title}</h2>
    </>
  );
}

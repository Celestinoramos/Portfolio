import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="flex min-h-screen snap-start snap-always items-center justify-center border-t border-line">
      <Reveal>
        <p className="px-7 text-center font-mono text-[11.5px] text-faint">
          <span className="text-cyan">$</span> echo &quot;obrigado pela visita&quot; — Celestino Cumbiça, 2026
        </p>
      </Reveal>
    </footer>
  );
}
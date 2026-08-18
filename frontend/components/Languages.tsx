import SectionHeading from './SectionHeading';

export default function Languages() {
  return (
    <section id="idiomas" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="idiomas" title="Comunicação" />
        <div className="flex flex-wrap gap-4">
          <div className="min-w-[180px] rounded-md border border-line bg-surface px-6 py-4.5">
            <div className="font-display text-base font-semibold">Português</div>
            <div className="font-mono text-xs text-green">Nativo</div>
          </div>
          <div className="min-w-[180px] rounded-md border border-line bg-surface px-6 py-4.5">
            <div className="font-display text-base font-semibold">Inglês</div>
            <div className="font-mono text-xs text-green">C1 — Fluente</div>
          </div>
        </div>
      </div>
    </section>
  );
}

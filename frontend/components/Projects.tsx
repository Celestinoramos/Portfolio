import SectionHeading from './SectionHeading';
import { Project } from '@/data/projects';

const STATUS_STYLE: Record<Project['status'], string> = {
  active: 'text-green border-green',
  shipped: 'text-amber border-amber',
  school: 'text-blue border-blue',
  core: 'text-red border-red',
};

export default function Projects({ projects, live }: { projects: Project[]; live: boolean }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="projetos" title="Findings do repositório" />

        {!live && (
          <div className="mb-6 rounded-md border border-dashed border-faint px-4 py-2 font-mono text-[11.5px] text-faint">
            ⚠ API indisponível — a mostrar dados locais de reserva.
          </div>
        )}

        <div className="flex flex-col gap-4.5">
          {featured.map((p) => (
            <div
              key={p.slug}
              className="group rounded-md border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-amber sm:p-7"
            >
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-4">
                <div className="font-display text-[20px] font-semibold">{p.title}</div>
                <span
                  className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide ${STATUS_STYLE[p.status]}`}
                >
                  {p.statusLabel}
                </span>
              </div>
              <p className="mb-4 text-[14.5px] text-dim">{p.description}</p>
              <div className="flex flex-wrap gap-2 font-mono text-[11.5px]">
                {p.tags.map((t) => (
                  <span key={t} className="rounded border border-line bg-surface2 px-2.5 py-1 text-dim">
                    {t}
                  </span>
                ))}
              </div>
              {(p.repoUrl || p.demoUrl) && (
                <div className="mt-4 flex gap-4.5 font-mono text-[12.5px]">
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" className="border-b border-transparent text-green hover:border-green">
                      Repositório ↗
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" className="border-b border-transparent text-green hover:border-green">
                      Demo ao vivo ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <div className="mb-1 mt-9 font-mono text-xs uppercase tracking-[0.08em] text-faint">
              Outros projetos 42 (fundamentos)
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <div key={p.slug} className="rounded-md border border-line bg-surface2 px-4 py-3.5">
                  <div className="mb-1 font-display text-[14.5px] font-semibold">{p.title}</div>
                  <div className="font-mono text-[11.5px] text-faint">{p.description}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

import Reveal from './Reveal';
import { Project } from '@/data/projects';

export default function Projects({ projects, live }: { projects: Project[]; live: boolean }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="flex min-h-screen snap-start snap-always items-center border-t border-line py-16"
    >
      <div className="mx-auto w-full max-w-[880px] px-7">
        <Reveal>
          <h2 className="mb-8 font-mono text-[15px] font-bold uppercase tracking-[0.2em] text-blue">
            <span className="text-cyan">$</span> ls ./projects
          </h2>
        </Reveal>

        {!live && (
          <Reveal delay={100}>
            <div className="mb-6 border border-dashed border-faint px-4 py-2 font-mono text-[11.5px] text-faint">
              ⚠ API indisponível — a mostrar dados locais de reserva.
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 70, 420)}>
              <div className="group flex h-full flex-col border border-line bg-surface p-5 transition-colors hover:border-blue">
                <div className="mb-2 font-mono text-[14px] font-semibold text-text group-hover:text-blue">
                  {p.title}
                </div>
                <p className="mb-4 flex-1 font-mono text-[12px] leading-relaxed text-dim">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10.5px]">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-line px-2 py-0.5 text-faint">
                      {t}
                    </span>
                  ))}
                </div>
                {(p.repoUrl || p.demoUrl) && (
                  <div className="mt-3 flex gap-4 font-mono text-[11.5px]">
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" className="text-blue transition-colors hover:text-cyan">
                        repo ↗
                      </a>
                    )}
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" className="text-blue transition-colors hover:text-cyan">
                        demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <Reveal delay={200}>
            <div className="mt-10">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Outros projetos 42 (fundamentos)
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[11.5px]">
                {rest.map((p) => (
                  <span key={p.slug} className="border border-line bg-surface px-3 py-1.5 text-faint">
                    {p.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
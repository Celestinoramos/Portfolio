import Reveal from './Reveal';

const FOCUS = ['Software Engineering', 'Cybersecurity', 'Networking', 'Cloud'];

export default function About() {
  return (
    <section id="about" className="flex min-h-screen snap-start snap-always items-center border-t border-line">
      <div className="mx-auto w-full max-w-[880px] px-7">
        <Reveal>
          <h2 className="mb-8 font-mono text-[15px] font-bold uppercase tracking-[0.2em] text-blue">
            <span className="text-cyan">$</span> about_me
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mb-8 max-w-[640px] font-mono text-[13.5px] leading-relaxed text-dim">
            Engenheiro Informático e Transcender da 42 Luanda — escola de programação intensiva baseada em
            projetos práticos e trabalho em equipa. Desenvolvedor full-stack com foco em backend, redes e
            segurança, com experiência em administração de sistemas Linux, virtualização, containerização e cloud.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {FOCUS.map((item, i) => (
            <Reveal key={item} delay={200 + i * 80}>
              <div className="border border-line bg-surface px-4 py-3.5 font-mono text-[13px] text-dim">
                <span className="mr-2 text-cyan">▸</span>
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
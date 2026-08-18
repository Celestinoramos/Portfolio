import Reveal from './Reveal';

const GROUPS = [
  ['C', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  ['Docker', 'Linux', 'Git', 'PostgreSQL'],
  ['Networking', 'Cybersecurity', 'AWS'],
];

export default function Stack() {
  return (
    <section id="skills" className="flex min-h-screen snap-start snap-always items-center border-t border-line">
      <div className="mx-auto w-full max-w-[880px] px-7">
        <Reveal>
          <h2 className="mb-8 font-mono text-[15px] font-bold uppercase tracking-[0.2em] text-blue">
            <span className="text-cyan">$</span> cat skills.txt
          </h2>
        </Reveal>
        <div className="space-y-4 font-mono text-[13.5px]">
          {GROUPS.map((group, i) => (
            <Reveal key={i} delay={150 + i * 120}>
              <p className="leading-loose">
                {group.map((skill, j) => (
                  <span key={skill}>
                    <span className="text-text">{skill}</span>
                    {j < group.length - 1 && <span className="mx-2 text-faint">•</span>}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
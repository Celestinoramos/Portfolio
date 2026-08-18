import SectionHeading from './SectionHeading';

const ITEMS = [
  {
    date: '2024 – 2026',
    role: 'Common Core concluído',
    org: '42 Luanda',
    desc: 'Formação intensiva em engenharia de software: programação imperativa e OO (C/C++), administração de sistemas Linux, redes, programação de sistemas Unix, algoritmos, gráficos e desenvolvimento web.',
  },
  {
    date: '2018 – 2024',
    role: 'Licenciatura em Engenharia Informática',
    org: 'Instituto Superior Politécnico de Benguela',
    desc: '5º ano concluído. Formação académica formal em engenharia informática.',
  },
  {
    date: '2015 – 2017',
    role: 'Técnico Médio em Gestão de Sistemas Informáticos',
    org: 'El-Óscar Universal — Benguela',
    desc: 'Formação técnica de base em sistemas informáticos.',
  },
  {
    date: 'Fev – Jul 2024',
    role: 'Técnico de Redes e Sistemas de CCTV — Estágio',
    org: 'Tecloure Lda. — IT Solutions',
    desc: 'Instalação e configuração de sistemas de CCTV, análise de segurança e suporte técnico.',
  },
  {
    date: 'Dez 2023 – Mai 2024',
    role: 'Técnico de Informática',
    org: 'ITS-Golfinho',
    desc: 'Manutenção de computadores, suporte ao utilizador e resolução de problemas de hardware, software e redes.',
  },
];

export default function Timeline() {
  return (
    <section id="percurso" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="percurso" title="Formação & experiência" />
        <div className="flex flex-col">
          {ITEMS.map((item, i) => (
            <div
              key={item.role}
              className={`grid grid-cols-1 gap-5 py-5 sm:grid-cols-[150px_1fr] ${
                i !== 0 ? 'border-t border-dashed border-line' : ''
              }`}
            >
              <div className="pt-0.5 font-mono text-xs text-faint">{item.date}</div>
              <div>
                <div className="mb-1 font-display text-[17px] font-semibold">{item.role}</div>
                <div className="mb-2 font-mono text-[13.5px] text-green">{item.org}</div>
                <div className="text-[14.5px] text-dim">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

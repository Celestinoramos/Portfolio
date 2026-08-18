import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="sobre" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="sobre" title="Da rede ao runtime" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-[15.5px] text-dim">
            <p>
              Concluí o <strong className="font-semibold text-text">5º ano de Engenharia Informática</strong> no
              Instituto Superior Politécnico de Benguela e, em paralelo, o{' '}
              <strong className="font-semibold text-text">Common Core da 42 Luanda</strong> — uma formação sem
              aulas tradicionais, baseada em peer-learning e resolução de problemas reais, cobrindo desde
              programação de sistemas em C/C++ até administração de redes e desenvolvimento web.
            </p>
            <p>
              Antes de programar a tempo inteiro, estive na linha da frente da infraestrutura: instalação e
              configuração de sistemas de <strong className="font-semibold text-text">CCTV</strong> e suporte
              técnico direto a redes e utilizadores. Essa base prática é o que trago para cada projeto — sei
              como um sistema se comporta quando a rede falha, não só quando o código corre.
            </p>
            <p>
              Hoje junto estas duas metades: sou autor de plataformas full-stack em produção (Mado, Agriconecta,
              Kwanza ERP) e de projetos de sistemas em C/C++ na 42 (Born2beroot, ft_irc, Inception), sempre com
              rigor e uma mentalidade autodidata habituada a ambientes exigentes.
            </p>
          </div>
          <div className="rounded-md border border-line bg-surface p-5 font-mono">
            <Stat k="Formação" v="Eng. Informática · 42 Luanda" />
            <Stat k="Diferencial" v="Full-stack + Redes + Segurança" />
            <Stat k="Localização" v="Luanda, Angola" last />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={last ? '' : 'mb-3.5'}>
      <div className="text-[11px] uppercase tracking-[0.08em] text-faint">{k}</div>
      <div className="text-[18px] font-semibold leading-tight text-amber">{v}</div>
    </div>
  );
}

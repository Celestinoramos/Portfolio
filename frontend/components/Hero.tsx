export default function Hero() {
  return (
    <header className="relative pb-[70px] pt-[100px]">
      <div className="relative z-10 mx-auto max-w-[960px] px-7">
        <div className="reveal mb-1.5 font-mono text-[13px] text-faint" style={{ animationDelay: '.1s' }}>
          <span className="mr-2 text-green">$</span>whoami
        </div>
        <div className="reveal mb-1.5 font-mono text-[13px] text-faint" style={{ animationDelay: '.55s' }}>
          <span className="mr-2 text-green">$</span>cat role.txt
        </div>
        <div
          className="reveal mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber px-3 py-1 font-mono text-[11.5px] text-amber"
          style={{ animationDelay: '1.1s' }}
        >
          ◆ Transcender · 42 Luanda
        </div>
        <h1
          className="reveal font-display text-[clamp(40px,7vw,76px)] font-bold leading-[1.02] tracking-tight"
          style={{ animationDelay: '1.3s' }}
        >
          Celestino
          <br />
          Cumbiça
        </h1>
        <div className="reveal mt-3 font-mono text-[15px] text-amber" style={{ animationDelay: '1.6s' }}>
          Desenvolvedor Full-Stack <span className="text-dim">· foco em backend, redes & segurança</span>
        </div>
        <div className="reveal mb-5 font-mono text-[13px] text-faint" style={{ animationDelay: '1.75s' }}>
          Engenheiro Informático · Luanda, Angola
        </div>
        <p className="reveal max-w-[580px] text-[16px] text-dim" style={{ animationDelay: '1.9s' }}>
          Engenheiro Informático e Transcender da 42 Luanda — escola de programação intensiva baseada em
          projetos práticos e trabalho em equipa. Experiência prática em administração de sistemas Linux,
          redes, virtualização, containerização e segurança, combinada com desenvolvimento full-stack e
          certificações Cisco, Fortinet e AWS.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-3.5" style={{ animationDelay: '2.15s' }}>
          <a
            href="#projetos"
            className="rounded-[3px] border border-amber bg-amber px-5 py-2.5 font-mono text-[13px] font-semibold text-[#12190f] transition-colors hover:bg-[#f2b458]"
          >
            Ver projetos →
          </a>
          <a
            href="#contacto"
            className="rounded-[3px] border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-amber hover:text-amber"
          >
            Contactar
          </a>
          <a
            href="https://github.com/Celestinoramos"
            target="_blank"
            className="rounded-[3px] border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-amber hover:text-amber"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}

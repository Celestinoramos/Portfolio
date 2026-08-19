export default function Hero() {
  return (
    <header id="top" className="flex min-h-screen snap-start snap-always items-center">
      <div className="mx-auto w-full max-w-[880px] px-7 text-center">
        <p className="reveal mb-3 font-mono text-[14.5px] text-faint" style={{ animationDelay: '.1s' }}>
          <span className="text-cyan">$</span> whoami
        </p>
        <h1
          className="reveal font-mono text-[clamp(34px,6vw,56px)] font-bold leading-[1.1] tracking-tight text-text"
          style={{ animationDelay: '.3s' }}
        >
          Celestino <span className="text-blue">Cumbiça</span>
        </h1>
        <p className="reveal mt-3 font-mono text-[17px] text-dim" style={{ animationDelay: '.6s' }}>
          Desenvolvedor Fullstack <span className="text-faint">|</span> Cybersecurity
        </p>
        <p
          className="reveal mx-auto mt-6 max-w-[560px] font-mono text-[15.5px] leading-relaxed text-faint"
          style={{ animationDelay: '.9s' }}
        >
          &quot;Building secure and scalable digital solutions.&quot;
        </p>
        <div className="reveal mt-9 flex flex-wrap justify-center gap-3 font-mono text-[15px]" style={{ animationDelay: '1.2s' }}>
          <a
            href="https://github.com/Celestinoramos"
            target="_blank"
            className="border border-line px-4 py-2 text-dim transition-colors hover:border-blue hover:text-blue"
          >
            [ GitHub ]
          </a>
          <a href="#" className="border border-line px-4 py-2 text-dim transition-colors hover:border-blue hover:text-blue">
            [ LinkedIn ]
          </a>
          <a
            href="#contact"
            className="border border-blue bg-blue px-4 py-2 font-semibold text-[#0A0F1C] transition-colors hover:border-cyan hover:bg-cyan"
          >
            [ Contact ]
          </a>
        </div>
      </div>
    </header>
  );
}
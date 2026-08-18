import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contacto" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <div className="rounded-lg border border-line bg-surface p-11 text-center">
          <h2 className="mb-3.5 font-display text-[clamp(26px,4vw,36px)] font-semibold">
            Vamos falar de backend?
          </h2>
          <p className="mx-auto mb-5 max-w-[460px] text-dim">
            Aberto a oportunidades como Desenvolvedor Full-Stack / Backend — remoto, híbrido ou em Angola. Se
            procuras alguém que entenda o sistema de ponta a ponta — código, rede e segurança — contacta-me.
          </p>
          <div className="mb-2 font-mono text-[13px] text-dim">
            <a href="mailto:ramoscumbica2@outlook.com" className="text-amber">
              ramoscumbica2@outlook.com
            </a>{' '}
            · +244 937-321-982
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Celestinoramos"
              target="_blank"
              className="rounded-[3px] border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-amber hover:text-amber"
            >
              GitHub ↗
            </a>
            <a
              href="#"
              className="rounded-[3px] border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-amber hover:text-amber"
            >
              LinkedIn ↗
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

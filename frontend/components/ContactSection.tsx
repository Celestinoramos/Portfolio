import Reveal from './Reveal';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="flex min-h-screen snap-start snap-always items-center border-t border-line">
      <div className="mx-auto w-full max-w-[880px] px-7">
        <Reveal>
          <h2 className="mb-8 font-mono text-[15px] font-bold uppercase tracking-[0.2em] text-blue">
            <span className="text-cyan">$</span> contact
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mb-6 max-w-[520px] font-mono text-[13.5px] leading-relaxed text-dim">
            Aberto a oportunidades como Desenvolvedor Full-Stack / Backend — remoto, híbrido ou em Angola.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mb-10 space-y-2 font-mono text-[13px] text-dim">
            <p>
              <span className="text-cyan">✉</span>{' '}
              <a href="mailto:ramoscumbica2@outlook.com" className="text-blue transition-colors hover:text-cyan">
                ramoscumbica2@outlook.com
              </a>
            </p>
            <p>
              <span className="text-cyan">☎</span> +244 937-321-982
            </p>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
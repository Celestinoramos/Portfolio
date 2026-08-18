import SectionHeading from './SectionHeading';

const CERTS = [
  'CCNA — Cisco Networking Academy',
  'Fortinet NSE3',
  'AWS Cloud Quest: Cloud Practitioner',
  'Cisco IT Essentials',
  'Cisco — Fundamentos de Redes',
  'Cisco — Introdução à Cibersegurança',
  'Cisco — Introdução à IoT',
];

export default function Certifications() {
  return (
    <section id="certificacoes" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="certificações" title="Formação contínua" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div
              key={c}
              className="flex items-center gap-2.5 rounded-md border border-line bg-surface px-4 py-3.5 font-mono text-[13px] text-dim"
            >
              <span className="font-semibold text-green">✓</span>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

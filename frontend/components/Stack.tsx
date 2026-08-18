import SectionHeading from './SectionHeading';

const COLUMNS = [
  { title: 'Programação', items: ['C / C++', 'JavaScript / TypeScript', 'Node.js / NestJS', 'React / Next.js', 'Python'] },
  { title: 'Bases de Dados', items: ['PostgreSQL'] },
  { title: 'Redes', items: ['TCP/IP, Subnetting, Routing', 'VLAN, DNS, DHCP', 'Cisco'] },
  { title: 'Segurança', items: ['Fundamentos de Cibersegurança', 'Firewall (FortiGate)', 'Linux Hardening'] },
  { title: 'Infra & DevOps', items: ['Docker / Docker Compose', 'NGINX', 'Git / Bash'] },
  { title: 'Sistemas & Cloud', items: ['Linux, Windows', 'AWS (Cloud Practitioner)', 'Suporte técnico / Help Desk'] },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line py-16">
      <div className="mx-auto max-w-[960px] px-7">
        <SectionHeading label="stack" title="Competências técnicas" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title} className="rounded-md border border-line bg-surface p-5">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-amber">{col.title}</h4>
              <ul className="text-sm text-dim">
                {col.items.map((it, i) => (
                  <li key={it} className={`py-1.5 ${i !== 0 ? 'border-t border-dashed border-line' : ''}`}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

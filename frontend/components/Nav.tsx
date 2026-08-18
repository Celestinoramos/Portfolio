const LINKS = [
  { href: '#sobre', label: 'sobre' },
  { href: '#percurso', label: 'percurso' },
  { href: '#certificacoes', label: 'certificações' },
  { href: '#projetos', label: 'projetos' },
  { href: '#stack', label: 'stack' },
  { href: '#contacto', label: 'contacto' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-7">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-amber">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green shadow-[0_0_8px_theme(colors.green)]" />
          celestino@backend:~$
        </div>
        <div className="hidden gap-5 font-mono text-[12.5px] text-dim md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-amber">
              <span className="text-faint">./ </span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

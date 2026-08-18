const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[880px] items-center justify-between px-7">
        <a href="#top" className="flex items-center gap-2 font-mono text-[13px] font-semibold text-text">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          celestino@portfolio:~$
        </a>
        <div className="hidden gap-6 font-mono text-[12.5px] text-dim md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-blue">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
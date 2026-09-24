const LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4">
        <a
          href="#overview"
          className="font-display text-sm font-bold tracking-[0.18em] text-heading"
        >
          AT<span className="text-accent-soft">.</span>
        </a>
        <div className="flex gap-5 sm:gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-heading"
          >
            {link.label}
          </a>
        ))}
        </div>
      </nav>
    </header>
  );
}

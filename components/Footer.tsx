export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted sm:flex-row">
        <p>© 2026 Attila Tasnádi.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/TasnadiAttila"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-heading"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/attila-tasnádi-5b0804261/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-heading"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

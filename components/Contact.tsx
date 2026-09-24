import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-ink px-8 py-20 text-center shadow-[10px_10px_0_#5eead4] sm:px-12">
        <Reveal
          as="h2"
          onDark
          className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Let&apos;s discuss how we can make it meaningful.
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-muted">
          <span>You can contant me here:</span>
          <a
            href="https://www.linkedin.com/in/attila-tasnádi-5b0804261/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-accent-soft transition-colors hover:text-slate-100"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
          <a
            href="https://github.com/TasnadiAttila"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-accent-soft transition-colors hover:text-slate-100"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        </div>

        <p className="mt-4 font-mono text-sm text-slate-400">
          tasnadi.attila21@gmail.com
        </p>
      </div>
    </section>
  );
}

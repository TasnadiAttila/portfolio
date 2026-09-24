import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="overview" className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pt-28">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-7 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] text-accent-soft">
            <span>TASNÁDI ATTILA</span>
            <span className="h-px w-10 bg-accent-soft" />
          </div>

          <Reveal
            as="h1"
            className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl"
          >
            I write code that proves your product works.
          </Reveal>

          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted sm:text-xl">
            Specializing in highly scalable end-to-end testing frameworks,
            parallel execution pipelines, and automated quality gates that
            guarantee flawless shipping.
          </p>

          <p className="mt-5 border-l-2 border-accent-soft pl-4 text-base font-medium text-heading">
            Test Automation Engineer at PTC Hungary Kft.
          </p>

          <div className="mt-12 max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-ink font-mono text-xs shadow-[10px_10px_0_#5eead4] sm:text-sm">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-slate-400">
                bash — run-e2e-matrix.sh
              </span>
            </div>
            <div className="space-y-1.5 px-4 py-4 text-slate-300">
              <p>
                <span className="text-slate-500">$</span> npx playwright test
                --workers=8 --project=chromium
              </p>
              <p className="text-slate-500">
                Running 482 tests using 8 workers...
              </p>
              <p className="text-emerald-500">
                ✓ 482 passed (2m 14s) — Zero flaky runs detected.
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[425/490] w-full overflow-hidden rounded-[2rem] border-8 border-paper shadow-[12px_12px_0_#5eead4] lg:mt-2">
          <Image
            src="/images/hero-photo.png"
            alt="Portrait of Attila Tasnádi"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

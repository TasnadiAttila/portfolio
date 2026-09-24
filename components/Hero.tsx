import Image from "next/image";
import Reveal from "./Reveal";
import { BASE_PATH } from "./basePath";

export default function Hero() {
  return (
    <section id="overview" className="mx-auto max-w-content px-6 py-24">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-sm tracking-wide text-accent-soft">
            <span>TASNÁDI ATTILA</span>
            <span className="h-px w-8 bg-accent-soft/60" />
          </div>

          <Reveal
            as="h1"
            className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          >
            I write code that proves your product works.
          </Reveal>

          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted">
            Specializing in highly scalable end-to-end testing frameworks,
            parallel execution pipelines, and automated quality gates that
            guarantee flawless shipping.
          </p>

          <p className="mt-4 text-lg text-heading">
            Test Automation Engineer at PTC Hungary Kft.
          </p>

          <div className="mt-12 overflow-hidden rounded-xl bg-ink font-mono text-sm shadow-lg">
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

        <div className="relative aspect-[425/490] w-full overflow-hidden rounded-2xl lg:mt-2">
          <Image
            src={`${BASE_PATH}/images/hero-photo.png`}
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
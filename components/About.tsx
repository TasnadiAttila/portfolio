import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="mx-auto max-w-content px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-6 font-mono text-xs font-medium tracking-[0.18em] text-accent-soft">
            THE PHILOSOPHY
          </p>
          <Reveal
            as="h2"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl"
          >
            Quality is not an afterthought
          </Reveal>
        </div>

        <div className="border-t border-white/15 pt-8 lg:pt-2">
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            I am a Test Automation Engineer who believes automation is
            software development itself. I design testing architectures that
            treat test scripts with the same rigorous clean code standards,
            optimization, and modularity as raw production features.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            By creating bulletproof CI/CD pipelines and custom tooling, I
            bridge the gap between high development velocity and
            uncompromising product stability. No magic sleeps, no flaky
            selectors, and zero wasted compute hours.
          </p>

          <blockquote className="mt-8 border-l-2 border-accent-soft pl-6 text-lg italic text-heading sm:text-xl">
            “A test suite should be the wind in a developer&apos;s sails, not
            an anchor dragging them down.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const LAYERS = [
  {
    title: "End-to-End Testing",
    description:
      "Comprehensive UI automation mocking complex user persona flows over cross-browser matrices.",
    tags: ["Selenium", "Playwright", "Java", "Python"],
  },
  {
    title: "API",
    description:
      "Validating contract compliance, payload schema definitions, and microservices boundary states.",
    tags: ["Postman", "REST Assured"],
  },
  {
    title: "Continuous Integration",
    description:
      "Containerizing execution runner instances to run parallel workflows on code commit events.",
    tags: ["GitHub Actions", "Jenkins Pipelines"],
  },
];

export default function Stack() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-6 font-mono text-xs font-medium tracking-[0.18em] text-accent-soft">
          ENGINEER&apos;S TOOLKIT
        </p>
        <Reveal
          as="h2"
          className="font-display text-4xl font-semibold tracking-[-0.02em] sm:text-6xl"
        >
          My Testing Stack &amp; Layer Architecture
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LAYERS.map((layer) => (
          <div
            key={layer.title}
            className="group rounded-2xl border border-white/10 bg-paper p-8 shadow-[6px_6px_0_rgba(94,234,212,0.12)] transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="font-display text-xl font-semibold text-heading">
              {layer.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              {layer.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {layer.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-tag px-3 py-1 font-mono text-xs text-heading"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

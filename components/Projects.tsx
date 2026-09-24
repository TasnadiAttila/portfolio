import Image from "next/image";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "Fully functional Bomberman clone",
    description:
      "A fully functioning clone of the game called Bomberman. Its playable in a browser. It was my very first project where I connected the backend with the frontend",
    tags: ["JavaScript", "PHP", "HTML5", "CSS", "Cypress"],
    image: "/images/project-bomberman.png",
    alt: "Screenshot of a browser-based Bomberman clone",
    href: "https://github.com/TasnadiAttila/Bomberman",
  },
  {
    title: "JobTracker app",
    description:
      "Built in react for tracking your job application process. This was my first using Docker, PostgreSQL and Prizma for the backend side of the application.",
    tags: ["TypeScript", "CSS", "JavaScript", "SQL"],
    image: "/images/project-jobtracker.png",
    alt: "Screenshot of the JobTracker sign-in screen",
    href: "https://github.com/TasnadiAttila/jobtracker",
  },
  {
    title: "Landscape Metric Calculator",
    description:
      "This was my thesis project for my Computer Science MSc studies. It was completly built with Python in QGIS. With it you can analyze your terrain with 15 different metrics",
    tags: ["Python"],
    image: "/images/project-landscape.png",
    alt: "Screenshot of the Landscape Metric Calculator QGIS plugin",
    href: "https://github.com/TasnadiAttila/Lake-Tisza-landscape-calculator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <Reveal
        as="h2"
        className="mb-12 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-6xl"
      >
        Projects I&apos;m Proud Of
      </Reveal>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-paper shadow-[8px_8px_0_rgba(94,234,212,0.16)] transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink md:aspect-auto">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-heading">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent-soft focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
                >
                  {project.title}
                </a>
              </h3>
              <p className="leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-tag px-3 py-1 font-mono text-xs text-heading"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

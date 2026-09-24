const STATS = [
  { value: "200+", label: "Automated Test Cases" },
  { value: "0", label: "Production Blockers Slipped (2023-2026)" },
];

export default function StatStrip() {
  return (
    <section id="process" className="border-y border-white/10 bg-ink">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-6 py-16 sm:flex-row sm:gap-24">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl font-semibold tracking-[-0.03em] text-accent">
              {stat.value}
            </p>
            <p className="mt-2 text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

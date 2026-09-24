const ITEMS = [
  {
    value: "AIR 396",
    label: "NIMCET 2023",
    detail: "Secured an all-India rank among 25,000+ candidates nationwide.",
  },
  {
    value: "96.99%ile",
    label: "MAH CET",
    detail: "Placed in the top percentile of the Maharashtra CET.",
  },
  {
    value: "500+",
    label: "LeetCode problems solved",
    detail: "Consistent practice across data structures and algorithms.",
  },
  {
    value: "GSSoC",
    label: "GirlScript Summer of Code — Level 2",
    detail: "Recognized for open-source contributions during the program.",
  },
  {
    value: "SQL",
    label: "HackerRank certified",
    detail: "Also certified in Problem Solving (Basic).",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-semibold mb-10">Achievements</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((a) => (
            <div key={a.label} className="rounded-xl border border-line bg-panel p-6">
              <p className="font-display text-2xl font-semibold text-amber">{a.value}</p>
              <p className="text-sm font-medium mt-2">{a.label}</p>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

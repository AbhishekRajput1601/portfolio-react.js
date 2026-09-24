const EDUCATION = [
  {
    period: "2023 — 2026",
    school: "Maulana Azad National Institute of Technology, Bhopal",
    shortName: "MANIT Bhopal",
    degree: "Master of Computer Applications (MCA)",
    description: "Focused on software engineering, data structures, databases, and scalable application development.",
  },
  {
    period: "2019 — 2022",
    school: "RPL Maheshwari College, DAVV University",
    shortName: "DAVV University",
    degree: "Bachelor of Computer Applications (BCA)",
    description: "Built core skills in programming, databases, and full-stack web development.",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-teal mb-4">Academic foundation</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((item, index) => (
            <article key={item.degree} className="relative rounded-xl border border-line bg-panel p-7 sm:p-8 overflow-hidden">
              <span className="absolute right-6 top-5 font-mono text-5xl font-semibold text-text/4" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="font-mono text-xs text-teal mb-6">{item.period}</p>
              <p className="text-amber text-sm font-medium mb-2">{item.shortName}</p>
              <h3 className="font-display text-xl font-semibold leading-snug">{item.degree}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">{item.school}</p>
              <p className="mt-6 pt-5 border-t border-line text-sm text-muted leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GROUPS = [
  {
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Spring Security", "Node.js", "Express.js", "FastAPI", "Microservices"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Redux Toolkit", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Hibernate"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, S3, CloudFront)", "Docker", "CI/CD", "Git & GitHub"],
  },
  {
    label: "Testing & Practice",
    items: ["JUnit", "Postman", "Agile / Scrum", "DSA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-teal mb-4">Technologies I use</p>
        <h2 className="font-display text-3xl font-semibold mb-10">Technical skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm text-teal font-medium mb-3">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-panel border border-line text-text/90 hover:border-amber/60 hover:text-amber transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

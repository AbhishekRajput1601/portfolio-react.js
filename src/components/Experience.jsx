const ROLES = [
  {
    period: "2026 — Present",
    role: "Graduate Engineer",
    org: "MPSEDC",
    points: [
      "Contributing to Java and Spring Boot applications with a focus on maintainable backend services.",
      "Building and enhancing REST APIs, including validation, error handling, and secure service-layer workflows.",
      "Working with relational data and collaborating on reliable, production-oriented software delivery.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "SQL", "Git"],
  },
  {
    period: "2025 — 2026",
    role: "Full Stack Developer",
    org: "Harborleaf Tech Private Limited",
    points: [
      "Helped build a video-calling platform for 10+ concurrent participants using Python, FastAPI, and REST APIs.",
      "Integrated LiveKit and Whisper for real-time audio processing, achieving 90% transcription accuracy.",
      "Implemented JWT authentication and email OTP verification for 50+ test users.",
    ],
    stack: ["Python", "FastAPI", "LiveKit", "Whisper", "JWT"],
  },
  {
    period: "2024 — 2025",
    role: "Software Engineer Intern",
    org: "Monocept Consulting Pvt. Ltd.",
    points: [
      "Built and maintained 15+ Java REST APIs with Spring Boot and Spring Security, supporting 300+ daily requests.",
      "Developed 12+ Servlet and JSP pages that supported concurrent sessions for 50+ users.",
      "Achieved 80% test coverage with JUnit and Postman across 40+ test cases.",
    ],
    stack: ["Java", "Spring Boot", "JDBC", "MySQL", "JUnit"],
  },
];

export default function Experience() {
  return (
    <section id="work" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <div className="experience-heading flex items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-3xl font-semibold">Experience</h2>
          <p className="text-muted text-sm hidden sm:block">Scroll for details →</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {ROLES.map((role) => (
            <article
              key={role.org}
              className="rounded-xl border border-line bg-panel p-5 sm:p-6 flex flex-col"
            >
              <p className="font-mono text-xs text-teal mb-3">{role.period}</p>
              <h3 className="font-display text-xl font-semibold">{role.role}</h3>
              <p className="text-amber text-sm mt-1 mb-4">{role.org}</p>
              <ul className="space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="text-sm text-muted leading-relaxed flex gap-2.5">
                    <span className="text-line mt-2 w-1 h-1 rounded-full bg-muted shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-5">
                {role.stack.map((skill) => (
                  <span key={skill} className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-line text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

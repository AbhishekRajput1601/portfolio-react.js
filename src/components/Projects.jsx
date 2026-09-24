import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "Insurance Policy & Claim Management",
    period: "May 2026 — Jul 2026",
    desc: "A full-stack insurance platform for policy purchases and claims, designed around clear workflows for customers, agents, and administrators.",
    points: [
      "Supports 5+ policy types and processes 50+ test claims from submission to resolution.",
      "Secured three user roles and 15+ permissions with Spring Security and JWT.",
      "Integrated Cloudinary uploads and Twilio notifications for timely claim updates.",
    ],
    stack: ["React", "Spring Boot", "MySQL", "JWT", "Twilio"],
    href: "https://github.com/AbhishekRajput1601",
  },
  {
    name: "Quick-Mart — E-Commerce Platform",
    period: "Feb 2025 — Jun 2025",
    desc: "A MERN e-commerce application with search, cart, and payment flows built for a fast, dependable shopping experience.",
    points: [
      "Delivered JWT authentication, payments, and a catalogue of 100+ products.",
      "Improved indexed product search to reduce average response time by 30%.",
      "Built 20+ REST endpoints with centralized error handling, reducing unhandled errors by 60%.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    href: "https://github.com/AbhishekRajput1601",
  },
];

function ProjectPreview({ name }) {
  const insurance = name.startsWith("Insurance");
  return (
    <div className="relative h-28 mb-6 overflow-hidden rounded-lg border border-line bg-panel-2 p-3" aria-hidden="true">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
      <div className="relative flex h-full items-center justify-between gap-2">
        <div className="w-[29%] rounded-md border border-teal/40 bg-teal/10 px-2 py-2 text-center font-mono text-[9px] text-teal">{insurance ? "CLIENT" : "STORE"}</div>
        <div className="h-px flex-1 bg-amber/60" />
        <div className="w-[35%] rounded-md border border-amber/40 bg-amber/10 px-2 py-2 text-center font-mono text-[9px] text-amber">{insurance ? "SECURE API" : "CHECKOUT API"}</div>
        <div className="h-px flex-1 bg-amber/60" />
        <div className="w-[22%] rounded-md border border-line bg-panel px-2 py-2 text-center font-mono text-[9px] text-muted">{insurance ? "CLAIMS" : "ORDERS"}</div>
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-[9px] text-muted">system flow / 01</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-semibold mb-10">Featured projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl border border-line bg-panel p-6 sm:p-8 overflow-hidden hover:border-amber/50 transition-colors focus-ring"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: i % 2 ? -2 : 2, transition: { duration: 0.22 } }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute top-0 right-0 w-28 h-28 opacity-[0.12] group-hover:opacity-25 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, var(--color-amber) 50%)",
                }}
              />
              <p className="font-mono text-xs text-teal mb-3">{p.period}</p>
              <ProjectPreview name={p.name} />
              <h3 className="font-display text-xl font-semibold pr-16">{p.name}</h3>
              <p className="text-muted text-sm mt-3 leading-relaxed">{p.desc}</p>

              <ul className="space-y-2 mt-5">
                {p.points.map((pt, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-amber shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-line text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm text-amber mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                View on GitHub
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

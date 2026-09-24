import Portrait from "./Portrait";
import headshot from "../images/name-cutout.png";

export default function Contact() {
  return (
    <section id="contact" className="contact-section px-4 sm:px-6 border-t border-line grid-texture relative overflow-hidden flex flex-col justify-center">
      <div className="pointer-events-none absolute bottom-[-20%] left-[10%] w-105 h-105 rounded-full bg-teal/10 blur-[120px]" />
      <div className="contact-content max-w-3xl mx-auto text-center relative">
        <Portrait src={headshot} alt="Portrait of Abhishek Rajput" variant="avatar" />
        <p className="contact-kicker font-mono text-sm text-teal">Open to backend and full-stack opportunities</p>
        <h2 className="contact-title font-display text-3xl sm:text-4xl font-semibold text-balance">
          Let’s build something useful.
        </h2>
        <p className="contact-description text-muted max-w-xl mx-auto leading-relaxed">
          I’m interested in building reliable, user-focused software with ambitious teams. Reach out by email, or connect on LinkedIn and GitHub.
        </p>

        <div className="contact-actions flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:abhirajputofficial2000@gmail.com"
            className="inline-flex max-w-full items-center justify-center bg-amber text-ink font-medium text-xs sm:text-sm px-4 sm:px-6 py-3 rounded-full break-all hover:bg-amber-dim transition-colors focus-ring"
          >
            abhirajputofficial2000@gmail.com
          </a>
        </div>


        <div className="contact-links flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
          <a href="tel:+916260354447" className="hover:text-text transition-colors focus-ring rounded">
            +91-6260354447
          </a>
          <a href="https://linkedin.com/in/abhishek-rajput" target="_blank" rel="noreferrer" className="hover:text-text transition-colors focus-ring rounded">
            LinkedIn
          </a>
          <a href="https://github.com/AbhishekRajput1601" target="_blank" rel="noreferrer" className="hover:text-text transition-colors focus-ring rounded">
            GitHub
          </a>
        </div>
      </div>

      <footer className="contact-footer border-t border-line max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted relative">
        <p>© {new Date().getFullYear()} Abhishek Rajput. Built with React, Vite &amp; Tailwind.</p>
        <p>Based in Indore, India</p>
      </footer>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Portrait from "./Portrait";
import frontPortrait from "../images/front-cutout.png";

const LINES = [
  { t: "const", c: " engineer = {" },
  { indent: 1, k: "name", v: '"Abhishek Rajput"' },
  { indent: 1, k: "stack", v: '["Java", "Spring Boot", "React"]' },
  { indent: 1, k: "rank", v: '"AIR 396 / 25,000+"' },
  { indent: 1, k: "solved", v: '"500+ LeetCode problems"' },
  { t: "}", c: ";" },
];

function useTypedLines(lines, speed = 18, startDelay = 500) {
  const reduceMotion = useReducedMotion();
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    let cancelled = false;
    const full = lines.map((l) =>
      l.k ? `${"  ".repeat(l.indent || 0)}${l.k}: ${l.v},` : `${"  ".repeat(l.indent || 0)}${l.t}${l.c || ""}`
    );
    const flat = full.join("\n");
    let i = 0;
    const timer = setTimeout(function tick() {
      if (cancelled) return;
      i += 1;
      setRendered(flat.slice(0, i).split("\n"));
      if (i < flat.length) {
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, speed, startDelay, reduceMotion]);

  return reduceMotion ? {
    rendered: lines.map((line) => line.k ? `${"  ".repeat(line.indent || 0)}${line.k}: ${line.v},` : `${line.t}${line.c || ""}`),
    done: true,
  } : { rendered, done };
}

function Stat({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const target = value;
          const duration = 900;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl sm:text-4xl font-semibold text-text">
        {count}
        <span className="text-amber">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-muted mt-1 leading-snug">{label}</div>
    </div>
  );
}

export default function Hero() {
  const { rendered, done } = useTypedLines(LINES);
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section grid-texture">
      <div className="pointer-events-none absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full bg-amber/10 blur-[120px]" />

      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="hero-kicker font-mono text-teal">Software Engineer — Backend &amp; Full Stack</p>
          <h1 className="hero-title font-display font-semibold text-balance">
            Building reliable backend systems and polished web experiences.
          </h1>
          <p className="hero-description text-muted">
            MCA candidate at MANIT Bhopal focused on Java, Spring Boot, and React.
            I turn real-world requirements into secure APIs, thoughtful interfaces, and maintainable products.
          </p>

          <div className="hero-actions flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex justify-center items-center gap-2 bg-amber text-ink font-medium text-sm px-6 py-3 rounded-full hover:bg-amber-dim transition-colors focus-ring"
            >
              Explore projects
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 text-sm font-medium text-text border border-line px-6 py-3 rounded-full hover:border-amber transition-colors focus-ring"
            >
              Get in touch
            </a>
          </div>

          <div className="hero-stats grid grid-cols-3 gap-3 sm:gap-6">
            <Stat value={500} suffix="+" label="DSA problems solved" />
            <Stat value={27} suffix="+" label="REST APIs delivered" />
            <Stat value={396} label="NIMCET 2023 rank" />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="hero-visual"
        >
          <Portrait src={frontPortrait} alt="Abhishek Rajput in a white shirt" priority>
            <span className="portrait-name">Abhishek Rajput</span>
            <span className="portrait-location">Software engineer · Bhopal, India</span>
          </Portrait>
          <div className="hero-code">
            <pre className="hero-code-content font-mono text-text/90" aria-label="Engineer profile">
              <code>
              {rendered.map((line, i) => {
                const isKey = line.trim().match(/^(\w+):/);
                return (
                  <span className="hero-code-line" key={i}>
                    {isKey ? (
                      <>
                        <span className="text-muted">{line.split(":")[0]}</span>
                        <span className="text-text">:</span>
                        <span className="text-amber">{line.split(":").slice(1).join(":")}</span>
                      </>
                    ) : (
                      <span className="text-teal">{line}</span>
                    )}
                    {i === rendered.length - 1 && <span aria-hidden="true" className={done ? "cursor-blink text-amber" : "text-amber"}>▍</span>}
                  </span>
                );
              })}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

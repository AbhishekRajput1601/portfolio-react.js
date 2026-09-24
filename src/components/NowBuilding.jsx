import { motion } from "framer-motion";
import Portrait from "./Portrait";
import personalPortrait from "../images/image-cutout.png";

const ITEMS = [
  { icon: "↗", title: "Building dependable APIs", text: "Designing secure Spring Boot services with crisp documentation and predictable error handling." },
  { icon: "⌘", title: "Sharpening system design", text: "Practising the trade-offs behind scalable data, caching, and service architecture." },
  { icon: "◌", title: "Open to the right challenge", text: "Looking for backend and full-stack roles where thoughtful engineering matters." },
];

export default function NowBuilding() {
  return (
    <section id="now" className="px-4 sm:px-6 py-20 sm:py-24 border-t border-line">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[.72fr_1.28fr] gap-10 lg:gap-16 items-center">
        <Portrait src={personalPortrait} alt="Full-length portrait of Abhishek Rajput" variant="personal">
          <span className="portrait-eyebrow">Beyond the screen</span>
          <span className="portrait-name">A little more human.</span>
        </Portrait>
        <div>
          <p className="font-mono text-sm text-teal mb-4">Right now</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-balance">Always learning.<br />Always shipping.</h2>
          <p className="text-muted leading-relaxed mt-5 max-w-sm">A small snapshot of the direction I’m taking my craft and career.</p>
          <div className="grid gap-3 mt-7">
            {ITEMS.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .1 }} className="flex gap-4 rounded-xl border border-line bg-panel p-4 sm:p-5 hover:border-amber/50 transition-colors">
                <span aria-hidden="true" className="inline-flex shrink-0 size-9 items-center justify-center rounded-lg bg-amber/10 text-amber font-mono text-lg">{item.icon}</span>
                <div>
                  <h3 className="font-display font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-2">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

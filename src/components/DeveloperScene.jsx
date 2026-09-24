import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// A lightweight, original hero illustration — deliberately built as SVG so it stays crisp.
export default function DeveloperScene() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 110, damping: 16 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), { stiffness: 110, damping: 16 });

  function moveScene(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <motion.div
      className="developer-scene"
      aria-label="Illustration of a developer working at a computer"
      role="img"
      style={{ rotateX, rotateY, transformPerspective: 950 }}
      onPointerMove={moveScene}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <div className="scene-stage" />
      <motion.div className="scene-orbit scene-orbit-one" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      <motion.div className="scene-orbit scene-orbit-two" animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
      <motion.span className="scene-dot scene-dot-one" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="scene-dot scene-dot-two" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />

      <motion.svg viewBox="0 0 480 440" className="relative z-10 w-full" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.25 }}>
        <defs>
          <linearGradient id="screen" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#1c2635" /><stop offset="1" stopColor="#10151e" /></linearGradient>
          <linearGradient id="shirt" x1="0" x2="1"><stop stopColor="#5FD4B0" /><stop offset="1" stopColor="#2d9e85" /></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>
        <ellipse cx="240" cy="393" rx="167" ry="20" fill="#000" opacity=".28" />
        <path d="M95 361h290l-26 31H120z" fill="#222a39" stroke="#39445a" strokeWidth="2" />
        <path d="M129 360h223l-13 15H143z" fill="#121823" />

        <g className="scene-monitor">
          <rect x="234" y="100" width="176" height="160" rx="12" fill="#283246" opacity=".45" filter="url(#glow)" />
          <rect x="228" y="92" width="176" height="160" rx="10" fill="url(#screen)" stroke="#65728b" strokeWidth="3" />
          <rect x="240" y="107" width="152" height="128" rx="4" fill="#0b0e14" />
          <circle cx="251" cy="119" r="3" fill="#F2A65A" /><circle cx="262" cy="119" r="3" fill="#5FD4B0" /><circle cx="273" cy="119" r="3" fill="#71809b" />
          <path d="M250 142h43M250 155h78M250 168h57M250 181h91M250 194h46M250 207h70" stroke="#5FD4B0" strokeWidth="5" strokeLinecap="round" opacity=".85" />
          <path d="M300 142h61M334 155h37M315 168h53M351 194h23M309 207h55" stroke="#F2A65A" strokeWidth="5" strokeLinecap="round" opacity=".86" />
          <path d="M304 252v38m-34 0h69" stroke="#65728b" strokeWidth="7" strokeLinecap="round" />
        </g>

        <g className="scene-person">
          <path d="M85 349c6-78 31-120 92-120 57 0 87 46 92 120H85z" fill="url(#shirt)" />
          <path d="M124 239c5-27 7-53 7-53h70s1 31 8 55c-24 27-60 26-85-2z" fill="#c88765" />
          <circle cx="166" cy="151" r="53" fill="#d99b77" />
          <path d="M112 150c-8-60 26-89 66-73 31 12 44 39 37 77-11-10-21-26-24-46-17 19-43 30-77 29z" fill="#252b3a" />
          <path d="M118 149c3 41 22 62 48 62 30 0 48-28 50-62-20 9-75 9-98 0z" fill="#d99b77" />
          <path d="M143 162h11m26 0h11" stroke="#252b3a" strokeWidth="4" strokeLinecap="round" />
          <path d="M153 188c9 6 18 6 27 0" fill="none" stroke="#9a5b4c" strokeWidth="3" strokeLinecap="round" />
          <path d="M121 341l-16-73c-3-14 7-27 21-27h21l18 36 17-36h25c15 0 25 14 21 28l-16 72" fill="url(#shirt)" />
          <path d="M146 265l22 31 20-31" fill="#f0b292" />
          <path d="M125 313l60 22 42-40" fill="none" stroke="#d99b77" strokeWidth="15" strokeLinecap="round" />
          <path d="M204 338h91c11 0 11 17 0 17h-91z" fill="#e6aa86" />
        </g>
        <rect x="208" y="348" width="108" height="16" rx="6" fill="#59677e" />
        <path d="M217 351h89" stroke="#8493ab" strokeWidth="2" opacity=".75" />
      </motion.svg>
      <div className="scene-chip chip-code">&lt;/&gt;</div>
      <div className="scene-chip chip-java">Java</div>
    </motion.div>
  );
}

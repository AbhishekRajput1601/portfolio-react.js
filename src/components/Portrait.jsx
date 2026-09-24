import { useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function Portrait({ src, alt, variant = "hero", children, priority = false }) {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 140, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 140, damping: 24 });

  function resetTilt() {
    tiltX.set(0);
    tiltY.set(0);
  }

  function movePortrait(event) {
    if (reduceMotion || variant === "hero" || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
  }

  return (
    <motion.div
      ref={ref}
      className={`portrait portrait--${variant}`}
      data-visible={visible}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
      onPointerMove={movePortrait}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className="portrait-float">
        <motion.figure
          className="portrait-frame"
          style={variant === "hero" ? undefined : { rotateX: reduceMotion ? 0 : rotateX, rotateY: reduceMotion ? 0 : rotateY, transformPerspective: 1000 }}
        >
          <div className="portrait-image-wrap">
            <img
              src={src}
              alt={alt}
              className="portrait-image"
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
            />
          </div>
          {children && <figcaption className="portrait-caption">{children}</figcaption>}
        </motion.figure>
      </div>
    </motion.div>
  );
}

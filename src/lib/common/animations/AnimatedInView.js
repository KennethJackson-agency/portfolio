"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimatedInView({
  children,
  startDelay = 0,
  wrapperClassName = "",
  animationClassName = "",
  amount = 0.6,
}) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { amount, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (children) {
      setReady(true);
    }
  }, [children]);

  return (
    <div className={`relative w-max ${wrapperClassName}`}>
      {/* Dummy element hanya untuk inView detection */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-1 h-1 opacity-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        .
      </div>

      {/* Animated Content */}
      {ready && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: startDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className={`${animationClassName}`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

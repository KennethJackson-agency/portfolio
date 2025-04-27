"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimatedButton({
  text = "Button",
  startDelay = 0,
  buttonClassName = "", 
  wrapperClassName = "",
}) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { amount: 0.6, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (text) {
      setReady(true);
    }
  }, [text]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Dummy element untuk inView detection */}
      <div
        ref={containerRef}
        className="absolute opacity-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {text}
      </div>

      {/* Animated Button */}
      {ready && (
        <motion.button
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: startDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className={`${buttonClassName}`} // buttonClassName tambahan custom
        >
          {text}
        </motion.button>
      )}
    </div>
  );
}

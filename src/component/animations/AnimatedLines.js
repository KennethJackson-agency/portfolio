"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SplitType from "split-type";

export default function AnimatedLines({
    text = "",
    startDelay = 0.5,
    delayPerLine = 0.2,
    className = "",
}) {
    const splitRef = useRef(null);
    const [lines, setLines] = useState([]);
    const controls = useAnimation();
    const isInView = useInView(splitRef, { amount: 0.6, once: false });

    const safeText = typeof text === "string" ? text : "";

    useEffect(() => {
        if (!splitRef.current || !safeText) return;

        const instance = new SplitType(splitRef.current, {
            types: "lines",
            lineClass: "lineChild",
        });

        const lineEls = splitRef.current.querySelectorAll(".lineChild");
        const extractedLines = Array.from(lineEls).map(
            (line) => line.textContent?.trim() || ""
        );
        setLines(extractedLines);

        return () => {
            instance.revert();
        };
    }, [safeText]);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Dummy text untuk SplitType, invisible */}
            <div
                ref={splitRef}
                className="absolute opacity-0 pointer-events-none select-none"
                aria-hidden="true"
            >
                {safeText}
            </div>

            {/* Animasi */}
            {lines.length > 0 && (
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: delayPerLine,
                                delayChildren: startDelay,
                            },
                        },
                        hidden: {},
                    }}
                >
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden"
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: {
                                    y: "0%",
                                    opacity: 1,
                                    transition: {
                                        duration: 0.25,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                        >
                            {line}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCharacterText({
    text = "",
    duration = 0.2,
    startDelay = 0,
    className = "",
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Ini kunci utamanya: apapun yang datang, ubah paksa ke string
    const safeText = typeof text === "string" ? text : String(text ?? "");

    if (!mounted) return null;
    if (!safeText.trim()) return null; // skip kalau kosong

    return (
        <motion.div
            className={`flex flex-wrap justify-center text-center overflow-hidden ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: startDelay,
                    },
                },
                hidden: {},
            }}
        >
            {safeText.split("").map((char, i) => (
                <motion.div
                    key={i}
                    className="overflow-hidden"
                    variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: {
                            y: "0%",
                            opacity: 1,
                            transition: {
                                duration: duration,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    <span className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}

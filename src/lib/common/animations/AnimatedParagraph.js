"use client";

import { motion } from "framer-motion";

export default function AnimatedParagraph({
    children,
    delay = 0.3,
    className = "",
}) {
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay,
            },
        },
    };

    return (
        <motion.p
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {children}
        </motion.p>
    );
}

"use client";

import { motion } from "framer-motion";

export default function ShootingStar({
	style,
    width = 2,
    height = 120,
    delay = 0,
    startX = "50%", // posisi horizontal
    fallDistance = "100vh", // seberapa jauh jatuhnya
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
            }}
            animate={{
                opacity: [0, 1, 0],
                y: fallDistance, // jatuh ke ketinggian yang bisa diatur
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            }}
            className={style}
            style={{
                left: startX,
                transform: "translateX(-50%)",
                width: `${width}px`,
                height: `${height}px`,
                background: "linear-gradient(to top, #000000, #999999)",
                borderRadius: "9999px",
            }}
        />
    );
}

"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function NotFound() {
    const controls = useAnimation();
    const [clickCount, setClickCount] = useState(0);

    const handleClick = async () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 3) {
            // 💣 Gravity effect
            await controls.start({
                y: "100vh", // jatuh ke bawah layar
                rotate: 720,
                transition: {
                    type: "spring",
                    stiffness: 20,
                    damping: 10,
                },
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
            {/* 🔥 404 — Bisa di drag & Jatuh saat klik 3x */}
            <motion.h1
                drag
                dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
                className="text-6xl font-bold cursor-pointer select-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                animate={controls}
            >
                404.
            </motion.h1>

            {/* Subtext */}
            <motion.p
                drag
                dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
                className="text-pink-500 font-semibold mt-2 cursor-grab active:cursor-grabbing select-none"
                whileHover={{ scale: 1.1 }}
            >
                This ain't it, chief.
            </motion.p>

            <motion.p
                drag
                dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
                className="text-zinc-500 mt-2 max-w-md cursor-grab active:cursor-grabbing select-none"
                whileHover={{ scale: 1.05 }}
            >
                The link you clicked is either outdated, broken, or never existed.
            </motion.p>

            {/* Button */}
            <motion.div
                drag
                dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 cursor-grab active:cursor-grabbing"
            >
                <Link
                    href="/"
                    className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition select-none"
                >
                    Get me outta here 🚪
                </Link>
            </motion.div>
        </div>
    );
}

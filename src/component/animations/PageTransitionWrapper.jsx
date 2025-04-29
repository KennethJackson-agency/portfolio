"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransitionWrapper({ children }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 1200); // total animasi
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            {/* Tirai dan background */}
            <AnimatePresence mode="wait">
                {isAnimating && (
                    <motion.div
                        key={`overlay-${pathname}`}
                        className="fixed inset-0 z-50 pointer-events-none"
                    >
                        {/* 🔳 Background putih agar halaman lama tidak kelihatan */}
                        <motion.div
                            className="absolute inset-0 bg-white z-40"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* ⬅️ Panel kiri */}
                        <motion.div
                            className="absolute top-0 left-1/2 h-full w-1/2 bg-black origin-right z-50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.77, 0, 0.175, 1],
                            }}
                        />

                        {/* ➡️ Panel kanan */}
                        <motion.div
                            className="absolute top-0 right-1/2 h-full w-1/2 bg-black origin-left z-50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.77, 0, 0.175, 1],
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🧾 Halaman */}
            <div className="relative z-0">{children}</div>
        </>
    );
}

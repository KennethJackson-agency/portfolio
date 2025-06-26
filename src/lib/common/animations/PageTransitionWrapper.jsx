'use client'
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransitionWrapper({ children }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 1200);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isAnimating && (
                    <motion.div
                        key={`overlay-${pathname}`}
                        className="fixed inset-0 z-50 pointer-events-none"
                    >
                        {/* Efek panel melengkung naik dari bawah */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-full bg-black z-50 rounded-t-[50%]"
                            initial={{ scaleY: 0, borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
                            animate={{ scaleY: 1, borderTopLeftRadius: "0%", borderTopRightRadius: "0%" }}
                            exit={{ scaleY: 0, borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
                            style={{ transformOrigin: "bottom" }}
                            transition={{
                                duration: 1,
                                ease: [0.77, 0, 0.175, 1],
                            }}
                        />

                        {/* Background putih untuk mencegah transisi halaman kelihatan */}
                        <motion.div
                            className="absolute inset-0 bg-white z-40"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-0">{children}</div>
        </>
    );
}

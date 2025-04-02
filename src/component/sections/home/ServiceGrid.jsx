"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceGrid({ services }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-600 divide-x divide-y divide-zinc-600 w-full text-left text-white max-w-5xl mx-auto">
            {services.map((service, i) => (
                <HoverServiceItem
                    key={i}
                    title={service.fields.serviceName}
                    description={service.fields.serviceDescription}
                />
            ))}
        </div>
    );
}

function HoverServiceItem({ title, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-6 min-h-[225px] sm:min-h-[300px] flex flex-col justify-between transition-colors duration-300"
            layout
        >
            {/* 🟢 Text always visible at the top */}
            <p className="font-mono text-sm text-zinc-400 mb-4">text here</p>

            {/* 🔁 Title ↔ Description (below) */}
            <div className="mt-auto">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.p
                            key="title"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-semibold text-white"
                        >
                            {title}
                        </motion.p>
                    ) : (
                        <motion.p
                            key="desc"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl font-medium text-white"
                        >
                            {description}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}





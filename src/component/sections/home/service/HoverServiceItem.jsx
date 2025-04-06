"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverServiceItem({ tag, icon, title, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-6 min-h-[225px] sm:min-h-[300px] flex flex-col justify-between transition-colors duration-300"
            layout
        >
            <div className="flex items-center justify-between">
                <p className="font-mono text-sm text-zinc-400 mb-4 uppercase tracking-wide">
                    {tag}
                </p>

                <div className="flex gap-2 mb-4">
                    {icon?.map((item, index) => {
                        const imageUrl = item?.fields?.file?.url;
                        return imageUrl ? (
                            <Image
                                key={index}
                                src={`https:${imageUrl}`}
                                alt="Service Icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        ) : null;
                    })}
                </div>
            </div>

            <div className="mt-auto">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={isHovered ? "desc" : "title"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`${
                            isHovered
                                ? "text-2xl font-medium"
                                : "text-3xl font-semibold"
                        } text-white`}
                    >
                        {isHovered ? description : title}
                    </motion.p>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

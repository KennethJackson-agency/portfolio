"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
    motion,
    useMotionValue,
    useMotionTemplate,
    animate,
} from "framer-motion";
import arrowRightIcon from "../../../app/icon/arrow-right.svg";
import AnimatedCharacterText from "@/component/animations/AnimatedCharacterText";
import AnimatedLines from "@/component/animations/AnimatedLines";

export default function FooterClient({ abouts }) {
    const navItems = [
        { label: "About", id: "about" },
        { label: "Work", id: "work" },
        { label: "Service", id: "service" },
    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    // 🌈 Setup aurora animation
    const COLORS_TOP = [
        "#FFE2E2",
        "#FFD6A8",
        "#FEF3C6",
        "#FEF9C2",
        "#ECFCCA",
        "#DCFCE7",
        "#D0FAE5",
        "#CBFBF1",
        "#CEFAFE",
        "#DBEAFE",
        "#E0E7FF",
        "#FAE8FF",
        "#FCE7F3",
    ];
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #fff 50%, ${color})`;

    return (
        <motion.div
            className="relative overflow-hidden text-zinc-900"
            style={{ backgroundImage }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* 🔥 Footer content */}
            <div className="relative z-10 flex flex-col items-center gap-5 px-5 md:px-0 mt-72 mb-40">
                <motion.nav
                    variants={containerVariant}
                    className="flex flex-col xs:flex-row items-center gap-5 sm:gap-10 font-medium whitespace-nowrap"
                >
                    {navItems.map((item, i) => (
                        <motion.button
                            variants={itemVariant}
                            key={i}
                            onClick={() => scrollToSection(item.id)}
                            className="group flex items-center gap-2 text-zinc-900 hover:text-zinc-300 transition-colors cursor-pointer"
                        >
                            <span>{item.label}</span>
                            <Image
                                src={arrowRightIcon}
                                alt={`${item.label} arrow`}
                                width={20}
                                height={20}
                                className="group-hover:ml-2 duration-300 w-5 h-5"
                            />
                        </motion.button>
                    ))}
                </motion.nav>

                <AnimatedCharacterText
                    className="text-zinc-900 text-xl font-semibold text-center"
                    text="Still scrolling? That’s a sign."
                />
                <AnimatedLines
                    text="Forget cookie-cutter solutions. Each project is designed
                    with purpose—original, intentional, and made to stand out in
                    a noisy digital world."
                    className="text-zinc-500 w-full sm:w-[400px] text-center"
                />
                <motion.div
                    className="flex items-center gap-6 mt-10"
                    variants={containerVariant}
                >
                    {abouts?.flatMap((about) =>
                        about.fields.socialMedia.map((socmed, j) => (
                            <motion.div
                                key={`${about.sys.id}-${j}`}
                                variants={itemVariant}
                            >
                                <Link
                                    href={socmed.fields.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <Image
                                        src={`https:${socmed.fields.icon.fields.file.url}`}
                                        alt={
                                            socmed.fields.name ||
                                            "social media icon"
                                        }
                                        width={24}
                                        height={24}
                                        className="w-[24px] h-[24px]"
                                    />
                                </Link>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

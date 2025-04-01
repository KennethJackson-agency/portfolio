"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import arrowRightIcon from "../../../app/icon/arrow-right.svg";

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

    // Variants for stagger animation
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-col items-center gap-5 px-5 md:px-0 mt-72 mb-40 z-10">
                {/* Navigation Links with animation */}
                <motion.nav
                    variants={containerVariant}
                    className="flex flex-col xs:flex-row items-center gap-5 sm:gap-10 font-medium whitespace-nowrap"
                >
                    {navItems.map((item, i) => (
                        <motion.button
                            variants={itemVariant}
                            key={i}
                            onClick={() => scrollToSection(item.id)}
                            className="group flex items-center gap-2 text-zinc-900 hover:text-zinc-600 transition-colors"
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

                <motion.p
                    className="text-zinc-800 text-xl font-semibold text-center"
                    variants={itemVariant}
                >
                    Still scrolling? That’s a sign.
                </motion.p>

                <motion.p
                    className="text-zinc-500 w-full sm:w-[400px] text-center"
                    variants={itemVariant}
                >
                    Forget cookie-cutter solutions. Each project is designed
                    with purpose—original, intentional, and made to stand out in
                    a noisy digital world.
                </motion.p>

                {/* Social Media Icons with animation */}
                <motion.div
                    className="flex items-center gap-6 mt-10"
                    variants={containerVariant}
                >
                    {abouts?.flatMap((about) =>
                        about.fields.socialMedia.map((socmed, j) => (
                            <motion.div key={`${about.sys.id}-${j}`} variants={itemVariant}>
                                <Link
                                    href={socmed.fields.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <Image
                                        src={`https:${socmed.fields.icon.fields.file.url}`}
                                        alt={socmed.fields.name || "social media icon"}
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

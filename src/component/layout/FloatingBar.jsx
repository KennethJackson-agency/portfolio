"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/gtagEvents";

const navItems = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Service", id: "service" },
    { label: "Contact", href: "/contact" },
];

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

function FloatingBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    const itemRefs = useRef({});

    // Scroll detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        navItems.forEach(({ id }) => {
            if (id) {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div>
            <Image
                src="/SimpleBlack.svg"
                alt="logo"
                width={32}
                height={32}
                priority
                className="block sm:hidden absolute top-6 left-6"
            />
            <nav
                className="hidden fixed left-1/2 top-10 -translate-x-1/2 sm:flex items-center gap-6 font-medium text-sm text-white bg-zinc-900 rounded-2xl px-6 py-2.5 w-max drop-shadow-lg z-50 origin-center"
            >
                <div className="relative flex gap-6">
                    {navItems.map(({ label, id, href }) => {
                        const isActive = active === id;

                        return href ? (
                            <Link
                                key={label}
                                href={href}
                                onClick={() => {
                                    trackEvent({
                                        action: `click_navigation_' + ${label}`,
                                        category: 'Navigation',
                                        label: 'Floating Bar',
                                    });
                                }}
                                className="relative z-10 px-2 py-1 cursor-pointer"
                            >
                                {label}
                            </Link>
                        ) : (
                            <span
                                key={label}
                                ref={(el) => (itemRefs.current[id] = el)}
                                onClick={() => handleClick(id)}
                                className="relative z-10 px-2 py-1 cursor-pointer"
                            >
                                {label}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-slider"
                                        className="absolute inset-0 rounded-lg bg-blue-500 z-[-1]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </span>
                        );
                    })}
                </div>
            </nav>
            {/* Mobile Hamburger */}
            <div className="sm:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-zinc-900 rounded-2xl p-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 stroke-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile Dropdown */}
            <nav
                className={`sm:hidden fixed top-20 right-6 bg-zinc-900 text-white rounded-xl py-4 px-6 text-sm font-medium drop-shadow-lg z-40 transform transition-all duration-300 ease-in-out ${isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-end space-y-3">
                    {navItems.map((item, i) =>
                        item.href ? (
                            <Link
                                key={i}
                                href={item.href}
                                className="text-right"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <button
                                key={i}
                                onClick={() => {
                                    scrollToSection(item.id);
                                    setIsOpen(false);
                                }}
                            >
                                <span>{item.label}</span>
                            </button>
                        )
                    )}

                </div>
            </nav>
        </div>
    );
}

export default FloatingBar;

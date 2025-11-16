"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

function FloatingBar({ navItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    const itemRefs = useRef({});
    const mobileNavRef = useRef(null);
    const desktopNavRef = useRef(null);

    // Scroll detection highlights active nav item
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
    }, [navItems]);

    // Animate mobile nav open/close with fade + scale
    useEffect(() => {
        const el = mobileNavRef.current;
        if (!el) return;

        if (isOpen) {
            gsap.set(el, {
                scale: 0.8,
                opacity: 0,
                pointerEvents: "none",
                transformOrigin: "top right",
            });
            gsap.to(el, {
                scale: 1,
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            gsap.to(el, {
                scale: 0.8,
                opacity: 0,
                pointerEvents: "none",
                duration: 0.3,
                ease: "power3.in",
            });
        }
    }, [isOpen]);

    // Animate desktop nav fade-in + slide up on initial render
    useEffect(() => {
        const nav = desktopNavRef.current;
        if (!nav) return;

        gsap.fromTo(
            nav,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    const handleClick = (id) => {
        scrollToSection(id);
        setIsOpen(false);
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
                ref={desktopNavRef}
                className="hidden fixed left-1/2 top-10 -translate-x-1/2 sm:flex items-center gap-6 text-base bg-white rounded-2xl px-6 py-2.5 w-max drop-shadow-lg z-50 origin-center"
            >
                <div className="relative flex gap-6">
                    {navItems.map(({ label, id, href }) => {
                        const isActive = active === id;
                        return href ? (
                            <Link
                                key={label}
                                href={href}
                                onClick={() => setIsOpen(false)}
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
                                    <span
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "12px",
                                            backgroundColor: "#3b82f6",
                                            zIndex: -1,
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
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="bg-zinc-900 rounded-2xl p-2"
                    aria-label="Toggle mobile menu"
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
                ref={mobileNavRef}
                className="sm:hidden fixed top-20 right-6 bg-zinc-900 text-white rounded-xl py-4 px-6 text-sm font-medium drop-shadow-lg z-40 transform origin-top-right"
                style={{ width: "200px" }}
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
                                    handleClick(item.id);
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

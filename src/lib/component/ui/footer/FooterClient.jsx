"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WaveText from "@/lib/component/animation/WaveText";
import { trackEvent } from "@/lib/global/ga/gtagEvents";
import { COLORS_TOP } from "@/config/config";

gsap.registerPlugin(ScrollTrigger);

export default function FooterClient({ abouts }) {
    const containerRef = useRef(null);

    const navItems = [
        { label: "About", id: "about" },
        { label: "Work", id: "work" },
        { label: "Service", id: "service" },
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        COLORS_TOP.forEach((color, index) => {
            tl.to(
                containerRef.current,
                {
                    backgroundImage: `radial-gradient(125% 125% at 50% 0%, #fff 50%, ${color})`,
                    duration: 10 / COLORS_TOP.length,
                    ease: "power1.inOut",
                },
                index * (10 / COLORS_TOP.length)
            );
        });

        return () => {
            tl.kill();
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden text-zinc-900"
            style={{
                backgroundImage: `radial-gradient(125% 125% at 50% 0%, #fff 50%, ${COLORS_TOP[0]})`,
            }}
        >
            <div className="relative z-10 flex flex-col items-center gap-5 px-5 md:px-0 mb-40">
                <nav className="flex flex-col xs:flex-row items-center gap-5 sm:gap-10 font-medium whitespace-nowrap">
                    {navItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                trackEvent({
                                    action: `click_navigation_footer_${item.label}`,
                                    category: "Footer",
                                    label: item.label,
                                });
                                scrollToSection(item.id);
                            }}
                            className="group flex items-center gap-2 text-zinc-900 hover:text-zinc-300 transition-colors cursor-pointer"
                        >
                            <span>{item.label}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 group-hover:ml-2 duration-300 w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    ))}
                </nav>

                <WaveText
                    className="text-zinc-900 text-xl font-semibold text-center"
                    text="Still scrolling? That’s a sign."
                />
                <WaveText
                    text="Forget cookie-cutter solutions. Each project is designed with purpose—original, intentional, and made to stand out in a noisy digital world."
                    className="text-zinc-500 w-[315px] sm:w-[400px] text-center"
                />
                <div className="flex items-center gap-6 mt-10">
                    {abouts?.flatMap((about) =>
                        about.fields.socialMedia.map((socmed, j) => (
                            <div
                                key={`${about.sys.id}-${j}`}
                                onClick={() => {
                                    trackEvent({
                                        action: `click_social_media_footer_${socmed.fields.name}`,
                                        category: "Footer",
                                        label: socmed.fields.name,
                                    });
                                    scrollToSection(socmed.fields.name);
                                }}
                            >
                                <Link
                                    href={socmed.fields.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <Image
                                        src={`https:${socmed.fields.bwIcon.fields.file.url}`}
                                        alt={
                                            socmed.fields.name ||
                                            "social media icon"
                                        }
                                        width={24}
                                        height={24}
                                        className="w-[24px] h-[24px]"
                                    />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

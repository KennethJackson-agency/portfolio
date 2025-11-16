"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/* Local Client Components */
import CTAButton from "./client/CtaButton";

/* Internal Animation Components */
import WaveText from "@/lib/component/animation/WaveText";

const COLORS = [
    "rgba(255, 99, 71, 0.1)", // tomato, lebih transparan
    "rgba(60, 179, 113, 0.1)", // mediumseagreen
    "rgba(65, 105, 225, 0.1)", // royalblue
    "rgba(238, 130, 238, 0.1)", // violet
    "rgba(255, 215, 0, 0.1)", // gold
    "rgba(70, 130, 180, 0.1)", // steelblue
];

const NUM_BOXES = 30;

export default function HeaderWrapper() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const boxes = container.querySelectorAll(".random-box");

        // Set initial scale dan shadow abu lembut
        gsap.set(boxes, {
            scale: 0,
            boxShadow: "0 0 8px 3px rgba(0, 0, 0, 0.1)",
        });

        // Animasi scale masuk dengan stagger
        gsap.to(boxes, {
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.05,
        });

        boxes.forEach((box) => {
            box.addEventListener("mouseenter", () => {
                const color = COLORS[Math.floor(Math.random() * COLORS.length)];
                gsap.to(box, {
                    boxShadow: `0 0 15px 7px ${color}`,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });

            box.addEventListener("mouseleave", () => {
                gsap.to(box, {
                    boxShadow: "0 0 8px 3px rgba(0, 0, 0, 0.05)",
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        });

        return () => {
            boxes.forEach((box) => {
                box.removeEventListener("mouseenter", () => {});
                box.removeEventListener("mouseleave", () => {});
            });
        };
    }, []);

    const boxes = [];
    for (let i = 0; i < NUM_BOXES; i++) {
        const size = Math.floor(Math.random() * 40) + 70; // size diperbesar: 70-110 px
        const top = Math.random() * 100; // persen untuk top
        const left = Math.random() * 100; // persen untuk left

        boxes.push(
            <div
                key={i}
                className="random-box absolute rounded-sm"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // putih semi transparan
                    pointerEvents: "auto",
                    cursor: "pointer",
                    transition: "box-shadow 0.4s ease",
                    transformOrigin: "center center",
                }}
            />
        );
    }

    return (
        <section className="relative">
            <div
                ref={containerRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 0 }}
            >
                {boxes}
            </div>

            <div className="space-y-10 sm:space-y-5 md:space-y-8 w-full sm:w-[550px] md:w-[750px] px-3 mx-auto text-center mt-[200px] md:mt-[250px] text-zinc-900 relative z-10">
                <div className="space-y-3 sm:space-y-5 md:space-y-8">
                    <div className="space-y-1 md:space-y-8 items-center">
                        <WaveText
                            as="h1"
                            text="Amplify Your Impact Transform Your Brand Today"
                            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-snug"
                        />
                        <WaveText
                            as="h2"
                            text="
                We're the powerhouse behind your digital presence 🚀, specializing in seamless IT integration 💻,
                vibrant video production 🎬, irresistible copy ✍️,
                and impactful digital marketing 📈. Propel your
                brand forward.✨"
                            className="text-zinc-500"
                        />
                    </div>
                </div>

                <div className="tooltip-wrapper relative inline-block mx-auto duration-300">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
}

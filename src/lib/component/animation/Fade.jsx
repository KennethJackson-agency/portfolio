"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
};

function Fade({
    children,
    direction = "up",
    duration = 0.8,
    stagger = 0,
    delay = 0,
    className = "",
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const targets =
            stagger > 0
                ? Array.from(containerRef.current.children)
                : [containerRef.current];

        const offset = directionOffsets[direction] || directionOffsets.up;

        gsap.set(targets, { opacity: 0, x: offset.x, y: offset.y });

        gsap.to(targets, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: "power3.out",
            stagger,
            delay,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

export default Fade;

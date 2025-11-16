"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const directionOffsets = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
};

function Fade({
    children,
    direction = "up",
    duration = 1,
    stagger = 0,
    delay = 0,
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const offset = directionOffsets[direction] || directionOffsets.up;

        gsap.set(containerRef.current.children, {
            opacity: 0,
            x: offset.x,
            y: offset.y,
        });

        gsap.to(containerRef.current.children, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: duration,
            ease: "power3.out",
            stagger: stagger,
            delay: delay,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, [direction, duration, stagger]);

    return <div ref={containerRef}>{children}</div>;
}

export default Fade;

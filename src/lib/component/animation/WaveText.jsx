"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WaveText({ text, as = "h1", className = "", totalDuration = 2 }) {
    const Tag = as;
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const words = containerRef.current.querySelectorAll(".wave-word");
        const count = words.length;
        if (count === 0) return;

        const durationPerWord = 0.6;
        const stagger = (totalDuration - durationPerWord) / (count - 1);

        gsap.set(words, { y: 40, opacity: 0 });

        gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: durationPerWord,
            stagger: stagger,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, [text, totalDuration]);

    return (
        <Tag ref={containerRef} className={`wave-text ${className}`}>
            {text.split(" ").map((word, i) => (
                <span key={i} className="wave-word inline-block mx-0.5">
                    {word}
                </span>
            ))}
        </Tag>
    );
}

export default WaveText;

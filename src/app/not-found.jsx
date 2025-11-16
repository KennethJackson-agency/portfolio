"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function NotFound() {
    const [clickCount, setClickCount] = useState(0);
    const headingRef = useRef(null);
    const subtextRef = useRef(null);
    const paraRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Enable drag with GSAP Draggable (optional)
        // Or basic transform on mouse events with GSAP
        // For simplicity, let's implement basic hover scale with GSAP on mount
        const els = [
            headingRef.current,
            subtextRef.current,
            paraRef.current,
            buttonRef.current,
        ];
        els.forEach((el) => {
            if (!el) return;
            gsap.set(el, { transformOrigin: "center center" });
            el.addEventListener("mouseenter", () =>
                gsap.to(el, { scale: 1.1, duration: 0.2 })
            );
            el.addEventListener("mouseleave", () =>
                gsap.to(el, { scale: 1, duration: 0.2 })
            );
            el.addEventListener("mousedown", () =>
                gsap.to(el, { scale: 0.95, duration: 0.1 })
            );
            el.addEventListener("mouseup", () =>
                gsap.to(el, { scale: 1.1, duration: 0.1 })
            );
        });

        return () => {
            els.forEach((el) => {
                if (!el) return;
                el.removeEventListener("mouseenter", null);
                el.removeEventListener("mouseleave", null);
                el.removeEventListener("mousedown", null);
                el.removeEventListener("mouseup", null);
            });
        };
    }, []);

    const handleClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 3 && headingRef.current) {
            gsap.to(headingRef.current, {
                y: window.innerHeight,
                rotation: 720,
                duration: 1,
                ease: "bounce.out",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
            {/* Heading */}
            <h1
                ref={headingRef}
                className="text-6xl font-bold cursor-pointer select-none"
                onClick={handleClick}
            >
                404.
            </h1>

            {/* Subtext */}
            <p
                ref={subtextRef}
                className="text-pink-500 font-semibold mt-2 cursor-pointer select-none"
            >
                This ain't it, chief.
            </p>

            {/* Paragraph */}
            <p
                ref={paraRef}
                className="text-zinc-500 mt-2 max-w-md cursor-pointer select-none"
            >
                The link you clicked is either outdated, broken, or never
                existed.
            </p>

            {/* Button */}
            <div ref={buttonRef} className="mt-6 cursor-pointer">
                <a
                    href="/"
                    className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition select-none"
                >
                    Get me outta here 🚪
                </a>
            </div>
        </div>
    );
}

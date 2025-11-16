"use client";

/* React Hooks */
import { useEffect, useState, useRef } from "react";

/* Intersection Observer Hook */
import { useInView } from "react-intersection-observer";

/* Animation Library */
import gsap from "gsap";

export default function TestimonySlider({ testimonies }) {
    if (!testimonies?.length) return null;

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const tl = useRef(null);

    // Refs for decorative texts
    const deco1 = useRef(null);
    const deco2 = useRef(null);
    const deco3 = useRef(null);

    // Auto increment testimonial index when in view
    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonies.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [inView, testimonies.length]);

    // Animate testimonial fade + slide on active index change
    useEffect(() => {
        if (!containerRef.current) return;

        if (tl.current) {
            tl.current.kill();
            tl.current = null;
        }

        tl.current = gsap.timeline();

        tl.current.fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );

        return () => {
            if (tl.current) {
                tl.current.kill();
                tl.current = null;
            }
        };
    }, [index]);

    // Animate decorative texts fade + scale + slight rotate with stagger on appear
    useEffect(() => {
        if (!inView) return;

        // Infinite pulsate + rotate animation for decorative texts
        const decoTimeline = gsap.timeline({ repeat: -1, yoyo: true });

        decoTimeline.fromTo(
            deco1.current,
            { scale: 0.9, rotation: -5, transformOrigin: "center" },
            { scale: 1.05, rotation: 5, duration: 0.5, ease: "power1.inOut" }
        );
        decoTimeline.fromTo(
            deco2.current,
            { scale: 1.05, rotation: 5, transformOrigin: "center" },
            { scale: 0.9, rotation: -5, duration: 0.8, ease: "power1.inOut" },
            "<0.6"
        );
        decoTimeline.fromTo(
            deco3.current,
            { scale: 0.9, rotation: -5, transformOrigin: "center" },
            { scale: 1.05, rotation: 5, duration: 0.6, ease: "power1.inOut" },
            "<0.3"
        );
    }, [inView]);

    const current = testimonies[index];

    return (
        <div
            ref={ref}
            className="flex flex-col items-center gap-16 px-5 min-h-[200px]"
        >
            {/* Decorative Texts with animation refs */}
            <p
                ref={deco1}
                className="hidden lg:block absolute -top-20 -left-32 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-t-xl rounded-bl-xl p-2.5"
            >
                High-key blushing rn 😳❤️
            </p>

            <p
                ref={deco2}
                className="hidden lg:block absolute -top-16 -right-44 text-xs bg-zinc-900 text-white rounded-t-xl rounded-br-xl p-2.5 w-[200px]"
            >
                Best kind of feedback? Honest &amp; hyped. Thank you!
            </p>

            <p
                ref={deco3}
                className="hidden lg:block absolute -bottom-10 -left-0 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-tl-xl rounded-b-xl p-2.5"
            >
                Fast, smart, creative... you just described yourself 👀
            </p>

            {/* Testimonial fade + slide */}
            <div ref={containerRef} className="text-center max-w-xl">
                <p className="text-lg font-semibold italic text-zinc-800">
                    "{current.fields.testimony}"
                </p>
                <p className="text-md text-zinc-500 mt-2">
                    — {current.fields.name}
                </p>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";

const texts = [
    "Web Development",
    "Web Design",
    "IT Networking",
    "Photo & Video",
];

export default function HeroCard() {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setAnimating(false);
            }, 200);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-primary rounded-2xl p-6 sm:p-8 w-full max-w-full lg:max-w-md xl:max-w-lg h-max md:mt-10 mx-auto md:mx-0 shrink-0">
            <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p className="font-mono uppercase tracking-widest text-xs text-zinc-400">
                    Now Building
                </p>
            </div>

            <div className="mb-16">
                <h2
                    style={{
                        transform: animating
                            ? "translateY(-12px)"
                            : "translateY(0px)",
                        opacity: animating ? 0 : 1,
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                    }}
                    className="text-4xl font-medium text-white leading-tight"
                >
                    {texts[index]}
                </h2>
                <h2 className="text-3xl font-normal italic text-zinc-500 leading-tight">
                    for bold brands.
                </h2>
            </div>

            <hr className="border-zinc-800 mb-6" />

            <div className="flex gap-12">
                <div>
                    <p className="text-white font-semibold text-lg">Jakarta</p>
                    <p className="font-mono uppercase tracking-widest text-xs text-zinc-500 mt-1">
                        Region
                    </p>
                </div>
                <div>
                    <p className="text-white font-semibold text-lg">
                        Indonesia
                    </p>
                    <p className="font-mono uppercase tracking-widest text-xs text-zinc-500 mt-1">
                        Country
                    </p>
                </div>
            </div>
        </div>
    );
}

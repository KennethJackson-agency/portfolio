"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import MagazineProjectCard from "./MagazineProjectCard";

// Width pairs per row — each pair sums to ~97% leaving ~3% for the gap
const WIDTH_PAIRS = [
    [40, 57],
    [55, 42],
    [46, 51],
    [62, 35],
    [48, 49],
];

function getDesktopWidth(index) {
    const pairIdx = Math.floor(index / 2) % WIDTH_PAIRS.length;
    const pos = index % 2;
    return `${WIDTH_PAIRS[pairIdx][pos]}%`;
}

export default function FilterableProjects({ projects = [] }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const gridRef = useRef(null);

    const categories = useMemo(() => {
        const cats = new Set();
        projects.forEach((p) => {
            if (p.fields?.category) cats.add(p.fields.category);
        });
        return ["All", ...Array.from(cats)];
    }, [projects]);

    const filtered = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter((p) => p.fields?.category === activeCategory);
    }, [projects, activeCategory]);

    // Animate grid re-render on filter change
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;
        gsap.fromTo(
            grid.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
                stagger: 0.07,
            }
        );
    }, [filtered]);

    return (
        <div className="px-5 md:px-16 lg:px-24 pt-24 pb-20 space-y-14">
            {/* Page Header */}
            <div className="space-y-6">
                {/* Meta line */}
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 font-mono">
                    <span className="inline-block w-8 h-px bg-zinc-400" />
                    Projects · KJ Agency · 2024 – 2025
                </p>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                    <span className="text-primary font-semibold">
                        Selected{" "}
                    </span>
                    <em className="italic text-zinc-500">work,</em>
                    <br />
                    <span className="text-primary font-semibold">not the </span>
                    <em className="italic text-zinc-500">whole portfolio.</em>
                </h1>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-y-2">
                {categories.map((cat, i) => (
                    <div key={cat} className="flex items-center">
                        <button
                            onClick={() => setActiveCategory(cat)}
                            className={`text-sm md:text-base font-medium px-3 py-1 transition-colors duration-200 cursor-pointer ${
                                activeCategory === cat
                                    ? "text-primary underline underline-offset-4 decoration-2"
                                    : "text-zinc-400 hover:text-primary"
                            }`}
                        >
                            {cat}
                        </button>
                        {i < categories.length - 1 && (
                            <span className="text-zinc-300 text-[10px] mx-0.5 select-none">
                                ◆
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Magazine Grid */}
            {filtered.length === 0 ? (
                <p className="text-zinc-400 py-20 text-center">
                    No projects found.
                </p>
            ) : (
                <div
                    ref={gridRef}
                    className="flex flex-wrap gap-x-[3%] gap-y-14"
                >
                    {filtered.map((project, i) => (
                        <MagazineProjectCard
                            key={project.sys.id}
                            project={project}
                            desktopWidth={getDesktopWidth(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

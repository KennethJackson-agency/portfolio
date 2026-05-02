"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
    "All",
    "Web Development",
    "Photo & Video",
    "Web Design",
    "IT Networking",
];

function Thumbnail({ asset, active }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;
        if (active) {
            videoRef.current.play().catch(() => {});
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [active]);

    if (!asset?.fields?.file) return null;

    const url = `https:${asset.fields.file.url}`;
    const isVideo = asset.fields.file.contentType?.startsWith("video/");

    return (
        <div
            className={`absolute right-16 top-1/2 -translate-y-1/2 z-30 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 ease-out pointer-events-none ${
                active
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
            }`}
        >
            {isVideo ? (
                <video
                    ref={videoRef}
                    src={url}
                    className="h-44 md:h-56 w-auto object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            ) : (
                <Image
                    src={url}
                    width={320}
                    height={224}
                    alt=""
                    className="h-44 md:h-56 w-auto object-cover"
                />
            )}
        </div>
    );
}

export default function ProjectIndexClient({ projects }) {
    const [active, setActive] = useState("All");
    const [hoveredId, setHoveredId] = useState(null);

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.fields.category === active);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between px-5 md:px-10 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-primary">
                    Selected{" "}
                    <em className="font-normal italic text-zinc-500">work,</em>
                    <br />
                    by the index.
                </h2>

                <div className="flex flex-wrap justify-start md:justify-end gap-2 w-full md:w-1/2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                active === cat
                                    ? "bg-primary text-white"
                                    : "text-zinc-500 hover:text-primary"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* List */}
            <div className="border-t border-zinc-200">
                {filtered.length === 0 && (
                    <p className="py-12 text-center text-zinc-400 text-sm">
                        No projects in this category yet.
                    </p>
                )}

                {filtered.map((project, index) => {
                    const isHovered = hoveredId === project.sys.id;
                    const thumbnail = project.fields.thumbnailAsset;

                    return (
                        <Link
                            key={project.sys.id}
                            href={`/projects/${project.fields.slug}`}
                            className="relative flex items-center justify-between py-8 px-5 md:px-10 border-b border-zinc-200 transition-colors overflow-visible"
                            onMouseEnter={() => setHoveredId(project.sys.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Left: number + name + category */}
                            <div
                                className={`flex items-center gap-6 min-w-0 transition-transform duration-300 ease-out ${
                                    isHovered
                                        ? "translate-x-3"
                                        : "translate-x-0"
                                }`}
                            >
                                <span className="font-mono text-xs text-zinc-400 shrink-0 w-5">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex items-baseline gap-2 min-w-0 flex-wrap">
                                    <span className="text-base sm:text-2xl md:text-3xl font-medium text-primary leading-tight">
                                        {project.fields.projectName}
                                    </span>
                                    <span className="text-zinc-500 hidden sm:inline">
                                        —
                                    </span>
                                    <span className="text-zinc-500 italic text-base sm:text-2xl md:text-3xl hidden sm:inline truncate">
                                        {project.fields.category?.toLowerCase()}
                                    </span>
                                </div>
                            </div>

                            <Thumbnail asset={thumbnail} active={isHovered} />

                            {/* Right: category + arrow */}
                            <div className="flex items-center gap-4 shrink-0 ml-4">
                                <div className="hidden md:flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                    <span className="font-mono text-xs text-zinc-400">
                                        {project.fields.category ||
                                            "uncategorized"}
                                    </span>
                                </div>

                                <span
                                    className={`text-primary text-lg transition-transform duration-200 ${
                                        isHovered
                                            ? "translate-x-0.5 -translate-y-0.5"
                                            : ""
                                    }`}
                                >
                                    ↗
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

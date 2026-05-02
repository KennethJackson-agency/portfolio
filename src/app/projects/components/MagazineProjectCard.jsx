"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { formatMonthYear } from "@/lib/common/helper/formatMonthYear";
import { trackEvent } from "@/lib/global/ga/gtagEvents";

export default function MagazineProjectCard({ project, desktopWidth }) {
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState("100%");

    useEffect(() => {
        const update = () => {
            setCardWidth(window.innerWidth >= 640 ? desktopWidth : "100%");
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [desktopWidth]);

    if (!project?.fields) return null;
    const { projectName, slug, thumbnailAsset, frameColor, tag, date, projectDescription, category } =
        project.fields;
    if (!thumbnailAsset) return null;

    const url = `https:${thumbnailAsset.fields.file.url}`;
    const contentType = thumbnailAsset.fields.file.contentType;
    const isImage = contentType.startsWith("image/");
    const isVideo = contentType.startsWith("video/");
    const color = frameColor || "#ec4899";

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const isLeft = x < rect.width / 2;
        // Swing from top-right anchor: left half → swing left, right half → swing right
        gsap.to(el, {
            rotate: isLeft ? -2.5 : 2.5,
            x: isLeft ? -6 : 6,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "top right",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotate: 0,
            x: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.45)",
            transformOrigin: "top right",
        });
    };

    return (
        <div
            ref={cardRef}
            style={{ width: cardWidth }}
            className="shrink-0 will-change-transform h-max"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={`/projects/${slug}`}
                onClick={() =>
                    trackEvent({
                        action: `click_project_${projectName.replace(/\s+/g, "_").toLowerCase()}`,
                        category: "Project",
                        label: projectName,
                    })
                }
                className="block bg-white rounded-3xl hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300 cursor-pointer relative overflow-visible"
            >
                {/* Pin dot — anchor point at top-right */}
                <span className="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-zinc-900 shadow-sm" />

                {/* Thumbnail inside card */}
                <div className="p-3 pb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                        {isImage && (
                            <Image
                                src={url}
                                fill
                                alt={projectName}
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                            />
                        )}
                        {isVideo && (
                            <video
                                src={url}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="none"
                            />
                        )}
                    </div>
                </div>

                {/* Info section */}
                <div className="p-5 pt-5 space-y-1.5">
                    {/* Category + Date row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-xs text-zinc-500">
                                {category || tag || "Project"}
                            </span>
                        </div>
                        <span className="text-xs uppercase tracking-widest text-zinc-400">
                            {formatMonthYear(date)}
                        </span>
                    </div>

                    {/* Project name */}
                    <p className="text-lg sm:text-xl font-bold text-primary leading-tight">
                        {projectName}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                        {projectDescription}
                    </p>
                </div>
            </Link>
        </div>
    );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { formatMonthYear } from "@/lib/common/helper/formatMonthYear";
import { trackEvent } from "@/lib/global/ga/gtagEvents";

const ACCENT_COLORS = [
    "#7C3AED", "#3B82F6", "#10B981", "#F97316",
    "#EC4899", "#06B6D4", "#8B5CF6", "#EF4444",
    "#14B8A6", "#F59E0B", "#6366F1", "#84CC16",
];

// Varied aspect ratios — landscape/square only to avoid cards being too tall
const ASPECT_CLASSES = [
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[16/9]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[4/3]",
    "aspect-[16/9]",
    "aspect-square",
    "aspect-[4/3]",
];

function getReadingMinutes(content) {
    if (!content) return null;
    return Math.ceil(content.trim().split(/\s+/).length / 200);
}

export default function MagazineBlogCard({ blog, index = 0 }) {
    const cardRef = useRef(null);

    if (!blog?.fields) return null;
    const { title, slug, description, thumbnail, tag, author, content, type } = blog.fields;
    const updatedAt = blog.fields.updatedAt || blog.sys?.updatedAt;

    const thumbnailUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : null;
    const authorName = author?.fields?.name || "KJ Agency";
    const authorInitial = authorName.charAt(0).toUpperCase();
    const tagLabel = type || (Array.isArray(tag) ? tag[0] : tag) || null;
    const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length];
    const minutes = getReadingMinutes(content);
    const aspectClass = ASPECT_CLASSES[index % ASPECT_CLASSES.length];

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { y: -6, duration: 0.35, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
    };

    return (
        <div
            ref={cardRef}
            className="will-change-transform cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={`/blogs/${slug}`}
                onClick={() =>
                    trackEvent({
                        action: `click_blog_${title.replace(/\s+/g, "_").toLowerCase()}`,
                        category: "Blog",
                        label: title,
                    })
                }
                className="block group"
            >
                {/* Thumbnail with varied aspect ratio */}
                <div
                    className={`relative rounded-2xl overflow-hidden mb-4 ${aspectClass}`}
                    style={{ backgroundColor: accentColor }}
                >
                    {thumbnailUrl ? (
                        <Image
                            src={thumbnailUrl}
                            fill
                            alt={title}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        // Fallback: watermark text on solid color
                        <div className="absolute inset-0 flex items-center justify-center px-8">
                            <p className="text-white/20 text-center text-xs uppercase tracking-[0.15em] leading-loose line-clamp-4 select-none">
                                {title}
                            </p>
                        </div>
                    )}

                    {/* Type / tag badge */}
                    {tagLabel && (
                        <span className="absolute top-3 left-3 z-10 text-white text-[10px] uppercase tracking-wider font-semibold bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            {tagLabel}
                        </span>
                    )}

                    {/* Reading time badge */}
                    {minutes && (
                        <span className="absolute top-3 right-3 z-10 text-white text-[10px] font-semibold bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            {minutes} MIN
                        </span>
                    )}
                </div>

                {/* Text — on page background */}
                <div className="space-y-1.5">
                    <h3 className="font-semibold text-base sm:text-lg leading-snug line-clamp-2 text-primary underline-offset-2">
                        {title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                    <div className="flex items-center gap-2.5 pt-1 flex-wrap">
                        <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                            style={{ backgroundColor: accentColor }}
                        >
                            {authorInitial}
                        </span>
                        <span className="text-xs text-zinc-400" style={{ fontFamily: "var(--font-jetbrains)" }}>{authorName}</span>
                        {updatedAt && (
                            <>
                                <span className="text-zinc-300">·</span>
                                <span className="text-xs text-zinc-400" style={{ fontFamily: "var(--font-jetbrains)" }}>{formatMonthYear(updatedAt)}</span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

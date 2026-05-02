"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import Header from "./Header";
import Blogs from "./Blogs";

export default function FilterableBlogs({ blogs = [] }) {
    const [activeType, setActiveType] = useState("All");
    const [searchText, setSearchText] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const inputRef = useRef(null);

    // Collect unique types from fields.type
    const allTypes = useMemo(() => {
        const set = new Set();
        blogs.forEach((b) => {
            if (b.fields?.type) set.add(b.fields.type);
        });
        return ["All", ...Array.from(set)];
    }, [blogs]);

    const filtered = useMemo(() => {
        if (activeType === "All") return blogs;
        return blogs.filter((b) => b.fields?.type === activeType);
    }, [blogs, activeType]);

    const newestArticles = useMemo(() =>
        blogs
            .slice()
            .sort((a, b) => new Date(b.fields.updatedAt) - new Date(a.fields.updatedAt))
            .slice(0, 10),
        [blogs]
    );

    const searchedArticles = useMemo(() =>
        searchText.trim()
            ? blogs.filter((b) =>
                  b.fields.title.toLowerCase().includes(searchText.trim().toLowerCase())
              )
            : [],
        [blogs, searchText]
    );

    const listToShow = searchText.trim() ? searchedArticles : newestArticles;

    // Animate popup open
    useEffect(() => {
        if (showPopup && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, y: -12, scale: 0.97 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
            );
        }
    }, [showPopup]);

    const openPopup = () => {
        setShowPopup(true);
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    const closePopup = () => {
        if (!popupRef.current) {
            setShowPopup(false);
            setSearchText("");
            return;
        }
        gsap.to(popupRef.current, {
            opacity: 0,
            y: -8,
            scale: 0.97,
            duration: 0.2,
            ease: "power3.in",
            onComplete: () => {
                setShowPopup(false);
                setSearchText("");
            },
        });
    };

    useEffect(() => {
        const handler = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) closePopup();
        };
        if (showPopup) document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [showPopup]);

    return (
        <div className="px-5 md:px-10 pt-24 pb-20 space-y-12">
            {/* Header */}
            <Header />

            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
                {/* Type filter pills */}
                <div className="flex flex-wrap gap-2">
                    {allTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                activeType === type
                                    ? "bg-zinc-900 text-white"
                                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800"
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Right: count + search */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-sm text-zinc-400">
                        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                    </span>
                    <button
                        onClick={openPopup}
                        className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-sm px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer"
                        aria-label="Search articles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        Search
                    </button>
                </div>
            </div>

            {/* Search popup */}
            {showPopup && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-24 px-4">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                    >
                        {/* Search input */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5 text-zinc-400 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search articles..."
                                className="flex-1 outline-none text-base bg-transparent"
                                onKeyDown={(e) => { if (e.key === "Escape") closePopup(); }}
                            />
                            {searchText && (
                                <button onClick={() => setSearchText("")} className="text-zinc-400 hover:text-zinc-600 transition cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                            <kbd className="hidden sm:inline-flex text-xs bg-zinc-100 text-zinc-400 px-2 py-1 rounded-md font-mono">esc</kbd>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-4">
                            {searchText.trim() && (
                                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-3 px-1">
                                    {searchedArticles.length} result{searchedArticles.length !== 1 ? "s" : ""} for &ldquo;{searchText}&rdquo;
                                </p>
                            )}
                            {!searchText.trim() && (
                                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-3 px-1">Recent articles</p>
                            )}

                            {listToShow.length === 0 ? (
                                <p className="text-zinc-400 text-center py-10">No articles found.</p>
                            ) : (
                                <div className="space-y-1">
                                    {listToShow.map((b) => (
                                        <a
                                            href={`/blogs/${b.fields.slug}`}
                                            key={b.sys.id}
                                            onClick={closePopup}
                                            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition"
                                        >
                                            {b.fields.thumbnail?.fields?.file?.url && (
                                                <img
                                                    src={"https:" + b.fields.thumbnail.fields.file.url}
                                                    alt={b.fields.title}
                                                    className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                                                />
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-zinc-900 group-hover:text-blue-600 line-clamp-1 text-sm transition-colors duration-150">
                                                    {b.fields.title}
                                                </p>
                                                <p className="text-zinc-400 text-xs line-clamp-1 mt-0.5">
                                                    {b.fields.description}
                                                </p>
                                            </div>
                                            {b.fields.type && (
                                                <span className="text-[10px] bg-zinc-100 text-zinc-500 px-2 py-1 rounded-full flex-shrink-0">
                                                    {b.fields.type}
                                                </span>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
                <p className="text-zinc-400 py-20 text-center">No articles found.</p>
            ) : (
                <Blogs blogs={filtered} />
            )}
        </div>
    );
}

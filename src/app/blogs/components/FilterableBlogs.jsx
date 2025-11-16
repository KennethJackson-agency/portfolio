"use client";

/* React Hooks */
import { useState, useRef, useEffect } from "react";

/* Animation Library */
import gsap from "gsap";

/* Local Components */
import Header from "./Header";
import Blogs from "./Blogs";


export default function FilterableBlogs({ blogs = [] }) {
    const [searchText, setSearchText] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const newestArticles = blogs
        .slice()
        .sort(
            (a, b) =>
                new Date(b.fields.updatedAt) - new Date(a.fields.updatedAt)
        )
        .slice(0, 10);

    const searchedArticles = blogs.filter((b) =>
        searchText.trim()
            ? b.fields.title
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase())
            : false
    );

    // Animate popup open & close with GSAP
    useEffect(() => {
        if (showPopup && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" }
            );
        }
    }, [showPopup]);

    const closePopup = () => {
        if (!popupRef.current) {
            setShowPopup(false);
            setSearchText("");
            return;
        }
        gsap.to(popupRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.2,
            ease: "power3.in",
            onComplete: () => {
                setShowPopup(false);
                setSearchText("");
            },
        });
    };

    // Close popup when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                closePopup();
            }
        }
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.add("no-scroll");
        }
        return () => {
            document.body.classList.add("no-scroll");
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <div className="space-y-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full px-5 md:px-20">
                <Header />

                {/* Search icon button */}
                <button
                    onClick={() => setShowPopup(true)}
                    className="hover:bg-zinc-100 flex items-center justify-center p-3 rounded-full transition cursor-pointer"
                    aria-label="Open search"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </div>

            {/* Popup modal */}
            {showPopup && (
                <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-5 p-5 relative max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {/* Search bar */}
                            <div className="flex items-center gap-2 w-full border border-zinc-200 rounded-lg p-3 focus-within:border-blue-500 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 stroke-zinc-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                <input
                                    autoFocus
                                    type="text"
                                    value={searchText}
                                    onChange={(e) =>
                                        setSearchText(e.target.value)
                                    }
                                    placeholder="Search articles..."
                                    className="w-full outline-none text-base"
                                    onKeyDown={(e) => {
                                        if (e.key === "Escape") closePopup();
                                    }}
                                />
                            </div>
                            {/* Close button */}
                            <button
                                className="text-zinc-400 hover:text-zinc-600 text-3xl cursor-pointer transition"
                                onClick={closePopup}
                                aria-label="Close search dialog"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Article list */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {(searchText.trim()
                                ? searchedArticles
                                : newestArticles
                            ).length === 0 ? (
                                <p className="text-zinc-400 text-center py-8">
                                    No articles found.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    <p>
                                        {searchText.trim()
                                            ? `${
                                                  searchedArticles.length
                                              } Result${
                                                  searchedArticles.length !== 1
                                                      ? "s"
                                                      : ""
                                              }`
                                            : ""}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {(searchText.trim()
                                            ? searchedArticles
                                            : newestArticles
                                        ).map((b) => (
                                            <a
                                                href={`/blogs/${b.fields.slug}`}
                                                key={b.sys.id}
                                                onClick={closePopup}
                                                className="group flex flex-row gap-4 justify-between items-start rounded-lg transition"
                                            >
                                                <div>
                                                    <div className="font-medium text-zinc-900 group-hover:text-blue-500 line-clamp-3 md:line-clamp-2 duration-200">
                                                        {b.fields.title}
                                                    </div>
                                                    <div className="text-zinc-500 text-sm line-clamp-4">
                                                        {b.fields.description}
                                                    </div>
                                                </div>
                                                <img
                                                    src={
                                                        "https:" +
                                                        b.fields.thumbnail
                                                            .fields.file.url
                                                    }
                                                    alt={b.fields.title}
                                                    className="w-16 md:w-32 h-16 md:h-20 object-cover rounded-md flex-shrink-0"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Blogs blogs={blogs} />
        </div>
    );
}

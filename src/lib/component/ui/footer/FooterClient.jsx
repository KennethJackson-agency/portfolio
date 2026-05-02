"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
    { label: "About", href: "#about", scroll: true },
    { label: "Work", href: "#work", scroll: true },
    { label: "Contact", href: "/contact", scroll: false },
    { label: "Blog", href: "/blogs", scroll: false },
];

const PLATFORM_ABBR = {
    instagram: "IG",
    tiktok: "TT",
    youtube: "YT",
    dribbble: "DR",
    twitter: "TW",
    x: "X",
    facebook: "FB",
    linkedin: "LI",
    discord: "DC",
    behance: "BE",
};

const getAbbr = (name) =>
    PLATFORM_ABBR[name?.toLowerCase()] ?? name?.slice(0, 2).toUpperCase() ?? "–";

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function FooterClient({ socialMedias = [] }) {
    return (
        <footer>
            {/* CTA Section */}
            <div className="flex flex-col items-center justify-center py-24 md:py-32 px-5 text-center">
                <h2 className="text-6xl md:text-8xl lg:text-[108px] font-bold leading-none tracking-tight text-primary">
                    Still scrolling?
                </h2>
                <h2 className="text-6xl md:text-8xl lg:text-[108px] font-light italic leading-none tracking-tight text-zinc-400 mt-2">
                    That&apos;s a sign.
                </h2>
                <p className="text-zinc-500 max-w-sm mt-8 text-sm md:text-base leading-relaxed">
                    Forget cookie-cutter solutions. Each project is designed with
                    purpose — original, intentional, and made to stand out in a
                    noisy digital world.
                </p>
                <Link
                    href="/contact"
                    className="mt-10 bg-primary text-white text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-80 transition-opacity"
                >
                    Start a project →
                </Link>
            </div>

            {/* Footer Bar */}
            <div className="border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 px-5 md:px-10 py-5">
                {/* Copyright */}
                <span className="font-mono text-xs text-zinc-400 tracking-wide">
                    © {new Date().getFullYear()} KJ AGENCY · JAKARTA
                </span>

                {/* Nav Links */}
                <nav className="flex items-center gap-6">
                    {NAV_LINKS.map((item) =>
                        item.scroll ? (
                            <button
                                key={item.label}
                                onClick={() => scrollTo(item.href.replace("#", ""))}
                                className="text-sm text-zinc-500 hover:text-primary transition-colors cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm text-zinc-500 hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Social Media Circles */}
                <div className="flex items-center gap-2">
                    {socialMedias.map((socmed) => (
                        <Link
                            key={socmed.sys.id}
                            href={socmed.fields.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                        >
                            <Image
                                src={"https:" + socmed.fields.fullColorIcon.fields.file.url}
                                alt={socmed.fields.name}
                                width={20}
                                height={20}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

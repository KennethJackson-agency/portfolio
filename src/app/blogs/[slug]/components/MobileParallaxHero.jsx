"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MobileParallaxHero({ src, alt, title }) {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Semakin kecil faktor 0.3, semakin pelan gerak image
            const offset = scrollY * 0.3;
            if (imgRef.current) {
                imgRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative block sm:hidden h-[360px] w-full overflow-hidden">
            <div
                ref={imgRef}
                className="absolute inset-0 will-change-transform"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Optional: judul overlay */}
            <div className="absolute inset-x-0 bottom-6 px-5">
                <h1 className="text-white text-xl font-semibold">{title}</h1>
            </div>
        </div>
    );
}

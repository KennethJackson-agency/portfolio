"use client";
import { useState, useEffect } from "react";

const typingVariants = [
    "Looking for ideas...",
    "We’re a creative ecosystem 🚀",
    "Shaping the future...",
	"TOGETHERRRRRRRRRRRRR", 
	"Let’s turn it into something scroll-stopping",
    "Brewing some code... ☕",
    "Ahh",
	"BUG!!!! 🤯😤🤬",
    "... 404 not found ...",
];

export default function TypingText() {
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [variantIndex, setVariantIndex] = useState(0);

    useEffect(() => {
        const currentText = typingVariants[variantIndex];

        const interval = setInterval(() => {
            setText(currentText.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);

            if (charIndex >= currentText.length + 5) {
                setCharIndex(0);
                setVariantIndex((prev) => (prev + 1) % typingVariants.length);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [charIndex, variantIndex]);

    return <p className="text-white text-sm font-mono min-h-[1rem]">{text}</p>;
}

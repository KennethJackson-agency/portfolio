"use client";

import { useRef, useState } from "react";

const CHARS = "UAupdqPqOdnmlwWE";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 25;

export default function ScrambleText({ text = "Text Here", className = "" }) {
    const intervalRef = useRef(null);
    const [scrambledText, setScrambledText] = useState(text);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const newText = text
                .split("")
                .map((char, i) => {
                    if (pos / CYCLES_PER_LETTER > i) return char;
                    const rand =
                        CHARS[Math.floor(Math.random() * CHARS.length)];
                    return rand;
                })
                .join("");

            setScrambledText(newText);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) stopScramble();
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setScrambledText(text);
    };

    return (
        <p
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className={className}
        >
            {scrambledText}
        </p>
    );
}

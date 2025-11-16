"use client";

/* Next.js Core */
import Image from "next/image";

/* Internal Animation Utilities */
import TypingText from "@/lib/common/animations/TypingText";

/* Local Assets */
import logo from "../../../../../assets/icon/white-black-logo.svg";


export default function AboutTypingBox() {
    return (
        <div className="flex gap-3 items-center w-full">
            <Image
                src={logo}
                width={1920}
                height={1080}
                alt="logo"
                className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-full"
            />

            <div className="flex items-center justify-between bg-zinc-800 px-2.5 md:px-3.5 py-2 rounded-2xl w-full">
                <TypingText />
                <div className="bg-zinc-600 rounded-full p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                        strokeWidth={1.5}
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

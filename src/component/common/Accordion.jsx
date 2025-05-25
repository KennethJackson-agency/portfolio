"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import closeIcon from "../../app/icon/x.svg";
import openIcon from "../../app/icon/bar-chart-2.svg";

export default function Accordion({
    accordionContainerStyle,
    titleStyle,
    title,
    children,
    defaultOpen = false,
    onToggle,
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);

            if (typeof onToggle === "function") {
                onToggle();
            }
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className={accordionContainerStyle}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full px-[10px] py-[15px] sm:p-[25px] cursor-pointer duration-500 ${isOpen ? "border-b border-zinc-600" : "border-none"
                    }`}
                aria-expanded={isOpen}
            >
                <span className={titleStyle}>{title}</span>
                <Image
                    src={isOpen ? closeIcon : openIcon}
                    alt="accordion toggle icon"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                />
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="transition-all duration-500 overflow-hidden"
            >
                <div className="flex flex-col gap-7 text-sm text-zinc-600 px-[10px] py-[15px] sm:p-[25px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

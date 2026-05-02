"use client";

import { useState } from "react";

export default function ProcessList({ processes = [] }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="border-t border-zinc-200">
            {processes.map((process, index) => {
                const isHovered = hoveredId === process.sys.id;

                return (
                    <div
                        key={process.sys.id}
                        onMouseEnter={() => setHoveredId(process.sys.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group grid grid-cols-[48px_1fr] md:grid-cols-[48px_260px_1fr_48px] items-start md:items-center gap-4 md:gap-8 px-5 md:px-10 py-8 md:py-10 border-b border-zinc-200 transition-colors duration-200 cursor-default"
                    >
                        {/* Number */}
                        <span className="font-mono text-xs text-zinc-400 pt-1 md:pt-0">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Step Name */}
                        <h3
                            className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight transition-transform duration-300 ease-out ${
                                isHovered ? "translate-x-2" : "translate-x-0"
                            }`}
                        >
                            {process.fields.stepName}
                        </h3>

                        {/* Description */}
                        <p
                            className={`col-start-2 md:col-start-auto text-sm md:text-base text-zinc-500 max-w-lg transition-opacity duration-200 ${
                                isHovered ? "opacity-100" : "opacity-70"
                            }`}
                        >
                            {process.fields.stepDescription}
                        </p>

                        {/* Arrow */}
                        <span className="hidden md:block text-xl text-zinc-400 transition-all duration-300 ease-out justify-self-end group-hover:-rotate-45">
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#000000"
                            >
                                <path
                                    d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                                    stroke="#000000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

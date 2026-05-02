import React from "react";
import Image from "next/image";
import starIcon from "../../../../assets/icon/Star.svg";

const items = [
    "Web Design",
    "Web Development",
    "IT Networking",
    "Digital Marketing",
    "Branding",
];

function Marquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap border-y border-zinc-200 py-6">
            <div className="inline-flex items-center animate-marquee">
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center gap-8 mr-8"
                    >
                        <span className="text-2xl md:text-[32px] text-primary font-semibold italic tracking-tight">
                            {item}
                        </span>
                        <Image
                            src={starIcon}
                            alt="star"
                            width={20}
                            height={20}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Marquee;

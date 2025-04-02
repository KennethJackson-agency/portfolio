import React from "react";

function Marquee() {
	const text = "Information Technology | Digital Marketing | Editor | Creative | Information Technology | ";

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee font-semibold text-5xl text-zinc-300 uppercase tracking-widest">
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
}

export default Marquee;

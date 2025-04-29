"use client";
import AnimatedCharacterText from "@/component/animations/AnimatedCharacterText";
import AnimatedText from "@/component/animations/AnimateText";
import React from "react";

function Testimoni() {
    return (
        <div className="relative group px-5 mx-auto">
            <p className="hidden lg:block absolute -top-20 -left-32 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-t-xl rounded-bl-xl p-2.5 group-hover:scale-[115%] group-hover:-rotate-[25deg] duration-300">
                High-key blushing rn 😳❤️
            </p>
            <p className="hidden lg:block absolute -top-16 -right-44 text-xs bg-zinc-900 text-white rounded-t-xl rounded-br-xl p-2.5 w-[200px] group-hover:scale-[115%] group-hover:rotate-[25deg] duration-300">
                Best kind of feedback? Honest & hyped. Thank you!
            </p>
            <p className="hidden lg:block absolute -bottom-24 -left-0 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-tl-xl rounded-b-xl p-2.5 group-hover:scale-[115%] group-hover:rotate-[15deg] duration-300">
                Fast, smart, creative... you just described yourself 👀
            </p>
            <div className="flex flex-col gap-4 w-[315px] md:w-[600px] text-center">
                <AnimatedText
                    text="Working with this team was a total game-changer. They
                    understood our product and audience instantly—and the
                    results showed. Smart, fast, and ridiculously creative."
                    delayPerWord={0.08}
                />
                <AnimatedCharacterText
                    className="font-semibold"
                    text="Amanda Jayvee"
                />
            </div>
        </div>
    );
}

export default Testimoni;

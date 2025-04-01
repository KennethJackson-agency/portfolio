import React from "react";

function Testimoni() {
    return (
        <div className="relative group mx-auto px-5">
			<p className="hidden lg:block absolute -top-20 -left-32 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-t-xl rounded-bl-xl p-2.5 group-hover:scale-[115%] group-hover:-rotate-[25deg] duration-300">High-key blushing rn 😳❤️</p>
			<p className="hidden lg:block absolute -top-16 -right-44 text-xs bg-zinc-900 text-white rounded-t-xl rounded-br-xl p-2.5 w-[200px] group-hover:scale-[115%] group-hover:rotate-[25deg] duration-300">Best kind of feedback? Honest & hyped. Thank you!</p>
			<p className="hidden lg:block absolute -bottom-24 -left-0 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-tl-xl rounded-b-xl p-2.5 group-hover:scale-[115%] group-hover:rotate-[15deg] duration-300">Fast, smart, creative... you just described yourself 👀</p>
            <div className="flex flex-col items-center gap-4 text-center w-full md:w-[600px]">
                <p className="text-base sm:text-xl">
                    Working with this team was a total game-changer. They
                    understood our product and audience instantly—and the
                    results showed. Smart, fast, and ridiculously creative.
                </p>
                <p className="font-semibold">Amanda Jayvee</p>
            </div>
        </div>
    );
}

export default Testimoni;

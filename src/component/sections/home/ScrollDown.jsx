import React from "react";

function ScrollDown() {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex justify-center mt-10">
                <div className="w-9 h-14 border-4 border-zinc-300 rounded-full flex justify-center items-start p-1">
                    <div className="w-0.5 h-2 bg-zinc-900 rounded-full animate-scroll" />
                </div>
            </div>
            <p className="mx-auto uppercase font-medium text-zinc-300 tracking-widest">scroll down</p>
        </section>
    );
}

export default ScrollDown;

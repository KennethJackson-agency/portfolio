"use client";

import { motion } from "framer-motion";

// Inline helper (atau import animateWords dari utils)
const animateWords = (text, delay = 0.2) =>
    text.split(" ").map((word, i) => (
        <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * delay, duration: 0.4 }}
        >
            {word}&nbsp;
        </motion.span>
    ));

function Header() {
    return (
        <section className="relative">
            <div className="backgroundHeader"></div>

            <motion.header
                className="flex flex-col gap-3 sm:gap-5 md:gap-8 w-full sm:w-[550px] md:w-[750px] px-3 mx-auto text-center mt-[200px] md:mt-[250px] text-zinc-900"
            >
                {/* Animated Text Header */}
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    {animateWords("Amplify Your Impact")}
                </h1>

                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-10">
                    {animateWords("Transform Your Brand Today", 0.1)}
                </h2>

                <p>
                    We're the powerhouse behind your digital presence 🚀,
                    specializing in seamless IT integration 💻, vibrant video
                    production 🎬, irresistible copy ✍️, and impactful digital
                    marketing 📈. Propel your brand forward.✨
                </p>

                <div className="tooltip-wrapper relative inline-block mx-auto duration-300">
                    <button
                        aria-label="Collaborate with us"
                        className="collab-button bg-zinc-900 text-white text-sm rounded-full px-5 py-3 text-center cursor-pointer inline-block drop-shadow-xl"
                    >
                        Let's Collaborate 🤝
                    </button>
                    <span className="tooltip-text absolute -bottom-20 -left-56 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-xl p-2.5 rotate-[18deg] invisible opacity-0 drop-shadow-xl z-10 pointer-events-none">
                        Let's build something cool together! ✨
                    </span>
                    <span className="tooltip-text absolute -bottom-10 -right-56 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-xl p-2.5 -rotate-[18deg] invisible opacity-0 drop-shadow-xl z-10 pointer-events-none">
                        Fuel your next project with us ⚡
                    </span>
                </div>
            </motion.header>
        </section>
    );
}

export default Header;

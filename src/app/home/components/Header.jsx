/* Next JS */
"use client";

/* External Library */
import { motion } from "framer-motion";

/* Internal Library */
import { trackEvent } from "@/lib/global/ga/gtagEvents";

/* Component Animations */
import AnimatedInView from "@/lib/common/animations/AnimatedInView";
import AnimatedParagraph from "@/lib/common/animations/AnimatedParagraph";
import AnimatedText from "@/lib/common/animations/AnimateText";

function Header() {
    return (
        <section className="relative">
            <div className="backgroundHeader"></div>

            <motion.header className="space-y-10 sm:space-y-5 md:space-y-8 w-full sm:w-[550px] md:w-[750px] px-3 mx-auto text-center mt-[200px] md:mt-[250px] text-zinc-900">
                {/* Animated Text Header */}
                <div className="space-y-3 sm:space-y-5 md:space-y-8">
                    <div className="space-y-1 md:space-y-8 items-center">
                        <AnimatedText
                            text="Amplify Your Impact"
                            className="font-semibold text-3xl sm:text-4xl md:text-5xl"
                        />
                        <AnimatedText
                            text="Transform Your Brand Today"
                            className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-10"
                            delayPerWord={0.08}
                        />
                        <AnimatedParagraph className="text-zinc-700">
                            We're the powerhouse behind your digital presence
                            🚀, specializing in seamless IT integration 💻,
                            vibrant video production 🎬, irresistible copy ✍️,
                            and impactful digital marketing 📈. Propel your
                            brand forward.✨
                        </AnimatedParagraph>
                    </div>
                </div>

                <div className="tooltip-wrapper relative inline-block mx-auto duration-300">
                    <AnimatedInView>
                        <a
                            href="/contact"
                            onClick={() => {
                                trackEvent({
                                    action: 'click_lets_collaborate_button',
                                    category: 'CTA',
                                    label: 'Lets Collaborate Button',
                                });
                            }}
                            className="bg-zinc-900 text-white text-sm rounded-full px-10 py-3.5 text-center cursor-pointer inline-block drop-shadow-xl"
                            aria-label="Collaborate with us"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Let's Collaborate 🤝
                        </a>
                    </AnimatedInView>
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

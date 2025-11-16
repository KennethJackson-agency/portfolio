"use client";

/* Analytics Utilities */
import { trackEvent } from "@/lib/global/ga/gtagEvents";

/* Internal Animation Components */
import Fade from "@/lib/component/animation/Fade";

export default function CTAButton() {
    return (
        <>
            <Fade>
                <a
                    href="/contact"
                    onClick={() => {
                        trackEvent({
                            action: "click_lets_collaborate_button",
                            category: "CTA",
                            label: "Lets Collaborate Button",
                        });
                    }}
                    className="bg-zinc-900 text-white text-sm rounded-full px-10 py-3.5 text-center cursor-pointer inline-block drop-shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let's Collaborate 🤝
                </a>
            </Fade>

            <span className="tooltip-text absolute -bottom-20 -left-56 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-xl p-2.5 rotate-[18deg] invisible opacity-0 drop-shadow-xl">
                Let's build something cool together! ✨
            </span>

            <span className="tooltip-text absolute -bottom-10 -right-56 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-xl p-2.5 -rotate-[18deg] invisible opacity-0 drop-shadow-xl">
                Fuel your next project with us ⚡
            </span>
        </>
    );
}

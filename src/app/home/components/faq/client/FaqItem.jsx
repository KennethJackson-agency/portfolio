"use client";

/* Next.js Core Components */
import Image from "next/image";

/* Internal UI Components */
import Accordion from "@/lib/component/ui/Accordion";

/* Analytics Utilities */
import { trackEvent } from "@/lib/global/ga/gtagEvents";

/* Local Assets */
import logo from "../../../../../assets/icon/white-black-logo.svg";

export default function FaqItem({ faq }) {
    return (
        <Accordion
            defaultOpen={false}
            title={faq.fields.question}
            onToggle={() =>
                trackEvent({
                    action: `click_faq_${faq.fields.question}`,
                    category: "FAQ",
                    label: "Accordion Opened",
                })
            }
            accordionContainerStyle="bg-zinc-900 w-full sm:w-[600px] rounded-xl sm:rounded-3xl"
            titleStyle="font-medium text-white text-base sm:text-xl text-left pr-10"
        >
            <div className="space-y-5">
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image
                                src={logo}
                                width={512}
                                height={512}
                                alt="logo"
                                className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full"
                                priority
                            />
                            <p className="font-medium text-base text-white">
                                KJ Agency
                            </p>
                            <p className="text-zinc-400">Dec, 12 2025</p>
                        </div>
                    </div>

                    <p className="space-y-5 text-white font-normal text-base pl-[44px] sm:pl-[52px] pr-5 sm:pr-0 leading-7">
                        {faq.fields.answer}
                    </p>
                </div>
            </div>
        </Accordion>
    );
}

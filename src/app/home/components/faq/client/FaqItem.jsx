"use client";

import Image from "next/image";
import Accordion from "@/lib/component/ui/Accordion";
import { trackEvent } from "@/lib/global/ga/gtagEvents";
import logo from "../../../../../assets/icon/white-black-logo.svg";

export default function FaqItem({ faq, isOpen, onToggle }) {
    return (
        <Accordion
            isOpen={isOpen}
            onToggle={() => {
                onToggle();
                trackEvent({
                    action: `click_faq_${faq.fields.question}`,
                    category: "FAQ",
                    label: "Accordion Opened",
                });
            }}
            title={faq.fields.question}
            accordionContainerStyle="bg-primary w-full rounded-2xl"
            titleStyle="font-medium text-white text-base sm:text-lg text-left pr-6"
        >
            <div className="space-y-5">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                        <Image
                            src={logo}
                            width={512}
                            height={512}
                            alt="logo"
                            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                            priority
                        />
                        <p className="font-medium text-base text-white">
                            KJ Agency
                        </p>
                        <p className="text-zinc-400">Dec, 12 2025</p>
                    </div>
                    <p className="text-white font-normal text-base pl-11 sm:pl-[52px] pr-5 leading-7">
                        {faq.fields.answer}
                    </p>
                </div>
            </div>
        </Accordion>
    );
}

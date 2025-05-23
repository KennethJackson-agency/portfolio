import Accordion from "@/component/common/Accordion";
import React from "react";
import logo from "../../../../app/icon/white-black-logo.svg";
import Image from "next/image";
import Frame from "@/component/common/Frame";
import AnimatedCharacterText from "@/component/animations/AnimatedCharacterText";
import AnimatedInView from "@/component/animations/AnimatedInView";

export default async function FaqWrapper({ faqs }) {
    return (
        <section className="flex flex-col items-center gap-10 sm:gap-20 mx-auto">
            <Frame
                tag="faq"
                frameContainerStyle="flex flex-col lg:even:mt-20"
                tagStyle="text-white bg-blue-500 text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
                frameStyle="border-2 border-blue-500 w-max p-3.5"
            >
                <AnimatedCharacterText
                    className="font-semibold text-xl sm:text-5xl"
                    text="Frequently Asked Questions"
                />
            </Frame>
            <div className="flex flex-col gap-5 px-3">
                {faqs.map((faq) => (
                    <AnimatedInView >
                        <Accordion
                            key={faq.sys.id}
                            defaultOpen={false}
                            title={faq.fields.question}
                            accordionContainerStyle="bg-zinc-900 w-full sm:w-[600px] rounded-xl sm:rounded-3xl"
                            titleStyle="font-medium text-white text-base sm:text-xl text-left pr-10"
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
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
                                            <p className="text-zinc-400">
                                                Dec, 12 2025
                                            </p>
                                        </div>
                                    </div>
                                    <p className="flex flex-col gap-5 text-white font-normal text-base pl-[44px] sm:pl-[52px] pr-5 sm:pr-0 leading-7">
                                        {faq.fields.answer}
                                    </p>
                                </div>
                            </div>
                        </Accordion>
                    </AnimatedInView>
                ))}
            </div>
        </section>
    );
}

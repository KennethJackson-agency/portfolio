/* Next JS */
"use client";

/* Internal UI Components */
import Frame from "@/lib/component/ui/Frame";

/* Local Client Components */
import FaqItem from "./client/FaqItem";

export default function FaqWrapper({ faqs = [] }) {
    if (!faqs.length) return null;

    return (
        <section className="flex flex-col items-center gap-10 sm:gap-20 mx-auto">
            <Frame
                tag="faq"
                frameContainerStyle="flex flex-col lg:even:mt-20"
                tagStyle="text-white bg-blue-500 text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
                frameStyle="border-2 border-blue-500 w-max p-3.5"
            >
                <p className="font-semibold text-xl sm:text-5xl">
                    Frequently Asked Questions
                </p>
            </Frame>
            <div className="space-y-3 sm:space-y-5 px-3">
                {faqs.map((faq) => (
                    <FaqItem key={faq.sys.id} faq={faq} />
                ))}
            </div>
        </section>
    );
}

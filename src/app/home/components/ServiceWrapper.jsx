/* Next JS */
"use client";

/* Component Animations */
import AnimatedText from "@/lib/common/animations/AnimateText";
import ZoomInJugglyCard from "@/lib/common/animations/ZoomInJugglyCard";

export default function ServiceWrapper({ services = [] }) {
    if (!services.length) return null
    return (
        <section
            id="service"
            className="space-y-14 px-5 sm:px-10 md:px-20 py-20 sm:p-20"
        >
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-5 w-full max-w-[90rem] mx-auto">
                <div className="space-y-0 md:space-y-5 font-medium text-2xl md:text-4xl">
                    <AnimatedText
                        startDelay={0.3}
                        text="What We"
                        className="justify-start"
                    />
                    <AnimatedText
                        startDelay={0.3}
                        text="Bring to the Table"
                        className="justify-start"
                    />
                </div>
                <div className="w-full md:w-[375px] font-normal">
                    <AnimatedText
                        startDelay={0.3}
                        text="From tech magic to creative firepower, our services are
                    built to help your brand perform, connect, and grow in a
                    digital-first world"
                        className="justify-start"
                    />
                </div>
            </div>

            <section className="flex flex-wrap gap-10 justify-center">
                {services.map((service, i) => {
                    return (
                        <ZoomInJugglyCard
                            key={i}
                            className="bg-zinc-100 p-3 rounded-3xl max-w-96 h-max"
                        >
                            <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl shadow-zinc-500/5">
                                <p className="text-xl font-semibold">
                                    {service.fields.category}
                                </p>
                                <p className="text-zinc-500 text-[14px]">
                                    {service.fields.serviceDescription}
                                </p>
                                <div className="flex flex-col">
                                    {service.fields.serviceList.map(
                                        (list, i) => (
                                            <div key={i}>
                                                <p className="text-black text-xl font-medium border-dashed border-b border-gray-300 py-3">
                                                    {list}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </ZoomInJugglyCard>
                    );
                })}
            </section>
        </section>
    );
}

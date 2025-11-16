/* Internal Animation Components */
import WaveText from "@/lib/component/animation/WaveText";

/* Next.js Core Components */
import Image from "next/image";

export default function ServiceWrapper({ services = [] }) {
    if (!services.length) return null;
    return (
        <section id="service" className="space-y-14 py-20">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-5 w-full max-w-[90rem] mx-auto px-5 sm:px-10 md:px-20">
                <div className="space-y-0 md:space-y-3 font-medium text-3xl md:text-4xl">
                    <WaveText text="What We Bring to the Table" />
                </div>
                <div className="w-full md:w-[375px] font-normal">
                    <WaveText text="From tech magic to creative firepower, our services are built to help your brand perform, connect, and grow in a digital-first world" />
                </div>
            </div>

            <section className="flex flex-col justify-center">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="group relative flex justify-between items-center w-full bg-white text-black border-b border-dashed border-zinc-200 px-5 md:px-20 py-5 overflow-hidden transition-colors duration-300"
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center gap-5 md:gap-10 w-full md:w-[500px]">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Image
                                        src={
                                            "https:" +
                                            service.fields.serviceIcon.fields
                                                .file.url
                                        }
                                        width={20}
                                        height={24}
                                        alt="Service Icon"
                                        loading="lazy"
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-base md:text-lg font-medium whitespace-nowrap">
                                    {service.fields.category}
                                </p>
                            </div>
                            <div className="grid transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr] grid-rows-[0fr] w-full">
                                <div className="overflow-hidden">
                                    <div className="mt-4 space-y-5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                                        <div className="space-y-2">
                                            <p className="text-xl font-medium">
                                                {
                                                    service.fields
                                                        .serviceDescription
                                                }
                                            </p>
                                            <p className="text-base text-zinc-400 w-full md:w-2/3">
                                                {
                                                    service.fields
                                                        .serviceSubDescription
                                                }
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 w-full md:w-1/2">
                                            {service.fields.serviceList.map(
                                                (list, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m4.5 12.75 6 6 9-13.5"
                                                            />
                                                        </svg>
                                                        <p className="whitespace-nowrap">
                                                            {list}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden group-hover:rotate-45 w-10 h-10 rounded-full bg-white md:flex items-center justify-center duration-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
}

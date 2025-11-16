"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/* Icon */
import dropletIcon from "../../../../../assets/icon/droplet.svg";

export default function StatsClient({ stats }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref} className="w-full max-w-[900px] space-y-16">
            <div className="flex flex-col sm:flex-row justify-between gap-5 w-full">
                <div className="relative">
                    <Image
                        src={dropletIcon}
                        alt="droplet icon"
                        width={36}
                        height={36}
                        className="hidden lg:block absolute -top-7 -left-7"
                    />

                    <div className="relative">
                        <p className="tooltip-client hidden lg:block absolute -top-16 -left-0 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-t-xl rounded-br-xl p-2.5">
                            Future collab? Never say never. 💡
                        </p>
                        <p className="client-title text-4xl font-medium">
                            Clients
                        </p>
                    </div>
                </div>

                <div className="text-zinc-900 w-full sm:w-[450px]">
                    <p className="justify-start">
                        Our clients are bold thinkers and future-shapers. We’re
                        proud to fuel their vision with creative and digital
                        firepower —because their success tells our story.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-start sm:justify-center gap-10">
                {stats.map((stat) => (
                    <div
                        key={stat.sys.id}
                        className="space-y-2 md:space-y-4 w-[275px] sm:w-[200px]"
                    >
                        <p className="font-medium text-4xl sm:text-6xl text-zinc-900">
                            {inView ? (
                                <CountUp
                                    end={stat.fields.value}
                                    duration={2}
                                    suffix={stat.fields.suffix}
                                />
                            ) : (
                                "0" + stat.fields.suffix
                            )}
                        </p>

                        <p className="text-zinc-500">{stat.fields.label}</p>

                        <p className="text-zinc-900 text-sm">
                            {stat.fields.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

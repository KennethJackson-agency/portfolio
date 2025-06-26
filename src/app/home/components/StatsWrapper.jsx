/* Next JS */
"use client";
import Image from "next/image";

/* External Library */
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/* Icon */
import dropletIcon from "../../../assets/icon/droplet.svg";

export default function StatsWrapper({ stats }) {
    if (!stats) return null
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="flex flex-col items-center gap-16 px-5">
            <div className="flex flex-col sm:flex-row justify-between gap-5 w-full max-w-[800px]">
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
                <p className="text-zinc-900 w-full sm:w-[450px]">
                    Our clients are{" "}
                    <span className="text-[#F6339A]">bold thinkers</span> and{" "}
                    <span className="text-[#2B7FFF]">future-shapers</span>.
                    We’re proud to fuel their vision with{" "}
                    <span className="text-[#FF6900]">creative</span> and{" "}
                    <span className="text-[#00C950]">digital firepower</span>{" "}
                    —because their success tells our story.
                </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-start sm:justify-center gap-10">
                {stats?.map((stat) => (
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
        </section>
    );
}

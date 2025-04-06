import Accordion from "@/component/common/Accordion";
import Image from "next/image";
import React from "react";
import logo from "../../../../app/icon/white-black-logo.svg";
import sendIcon from "../../../../app/icon/send.svg";
import TypingText from "@/component/animations/TypingText";

export default async function AboutWrapper({ abouts }) {
    return (
        <section id="about" className="mx-auto">
            {abouts.map((about, i) => (
                <Accordion
                    key={i}
                    defaultOpen={true}
                    title="Who’s Behind the Magic?"
                    accordionContainerStyle="bg-zinc-900 w-full sm:w-[650px] rounded-none sm:rounded-3xl drop-shadow-2xl"
                    titleContainerStyle=""
                    titleStyle="font-medium text-white text-lg sm:text-xl"
                >
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={logo}
                                        width={1920}
                                        height={1080}
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
                            <div className="flex flex-col gap-5 text-white text-base pl-[44px] sm:pl-[52px] sm:pr-0">
                                <p className="leading-7">
                                    We’re a small team with a big vision. Just
                                    three creatives ✨, united by passion,
                                    curiosity, and a love for all things
                                    digital.
                                </p>
                                <p className="leading-7">
                                    We started this agency not to become the
                                    biggest—but to be the most intentional. Each
                                    of us brings deep expertise in IT 💻, visual
                                    storytelling 🎬, digital marketing 📈, and
                                    creative content ✍️. o become the
                                    biggest—but to be the most intentional. Each
                                    of us brings deep expertise in IT 💻, visual
                                    storytelling 🎬, digital marketing 📈, and
                                    creative content ✍️.{" "}
                                </p>
                                <p className="leading-7">
                                    Together, we cover every touchpoint your
                                    brand needs to shine online.
                                </p>
                                <p className="leading-7">
                                    We’re hands-on with every project. No layers
                                    of middle management, no outsourcing
                                    roulette—just direct collaboration, quick
                                    turnarounds, and a shared obsession for
                                    quality. Whether we’re editing a video,
                                    launching a campaign, or fine-tuning a
                                    landing page, we treat your brand like it's
                                    our own.
                                </p>
                                <p>
                                    Clients come to us for results, but stay for
                                    the experience. Because when you work with
                                    us, you’re not just hiring a team. You’re
                                    building something with people who genuinely
                                    care. 💡🚀
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            {about.fields.memberForAbout.map((member, i) => (
                                <div key={i} className="flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https:${member.fields.profilePicture.fields.file.url}`}
                                                width={500}
                                                height={500}
                                                alt={member.fields.name}
                                                className="w-[32px] md:w-[40px] h-[30px] md:h-[40px] rounded-full"
                                                priority
                                            />
                                            <p className="font-medium text-white text-base">
                                                {member.fields.name}
                                            </p>
                                            <p className="text-zinc-400">
                                                {new Date(
                                                    member.fields.date
                                                ).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "2-digit",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                        <p
                                            style={{
                                                backgroundColor:
                                                    member.fields.color,
                                            }}
                                            className="hidden text-white text-xs px-2 py-1 rounded-full"
                                        >
                                            {member.fields.memberNickname}
                                        </p>
                                    </div>
                                    <p className="text-white text-base pl-[44px] md:pl-[52px] leading-7">
                                        {member.fields.memberDescription}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 items-center w-full">
                            <Image
                                src={logo}
                                width={1920}
                                height={1080}
                                alt="logo"
                                className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-full"
                                priority
                            />
                            <div className="flex items-center justify-between bg-zinc-800 px-2.5 md:px-3.5 py-2 rounded-2xl w-full">
                                <TypingText />
                                <div className="bg-zinc-600 rounded-full p-2">
                                    <Image
                                        src={sendIcon}
                                        width={1920}
                                        height={1080}
                                        alt="logo"
                                        className="w-[20px] h-[20px]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion>
            ))}
        </section>
    );
}

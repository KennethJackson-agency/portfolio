/* Next.js Core */
import Image from "next/image";

/* Internal UI Components */
import Accordion from "@/lib/component/ui/Accordion";

/* Local Assets */
import logo from "../../../../assets/icon/white-black-logo.svg";

/* Local Client Components */
import AboutTypingBox from "./client/AboutTypingBox";

export default function AboutWrapper({ abouts = [] }) {
    if (!abouts.length) return null;

    return (
        <section id="about" className="mx-auto">
            {abouts.map((about, i) => (
                <Accordion
                    key={i}
                    defaultOpen={true}
                    title="Who’s Behind the Magic?"
                    accordionContainerStyle="bg-zinc-900 w-full sm:w-[650px] rounded-none sm:rounded-3xl drop-shadow-2xl"
                    titleStyle="font-medium text-white text-lg sm:text-xl"
                >
                    {/* ABOUT HEADER */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={logo}
                                    width={512}
                                    height={512}
                                    alt="logo"
                                    className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full"
                                />
                                <p className="font-medium text-base text-white">
                                    KJ Agency
                                </p>
                                <p className="text-zinc-400">Dec, 12 2025</p>
                            </div>

                            <div className="flex flex-col gap-5 text-white text-base pl-[44px] sm:pl-[52px] leading-7">
                                <p>
                                    We’re a small team with a big vision. Just
                                    three creatives ✨, united by passion,
                                    curiosity, and a love for all things
                                    digital.
                                </p>
                                <p>
                                    We started this agency not to become the
                                    biggest—but to be the most intentional. Each
                                    of us brings deep expertise in IT 💻, visual
                                    storytelling 🎬, digital marketing 📈, and
                                    content ✍️.
                                </p>
                                <p>
                                    Together, we cover every touchpoint your
                                    brand needs to shine online.
                                </p>
                                <p>
                                    We’re hands-on with every project — no
                                    outsourcing roulette. Quick turnarounds,
                                    high standards, and real collaboration.
                                </p>
                                <p>
                                    Clients come for results, but stay for the
                                    experience. 💡🚀
                                </p>
                            </div>
                        </div>

                        {/* TEAM MEMBERS */}
                        <div className="flex flex-col gap-5">
                            {about.fields.memberForAbout.map((member, i) => (
                                <div key={i} className="flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https:${member.fields.profilePicture.fields.file.url}`}
                                                width={512}
                                                height={512}
                                                alt={member.fields.name}
                                                className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full"
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

                                        <span
                                            className="hidden text-white text-xs px-2 py-1 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    member.fields.color,
                                            }}
                                        >
                                            {member.fields.memberNickname}
                                        </span>
                                    </div>

                                    <p className="text-white text-base pl-[44px] md:pl-[52px] leading-7">
                                        {member.fields.memberDescription}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <AboutTypingBox />
                    </div>
                </Accordion>
            ))}
        </section>
    );
}

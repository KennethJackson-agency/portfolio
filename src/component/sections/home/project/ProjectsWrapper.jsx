import AnimatedCharacterText from "@/component/animations/AnimatedCharacterText";
import AnimatedParagraph from "@/component/animations/AnimatedParagraph";
import Frame from "@/component/common/Frame";
import { formatMonthYear } from "@/component/helper/formatMonthYear";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Project({ projects }) {
    return (
        <section id="work" className="relative max-w-min mx-auto">
            <div className="columns-1 md:columns-2 gap-x-20 md:gap-x-10 lg:gap-x-32 space-y-20">
                {projects.map((project) => (
                    <Link
                        key={project.sys.id}
                        href={`/projects/${project.fields.slug}`}
                        className="inline-block w-max break-inside-avoid cursor-pointer"
                    >
                        <Frame
                            tag={project.fields.tag}
                            frameContainerStyle="flex flex-col gap-0 mb-6"
                            tagStyle="text-white text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
                            frameStyle="border-2 w-max"
                            style={{
                                frameColor:
                                    project.fields.frameColor || "#ec4899",
                            }}
                        >
                            <Image
                                src={`https:${project.fields.projectImage.fields.file.url}`}
                                width={1920}
                                height={1080}
                                alt={project.fields.projectName}
                                className="w-[315px] sm:w-[400px] md:w-[315px] lg:w-[400px] h-auto"
                                priority
                            />
                        </Frame>

                        <div className="flex flex-col gap-4 w-[300px] sm:w-[450px] md:w-[350px] lg:w-[400px]">
                            <AnimatedCharacterText
                                text={project.fields.projectName}
                                className="text-2xl sm:text-3xl font-semibold justify-start whitespace-nowrap"
                            />
                            <p className="text-zinc-500 text-sm uppercase tracking-widest justify-start">
                                {formatMonthYear(project.fields.date)}
                            </p>
                            <AnimatedParagraph className="text-gray-700">
                                {project.fields.projectDescription}
                            </AnimatedParagraph>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

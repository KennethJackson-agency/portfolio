import Frame from "@/component/common/Frame";
import { formatMonthYear } from "@/component/helper/formatMonthYear";
import { getProjects } from "@/lib/contentful";
import Image from "next/image";
import React from "react";

export default async function Project() {
    const projects = await getProjects();

    return (
        <section id="work" className="relative max-w-min mx-auto">
            <div className="columns-1 md:columns-2 gap-x-20 md:gap-x-10 lg:gap-x-32 space-y-20">
                {projects.map((project) => (
                    <div
                        key={project.sys.id}
                        className="inline-block w-max break-inside-avoid"
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
                                className="w-[300px] sm:w-[400px] md:w-[300px] lg:w-[400px] h-auto"
                                priority
                            />
                        </Frame>

                        <div className="flex flex-col gap-4 w-[300px] sm:w-[450px] md:w-[350px] lg:w-[400px]">
                            <p className="text-3xl font-semibold">
                                {project.fields.projectName}
                            </p>
                            <p className="text-zinc-500 text-sm uppercase tracking-widest">
                                {formatMonthYear(project.fields.date)}
                            </p>
                            <p className="text-zinc-900">
                                {project.fields.projectDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* Next JS */
import Image from "next/image";
import Link from "next/link";

/* Component Animations */
import AnimatedCharacterText from "@/lib/common/animations/AnimatedCharacterText";
import AnimatedParagraph from "@/lib/common/animations/AnimatedParagraph";

/* Global Component */
import Frame from "@/lib/common/components/Frame";

/* Global Helper */
import { formatMonthYear } from "@/lib/common/helper/formatMonthYear";

export default async function ProjectWrapper({ projects = [] }) {
    if (!projects.length) return null
    return (
        <section id="work" className="relative max-w-min mx-auto">
            <div className="columns-1 md:columns-2 gap-x-20 md:gap-x-10 lg:gap-x-32 space-y-20">
                {projects?.map((project) => {
                    const thumbnail = project.fields.thumbnailImage;
                    const isImage = thumbnail.fields.file.contentType.startsWith("image/");
                    const isVideo = thumbnail.fields.file.contentType.startsWith("video/");
                    return (
                        <Link
                            key={project.sys.id}
                            href={`/projects/${project.fields.slug}`}
                            className="inline-block w-max break-inside-avoid cursor-pointer"
                        >
                            <Frame
                                tag={project.fields.tag}
                                frameContainerStyle="mb-6"
                                tagStyle="text-white text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
                                frameStyle="border-2 w-max"
                                style={{
                                    frameColor:
                                        project.fields.frameColor || "#ec4899",
                                }}
                            >
                                {isImage && (
                                    <Image
                                        src={`https:${thumbnail.fields.file.url}`}
                                        width={1920}
                                        height={1080}
                                        alt={project.fields.projectName}
                                        className="w-[315px] sm:w-[400px] md:w-[315px] lg:w-[400px] h-auto"
                                        priority
                                    />
                                )}

                                {isVideo && (
                                    <video
                                        src={`https:${thumbnail.fields.file.url}`}
                                        className="w-[315px] sm:w-[400px] md:w-[315px] lg:w-[400px] h-auto"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}
                            </Frame>

                            <div className="space-y-4 w-[300px] sm:w-[450px] md:w-[350px] lg:w-[400px]">
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
                    )
                })
                }
            </div>
        </section>
    );
}

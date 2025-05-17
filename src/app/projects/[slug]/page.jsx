import AnimatedCharacterText from "@/component/animations/AnimatedCharacterText";
import AnimatedInView from "@/component/animations/AnimatedInView";
import AnimatedParagraph from "@/component/animations/AnimatedParagraph";
import { formatMonthYear } from "@/component/helper/formatMonthYear";
import { fetchAllProjects, fetchProjectBySlug } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const projects = await fetchAllProjects();

    return projects.map((project) => ({
        slug: project.fields.slug,
    }));

}

export default async function ProjectDetails(props) {
    const params = await props.params;
    const project = await fetchProjectBySlug(params.slug);

    const asset = project.fields.projectAsset;
    const isImage = asset.fields.file.contentType.startsWith("image/");
    const isVideo = asset.fields.file.contentType.startsWith("video/");
    const gallery = project.fields.gallery;

    return (
        <section
            className="flex flex-col mx-auto py-20 px-4 md:px-10 lg:px-20"
        >
            <AnimatedInView>
                <Link
                    href={`/`}
                    className="flex items-center gap-1 bg-zinc-100 w-max rounded-full py-2 pl-3 pr-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>{" "}
                    <p className="font-medium">Back</p>
                </Link>
            </AnimatedInView>
            <div className="flex flex-col gap-20 pt-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="flex flex-col gap-4 w-full">
                        <AnimatedCharacterText
                            text={project.fields.projectName}
                            className="text-3xl font-bold justify-start"
                        />
                        <AnimatedParagraph className="text-zinc-500 w-full lg:w-3/4">
                            {project.fields.projectDescription}
                        </AnimatedParagraph>
                    </div>
                    <div className="flex gap-20 w-full md:w-1/2">
                        <div className="flex flex-col gap-4 w-1/2">
                            <AnimatedCharacterText
                                text="Project Scope"
                                className="text-zinc-500 justify-start"
                            />
                            <div className="flex flex-wrap gap-2">
                                {project.fields?.projectScope?.map(
                                    (scope, i) => (
                                        <AnimatedInView key={i}>
                                            <p className="text-sm font-medium bg-zinc-100 p-2 rounded-full w-max">
                                                {scope}
                                            </p>
                                        </AnimatedInView>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                            <AnimatedCharacterText
                                text="Date"
                                className="text-zinc-500 justify-start"
                            />
                            <AnimatedInView>
                                <p className="whitespace-nowrap">
                                    {formatMonthYear(project.fields.date)}
                                </p>
                            </AnimatedInView>
                        </div>
                    </div>
                </div>
                {isImage && (
                    <Image
                        src={`https:${asset.fields.file.url}`}
                        width={1920}
                        height={1080}
                        alt={project.fields.projectName}
                        className="aspect-[16/8] rounded-xl md:rounded-3xl object-cover w-full max-w-7xl"
                        priority
                    />
                )}

                {isVideo && (
                    <video
                        src={`https:${asset.fields.file.url}`}
                        className="aspect-[16/8] rounded-xl md:rounded-3xl object-cover w-full max-w-7xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                )}
                <section className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {gallery.map((item, index) => {
                        const file = item.fields.file;
                        const url = `https:${file.url}`;
                        const title = item.fields.title || project.fields.projectName;
                        const isImage = file.contentType.startsWith('image/');
                        const isVideo = file.contentType.startsWith('video/');

                        return (
                            <div key={index} className="break-inside-avoid overflow-hidden rounded-xl">
                                {isImage ? (
                                    <Image
                                        src={url}
                                        alt={title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto rounded-xl object-cover"
                                    />
                                ) : isVideo ? (
                                    <video
                                        src={url}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="aspect-[16/8] object-cover w-full rounded-xl"
                                    />
                                ) : null}
                            </div>
                        );
                    })}
                </section>
            </div>
        </section>
    );
}

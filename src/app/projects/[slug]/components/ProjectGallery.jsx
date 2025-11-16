/* Next.js Core Components */
import Fade from "@/lib/component/animation/Fade";
import Image from "next/image";

function ProjectGallery({ gallery }) {
    return (
        <section
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
            role="list"
        >
            {gallery.map((item, index) => {
                const file = item.fields.file;
                const url = `https:${file.url}`;
                const title = item.fields.title || "Project media";
                const isImage = file.contentType.startsWith("image/");
                const isVideo = file.contentType.startsWith("video/");
                // Randomly choose direction and duration for each blog card animation
                const duration = 0.6 + Math.random() * 0.6; // duration between 0.6s to 1.2s
                const delay = Math.random() * 0.3; // delay between 0s to 0.3s

                return (
                    <Fade key={index} duration={duration} delay={delay}>
                        <div
                            className="break-inside-avoid overflow-hidden rounded-xl"
                            role="listitem"
                        >
                            {isImage ? (
                                <Image
                                    src={url}
                                    alt={title}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-xl object-cover"
                                    loading={index < 3 ? "eager" : "lazy"}
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                            ) : isVideo ? (
                                <video
                                    src={url}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="aspect-[16/8] object-cover w-full rounded-xl"
                                    aria-label={title}
                                    controls
                                />
                            ) : null}
                        </div>
                    </Fade>
                );
            })}
        </section>
    );
}

export default ProjectGallery;

/* React Core Components */
import React from "react";

/* Next.js Core Components */
import Image from "next/image";
import Fade from "@/lib/component/animation/Fade";

function ProjectExecution({ projectExecution, projectExecutionAsset }) {
    return (
        <div className="space-y-6">
            <Fade direction="right">
                <h2 className="text-2xl md:text-4xl font-semibold">
                    Execution
                </h2>
            </Fade>
            <Fade direction="right">
                <p className="text-base md:text-xl text-zinc-800">
                    {projectExecution}
                </p>
            </Fade>
            {projectExecutionAsset.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectExecutionAsset.map((asset, index) => {
                        const file = asset?.fields?.file;
                        const mime = file.contentType;
                        const isImage = mime.startsWith("image/");
                        const isVideo = mime.startsWith("video/");
                        // Randomly choose direction and duration for each blog card animation
                        const duration = 0.6 + Math.random() * 0.6; // duration between 0.6s to 1.2s
                        const delay = Math.random() * 0.3; // delay between 0s to 0.3s

                        return (
                            <Fade key={index} duration={duration} delay={delay}>
                                {isImage ? (
                                    <Image
                                        src={`https:${file.url}`}
                                        width={1920}
                                        height={1080}
                                        alt={
                                            asset.fields.title ||
                                            "Execution Asset"
                                        }
                                        className="aspect-video rounded-xl object-cover w-full max-w-7xl"
                                        priority
                                    />
                                ) : isVideo ? (
                                    <video
                                        src={`https:${file.url}`}
                                        className="aspect-video rounded-xl object-cover w-full max-w-7xl"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <p className="text-center text-zinc-500">
                                        Unsupported media type
                                    </p>
                                )}
                            </Fade>
                        );
                    })}
                </div>
            ) : (
                <p className="text-center text-zinc-500">
                    No project media available.
                </p>
            )}
        </div>
    );
}

export default ProjectExecution;

/* React Core Components */
import React from "react";

/* Next.js Core Components */
import Image from "next/image";

/* Animation Components */
import Fade from "@/lib/component/animation/Fade";

function ProjectStrategy({ projectStrategy, projectStrategyAsset }) {
    return (
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-4 w-full md:w-1/2">
                <Fade direction="right">
                    <h2 className="text-2xl md:text-4xl font-semibold">
                        Strategy
                    </h2>
                </Fade>
                <Fade direction="right">
                    <p className="text-base md:text-xl text-zinc-800">
                        {projectStrategy}
                    </p>
                </Fade>
            </div>
            {projectStrategyAsset.length > 0 ? (
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    {projectStrategyAsset.map((asset, index) => {
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
                                            "Strategy Asset"
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

export default ProjectStrategy;

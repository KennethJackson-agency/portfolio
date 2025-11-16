/* Next.js Core */
import Image from "next/image";

/* Internal Libraries */
import { contentfulApi } from "@/lib/global/contentful/contentful";
import { createSlugParams } from "@/lib/global/contentful/createSlugParams";
import { getProjectPageData } from "./lib/getProjectPageData";

/* Local Page Components */
import ProjectHeader from "./components/ProjectHeader";
import ProjectGallery from "./components/ProjectGallery";
import ProjectChallenge from "./components/ProjectChallenge";
import ProjectStrategy from "./components/ProjectStrategy";
import ProjectExecution from "./components/ProjectExecution";

/* Global UI Components */
import Footer from "@/lib/component/ui/footer/Footer";
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar";

/* Configuration Data */
import { navItemsSingleBlogs } from "@/config/config";

export const generateStaticParams = createSlugParams(contentfulApi.getProjects);

export default async function ProjectDetails({ params }) {
    const { slug } = await params;

    const data = await getProjectPageData(slug);

    const {
        projectName,
        projectDescription,
        services,
        previewAsset,
        gallery,
        projectChallenge,
        projectStrategy,
        projectStrategyAsset,
        projectExecution,
        projectExecutionAsset,
    } = data;

    const file = previewAsset?.fields?.file;
    const mime = file?.contentType;
    const isImage = mime?.startsWith("image/");
    const isVideo = mime?.startsWith("video/");

    return (
        <>
            <FloatingBar navItems={navItemsSingleBlogs} />
            <div className="space-y-32">
                <div className="flex flex-col mx-auto py-20 px-4 md:px-10 lg:px-20">
                    <div className="space-y-20 pt-10 max-w-7xl mx-auto">
                        <ProjectHeader
                            projectName={projectName}
                            projectDescription={projectDescription}
                            services={services}
                        />
                        {isImage ? (
                            <Image
                                src={`https:${file.url}`}
                                width={1920}
                                height={1080}
                                alt={projectName}
                                className="aspect-[16/8] rounded-xl md:rounded-3xl object-cover w-full max-w-7xl"
                                priority
                            />
                        ) : isVideo ? (
                            <video
                                src={`https:${file.url}`}
                                className="aspect-[16/8] rounded-xl md:rounded-3xl object-cover w-full max-w-7xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <p className="text-center text-zinc-500">
                                No project media available.
                            </p>
                        )}
                        <ProjectGallery gallery={gallery} />
                        <ProjectChallenge projectChallenge={projectChallenge} />
                        <ProjectStrategy
                            projectStrategy={projectStrategy}
                            projectStrategyAsset={projectStrategyAsset}
                        />
                        <ProjectExecution
                            projectExecution={projectExecution}
                            projectExecutionAsset={projectExecutionAsset}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

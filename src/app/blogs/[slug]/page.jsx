/* Next.js Core Components */
import Image from "next/image";

/* Internal Library Utilities */
import { contentfulApi } from "@/lib/global/contentful/contentful.js";
import { getBlogPageData } from "./lib/getBlogPageData.js";
import { createSlugParams } from "@/lib/global/contentful/createSlugParams.js";

/* Shared Global Components */
import Footer from "@/lib/component/ui/footer/Footer.jsx";

/* Local Page-Specific Components */
import BlogHeader from "./components/BlogHeader.jsx";
import BlogContent from "./components/BlogContent.jsx";
import RelatedBlogs from "./components/RelatedBlogs.jsx";

/* Next.js Navigation Utils */
import { notFound } from "next/navigation.js";

/* Local Components */
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar.jsx";

/* Configuration Data */
import { navItemsSingleBlogs } from "@/config/config.js";
import MobileParallaxHero from "./components/MobileParallaxHero.jsx";

export const generateStaticParams = createSlugParams(contentfulApi.getBlogs);

export default async function Blog({ params }) {
    const { slug } = await params;

    const blogRaw = await contentfulApi.getBlogBySlug(slug);
    if (!blogRaw || !blogRaw.fields) return notFound();

    const data = await getBlogPageData(slug);
    const { blogData, relatedBlogs } = data;
    const { titleText, thumbnailUrl } = blogData;

    return (
        <>
            <FloatingBar navItems={navItemsSingleBlogs} />

            <div className="overflow-x-hidden bg-white">
                <MobileParallaxHero src={thumbnailUrl} alt={titleText} />

                <div className="hidden sm:block pt-32">
                    <Image
                        src={thumbnailUrl}
                        width={1920}
                        height={1080}
                        alt={titleText}
                        priority
                        className="aspect-video w-full max-w-280 mx-auto rounded-2xl object-cover"
                    />
                </div>

                <div className="flex flex-col gap-10 pt-0 sm:pt-10">
                    <div className="relative bg-white flex flex-col items-center space-y-0 md:space-y-20 pt-8 mx-auto max-w-280 -mt-6 sm:mt-0 rounded-t-3xl sm:rounded-3xl shadow-sm">
                        <div className="space-y-10">
                            <BlogHeader
                                tagList={blogData.tagList}
                                titleText={blogData.titleText}
                                contentText={blogData.contentText}
                            />

                            <Image
                                src={thumbnailUrl}
                                width={1920}
                                height={1080}
                                alt={titleText}
                                priority
                                className="hidden sm:block aspect-video w-full max-w-280 mx-auto rounded-2xl object-cover"
                            />
                        </div>

                        <BlogContent
                            authorName={blogData.authorName}
                            authorRole={blogData.authorRole}
                            authorProfileImageUrl={
                                blogData.authorProfileImageUrl
                            }
                            blogCreatedAt={blogData.blogCreatedAt}
                            description={blogData.descriptionText}
                            content={blogData.contentText}
                            referenceList={blogData.referenceList}
                        />
                    </div>

                    <RelatedBlogs relatedBlogs={relatedBlogs} />

                    <div className="mt-72">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

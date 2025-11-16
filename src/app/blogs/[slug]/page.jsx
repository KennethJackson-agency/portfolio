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
            <div className="overflow-visible">
                <div className="flex flex-col gap-10 pt-0 sm:pt-32">
                    {/* Mobile Thumbnail */}
                    <Image
                        src={thumbnailUrl}
                        width={1920}
                        height={1080}
                        alt={titleText}
                        priority
                        className="block sm:hidden absolute w-full h-[25rem] object-cover mx-auto -z-10"
                    />

                    <div className="bg-white flex flex-col items-center space-y-0 md:space-y-20 mt-64 sm:mt-0 rounded-3xl pt-10 mx-auto overflow-visible">
                        <div className="space-y-10">
                            <BlogHeader
                                tagList={blogData.tagList}
                                titleText={blogData.titleText}
                                contentText={blogData.contentText}
                            />

                            {/* Thumbnail – desktop */}
                            <Image
                                src={thumbnailUrl}
                                width={1920}
                                height={1080}
                                alt={titleText}
                                priority
                                className="hidden sm:block aspect-video w-full max-w-[70rem] mx-auto rounded-2xl object-cover"
                            />
                        </div>

                        {/* Content */}
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

                    {/* Related Blogs */}
                    <RelatedBlogs relatedBlogs={relatedBlogs} />
                </div>
                <div className="mt-72">
                    <Footer />
                </div>
            </div>
        </>
    );
}

import { contentfulApi } from "@/lib/global/contentful/contentful";
import { getRelatedBlogs } from "./getRelatedBlogs";

const toFullUrl = (fileObj) =>
    fileObj?.fields?.file?.url ? `https:${fileObj.fields.file.url}` : "";

export async function getBlogPageData(slug) {
    const blog = await contentfulApi.getBlogBySlug(slug);
    const allBlogs = await contentfulApi.getBlogs();

    const {
        tag: tagList = [],
        title: titleText,
        author: authorData,
        thumbnail: thumbnailData,
        description: descriptionText,
        content: contentText,
        reference: referenceList = [],
    } = blog.fields;

    const {
        id: blogId,
        createdAt: blogCreatedAt,
        updatedAt: blogUpdatedAt,
    } = blog.sys;

    const authorName = authorData?.fields?.name ?? "";
    const authorRole = authorData?.fields?.role ?? "";
    const authorProfileImageUrl = toFullUrl(authorData?.fields?.profileImage);

    const thumbnailUrl = toFullUrl(thumbnailData);

    // Keep only non-current slugs, then map to desired structure
    const relatedBlogs = getRelatedBlogs(blog, allBlogs)
        .filter((b) => b.fields.slug !== slug)
        .map((b) => ({
            id: b.sys.id,
            slug: b.fields.slug,
            title: b.fields.title,
            updatedAt: b.sys.updatedAt,
            thumbnailUrl: toFullUrl(b.fields.thumbnail),
            authorName: b.fields.author?.fields?.name ?? "",
            tag: b.fields.tagList,
            content: b.fields.content,
        }));

    return {
        blogData: {
            tagList,
            titleText,
            authorName,
            authorRole,
            authorProfileImageUrl,
            thumbnailUrl,
            descriptionText,
            contentText,
            referenceList,
            blogId,
            blogCreatedAt,
            blogUpdatedAt,
        },
        relatedBlogs,
    };
}

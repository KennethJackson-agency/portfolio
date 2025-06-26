import { fetchAllBlogs, fetchBlogBySlug } from '@/lib/global/contentful/contentful';
import { getRelatedBlogs } from '@/app/singleBlog/[slug]/lib/getRelatedBlogs';

export async function getBlogPageData(slug) {
	// Fetch main data
	const blog = await fetchBlogBySlug(slug);
	const allBlogs = await fetchAllBlogs();

	// Prepare main blog fields
	const tagList = blog.fields.tag || [];
	const titleText = blog.fields.title;
	const authorData = blog.fields.author;
	const thumbnailData = blog.fields.thumbnail;
	const descriptionText = blog.fields.description;
	const contentText = blog.fields.content;
	const referenceList = blog.fields.reference || [];

	const blogId = blog.sys.id;
	const blogCreatedAt = blog.sys.createdAt;
	const blogUpdatedAt = blog.sys.updatedAt;

	const authorName = authorData.fields.name;
	const authorRole = authorData.fields.role;
	const authorProfileImageUrl = `https:${authorData.fields.profileImage.fields.file.url}`;

	const thumbnailUrl = `https:${thumbnailData.fields.file.url}`;

	// Prepare related blogs
	const relatedBlogsRaw = getRelatedBlogs(blog, allBlogs);
	const relatedBlogs = relatedBlogsRaw
		.filter((relatedBlog) => relatedBlog.fields.slug !== slug)
		.map((relatedBlog) => {
			return {
				id: relatedBlog.sys.id,
				slug: relatedBlog.fields.slug,
				title: relatedBlog.fields.title,
				updatedAt: relatedBlog.sys.updatedAt,
				thumbnailUrl: `https:${relatedBlog.fields.thumbnail.fields.file.url}`,
			};
		});

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

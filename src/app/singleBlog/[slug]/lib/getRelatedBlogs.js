export function getRelatedBlogs(currentBlog, allBlogs, limit = 3) {
	const currentSlug = currentBlog.fields.slug;
	const currentTags = currentBlog.fields.tag || [];

	// Filter blog selain current
	const otherBlogs = allBlogs.filter(blog => blog.fields.slug !== currentSlug);

	// Hitung shared tags
	const blogsWithMatchCount = otherBlogs.map(blog => {
		const sharedTags = blog.fields.tag?.filter(tag =>
			currentTags.includes(tag)
		);
		return {
			blog,
			matchCount: sharedTags?.length || 0,
		};
	});

	// Filter minimal 2 tag sama
	const matchingBlogs = blogsWithMatchCount.filter(({ matchCount }) => matchCount >= 2);

	// Urutkan by updatedAt DESC
	const sortedBlogs = matchingBlogs.sort(
		(a, b) => new Date(b.blog.sys.updatedAt) - new Date(a.blog.sys.updatedAt)
	);

	// Ambil limit dan kembalikan blog saja
	const topBlogs = sortedBlogs.slice(0, limit).map(({ blog }) => blog);

	return topBlogs;
}

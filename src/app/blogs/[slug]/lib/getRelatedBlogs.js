export function getRelatedBlogs(currentBlog, allBlogs, limit = 3) {
    const currentSlug = currentBlog.fields.slug;
    const currentTags = currentBlog.fields.tag ?? [];

    // Filter out the current blog from all blogs
    const otherBlogs = allBlogs.filter(
        (blog) => blog.fields.slug !== currentSlug
    );

    // Calculate the number of shared tags between current blog and other blogs
    const blogsWithMatchCount = otherBlogs.map((blog) => {
        const sharedTags =
            blog.fields.tag?.filter((tag) => currentTags.includes(tag)) ?? [];
        return { blog, matchCount: sharedTags.length };
    });

    // Filter blogs that have at least two shared tags
    const matchingBlogs = blogsWithMatchCount.filter(
        ({ matchCount }) => matchCount >= 2
    );

    // Sort by updatedAt date descending (most recent first)
    matchingBlogs.sort(
        (a, b) =>
            new Date(b.blog.sys.updatedAt) - new Date(a.blog.sys.updatedAt)
    );

    // Return only the top "limit" blogs, mapped to blog objects
    return matchingBlogs.slice(0, limit).map(({ blog }) => blog);
}

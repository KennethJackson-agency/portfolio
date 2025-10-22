/* Next JS */
import Link from "next/link";

/* Assets */
import BlogCard from "./BlogCard";

function BlogWrapper({ blogs = [] }) {
    if (!blogs.length) return null;

    const latestBlogs = (blogs ?? [])
        .filter((blog) => blog?.sys?.updatedAt)
        .sort((a, b) => new Date(b.sys.updatedAt) - new Date(a.sys.updatedAt))
        .slice(0, 3);

    return (
        <section
            id="blogs"
            className="space-y-10 px-5 max-w-7xl w-full mx-auto"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                <div className="space-y-2 max-w-full md:max-w-1/2">
                    <p className="text-[2rem] font-semibold">Latest Insights</p>
                    <p className="text-zinc-500">
                        Stay ahead of the curve with our freshest takes on
                        design, tech, and creative strategies. These are our
                        latest stories—handpicked to spark ideas and ignite
                        action.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="group relative flex items-center gap-2 w-max"
                >
                    <p className="relative z-10">
                        Explore Our Article
                        <span className="absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 group-hover:rotate-45 duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {latestBlogs.map((blog) => (
                    <BlogCard key={blog.sys.id} blog={blog} />
                ))}
            </div>
        </section>
    );
}

export default BlogWrapper;

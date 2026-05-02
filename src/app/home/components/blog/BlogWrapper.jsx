import Link from "next/link";
import BlogCard from "./client/BlogCard";
import Fade from "@/lib/component/animation/Fade";

function BlogWrapper({ blogs = [] }) {
    if (!blogs.length) return null;

    const latestBlogs = blogs
        .filter((blog) => blog?.sys?.updatedAt)
        .sort((a, b) => new Date(b.sys.updatedAt) - new Date(a.sys.updatedAt))
        .slice(0, 3);

    return (
        <section id="blogs" className="px-5 md:px-10">
            {/* Header */}
            <Fade className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-primary">
                    Latest{" "}
                    <em className="font-normal italic text-zinc-400">
                        insights.
                    </em>
                </h2>
                <Link
                    href="/blogs"
                    className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-primary transition-colors pb-1"
                >
                    <span>View all articles</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </Fade>

            {/* Grid */}
            <Fade
                stagger={0.15}
                direction="up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {latestBlogs.map((blog) => (
                    <BlogCard key={blog.sys.id} blog={blog} />
                ))}
            </Fade>
        </section>
    );
}

export default BlogWrapper;

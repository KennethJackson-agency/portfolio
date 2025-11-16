/* Internal Animation Component */
import Fade from "@/lib/component/animation/Fade";

/* Next.js Routing */
import Link from "next/link";

function Blogs({ blogs = [] }) {
    if (!blogs.length) return null;

    return (
        <div className="flex flex-wrap justify-center gap-14">
            {blogs.map((blog) => {
                // Randomly choose direction and duration for each blog card animation
                const duration = 0.6 + Math.random() * 0.6; // duration between 0.6s to 1.2s
                const delay = Math.random() * 0.3; // delay between 0s to 0.3s

                return (
                    <Fade key={blog.sys.id} duration={duration} delay={delay}>
                        <Link
                            href={`/blogs/${blog.fields.slug}`}
                            className="group relative flex flex-col gap-4 w-[375px]"
                        >
                            <div className="relative w-[375px]">
                                <p className="opacity-0 group-hover:opacity-100 absolute bottom-10 group-hover:bottom-5 left-10 group-hover:left-5 bg-white text-xs capitalize px-3 py-2 rounded-2xl w-max transition-all duration-300">
                                    {blog.fields.author.fields.name}
                                </p>
                                <img
                                    src={
                                        "https:" +
                                        blog.fields.thumbnail.fields.file.url
                                    }
                                    alt="thumbnail"
                                    className="w-[375px] h-[225px] rounded-xl object-cover transition-all duration-300 group-hover:scale-105"
                                    width={375}
                                    height={225}
                                />
                            </div>
                            <div className="space-y-1 w-[375px]">
                                <p className="text-base md:text-[1.25rem] font-medium line-clamp-2">
                                    {blog.fields.title}
                                </p>
                                <p className="text-sm text-zinc-500 line-clamp-2">
                                    {blog.fields.description}
                                </p>
                            </div>
                        </Link>
                    </Fade>
                );
            })}
        </div>
    );
}

export default Blogs;

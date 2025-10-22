import { getReadingTime } from "@/lib/common/helper/getReadingTime";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

/* Assets */
import { motion, AnimatePresence } from "framer-motion";

function Blogs({ blogs = [] }) {
    if (!blogs.length) return null;
    console.log(blogs);
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={JSON.stringify(blogs.map((b) => b.sys.id))}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-wrap justify-center gap-10"
            >
                {blogs.map((blog) => (
                    <Link
                        href={`/singleBlog/${blog.fields.slug}`}
                        key={blog.sys.id}
                        className="group relative flex flex-col gap-4 w-[400px]"
                    >
                        <div className="relative">
                            <p className="opacity-0 group-hover:opacity-100 absolute bottom-10 group-hover:bottom-5 left-10 group-hover:left-5 bg-white text-xs capitalize px-3 py-2 rounded-2xl w-max duration-300">
                                {blog.fields.author.fields.name}
                            </p>
                            <Image
                                src={
                                    "https:" +
                                    blog.fields.thumbnail.fields.file.url
                                }
                                width={1920}
                                height={1080}
                                className="w-[400px] h-[250px] rounded-2xl"
                                alt="thumbnail"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex gap-2">
                                {blog.fields.tag.slice(0, 2).map((tag, i) => (
                                    <p
                                        key={i}
                                        className="text-zinc-500 text-xs capitalize px-3 py-1 bg-zinc-100 rounded-lg w-max"
                                    >
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            <div className="space-y-1">
                                <p className="text-base md:text-[1.25rem] font-medium line-clamp-2">
                                    {blog.fields.title}
                                </p>
                                <p className="text-sm text-zinc-500 line-clamp-2">
                                    {blog.fields.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-[0.85rem] text-zinc-600">
                                <p>
                                    {moment(blog.sys.createdAt).format(
                                        "MMMM D, YYYY"
                                    )}
                                </p>
                                <div className="bg-zinc-300 w-1 h-1 rounded-full"></div>
                                <p>{getReadingTime(blog.fields.content)}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 group-hover:gap-4 duration-300 w-max">
                                <p className="text-sm">Read more</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}

export default Blogs;

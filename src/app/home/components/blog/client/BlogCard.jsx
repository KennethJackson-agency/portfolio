"use client";

import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import { getReadingTime } from "@/lib/common/helper/getReadingTime";
import { trackEvent } from "@/lib/global/ga/gtagEvents";

function BlogCard({ blog }) {
    return (
        <Link
            href={`/blogs/${blog.fields.slug}`}
            onClick={() =>
                trackEvent({
                    action: `click_blog_${blog.fields.slug}`,
                    category: "Blog",
                    label: blog.fields.title,
                })
            }
            className="group flex flex-col gap-4"
        >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-2xl aspect-video bg-zinc-100 relative">
                <Image
                    src={"https:" + blog.fields.thumbnail.fields.file.url}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    alt={blog.fields.title}
                />
                <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                    <span className="text-xs">↗</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-base md:text-lg leading-snug text-primary line-clamp-2">
                        {blog.fields.title}
                    </h3>
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                    {blog.fields.description}
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mt-1">
                    <span>{moment(blog.sys.createdAt).format("MMM D, YYYY")}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span>{getReadingTime(blog.fields.content)}</span>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;

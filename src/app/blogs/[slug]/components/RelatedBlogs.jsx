/* Next.js Components */
import Image from "next/image";
import Link from "next/link";

/* External Libraries */
import moment from "moment";

/* Utility Functions */
import { getReadingTime } from "@/lib/common/helper/getReadingTime";

export default function RelatedBlogs({ relatedBlogs }) {
    if (!relatedBlogs || !relatedBlogs.length) return null;

    return (
        <section className="w-full 2xl:max-w-[90rem] flex justify-center px-5 md:px-10 pt-20">
            <div className="flex flex-col gap-10 w-full max-w-[1180px]">
                <p className="text-2xl md:text-4xl font-semibold">
                    You might also like
                </p>
                <div className="flex flex-wrap gap-10 justify-start">
                    {relatedBlogs.map(
                        ({
                            id,
                            slug,
                            thumbnailUrl,
                            updatedAt,
                            title,
                            content,
                            authorName,
                        }) => (
                            <Link
                                key={id}
                                href={`/blogs/${slug}`}
                                className="group flex flex-col gap-3 w-[350px] overflow-hidden"
                            >
                                <div className="relative">
                                    <div className="opacity-0 group-hover:opacity-100 absolute top-10 group-hover:top-5 right-10 group-hover:right-5 bg-white p-3 rounded-full w-max transition-all duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                            />
                                        </svg>
                                    </div>
                                    <p className="opacity-0 group-hover:opacity-100 absolute bottom-10 group-hover:bottom-5 left-10 group-hover:left-5 bg-white text-xs capitalize px-3 py-2 rounded-2xl w-max transition-all duration-300">
                                        {authorName}
                                    </p>
                                    <Image
                                        src={thumbnailUrl}
                                        width={1920}
                                        height={1080}
                                        className="w-[350px] h-[200px] rounded-2xl object-cover"
                                        alt="thumbnail"
                                        priority={true}
                                    />
                                </div>
                                <div className="space-y-2 text-left">
                                    <p className="font-medium text-[1.25rem] line-clamp-2">
                                        {title}
                                    </p>
                                    <div className="flex items-center gap-2 text-[0.85rem] text-zinc-600">
                                        <p>
                                            {moment(updatedAt).format(
                                                "MMMM D, YYYY"
                                            )}
                                        </p>
                                        <div className="bg-zinc-300 w-1 h-1 rounded-full" />
                                        <p>{getReadingTime(content)}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

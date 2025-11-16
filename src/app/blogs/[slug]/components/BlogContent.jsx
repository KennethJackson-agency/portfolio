"use client";
/* Next.js Image Component */
import Image from "next/image";

/* External Libraries */
import moment from "moment";

/* Utility Functions */
import { getReadingTime } from "@/lib/common/helper/getReadingTime";

/* React Hooks */
import { useState } from "react";

/* Internal Components */
import MarkdownRenderer from "@/lib/component/markdown/MarkdownRenderer";

function BlogContent({
    description,
    content,
    referenceList,
    authorName,
    authorRole,
    authorProfileImageUrl,
    blogCreatedAt,
}) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr_18rem] gap-10 w-full md:w-3/4 lg:w-full px-5 sm:px-10 max-w-[80rem] h-full mx-auto">
            <aside className="hidden md:flex flex-row lg:flex-col items-center lg:items-start gap-10 lg:gap-4 sticky top-24">
                <div>
                    <p className="text-sm text-zinc-500">Contributor</p>
                    <div className="flex gap-2 items-center">
                        <Image
                            src={authorProfileImageUrl}
                            width={1920}
                            height={1080}
                            alt={authorName}
                            className="w-[2rem] h-[2rem] rounded-full"
                        />
                        <div>
                            <p className="font-medium capitalize">
                                {authorName}
                            </p>
                            <p className="text-sm text-zinc-500">
                                {authorRole}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-zinc-500">Published At</p>
                    <p className="text-sm">
                        {moment(blogCreatedAt).format("MMMM D, YYYY")}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-zinc-500">Reading Time</p>
                    <p className="text-sm">{getReadingTime(content)}</p>
                </div>
            </aside>

            <main className="markdown w-full text-zinc-800">
                <p className="font-medium mb-8">{description}</p>
                <MarkdownRenderer content={content} />
            </main>

            {referenceList.length > 0 && (
                <aside className="hidden md:flex flex-col gap-3 sticky top-24 self-start bg-zinc-50 rounded-2xl p-5 h-fit">
                    <p className="font-semibold text-lg">Reference</p>
                    <div className="flex flex-col gap-2">
                        {referenceList.map(
                            ({ fields: { referenceUrl, title } }, i) => (
                                <a
                                    key={i}
                                    href={referenceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm capitalize hover:text-blue-500 transition-colors duration-200"
                                >
                                    {title}
                                </a>
                            )
                        )}
                    </div>
                </aside>
            )}
        </div>
    );
}

export default BlogContent;

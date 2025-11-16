"use client";

export default function BlogHeader({ tagList, titleText }) {
    return (
        <div className="flex flex-col items-center space-y-5 px-5 md:px-10 w-full max-w-[70rem]">
            <div className="space-y-3">
                <h1 className="text-xl sm:text-4xl font-medium text-center mx-auto leading-snug w-full">
                    {titleText}
                </h1>
            </div>
            <div className="flex gap-2">
                {tagList.slice(0, 2).map((tag, i) => (
                    <p
                        key={i}
                        className="text-blue-500 text-sm capitalize px-3 py-1 border border-gray-100 rounded-full w-max"
                    >
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
}

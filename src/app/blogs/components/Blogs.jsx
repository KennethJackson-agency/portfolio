"use client";

import MagazineBlogCard from "./MagazineBlogCard";

function Blogs({ blogs = [] }) {
    if (!blogs.length) return null;

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-14">
            {blogs.map((blog, i) => (
                <div key={blog.sys.id} className="break-inside-avoid mb-8">
                    <MagazineBlogCard blog={blog} index={i} />
                </div>
            ))}
        </div>
    );
}

export default Blogs;

import { CACHE_TIME } from "@/config/config";
import { createClient } from "contentful";

export const revalidate = CACHE_TIME;

function checkEnv() {
    if (
        !process.env.CONTENTFUL_SPACE_ID ||
        !process.env.CONTENTFUL_ACCESS_TOKEN
    ) {
        throw new Error(
            "Missing Contentful ENV variables. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN."
        );
    }
}

const getClient = () => {
    checkEnv();
    return createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
};

export async function fetchEntries({ contentType, slug, limit, order }) {
    try {
        const client = getClient()
        const query = {
            content_type: contentType,
            limit: limit || 1000,
            order: order || "-sys.createdAt",
        };

        if (slug) query["fields.slug"] = slug;

        const res = await client.getEntries(query);
        return res.items;
    } catch (error) {
        console.error("Contentful fetch error:", error);
        return [];
    }
}

export const contentfulApi = {
    getProjects: () => fetchEntries({ contentType: "project" }),
    getAbouts: () => fetchEntries({ contentType: "about" }),
    getFaqs: () => fetchEntries({ contentType: "faq" }),
    getServices: () => fetchEntries({ contentType: "service" }),
    getStats: () => fetchEntries({ contentType: "stats" }),
    getClients: () => fetchEntries({ contentType: "client" }),
    getTestimonies: () => fetchEntries({ contentType: "testimony" }),
    getBlogs: () => fetchEntries({ contentType: "blog" }),

    getProjectBySlug: (slug) =>
        fetchEntries({ contentType: "project", slug }).then(
            (items) => items[0] || null
        ),

    getBlogBySlug: (slug) =>
        fetchEntries({ contentType: "blog", slug }).then(
            (items) => items[0] || null
        ),
};

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

export async function fetchEntries({ contentType, slug, limit, order, include }) {
    try {
        const client = getClient();
        const query = {
            content_type: contentType,
            limit: limit || 1000,
            order: order || "-sys.createdAt",
            include: include || 1,
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
    // About & Members
    getAbouts: () => fetchEntries({ contentType: "about", include: 2 }),
    getMembers: () => fetchEntries({ contentType: "member" }),

    // Blog (include author & reference as linked entries)
    getBlogs: () => fetchEntries({ contentType: "blog", include: 2 }),
    getBlogBySlug: (slug) =>
        fetchEntries({ contentType: "blog", slug, include: 2 }).then(
            (items) => items[0] || null
        ),
    getAuthors: () => fetchEntries({ contentType: "author" }),
    getReferences: () => fetchEntries({ contentType: "reference" }),

    // Projects
    getProjects: () => fetchEntries({ contentType: "project" }),
    getProjectBySlug: (slug) =>
        fetchEntries({ contentType: "project", slug }).then(
            (items) => items[0] || null
        ),

    // Services & FAQ
    getServices: () => fetchEntries({ contentType: "service" }),
    getServicesGrid: () => fetchEntries({ contentType: "service", order: "sys.createdAt" }),
    getFaqs: () => fetchEntries({ contentType: "faq" }),

    // Process Steps
    getProcesses: () => fetchEntries({ contentType: "process", order: "sys.createdAt" }),

    // Clients
    getClients: () => fetchEntries({ contentType: "client" }),

    // Testimonies
    getTestimonies: () => fetchEntries({ contentType: "testimony" }),
    getTestimonyLists: () => fetchEntries({ contentType: "testimonyList", include: 2 }),

    // Stats & Social Media
    getStats: () => fetchEntries({ contentType: "stats" }),
    getSocialMedias: () => fetchEntries({ contentType: "socialMedia" }),
};

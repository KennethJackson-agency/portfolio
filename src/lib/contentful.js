import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
        "❌ Missing Contentful ENV variables. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN"
    );
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getProjects() {
    const res = await client.getEntries({ content_type: "project" });
    return res.items;
}

export async function getAbouts() {
    const res = await client.getEntries({ content_type: "about" });
    return res.items;
}

export async function getFaqs() {
    const res = await client.getEntries({ content_type: "faq" });
    return res.items;
}

export async function getServices() {
    const res = await client.getEntries({ content_type: "service" });
    return res.items;
}

export async function getStats() {
    const res = await client.getEntries({ content_type: "stats" });
    return res.items;
}

export async function getClients() {
    const res = await client.getEntries({ content_type: "client" });
    return res.items;
}


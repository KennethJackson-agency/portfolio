import { createClient } from "contentful";

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


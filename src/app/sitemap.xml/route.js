import { contentfulApi } from "@/lib/global/contentful/contentful";

export async function GET() {
    const baseUrl = "https://kjagency.id";
    const projects = await contentfulApi.getProjects();

    const urls = projects.map((project) => {
        return `
      <url>
        <loc>${baseUrl}/projects/${project.fields.slug}</loc>
        <lastmod>${new Date(project.sys.updatedAt).toISOString()}</lastmod>
      </url>
    `;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls.join("")}
    </urlset>
  `;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

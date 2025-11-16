import { contentfulApi } from "@/lib/global/contentful/contentful";

export async function GET() {
    const baseUrl = "https://kjagency.id";

    const projects = await contentfulApi.getProjects();
    const blogs = await contentfulApi.getBlogs();

    // Map projects to urls
    const projectUrls = projects.map(
        (project) => `
    <url>
      <loc>${baseUrl}/projects/${project.fields.slug}</loc>
      <lastmod>${new Date(project.sys.updatedAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    );

    // Map blogs to urls
    const blogUrls = blogs.map(
        (blog) => `
    <url>
      <loc>${baseUrl}/blogs/${blog.fields.slug}</loc>
      <lastmod>${new Date(blog.sys.updatedAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    );

    const contactUrl = `
    <url>
      <loc>${baseUrl}/contact</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${projectUrls.join("")}
      ${blogUrls.join("")}
      ${contactUrl}
    </urlset>
  `;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

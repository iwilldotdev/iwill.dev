import { getPosts } from "~/lib/posts.server.js";

const DOMAIN_URL = "https://www.iwill.dev";
const currentDate = new Date().toISOString();

export async function loader() {
  const posts = getPosts();

  const staticPages = [
    { path: "/", priority: "1.0" },
    { path: "/feed", priority: "0.8" },
    { path: "/path", priority: "0.8" },
    { path: "/links", priority: "0.8" },
  ];

  const sitemapXml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${DOMAIN_URL}${page.path}</loc>
          <lastmod>${currentDate}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `,
        )
        .join("")}
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${DOMAIN_URL}/feed/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
          <priority>0.7</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>
  `.trim();

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

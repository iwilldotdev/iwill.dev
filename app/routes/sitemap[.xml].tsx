import { getPosts } from "~/lib/posts.server.js";

const DOMAIN_URL = "https://iwill.dev";

export async function loader() {
  const posts = getPosts();

  const sitemapXml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://www.iwill.dev/</loc>
        <lastmod>2025-06-21T16:50:01+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.iwill.dev/path</loc>
        <lastmod>2025-06-21T16:50:01+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.iwill.dev/feed</loc>
        <lastmod>2025-06-21T16:50:01+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.iwill.dev/links</loc>
        <lastmod>2025-06-21T16:50:01+00:00</lastmod>
        <priority>0.80</priority>
      </url>
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

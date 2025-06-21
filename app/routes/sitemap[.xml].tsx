import { getPosts } from "~/lib/posts.server.js";

const DOMAIN_URL = "https://iwill.dev";

export async function loader() {
  const posts = getPosts();

  const sitemapXml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${DOMAIN_URL}/</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${DOMAIN_URL}/feed</loc>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${DOMAIN_URL}/path</loc>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${DOMAIN_URL}/links</loc>
        <priority>0.8</priority>
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

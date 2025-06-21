import type { LoaderFunctionArgs } from "react-router";
import { generatePageImage } from "~/lib/image.server.js";

const titles = {
  index: "iwill.dev",
  path: "Experiência / Projetos - iwill.dev",
  feed: "Feed - iwill.dev",
  links: "Links - iwill.dev",
};

export async function loader({ params }: LoaderFunctionArgs) {
  const title = titles[params.slug as keyof typeof titles] || "iwill.dev";
  const imageBuffer = await generatePageImage({
    title,
  });
  return new Response(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, immutable, no-transform, max-age=31536000",
    },
  });
}

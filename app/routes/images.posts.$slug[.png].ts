import type { LoaderFunctionArgs } from "react-router";
import { generatePostImage } from "~/lib/image.server.js";
import { getPost } from "~/lib/posts.server.js";

export async function loader({ params }: LoaderFunctionArgs) {
  const post = getPost(params.slug!);
  const imageBuffer = await generatePostImage(post);
  return new Response(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, immutable, no-transform, max-age=31536000",
    },
  });
}

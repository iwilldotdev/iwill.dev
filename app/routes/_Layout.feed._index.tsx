import { type LoaderFunctionArgs } from "react-router";
import { BlogCard } from "~/components/blog-card";
import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";
import { getPosts } from "~/lib/posts.server";
import { getPageMetaTags } from "~/lib/utils";
import type { Route } from "./+types/_Layout.feed._index";

export function meta({}: Route.MetaArgs) {
  return getPageMetaTags({
    slug: "feed",
    title: "Feed",
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = getPosts();
  return { posts };
}

export default function Feed({ loaderData }: Route.ComponentProps) {
  return (
    <Container>
      <BlurText
        text="Blog"
        animateBy="letters"
        direction="bottom"
        onAnimationComplete={() => {}}
        className="text-primary-600 !m-0 !mb-10 text-3xl lg:text-5xl"
      />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {loaderData.posts.map((post) => (
          <BlogCard post={post} slug={post.slug!} key={post.slug} />
        ))}
      </div>
    </Container>
  );
}

import type { LoaderFunctionArgs } from "react-router";
import { BlogCard } from "~/components/blog-card";
import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";
import type { PostResumedProps } from "~/types/PostResumedProps";
import type { Route } from "./+types/_Layout.feed";

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page") || "1";
  const posts = (await fetch(
    `https://dev.to/api/articles/latest?username=iwilldev&per_page=10&page=${page}`,
  ).then((res) => res.json())) as PostResumedProps[];
  return { posts };
}

export default function Feed({ loaderData }: Route.ComponentProps) {
  return (
    <Container>
      <BlurText
        text="Feed"
        delay={150}
        animateBy="letters"
        direction="bottom"
        onAnimationComplete={() => {}}
        className="text-primary-600 !m-0 !mb-10 text-3xl lg:text-5xl"
      />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {loaderData.posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}

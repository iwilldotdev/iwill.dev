import { Link } from "react-router";
import type { PostData } from "~/lib/posts.server";

export function BlogCard({ post, slug }: { post: PostData; slug: string }) {
  return (
    <Link
      to={`/feed/${slug}`}
      key={slug}
      className="bg-base-300 relative flex w-full transform flex-col rounded-xl opacity-80 shadow-xl transition-opacity hover:opacity-100"
    >
      <figure>
        <img
          className="aspect-[2/1] w-full rounded-2xl object-cover object-left"
          src={`/images/posts/${slug}.png`}
          alt={post.title}
        />
      </figure>
    </Link>
  );
}

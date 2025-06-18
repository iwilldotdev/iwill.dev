import { Link } from "react-router";
import type { PostResumedProps } from "~/types/PostResumedProps";

export function BlogCard({ post }: { post: PostResumedProps }) {
  return (
    <Link
      to={post.url}
      key={post.id}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-base-300 relative flex w-full transform flex-col rounded-xl opacity-60 shadow-xl transition-opacity hover:opacity-100"
    >
      <figure>
        <img
          className="aspect-[2/1] w-full rounded-2xl object-cover object-left"
          src={post.cover_image || post.social_image}
          alt={post.title}
        />
      </figure>
    </Link>
  );
}

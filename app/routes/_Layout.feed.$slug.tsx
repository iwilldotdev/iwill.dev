import hljs from "highlight.js";
import "highlight.js/styles/github-dark.min.css";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { type LoaderFunctionArgs } from "react-router";
import { Container } from "~/components/layout/container";
import { getPost } from "~/lib/posts.server";
import type { Route } from "./+types/_Layout.feed.$slug";

const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

export async function loader({ params }: LoaderFunctionArgs) {
  const post = getPost(params.slug!);
  const html = marked.parse(post.body!);
  return { ...post, html };
}

export default function Feed({ loaderData: post }: Route.ComponentProps) {
  return (
    <Container>
      <article>
        <h1 className="font-title max-w-[60vw] font-light whitespace-pre-line">
          {post.title}
        </h1>
        <p className="text-sm font-light text-neutral-400">
          Publicado em{" "}
          {new Date(post.date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          por {post.author}
        </p>
        <div
          className="prose lg:prose-lg prose-invert"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Container>
  );
}

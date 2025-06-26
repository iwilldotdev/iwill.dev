import hljs from "highlight.js";
import "highlight.js/styles/github-dark.min.css";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { data, redirect, type LoaderFunctionArgs } from "react-router";
import { Container } from "~/components/layout/container";
import { getPost } from "~/lib/posts.server";
import type { Route } from "./+types/_Layout.feed.$slug.($lang)";

export const meta = ({ data: post }: Route.MetaArgs) => [
  { title: `${post.title} - Feed - iwill.dev` },
  {
    name: "description",
    content: `Publicado em ${new Date(post.date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })} por ${post.author} - ${post.readingTime} minutos de leitura`,
  },
  { name: "author", content: "William Gonçalves" },
  { property: "og:title", content: post.title },
  {
    property: "og:description",
    content: `Publicado em ${new Date(post.date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })} por ${post.author} - ${post.readingTime} minutos de leitura`,
  },
  {
    property: "og:image",
    content: `https://iwill.dev/images/posts/${post.slug}.png`,
  },
  { property: "og:url", content: `https://iwill.dev/feed/${post.slug}` },
  { property: "og:type", content: "article" },
  { property: "og:site_name", content: "iwill.dev" },
  { name: "twitter:title", content: post.title },
  {
    name: "twitter:description",
    content: `Publicado em ${new Date(post.date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })} por ${post.author} - ${post.readingTime} minutos de leitura`,
  },
  {
    name: "twitter:image",
    content: `https://iwill.dev/images/posts/${post.slug}.png`,
  },
  { name: "twitter:url", content: `https://iwill.dev/feed/${post.slug}` },
];

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

export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export async function loader({ params }: LoaderFunctionArgs) {
  const post = getPost(params.slug!, params.lang);
  if (!post) {
    return redirect(`/feed/${params.slug}`);
  }
  const html = marked.parse(post.body!);
  return data({ ...post, html, lang: params.lang || "pt" });
}

export default function Feed({ loaderData: post }: Route.ComponentProps) {
  const postUrl = `https://iwill.dev/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://iwill.dev/images/posts/${post.slug}.png`,
    author: {
      "@type": "Person",
      name: "William Gonçalves",
    },
    publisher: {
      "@type": "Organization",
      name: "iwill.dev",
      logo: {
        "@type": "ImageObject",
        url: "https://iwill.dev/android-chrome-192x192.png",
      },
    },
    datePublished: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
  const isEnglishVersion = post.lang === "en";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Container>
        <article>
          <h1 className="font-title !mb-5 max-w-[60vw] font-light whitespace-pre-line">
            {post.title}
          </h1>
          <p className="font-title mb-4 text-lg font-light text-neutral-200">
            {post.description || ""}
          </p>
          {post.i18n == "en" && (
            <p className="text-sm font-light text-neutral-400">
              This post is also available in{" "}
              <a
                href={`/feed/${post.slug}/en`}
                className="text-blue-500 hover:underline"
              >
                English
              </a>
            </p>
          )}
          <p className="text-sm font-light text-neutral-400">
            {isEnglishVersion ? "Published on" : "Publicado em"}{" "}
            {new Date(post.date).toLocaleDateString(
              isEnglishVersion ? "en-US" : "pt-BR",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}{" "}
            {isEnglishVersion ? "by" : "por"} {post.author} - {post.readingTime}{" "}
            {isEnglishVersion ? "minutes of reading" : "minutos de leitura"}
          </p>
          <div
            className="prose lg:prose-lg prose-invert prose-code:font prose-code:after:content-none prose-code:before:content-none prose-code:bg-primary-800 prose-code:p-px"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Container>
    </>
  );
}

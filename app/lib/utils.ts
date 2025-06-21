import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPageMetaTags({
  title,
  slug,
}: {
  title?: string;
  slug: string;
}) {
  return [
    {
      title: `${title ? `${title} - ` : ""}iwill.dev | Construindo soluções que aproximam pessoas e tecnologias`,
    },
    {
      name: "description",
      content:
        "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático.",
    },

    {
      property: "og:title",
      content: `${title ? `${title} - ` : ""}iwill.dev | Aprendendo e compartilhando a jornada`,
    },
    {
      property: "og:description",
      content:
        "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://iwill.dev" },
    {
      property: "og:image",
      content: `https://iwill.dev/images/pages/${slug}.png`,
    },
    { property: "og:site_name", content: "iwill.dev" },

    { name: "author", content: "William Gonçalves" },
    {
      name: "keywords",
      content:
        "portfolio, frontend, react, typescript, css, desenvolvedor, programação, conteúdo técnico, learn in public",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

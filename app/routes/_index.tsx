
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iwill.dev | Aprendendo e compartilhando a jornada" },
    { name: "description", content: "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático." },

    { property: "og:title", content: "iwill.dev | Aprendendo e compartilhando a jornada" },
    { property: "og:description", content: "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://iwill.dev" },
    { property: "og:image", content: "https://iwill.dev/og-image.png" },
    { property: "og:site_name", content: "iwill.dev" },

    { name: "author", content: "William Gonçalves" },
    { name: "keywords", content: "portfolio, frontend, react, typescript, css, desenvolvedor, programação, conteúdo técnico, learn in public" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}


export default function Home() {
  return <span>Hello, world!</span>;
}

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Container } from "./components/layout/container";
import { FuzzyText } from "./components/react-bits/fuzzy-text";
import { LetterGlitch } from "./components/react-bits/letter-glitch";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "iwill.dev | Construindo soluções que aproximam pessoas e tecnologias",
    },
    {
      name: "description",
      content:
        "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático.",
    },

    {
      property: "og:title",
      content: "iwill.dev | Aprendendo e compartilhando a jornada",
    },
    {
      property: "og:description",
      content:
        "Desenvolvedor front-end aprendendo em público e compartilhando conteúdo técnico prático e didático.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://iwill.dev" },
    { property: "og:image", content: "https://iwill.dev/og-image.png" },
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

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark size-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="prose dark:prose-invert prose-neutral prose-xs lg:prose-xl size-full">
        <div className="absolute inset-0 z-10 size-full">{children}</div>
        <div className="fixed inset-0 size-full opacity-25">
          <LetterGlitch />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Erro";
  let details = "Ocorreu um erro inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Erro";
    details =
      error.status === 404
        ? "A página não foi encontrada."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Container>
      <FuzzyText
        className="origin-top-right scale-50 self-end lg:scale-100"
        fontSize="3rem"
        color="#663399"
      >
        {message}
      </FuzzyText>
      <h3 className="text-tertiary-100 font-light">{details}</h3>
      {stack && (
        <pre className="bg-primary-900 w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </Container>
  );
}

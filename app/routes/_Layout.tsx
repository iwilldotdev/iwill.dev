import { data, Link, Outlet, type LoaderFunctionArgs } from "react-router";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/_Layout";

export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  return data(
    [
      {
        label: "Home",
        path: "/",
        active: pathname === "/",
      },
      {
        label: "Trabalho",
        path: "/path",
        active: pathname === "/path",
      },
      {
        label: "Feed",
        path: "/feed",
        active: pathname === "/feed",
      },
      {
        label: "Links",
        path: "/links",
        active: pathname === "/links",
      },
    ],
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    },
  );
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <header className="fixed bottom-0 z-50 flex h-12 w-full items-center justify-center bg-neutral-900 text-sm lg:top-0 lg:bottom-auto lg:text-base">
        <nav>
          <ul className="!m-0 flex list-none gap-4 !ps-0">
            {loaderData.map((item, index) => (
              <li key={index} className="grid place-items-center px-2 lg:w-28">
                <Link
                  className={cn(
                    "font-light no-underline",
                    item.active && "cursor-default",
                    !item.active &&
                      "opacity-50 hover:font-normal hover:underline",
                  )}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="size-full">
        <Outlet />
      </main>
    </>
  );
}

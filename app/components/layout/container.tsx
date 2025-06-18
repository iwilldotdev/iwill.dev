import type { ElementType } from "react";
import { cn } from "~/lib/utils";

export function Container({
  children,
  className,
  id,
  element = "main",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  element?: ElementType;
}) {
  const Comp = element;
  return (
    <Comp
      id={id}
      className={cn(
        "relative container mx-auto flex min-h-full w-full flex-col gap-4 overflow-x-hidden p-8 pt-8 text-white lg:p-32 lg:pt-32",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

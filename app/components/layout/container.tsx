export function Container({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <main
      id={id}
      className="relative flex min-h-full w-full flex-col gap-4 overflow-x-hidden p-8 pt-8 text-white lg:p-16 lg:pt-32"
    >
      {children}
    </main>
  );
}

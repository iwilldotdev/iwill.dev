export function useScrollIntoView(id: string) {
  const element = document.getElementById(id);
  const handleScroll = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };
  return handleScroll;
}

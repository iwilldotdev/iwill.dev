import fm from "front-matter";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");
const postsDirectoryEn = path.join(process.cwd(), "posts-en");

export type PostData = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  body?: string;
  image?: string;
  author?: string;
  authorImage?: string;
  readingTime?: number;
  slug?: string;
  backgroundImage?: string;
  i18n?: string;
};

export function getPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { attributes } = fm<PostData>(fileContents);
    return {
      ...attributes,
      slug,
    };
  });
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string, lang?: string): PostData | undefined {
  const defaultPath = path.join(postsDirectory, `${slug}.md`);
  const enPath = path.join(postsDirectoryEn, `${slug}.md`);
  const fullPath = lang === "en" ? enPath : defaultPath;
  try {
    try {
      let fileContents = fs.readFileSync(fullPath, "utf8");
      const { attributes, body } = fm<PostData>(fileContents);
      return {
        ...attributes,
        slug,
        body,
        readingTime: calculateReadingTime(body),
      };
    } catch (error) {
      return undefined;
    }
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

function calculateReadingTime(markdownBody: string) {
  const WPM = 75;
  const plainText = markdownBody
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/[#*`~-]/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / WPM);
  return time < 1 ? 1 : time;
}

import { readFileSync } from "fs";
import path from "path";
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";
import type { PostData } from "./posts.server";

const fontFile = path.join(process.cwd(), "public/fonts/Syne-Medium.ttf");
const fontData = readFileSync(fontFile);

const imageFile = path.join(process.cwd(), "public/android-chrome-192x192.png");
const imageFileData = readFileSync(imageFile);
const imageData = `data:image/png;base64,${imageFileData.toString("base64")}`;

export async function generatePostImage(post: PostData) {
  const template = html(`
    <div style="font-family: 'Syne';" class="flex flex-col justify-between w-full h-full bg-neutral-900 text-white p-20">
      <div class="flex flex-col mb-8">
        <img src="${imageData}" alt="Logo" class="w-[60px]" />
        <h1 class="text-6xl font-semibold leading-tight" style="white-space: pre-line;">
          ${post.title}
        </h1>
      </div>
      <div class="flex items-center">
        <span class="text-2xl text-white">
          Publicado em ${new Date(post.date).toLocaleDateString()} por ${post.author}
        </span>
        <div class="flex ml-auto">
          ${post.tags
            .map(
              (tag) => `
            <span class="text-2xl bg-[#a22f9e] rounded-full px-6 py-2 ml-4">${tag}</span>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `);
  const svg = await satori(template as React.ReactNode, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Syne",
        data: fontData,
        weight: 600,
        style: "normal",
      },
    ],
  });
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return pngBuffer;
}

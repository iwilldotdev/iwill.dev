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

const getBgImageData = async (imagePath?: string): Promise<string | null> => {
  if (!imagePath) return null;
  try {
    const response = await fetch(imagePath);
    if (!response.ok) {
      throw new Error(
        `Falha ao buscar imagem: ${response.status} ${response.statusText}`,
      );
    }
    const contentType = response.headers.get("content-type");
    if (!contentType) {
      throw new Error(
        "Não foi possível determinar o content-type da imagem a partir dos cabeçalhos da resposta.",
      );
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");
    return `data:${contentType};base64,${base64Image}`;
  } catch (error) {
    console.error("Erro ao processar imagem de fundo no servidor:", error);
    return null;
  }
};

export async function generatePostImage(post: PostData) {
  const bgImageData = await getBgImageData(post.backgroundImage);
  const template = html(`
    <div style="font-family: 'Syne';" class="relative flex flex-col justify-between w-full h-full bg-neutral-900 text-white p-20">
      ${
        bgImageData
          ? `<img src="${bgImageData}" alt="Background" class="absolute opacity-50 h-[630px] top-0 right-0 rounded-4xl" />`
          : ""
      }
      <div class="flex flex-col mb-8">
        <img src="${imageData}" alt="Logo" class="w-[60px]" />
        <h1 class="text-6xl font-semibold leading-tight" style="white-space: pre-line;">
          ${post.title}
        </h1>
        <p class="text-3xl font-light text-neutral-200">
          ${post.description || ""}
        </p>
      </div>
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="text-2xl text-white">
            Publicado em ${new Date(post.date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })} por ${post.author}
          </span>
          <span class="text-2xl text-white">
            ${post.readingTime} minutos de leitura
          </span>
        </div>
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

export async function generatePageImage({
  title = "iwill.dev",
}: {
  title?: string;
}) {
  const template = html(`
    <div style="font-family: 'Syne';" class="flex flex-col justify-between w-full h-full bg-neutral-900 text-white p-20">
      <div class="flex flex-col mb-8">
        <img src="${imageData}" alt="Logo" class="w-[60px]" />
        <h1 class="text-6xl font-semibold leading-tight" style="white-space: pre-line;">
          ${title}
        </h1>
      </div>
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="text-2xl text-white">
            iwill.dev | Construindo soluções que aproximam pessoas e tecnologias
          </span>
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

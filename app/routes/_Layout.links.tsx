import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MessageCircleCode,
  Music2,
  Phone,
  X,
} from "lucide-react";
import indexImage from "~/assets/images/index.webp";
import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";
import { getPageMetaTags } from "~/lib/utils";
import type { Route } from "./+types/_Layout.links";

export function meta({}: Route.MetaArgs) {
  return getPageMetaTags({
    slug: "links",
    title: "Links",
  });
}

export default function Links() {
  const links = [
    {
      icon: <Phone className="absolute bottom-4 left-4 size-12 opacity-25" />,
      label: "Telefone",
      onClick: () => {
        window.open("tel:+5521965443935", "_blank");
      },
    },
    {
      icon: <Mail className="absolute bottom-4 left-4 size-12 opacity-25" />,
      label: "E-mail",
      onClick: () => {
        window.open("mailto:iwilldev@outlook.com.br", "_blank");
      },
    },
    {
      icon: (
        <MessageCircleCode className="absolute bottom-4 left-4 size-12 opacity-25" />
      ),
      label: "WhatsApp",
      onClick: () => {
        window.open("https://wa.me/5521965443935", "_blank");
      },
    },
    {
      icon: (
        <InstagramIcon className="absolute bottom-4 left-4 size-12 opacity-25" />
      ),
      label: "Instagram",
      onClick: () => {
        window.open("https://instagram.com/iwilldotdev", "_blank");
      },
    },
    {
      icon: (
        <LinkedinIcon className="absolute bottom-4 left-4 size-12 opacity-25" />
      ),
      label: "LinkedIn",
      onClick: () => {
        window.open("https://www.linkedin.com/in/iwilldotdev/", "_blank");
      },
    },
    {
      icon: (
        <GithubIcon className="absolute bottom-4 left-4 size-12 opacity-25" />
      ),
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/iwilldotdev", "_blank");
      },
    },
    {
      icon: <X className="absolute bottom-4 left-4 size-12 opacity-25" />,
      label: "X",
      onClick: () => {
        window.open("https://x.com/iwilldotdev", "_blank");
      },
    },
    {
      icon: <Music2 className="absolute bottom-4 left-4 size-12 opacity-25" />,
      label: "TikTok",
      onClick: () => {
        window.open("https://www.tiktok.com/@iwilldotdev", "_blank");
      },
    },
  ];
  return (
    <Container>
      <BlurText
        text="Links"
        animateBy="letters"
        direction="bottom"
        onAnimationComplete={() => {}}
        className="text-primary-600 !m-0 !mb-10 text-3xl lg:text-5xl"
      />
      <img
        className="!m-0 !ml-auto aspect-square max-h-[30vh] object-contain brightness-75"
        src={indexImage}
        alt="Ilustração digital de um homem com barba cheia e careca, vestindo uma camiseta roxa com um pequeno logotipo branco no peito."
      />
      <div className="my-10 flex flex-wrap justify-center gap-10">
        {links.map((link) => (
          <div
            className="bg-primary-900 hover:bg-primary-800 relative aspect-[2/0.5] w-full basis-[360px] cursor-pointer rounded-2xl object-cover object-left transition-colors"
            onClick={link.onClick}
            key={link.label}
          >
            {link.icon}
            <span className="absolute top-0 right-6 bottom-0 flex items-center justify-center text-4xl text-[clamp(1rem,1.5vw,1.8rem)] font-extralight text-white">
              {link.label}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}

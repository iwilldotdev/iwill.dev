import {
  Code,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MessageCircleCode,
  Phone,
  Send,
} from "lucide-react";
import indexImage from "~/assets/images/index.webp";
import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";

export default function Links() {
  const links = [
    {
      icon: <Phone className="absolute bottom-4 left-4 size-25 opacity-25" />,
      label: "Telefone",
      onClick: () => {
        window.open("tel:+5521965443935", "_blank");
      },
    },
    {
      icon: <Mail className="absolute bottom-4 left-4 size-25 opacity-25" />,
      label: "E-mail",
      onClick: () => {
        window.open("mailto:iwilldev@outlook.com.br", "_blank");
      },
    },
    {
      icon: (
        <MessageCircleCode className="absolute bottom-4 left-4 size-25 opacity-25" />
      ),
      label: "WhatsApp",
      onClick: () => {
        window.open("https://wa.me/5521965443935", "_blank");
      },
    },
    {
      icon: <Send className="absolute bottom-4 left-4 size-25 opacity-25" />,
      label: "Telegram",
      onClick: () => {
        window.open("https://t.me/iwilldev", "_blank");
      },
    },
    {
      icon: (
        <InstagramIcon className="absolute bottom-4 left-4 size-25 opacity-25" />
      ),
      label: "Instagram",
      onClick: () => {
        window.open("https://instagram.com/iwilldev", "_blank");
      },
    },
    {
      icon: (
        <LinkedinIcon className="absolute bottom-4 left-4 size-25 opacity-25" />
      ),
      label: "LinkedIn",
      onClick: () => {
        window.open("https://www.linkedin.com/in/iwilldev/", "_blank");
      },
    },
    {
      icon: (
        <GithubIcon className="absolute bottom-4 left-4 size-25 opacity-25" />
      ),
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/iwilldev", "_blank");
      },
    },
    {
      icon: <Code className="absolute bottom-4 left-4 size-25 opacity-25" />,
      label: "DEVTO",
      onClick: () => {
        window.open("https://dev.to/iwilldev", "_blank");
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
            className="bg-primary-900 hover:bg-primary-800 relative aspect-[2/0.8] w-full basis-[360px] cursor-pointer rounded-2xl object-cover object-left transition-colors"
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

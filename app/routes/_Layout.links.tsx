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
import GlassIcons, {
  type GlassIconsItem,
} from "~/components/react-bits/glass-icons";

export default function Links() {
  const links: GlassIconsItem[] = [
    {
      icon: <Phone />,
      color: "orange",
      label: "Telefone",
      onClick: () => {
        window.open("tel:+5521965443935", "_blank");
      },
    },
    {
      icon: <Mail />,
      color: "red",
      label: "E-mail",
      onClick: () => {
        window.open("mailto:iwilldev@outlook.com", "_blank");
      },
    },
    {
      icon: <MessageCircleCode />,
      color: "green",
      label: "WhatsApp",
      onClick: () => {
        window.open("https://wa.me/5521965443935", "_blank");
      },
    },
    {
      icon: <Send />,
      color: "blue",
      label: "Telegram",
      onClick: () => {
        window.open("https://t.me/iwilldev", "_blank");
      },
    },
    {
      icon: <InstagramIcon />,
      color: "purple",
      label: "Instagram",
      onClick: () => {
        window.open("https://instagram.com/iwilldev", "_blank");
      },
    },
    {
      icon: <LinkedinIcon />,
      color: "blue",
      label: "LinkedIn",
      onClick: () => {
        window.open("https://www.linkedin.com/in/iwilldev/", "_blank");
      },
    },
    {
      icon: <GithubIcon />,
      color: "gray",
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/iwilldev", "_blank");
      },
    },
    {
      icon: <Code />,
      color: "red",
      label: "DEVTO",
      onClick: () => {
        window.open("https://dev.to/iwilldev", "_blank");
      },
    },
  ];
  return (
    <Container>
      <div className="m-0 mt-auto w-5/6 text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.5] font-light whitespace-pre-line lg:w-2/3">
        Links
      </div>
      <img
        className="!m-0 aspect-square max-h-[30vh] object-contain brightness-75"
        src={indexImage}
        alt="Ilustração digital de um homem com barba cheia e careca, vestindo uma camiseta roxa com um pequeno logotipo branco no peito."
      />
      <GlassIcons items={links} />
    </Container>
  );
}

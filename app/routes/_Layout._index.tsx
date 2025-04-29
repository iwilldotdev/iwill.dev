import { ChevronDown } from "lucide-react";
import indexImage from "~/assets/images/index.webp";
import logoImage from "~/assets/images/logo.webp";
import moovitOdiaImage from "~/assets/images/moovit-odia.webp";
import programmingImage from "~/assets/images/programming.jpeg";
import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";
import { ScrollReveal } from "~/components/react-bits/scroll-reveal";
import TiltedCard from "~/components/react-bits/tilted-card";
import { Button } from "~/components/ui/button";
import { useScrollIntoView } from "~/hooks/useScrollIntoView";

export default function Home() {
  return (
    <>
      <Container element="section">
        <div className="absolute inset-0 z-0 size-full">
          <img
            className="absolute right-0 bottom-0 !m-0 max-h-full origin-bottom-right scale-90 brightness-75"
            src={indexImage}
            alt="Ilustração digital de um homem com barba cheia e careca, vestindo uma camiseta roxa com um pequeno logotipo branco no peito."
          />
        </div>
        <div className="flex items-center gap-4 lg:gap-8">
          <img
            className="!m-0 w-16 lg:w-32"
            src={logoImage}
            alt="Logotipo em fundo roxo com bordas arredondadas. No canto inferior direito, há um ícone branco composto por quatro círculos interligados, lembrando balões de fala ou conexões, formando a letra W."
          />
          <BlurText
            text="iwill.dev"
            delay={150}
            animateBy="letters"
            direction="bottom"
            onAnimationComplete={() => {}}
            className="text-primary-600 !m-0 text-5xl lg:text-9xl"
          />
        </div>
        <ScrollReveal textClassName="w-5/6 whitespace-pre-line lg:w-2/3 !m-0">
          {`
            Construindo soluções que aproximam pessoas e tecnologias.
          `}
        </ScrollReveal>
        <Button
          variant="default"
          size="icon"
          className="absolute bottom-16 origin-bottom-left scale-125 rounded-full"
          onClick={() => useScrollIntoView("sobre")()}
        >
          <ChevronDown />
        </Button>
      </Container>
      <Container id="sobre" className="overflow-hidden" element="section">
        <ScrollReveal textClassName="w-full whitespace-pre-line lg:w-2/3 !m-0 [&>*]:!m-0">
          {`
              Oi! Eu sou o William Gonçalves 👋

              Desenvolvedor Web apaixonado por criar experiências digitais que unem tecnologia, design e propósito. 🎯

              Com experiência em Front-End moderno (React, Vue, TypeScript) e um carinho especial por Design Systems, ajudo produtos a se tornarem mais bonitos, eficientes e humanos. ✨
              
              Nos bastidores, venho expandindo minha atuação para o universo do Back-End, construindo uma visão mais completa do desenvolvimento de produtos. 🛠️

              Além dos códigos e interfaces, sou pai, flamenguista e entusiasta da vida criativa. 🎨
            `}
        </ScrollReveal>
      </Container>
      <Container id="sobre" className="overflow-hidden" element="section">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="mx-auto aspect-square w-[70vw] xl:w-[40vw] 2xl:w-[30vw]">
            <TiltedCard
              imageSrc={moovitOdiaImage}
              altText={`Captura de tela mostrando uma aplicação de mapas de transporte público do Rio de Janeiro, com destaque para opções como Metrô Rio, SuperVia e BRT. Há também uma reprodução de uma notícia do jornal "O Dia" sobre o Moovit disponibilizando informações de transporte em parceria com o site Karioka.rio.`}
              captionText="Conectando o Rio: mobilidade urbana e tecnologia. 🚆🚌"
              rotateAmplitude={5}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <ScrollReveal textClassName="w-full whitespace-pre-line !m-0 [&>*]:!m-0 text-right">
            {`
                Canhoto da primavera de 88, com todos os clichês possíveis sobre ser um criativo e artista desde a infância. O mapa do céu na minha data de nascimento me garantou intensidade, determinação, não conformidade, espontaneidade, pensamento livre, uma grande imaginação e sensibilidade. Mas isso é uma conversa para o povo místico. 😉

                Anos atrás, trabalhei como designer freelancer, criando marcas, identidades visuais e artes digitais para muitos clientes. Um dos destaques foi o primeiro mapa de transporte público do Rio no aplicativo Moovit, um trabalho que foi até mesmo matéria no "Jornal O Dia", um dos maiores jornais do Rio de Janeiro. 🗺️
              `}
          </ScrollReveal>
        </div>
      </Container>
      <Container id="sobre" className="overflow-hidden" element="section">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
          <ScrollReveal textClassName="w-full whitespace-pre-line !m-0 [&>*]:!m-0">
            {`
                Após uma década no universo da energia segura, com UPSes, grupos geradores e outros sistemas críticos, redescobri minha paixão pela programação. O retorno à tecnologia aconteceu depois de mais de uma década de uma graduação em TI trancada. A partir daí encontrei no desenvolvimento de software o verdadeiro chamado da minha vida. 💻

                Hoje, como desenvolvedor, busco não apenas criar soluções inovadoras, mas também manter o olhar atento ao impacto que a tecnologia tem na vida das pessoas. E, claro, continuo aprendendo e me desafiando a crescer em cada projeto que abraço. 🚀
              `}
          </ScrollReveal>
          <div className="mx-auto aspect-square w-[70vw] xl:w-[40vw] 2xl:w-[30vw]">
            <TiltedCard
              imageSrc={programmingImage}
              altText="Pessoa de barba, óculos e boné cinza, sentada em frente a uma mesa de trabalho com dois monitores, um laptop, teclado mecânico e um microfone de estúdio. A iluminação é suave, com uma luminária ao fundo. Um coração pixelado em tons de laranja e vermelho aparece na imagem, dando um toque descontraído."
              captionText="Foco, café e código. ❤️‍🔥"
              rotateAmplitude={5}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="m-0 mt-auto mb-20 w-5/6 text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.5] font-light whitespace-pre-line lg:w-2/3">
          <p>
            Esse site foi criado com{" "}
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router 7
            </a>{" "}
            e{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS 4
            </a>
            , usando componentes da{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shadcn UI
            </a>{" "}
            e do{" "}
            <a
              href="https://www.reactbits.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Bits
            </a>{" "}
            💕
          </p>
          <p className="mt-4 text-[clamp(0.6rem,1.2vw,1rem)]">
            William Santos Goncalves Consultoria em Tecnologia da Informacao
            LTDA
          </p>
          <p className="mt-4 text-[clamp(0.6rem,1.2vw,1rem)]">
            CNPJ: 52.855.054/0001-32
          </p>
          <p className="mt-4 text-[clamp(0.6rem,1.2vw,1rem)]">
            Rio de Janeiro, Brasil | 21 96544-3935
          </p>
        </div>
      </Container>
    </>
  );
}

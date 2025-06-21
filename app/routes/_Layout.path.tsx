import { Container } from "~/components/layout/container";
import { BlurText } from "~/components/react-bits/blur-text";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "~/components/ui/timeline";
import { getPageMetaTags } from "~/lib/utils";
import type { Route } from "./+types/_Layout.path";

export function meta({}: Route.MetaArgs) {
  return getPageMetaTags({
    slug: "path",
    title: "Experiência / Projetos",
  });
}

export function loader({}) {
  return [
    {
      jobTitle: "Front-End Developer",
      company: "ConstruCode",
      jobType: "Tempo Integral",
      startDate: "mar de 2023",
      endDate: "o momento",
      description: `
        <p>Atuo como Front-End Developer na ConstruCode, liderando a reformulação da arquitetura do front-end de uma plataforma com foco na otimização de processos na construção civil. Iniciei o projeto com Next.js 13+ (App Router) e, após um ano, migrei a plataforma para Remix/React-Router, visando maior performance e escalabilidade. Sou um dos responsáveis pela criação e manutenção do Design System da empresa, utilizando Storybook, Tailwind e Radix-UI, além de garantir a entrega contínua do aplicativo, implementando código, integração e deploy usando pipelines GitLab para máquinas multiambiente (teste, homologação e produção) na Fly.io.</p>
        <ul>
          <li>Lidero a reformulação de arquitetura: Conduzi a migração da plataforma para Next.js e posteriormente para Remix/React-Router, separando as responsabilidades do servidor e cliente para otimizar manutenção e escalabilidade. Adoto uma abordagem MVVM para o front-end, facilitando testes e a evolução do código.</li>
          <li>Responsável pelo Design System: Desenvolvi e mantenho o Design System utilizando Storybook, Tailwind e Radix-UI, garantindo uma interface coesa, acessível e de fácil manutenção.</li>
          <li>Otimizando processos da construção civil: Contribuo para a otimização de obras e processos, com entregas como dashboards de documentos, insights e tarefas, comparador de revisões, diagrama de Gantt para planejamento, gestão de tarefas e apontamentos, entre outras funcionalidades que impactam diretamente a eficiência e produtividade das equipes.</li>
          <li>Crescimento técnico e aprendizado contínuo: Em paralelo às minhas atividades de front-end, estou aprendendo C#/.NET, focando na manutenção de sistemas legados e no desenvolvimento de novas APIs para a plataforma.</li>
        </ul>
        <p>Minha experiência na ConstruCode me permite combinar expertise técnica com soluções inovadoras, otimizando processos e melhorando a eficiência das equipes. Estou continuamente aprimorando minhas habilidades, aplicando novas tecnologias para entregar resultados impactantes e escaláveis.</p>
      `,
    },
    {
      jobTitle: "Developer / Designer",
      company: "Diversos Projetos",
      jobType: "Freelancer",
      startDate: "ago de 2016",
      endDate: "o momento",
      description: `
        <p>Atuando como freelancer, desenvolvo soluções digitais de ponta a ponta, combinando a experiência de programador com a sensibilidade de designer.</p>
        <p>Trabalho principalmente como desenvolvedor front-end, mas também assumi projetos como fullstack, entregando produtos completos — do planejamento à publicação.</p>
        <p>Entre as atividades, destaco:</p>
        <ul>
          <li>Criação de interfaces digitais funcionais e intuitivas.</li>
          <li>Desenvolvimento de websites e aplicações web.</li>
          <li>Construção de marcas e identidades visuais completas.</li>
          <li>Produção de artes digitais e materiais para mídias diversas.</li>
          <li>Colaboração em projetos como designer e desenvolvedor, focando sempre em unir tecnologia e estética para gerar valor real aos clientes.</li>
        </ul>
        <p>Essa trajetória reforçou minha visão de produto, senso de responsabilidade e capacidade de transformar ideias em experiências digitais sólidas e memoráveis.</p>
      `,
    },
    {
      jobTitle: "Frontend Developer",
      company: "Virgo Inc.",
      jobType: "Tempo Integral",
      startDate: "jul de 2022",
      endDate: "fev de 2023",
      description: `
        <p>Atuei como desenvolvedor Front-End, participando da reconstrução de uma aplicação de back-office essencial para o acompanhamento das operações de capital dos clientes. Utilizei tecnologias como Remix, React, Material-UI, Storybook e Vitest, com o foco em criar uma solução robusta e escalável, alinhada aos princípios fundamentais da Web.</p>
        <ul>
          <li>Reengenharia de aplicação: Participei da reconstrução da arquitetura da aplicação, transferindo as regras de negócio e a sanitização de dados para o lado do servidor, o que trouxe mais segurança e escalabilidade para a plataforma.</li>
          <li>Otimização da experiência do usuário (UX): Trabalhei intensivamente para otimizar a interface do usuário, com ênfase em melhorar a acessibilidade, criando uma aplicação mais inclusiva e fácil de usar.</li>
          <li>Redução da carga no front-end: Através da implementação de boas práticas e tecnologias de ponta, conseguimos reduzir significativamente a carga de responsabilidade do front-end, garantindo uma performance mais ágil e eficiente.</li>
          <li>Colaboração e alinhamento de objetivos: Trabalhei em estreita colaboração com as equipes de back-end e produto para garantir que os objetivos da aplicação estivessem alinhados com as necessidades operacionais da empresa e que a experiência final fosse otimizada para o time interno.</li>
        </ul>
        <p>Essa experiência me permitiu aprofundar meu conhecimento em arquiteturas modernas e no desenvolvimento de soluções front-end altamente eficientes, enquanto contribui para uma aplicação que facilita o trabalho diário dos usuários internos da empresa.</p>
      `,
    },
    {
      jobTitle: "Frontend Developer",
      company: "Petlove&Co",
      jobType: "Tempo Integral",
      startDate: "nov de 2021",
      endDate: "jul de 2022",
      description: `
        <p>Atuei como desenvolvedor Front-End na unidade de negócios de Saúde da Petlove, contribuindo para o aprimoramento de um produto estratégico voltado para o mercado de planos de saúde para pets. Utilizei Vue, Nuxt e JavaScript, além de adotar conceitos modernos como microfrontends, desempenho e escalabilidade, e aplicar boas práticas de desenvolvimento.</p>
        <ul>
          <li>Desenvolvimento de plataforma de vendas online: Participei da construção de uma plataforma de vendas online, permitindo que representantes comerciais emitissem propostas de planos de saúde para pets, otimizando a experiência tanto para os vendedores quanto para os clientes finais.</li>
          <li>Entrega de legado significativo: Minha última entrega na Petlove foi a criação da primeira landing page da Petlove Saúde, um marco importante para a unidade de negócios e um legado duradouro no produto.</li>
          <li>Colaboração entre equipes e alinhamento com o negócio: Trabalhei em estreita colaboração com as equipes de produto para equilibrar as necessidades do negócio com a experiência do usuário, sempre buscando soluções que agregassem valor tanto para a empresa quanto para os clientes.</li>
        </ul>
        <p>Essa experiência me permitiu aprimorar minhas habilidades em tecnologias de front-end, além de desenvolver uma visão estratégica sobre como a tecnologia pode impactar o crescimento de negócios e a satisfação do cliente.</p>
      `,
    },
    {
      jobTitle: "Frontend Developer",
      company: "Taghos Tecnologia",
      jobType: "Tempo Integral",
      startDate: "jun de 2021",
      endDate: "nov de 2021",
      description: `
        <p>Atuei como desenvolvedor Front-End em um projeto inovador para uma plataforma de streaming e multimídia, com foco na criação de uma ferramenta OTT (Over-the-top) que permitia a clientes gerenciar vídeos gravados e transmissões ao vivo de forma simples e eficiente. Durante essa experiência, pude aplicar e aprofundar meus conhecimentos em desenvolvimento utilizando React, TypeScript, Apollo/GraphQL, Cypress, Formik/Yup e MaterialUI.</p>
        <ul>
          <li>Desenvolvimento de soluções escaláveis e de alta qualidade: Contribuí para a implementação de funcionalidades críticas utilizando melhores práticas de Clean Code e princípios SOLID.</li>
          <li>Aplicação de boas práticas de arquitetura: Implementei conceitos de composição e reutilização de código e componentes, assegurando que a plataforma fosse modular, extensível e fácil de manter, o que facilitou a integração de novas funcionalidades no futuro.</li>
          <li>Trabalho em equipe e colaboração: Colaborei de forma eficaz com a equipe para garantir que os requisitos do projeto fossem atendidos dentro dos prazos estabelecidos, sempre mantendo a qualidade do código e a experiência do usuário como prioridades.</li>
        </ul>
        <p>Essa experiência foi um marco importante em minha jornada profissional, permitindo-me aprimorar minhas habilidades técnicas e, ao mesmo tempo, contribuir para o desenvolvimento e crescimento de outros membros da equipe.</p>
      `,
    },
    {
      jobTitle:
        "Technical Consultant / Supervisor / Coordinator / Leader / Partner",
      company: "Setor de Energia (diversas empresas)",
      jobType: "Tempo Integral",
      startDate: "mar de 2006",
      endDate: "dez de 2019",
      description: `
        <p>Minha carreira começou em 2006, como estagiário, no segmento de energia segura e missões críticas, e ao longo de mais de uma década, construí uma sólida trajetória profissional em um mercado altamente técnico e exigente. Ao longo dos anos, adquiri uma profunda expertise em sistemas de energia, incluindo No-Breaks (UPS), Grupos Geradores, Estabilizadores, Retificadores e Baterias, além de uma vasta experiência em gestão de contratos de manutenção e implementação de soluções de energia.</p>
        <ul>
          <li>Gestão de contratos e relacionamento com clientes estratégicos: Conduzi projetos e contratos com grandes empresas, como RIOgaleão, Ampla (Enel), ONS, XP Investimentos, Siemens, Lojas Americanas, entre outras, garantindo a entrega de soluções técnicas de alta performance e a continuidade das operações de missão crítica.</li>
          <li>Instalação e comissionamento de sistemas de energia: Liderei a instalação e comissionamento de sistemas para clientes como Infraero, ONS, Transpetro, Tetrapak, Coca-Cola Andina, Santander, entre outros, gerenciando equipes e assegurando a qualidade e a segurança dos projetos.</li>
          <li>Desenvolvimento de habilidades de liderança: Ao longo dessa jornada, evoluí para funções de liderança, coordenando equipes técnicas e gerenciando grandes projetos, o que consolidou minha capacidade de tomar decisões estratégicas em ambientes desafiadores e de alta complexidade.</li>
        </ul>
        <p>Essa trajetória no setor de energia não apenas solidificou minha autoridade no campo técnico, mas também me preparou para um futuro de sucesso no mercado de tecnologia, onde continuo a expandir minhas habilidades e oferecer soluções inovadoras.</p>
      `,
    },
  ];
}

export default function TimelineDemo({ loaderData }: Route.ComponentProps) {
  return (
    <Container element="section">
      <BlurText
        text="Experiência / Projetos"
        animateBy="letters"
        direction="bottom"
        onAnimationComplete={() => {}}
        className="text-primary-600 !m-0 !mb-10 text-3xl lg:text-5xl"
      />
      <Timeline className="lg:w-2/3">
        {loaderData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <details className="group m-0">
                <summary className="m-0 cursor-pointer marker:content-['']">
                  <TimelineTitle>{item.jobTitle}</TimelineTitle>
                  <TimelineTitle className="text-[clamp(0.8rem,2vw,1.6rem)] font-light">
                    {item.company} | {item.startDate} - {item.endDate} (
                    {item.jobType})
                  </TimelineTitle>
                  <TimelineTitle className="text-primary-300 details-link text-[clamp(0.8rem,2vw,1.6rem)] font-light group-open:hidden">
                    Ver mais
                  </TimelineTitle>
                </summary>
                <TimelineDescription
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </details>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { GithubLogo } from "@phosphor-icons/react";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  externalLink?: string;
}

const projects: Project[] = [
  {
    title: "Site da Blue",
    description:
      "Site principal do plano de saúde Blue, com informações sobre o plano, rede credenciada, produtos, empresas parceiras e outras informações importantes para os clientes.",
    techs: ["Next", "TS", "Tailwind", "ShadCN", "FramerMotion"],
    externalLink: "https://www.saudeblue.com/"
  },
  {
    title: "Seja um Corretor",
    description:
      "Site destinado ao cadastro de novos corretores junto com a Blue. Explicação breve sobre a Blue, o porque escolher a Blue, benefícios de ser um corretor, e formulário de cadastro.",
    techs: ["Next", "TS", "MUI", "React Hook Form", "Zod"],
    externalLink: "https://bluenacional.com/"
  },
  {
    title: "Rede Credenciada",
    description:
      "Site da Rede Credenciada da Blue, com informações sobre a rede, busca de médicos, hospitais, laboratórios e outros prestadores de serviço.",
    techs: ["Next", "TS", "MUI", "Playwright", "Zustand"],
    externalLink: "https://rede.bluenacional.com/"
  },
  {
    title: "API Gym Checkin",
    description:
      "Uma API para gerenciar checkins de alunos em uma academia, com autenticação JWT, trabalhando a partir de use cases, utilizando patterns como Repository, SOLID, Factory, entre outros. Também foram implementados testes unitários e de integração.",
    techs: ["Fastify", "Prisma", "Typescript", "Vitest", "JWT"],
    github: "https://github.com/glsvitoria/api-gym-checkin",
  },
  {
    title: "Find Weather",
    description:
      "Uma aplicação que o intuito principal é mostrar a previsão do tempo atual de acordo com a sua localização, também irá buscar seu endereço de acordo com o CEP e é possível conectar com o Spotify para ouvir músicas pelo site.",
    techs: ["Next", "TS", "Tailwind", "Spotify API", "Yup"],
    github: "https://github.com/glsvitoria/find-weather",
    externalLink: "https://glsvitoria-weather.vercel.app/",
  },
  {
    title: "API Daily Diet",
    description:
      "Uma API simples para poder reforçar os conhecimentos no desenvolvimento de APIs REST que irá poder criar usuários e refeições utilizando um database local.",
    techs: ["Fastify", "Knex", "Typescript", "Vitest", "Sqlite3"],
    github: "https://github.com/glsvitoria/daily-diet-api",
  },
  {
    title: "Laboratório de Design System",
    description:
      "Um projeto para fazer o aprendizado de Design System, com a criação de componentes e documentação deles, utilizando o Storybook.",
    techs: ["React", "Typescript", "Storybook", "Tailwind"],
    github: "https://github.com/glsvitoria/lab-ds-rs",
    externalLink: "https://glsvitoria.github.io/lab-ds-rs/",
  },
  {
    title: "API REST NodeJS",
    description:
      "Uma api para fazer o gerenciamento de transações, bem simples, com o intuito maior de reforçar o aprendizado de NodeJS, Typescript e Fastify.",
    techs: ["Typescript", "Fastify", "Knex", "Vitest", "PG"],
    github: "https://github.com/glsvitoria/ignite2022-api-rest-nodejs",
  },
  {
    title: "Rocket Q",
    description:
      "Um site que possibilita aos usuários criar salas com códigos únicos. Dentro das salas, os participantes podem enviar perguntas anônimas ao dono, que tem controle sobre elas usando uma senha de autenticação para marcá-las como lidas ou excluí-las.",
    techs: ["HTML", "JS", "Node", "Express", "SQlite3"],
    github: "https://github.com/glsvitoria/nlw6-trilha-discover",
  },
  {
    title: "My Last Portfolio",
    description:
      "Meu antigo portfólio em inglês com algumas informações de projetos feitos por mim, stacks e o principal que foi utilizar o Next para integrar com o Prismic CMS para fazer os posts",
    techs: ["Next", "Typescript", "Tailwind", "Prismic CMS"],
    github: "https://github.com/glsvitoria/my-site-w-NextJS",
    externalLink: "https://glsvitoria-3ftqpgdmg-glsvitoria.vercel.app/",
  },
  {
    title: "Financial Control",
    description:
      "Um site para fazer o controle financeiro pessoal, onde o usuário pode adicionar entradas e saídas de dinheiro, e ver o saldo atual.",
    techs: ["Typescript", "React", "Styled Components", "Jest"],
    github: "https://github.com/glsvitoria/netflix-clone",
    externalLink: "https://glsvitoria.github.io/netflix-clone/",
  },
  {
    title: "Netflix Clone",
    description:
      "Um clone da interface da Netflix, focando apenas na identidade visual com filmes, séries, carrossel e navegação entre categorias.",
    techs: ["HTML", "CSS", "Javascript", "JQuery"],
    github: "https://github.com/glsvitoria/netflix-clone",
    externalLink: "https://glsvitoria.github.io/netflix-clone/",
  },
  {
    title: "Coffee Delivery",
    description:
      "Um e-commerce para vender variados tipos de cafés em que o usuário seleciona os cafés desejados, preenche seus dados pessoais e forma de pagamento, e confirma a compra, simulando que o pedido será entregue em sua casa.",
    techs: ["React", "Typescript", "TailwindCSS", "Unform"],
    github: "https://github.com/glsvitoria/ignite-react-2022-challenges",
    externalLink: "https://coffee-delivery-glsvitoria.vercel.app/",
  },
  {
    title: "ToDo List",
    description:
      "Um site para fazer a organização de demandas a se fazer no estilo todo-list, podendo adicionar itens pendendo, marcar eles como concluídos e remover depois.",
    techs: ["React", "Typescript", "TailwindCSS", "SASS"],
    github:
      "https://github.com/glsvitoria/ignite-react-2022-challenges/tree/main/Desafio%201%20-%20Praticando%20conceitos/pratice-concepts",
    externalLink: "https://todo-list-glsvitoria.vercel.app/",
  },
  {
    title: "Interest Destination",
    description:
      "Uma interface web para marcar Destinos de Interesse do usuário e fazer mapeamento de uma viagem, podendo adicionar e remover destinos.",
    techs: ["React", "Typescript", "TailwindCSS", "SASS"],
    github: "https://github.com/glsvitoria/prosel-ally",
    externalLink: "https://interest-destination.vercel.app/",
  },
  {
    title: "Space Travelling",
    description:
      "Um blog de tecnologia em que os posts são trazidos do Github. Quando criamos uma nova issue no Github, ele é automaticamente adicionado ao blog.",
    techs: ["Next", "Typescript", "SASS", "Prismic CMS"],
    github: "https://github.com/glsvitoria/space-travelling",
    externalLink: "https://ignite-reactjs-ifom.vercel.app/",
  },
  {
    title: "Pagamento Fornecedor",
    description:
      "Construção do FrontEnd de uma aplicação de gerenciamento de pagamento de contratos. Web site e Design.",
    techs: ["React", "TS", "MirageJS", "Unform", "Figma"],
    github: "https://github.com/glsvitoria/prosel_vflows",
    externalLink: "https://prosel-vflows.vercel.app/",
  },
  {
    title: "Cápsula do Tempo",
    description:
      "Aplicação de recordação de memórias, onde o usuário poderá adicionar à uma timeline textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.",
    techs: ["Next", "TS", "ReactNative", "Fastify", "Prisma"],
    github: "https://github.com/glsvitoria/nlw-spacetime",
  },
  {
    title: "Meteora",
    description:
      "E-commerce de uma loja de roupas chamada METEORA que possui produtos como: Camisetas, Bolsas, Calçados e entre outros.",
    techs: ["React", "TS", "TailwindCSS", "Swiper"],
    github: "https://github.com/glsvitoria/meteora",
  },
];

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Meu portfólio</h2>

      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.github&& (
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <GithubLogo size={32} color="#FFF" />
                  </a>
                  )}
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowSquareOut size={32} color="#FFF" />
                    </a>
                  )}
                </div>
              </header>

              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techs.map(tech => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}

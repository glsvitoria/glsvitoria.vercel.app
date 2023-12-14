import { Container } from "./styles";

import reactIcon from "../../assets/abilities/react.svg";
import awsIcon from "../../assets/abilities/aws.svg";
import cssIcon from "../../assets/abilities/css.svg";
import dockerIcon from "../../assets/abilities/docker.svg";
import expressIcon from "../../assets/abilities/express.svg";
import figmaIcon from "../../assets/abilities/figma.svg";
import gitIcon from "../../assets/abilities/git.svg";
import githubIcon from "../../assets/abilities/github.svg";
import htmlIcon from "../../assets/abilities/html.svg";
import javascriptIcon from "../../assets/abilities/javascript.svg";
import nextIcon from "../../assets/abilities/next.svg";
import nodejsIcon from "../../assets/abilities/nodejs.svg";
import postgresIcon from "../../assets/abilities/postgres.svg";
import prismaIcon from "../../assets/abilities/prisma.svg";
import tailwindIcon from "../../assets/abilities/tailwind.svg";
import typescriptIcon from "../../assets/abilities/typescript.svg";
import image from "../../assets/image.svg";

import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Me chamo Guilherme Vitória, sou um desenvolvedor que ama poder
            programar. Sou apaixonado em poder desenvolver e criar soluções que
            possam impactar na vida as pessoas e de alguma forma poder
            facilita-lás. Aprimoro minhas habilidades dia após dia no FrontEnd
            Web / Mobile e também na área do Design.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Desenvolvo sites e aplicações utilizando tecnologias como React,
            Next e React Native. Me desafio todos os dias com as ideias que
            chegam e precisam ser convertidas em soluções tecnológicas. A cada
            novo projeto, é mais um passo dado na minha evolução.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Atualmente faço parte da <strong>TITAN</strong>, Empresa Júnior de
            Computação da UFBA. Faço parte da diretoria de desenvolvimento a
            qual estou diretamente ligado a desenvolver novas soluções, ensinar
            meus colegas e também aprender com eles.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={nextIcon} alt="Next" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={tailwindIcon} alt="Tailwind" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={javascriptIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={figmaIcon} alt="Figma" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={nodejsIcon} alt="NodeJS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={expressIcon} alt="Express" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={prismaIcon} alt="Prisma" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={dockerIcon} alt="Docker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={awsIcon} alt="Aws" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={githubIcon} alt="Github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={gitIcon} alt="Git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={postgresIcon} alt="Postgres" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={image} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

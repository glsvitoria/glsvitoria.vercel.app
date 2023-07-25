import { Container } from './styles'
import githubIcon from '../../assets/github-icon.svg'
import externalLinkIcon from '../../assets/external-link-icon.svg'
import ScrollAnimation from 'react-animate-on-scroll'

interface Project {
	title: string
	description: string
	techs: string[]
	github: string
	externalLink?: string
}

const projects: Project[] = [
	{
		title: 'Coffee Delivery',
		description:
			'Um e-commerce para vender variados tipos de cafés em que o usuário seleciona os cafés desejados, preenche seus dados pessoais e forma de pagamento, e confirma a compra, simulando que o pedido será entregue em sua casa.',
		techs: ['React', 'Typescript', 'TailwindCSS', 'Unform'],
		github: 'https://github.com/glsvitoria/ignite-react-2022-challenges',
		externalLink: 'https://coffee-delivery-glsvitoria.vercel.app/',
	},
	{
		title: 'ToDo List',
		description:
			'Um site para fazer a organização de demandas a se fazer no estilo todo-list, podendo adicionar itens pendendo, marcar eles como concluídos e remover depois.',
		techs: ['React', 'Typescript', 'TailwindCSS', 'SASS'],
		github:
			'https://github.com/glsvitoria/ignite-react-2022-challenges/tree/main/Desafio%201%20-%20Praticando%20conceitos/pratice-concepts',
		externalLink: 'https://todo-list-glsvitoria.vercel.app/',
	},
	{
		title: 'Interest Destination',
		description:
			'Uma interface web para marcar Destinos de Interesse do usuário e fazer mapeamento de uma viagem, podendo adicionar e remover destinos.',
		techs: ['React', 'Typescript', 'TailwindCSS', 'SASS'],
		github: 'https://github.com/glsvitoria/prosel-ally',
		externalLink: 'https://interest-destination.vercel.app/',
	},
	{
		title: 'Space Travelling',
		description:
			'Uma interface web para marcar Destinos de Interesse do usuário e fazer mapeamento de uma viagem, podendo adicionar e remover destinos.',
		techs: ['Next', 'Typescript', 'SASS', 'Prismic CMS'],
		github: 'https://github.com/glsvitoria/space-travelling',
		externalLink: 'https://ignite-reactjs-ifom.vercel.app/',
	},
	// Fazer README e colocar favicon
	{
		title: 'Pagamento Fornecedor',
		description:
			'Construção do FrontEnd de uma aplicação de gerenciamento de pagamento de contratos. Web site e Design.',
		techs: ['React', 'TS', 'MirageJS', 'Unform', 'Figma'],
		github: 'https://github.com/glsvitoria/prosel_vflows',
		externalLink: 'https://prosel-vflows.vercel.app/',
	},
	{
		title: 'Cápsula do Tempo',
		description:
			'Aplicação de recordação de memórias, onde o usuário poderá adicionar à uma timeline textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.',
		techs: ['Next', 'TS', 'ReactNative', 'Fastify', 'Prisma'],
		github: 'https://github.com/glsvitoria/nlw-spacetime',
	},
	{
		title: 'Meteora',
		description:
			'E-commerce de uma loja de roupas chamada METEORA que possui produtos como: Camisetas, Bolsas, Calçados e entre outros.',
		techs: ['React', 'TS', 'TailwindCSS', 'Swiper'],
		github: 'https://github.com/glsvitoria/meteora',
	},
]

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
									<a
										href={project.github}
										target="_blank"
										rel="noreferrer"
									>
										<img src={githubIcon} alt="GitHub" />
									</a>
									{project.externalLink && (
										<a
											href={project.externalLink}
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={externalLinkIcon}
												alt="Visitar site"
											/>
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
									{project.techs.map((tech) => (
										<li>{tech}</li>
									))}
								</ul>
							</footer>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</Container>
	)
}

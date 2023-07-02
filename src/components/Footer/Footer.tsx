import { Container } from './styles'

import reactIcon from '../../assets/abilities/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
	return (
		<Container className="footer">
			<a href="/" className="logo">
				<span>G</span>
				<span>Vitória</span>
			</a>
			<div>
				<p>
					Este site foi feito com <img src={reactIcon} /> e muito{' '}
					<span>❤️</span>
				</p>
			</div>

			<div className="social-media">
				<a
					href="https://www.linkedin.com/in/glsvitoria/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedinIcon} alt="Linkedin" />
				</a>

				<a
					href="https://github.com/glsvitoria"
					target="_blank"
					rel="noreferrer"
				>
					<img src={githubIcon} alt="GitHub" />
				</a>

				{/* <a
					href="https://discord.com/channels/@me/673313137595777056"
					target="_blank"
					rel="noreferrer"
				>
					<img src={discordIcon} alt="Discord" />
				</a> */}

				<a
					href="https://www.instagram.com/glsvitoria"
					target="_blank"
					rel="noreferrer"
				>
					<img src={instagramIcon} alt="Instagram" />
				</a>
			</div>
		</Container>
	)
}

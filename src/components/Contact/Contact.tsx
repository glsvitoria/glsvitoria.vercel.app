import { Container } from './styles'
import emailIcon from '../../assets/email-icon.svg'
import whatsappIcon from '../../assets/whatsapp-icon.svg'

export function Contact() {
	return (
		<Container id="contato">
			<header>
				<h2>Entre em contato comigo</h2>
				<p>
					Se você viu o meu potencial ou quer conversar comigo, não exite
					em me mandar uma mensagem.
				</p>
			</header>
			<div className="contacts">
				<div>
					<img src={emailIcon} alt="Email" />
					<a href="mailto:guivitoria.dev@outlook.com">
						guivitoria.dev@outlook.com
					</a>
				</div>
				<div>
					<img src={whatsappIcon} alt="Email" />
					<a
						href="https://wa.me/5571996947677?text=Ol%C3%A1%21+Peguei+esse+n%C3%BAmero+no+seu+portf%C3%B3lio%2C+estaria+dispon%C3%ADvel+para+conversa%3F"
						target="_blank"
						rel="noreferrer"
					>
						(71) 9 9694-7677
					</a>
				</div>
			</div>
		</Container>
	)
}

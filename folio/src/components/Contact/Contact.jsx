import Infos from '../Infos/Infos';
import './Contact.scss';

function Contact() {
	return (
		<section className='contact-container' id='contact'>
			<div className='contact'>
				<svg width={155} height={119} viewBox='0 0 155 119' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g style={{ mixBlendMode: 'difference' }}>
						<path d='M92.2619 0L132.857 57.697L14.7619 57.697L0 64.9091L132.857 64.9091L92.2619 115.394V119L155 61.303L92.2619 0Z' fill='white' />
					</g>
				</svg>
				<a href='mailto:floriandouche@gmail.com' className='contact-me'>
					Contactez <span className='depo'>moi</span>.
				</a>
			</div>
			<Infos />
		</section>
	);
}

export default Contact;

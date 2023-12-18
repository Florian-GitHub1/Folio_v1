import './Infos.scss';
import pdf from '../../assets/pdf/CV.pdf';

function Infos() {
	return (
		<div className='infos'>
			<div className='links'>
				<a href='https://www.linkedin.com/in/florian-douche-b6935a193/' target='_blank' rel='noreferrer'>
					Linkedin
				</a>
				<a href={pdf} target='_blank' rel='noreferrer'>
					Curricullum
				</a>
				<a href='https://github.com/Florian-GitHub1' target='_blank' rel='noreferrer'>
					Github
				</a>
			</div>
		</div>
	);
}

export default Infos;

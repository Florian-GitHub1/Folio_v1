import Infos from '../Infos/Infos';
import './About.scss';

function About() {
	return (
		<div className='about-container' id='apropos'>
			<div className='about'>
				<p>
					<span className='hey'>Hey!</span> Je suis <span className='name'>Florian</span>, <br />
					<span className='job'>développeur front-end junior</span> de <span className='age'> 21 ans.</span> <br />
					<span className='currently'>Actuellement</span> basé en <span className='country'> France</span>.
				</p>
			</div>
			<Infos />
		</div>
	);
}

export default About;

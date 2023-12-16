import SmoothScroll from '../../components/smoothScroll';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';
import Techs from '../../components/Techs/Techs';
import Contact from '../../components/Contact/Contact';

import Interstice from '../../components/Interstice/Interstice';

import './Home.scss';

function Home() {
	const interAbout = 'à propos';
	const interTechs = 'compétences';
	const interContact = 'me contacter';

	return (
		<div className='wrapper'>
			<div className='noise'></div>
			<SmoothScroll>
				<Hero />
				<Projects />
				<Interstice title={interAbout} />
				<About />
				<Interstice title={interTechs} />
				<Techs />
				<Interstice title={interContact} />
				<Contact />
			</SmoothScroll>
		</div>
	);
}

export default Home;

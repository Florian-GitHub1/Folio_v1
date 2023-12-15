import SmoothScroll from '../../components/smoothScroll';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';
import Techs from '../../components/Techs/Techs';
import Contact from '../../components/Contact/Contact';

import './Home.scss';

function Home() {
	return (
		<div className='wrapper'>
			<div className='noise'></div>
			<SmoothScroll>
				<Hero />
				<Projects />
				<About />
				<Techs />
				<Contact />
			</SmoothScroll>
		</div>
	);
}

export default Home;

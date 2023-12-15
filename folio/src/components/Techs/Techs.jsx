import Infos from '../Infos/Infos';
import './Techs.scss';

function Techs() {
	return (
		<div className='techs-container'>
			<div className='techs'>
				<p>
					Je <span className='work'>travail principalement sur </span> <span className='name'>React</span>, <br />
					mais je peux également <span className='work2'>travailler </span>sur <br />
					<span className='technos-alternat'>HTML</span>, <span className='technos-alternat'>CSS</span> et <span className='technos-alternat'>JS </span>également.
				</p>
			</div>
			<Infos />
		</div>
	);
}

export default Techs;

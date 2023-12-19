import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
	return (
		<>
			<div className='noise'></div>
			<div className='error-container'>
				<h1>404</h1>
				<Link to='/Folio_v1/' className='button-back'>
					Retouner à l'accueil
				</Link>
			</div>
		</>
	);
}

export default Error;

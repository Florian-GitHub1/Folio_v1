import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<div className='header-content'>
			<div className='left-part'>
				<NavLink to='/' aria-label='button to go to first page'>
					<svg width={26} height={38} viewBox='0 0 26 38' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13 0.0339401C13.0005 0.0878931 13.0005 0.142585 13 0.197986C13.0355 4.04028 15.5549 11.2894 25.4175 11.564C15.5549 12.3659 13.0355 33.472 13 37.7895C13.0005 37.8517 13.0005 37.9105 13 37.9657C12.9995 37.9105 12.9995 37.8517 13 37.7895C12.9645 33.472 10.4451 12.3659 0.582459 11.564C10.4451 11.2894 12.9645 4.04028 13 0.197986C12.9995 0.142585 12.9995 0.0878931 13 0.0339401Z' fill='#CCEE68' />
					</svg>
				</NavLink>
			</div>
			<div className='right-part'>
				{/* <svg width={30} height={30} viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg' onClick={() => setNavOpen(!navOpen)}>
					<g style={{ mixBlendMode: 'difference' }}>
						<circle cx={navOpen ? 15 : 15} cy='3.99933' r={3} />
					</g>
					<g style={{ mixBlendMode: 'difference' }}>
						<circle cx={15} cy='14.9993' r={3} />
					</g>
					<g style={{ mixBlendMode: 'difference' }}>
						<circle cx={26} cy='14.9993' r={3} />
					</g>
					<g style={{ mixBlendMode: 'difference' }}>
						<circle cx={4} cy='14.9993' r={3} />
					</g>
					<g style={{ mixBlendMode: 'difference' }}>
						<circle cx={15} cy='25.9993' r={3} />
					</g>
					<g>
						<rect x={21} y={21} width='6px' height='6px' rx={3} ry={3}></rect>
					</g>
					<g>
						<rect x={21} y={21} width='6px' height='6px' rx={3} ry={3}></rect>
					</g>
				</svg> */}
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width={48} height={48}>
					<title>Menu</title>
					<circle id='p1' cx={24} cy={12} r={3} opacity={1} transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }} />
					<circle id='p2' cx={36} cy={24} r={3} opacity={1} transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }} />
					<circle id='p3' cx={24} cy={36} r={3} opacity={1} transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }} />
					<circle id='p4' cx={12} cy={24} r={3} opacity={1} transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }} />
					<rect id='rect1' x={21} y={21} width='6px' height='6px' rx={3} ry={3} opacity='0.75' transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }}></rect>
					<rect id='rect2' x={21} y={21} width='6px' height='6px' rx={3} ry={3} opacity='0.75' transform-origin='0px 0px' style={{ transform: 'none', transformOrigin: '0px 0px' }}></rect>
				</svg>
			</div>
		</div>
	);
}

export default Header;

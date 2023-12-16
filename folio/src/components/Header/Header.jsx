import './Header.scss';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	return (
		<header>
			<nav className='nav'>
				<div className='nav-container'>
					<div className='navbar'>
						<div className='logo'>
							<NavLink to='/' aria-label='button to go to home page'>
								<svg width={26} height={38} viewBox='0 0 26 38' xmlns='http://www.w3.org/2000/svg'>
									<path d='M13 0.0339401C13.0005 0.0878931 13.0005 0.142585 13 0.197986C13.0355 4.04028 15.5549 11.2894 25.4175 11.564C15.5549 12.3659 13.0355 33.472 13 37.7895C13.0005 37.8517 13.0005 37.9105 13 37.9657C12.9995 37.9105 12.9995 37.8517 13 37.7895C12.9645 33.472 10.4451 12.3659 0.582459 11.564C10.4451 11.2894 12.9645 4.04028 13 0.197986C12.9995 0.142585 12.9995 0.0878931 13 0.0339401Z' fill='#CCEE68' />
								</svg>
							</NavLink>
						</div>
						<div className='menu-toggle' onClick={toggleMenu}>
							<div className='hamBox'>
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
					</div>
				</div>
			</nav>

			<div className='nav-overlay' style={{ top: open ? '0' : '-100%' }}>
				<ul className='nav-links'>
					<li className='nav-item'>
						<span className='number'>1</span>
						<Link className='nav-item-links' to='/#projets' onClick={toggleMenu}>
							Projets
						</Link>
					</li>
					<li className='nav-item'>
						<span className='number'>2</span>
						<Link className='nav-item-links' to='/#contact' onClick={toggleMenu}>
							Contact
						</Link>
					</li>
					<li className='nav-item'>
						<span className='number'>3</span>
						<Link className='nav-item-links' to='/#apropos' onClick={toggleMenu}>
							A propos
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

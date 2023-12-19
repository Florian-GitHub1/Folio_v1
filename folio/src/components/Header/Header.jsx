import './Header.scss';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
	const [open, setOpen] = useState(false);

	const [hovered, setHovered] = useState(false);

	return (
		<header>
			<nav className='nav'>
				<div className='nav-container'>
					<div className='navbar'>
						<div className='logo'>
							<NavLink to='/Folio_v1/' aria-label='button to go to home page'>
								<svg width={26} height={38} viewBox='0 0 26 38' xmlns='http://www.w3.org/2000/svg'>
									<path d='M13 0.0339401C13.0005 0.0878931 13.0005 0.142585 13 0.197986C13.0355 4.04028 15.5549 11.2894 25.4175 11.564C15.5549 12.3659 13.0355 33.472 13 37.7895C13.0005 37.8517 13.0005 37.9105 13 37.9657C12.9995 37.9105 12.9995 37.8517 13 37.7895C12.9645 33.472 10.4451 12.3659 0.582459 11.564C10.4451 11.2894 12.9645 4.04028 13 0.197986C12.9995 0.142585 12.9995 0.0878931 13 0.0339401Z' fill='#CCEE68' />
								</svg>
							</NavLink>
						</div>
						<div className='menu-toggle' onClick={() => setOpen(!open)}>
							<div className='hamBox' style={{ transform: open ? 'rotate(45deg)' : '' }}>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width={48} height={48} onMouseEnter={() => setHovered(!hovered)} onMouseLeave={() => setHovered(!hovered)}>
									<title>Menu</title>
									<circle cx={24} cy={12} r={3} opacity={1} className={`${hovered ? 'circle1' : ''} ${open ? 'circle1-open' : ''}`} />
									<circle cx={36} cy={24} r={3} opacity={1} className={`${hovered ? 'circle2' : ''} ${open ? 'circle2-open' : ''}`} />
									<circle cx={24} cy={36} r={3} opacity={1} className={`${hovered ? 'circle3' : ''} ${open ? 'circle3-open' : ''}`} />
									<circle cx={12} cy={24} r={3} opacity={1} className={`${hovered ? 'circle4' : ''} ${open ? 'circle4-open' : ''}`} />
									<rect x={21} y={21} width='6px' height='6px' rx={3} ry={3} opacity='0.75' className={`${hovered ? 'rect1' : ''} ${open ? 'rect1-open' : ''}`}></rect>
									<rect x={21} y={21} width='6px' height='6px' rx={3} ry={3} opacity='0.75' className={`${hovered ? 'rect2' : ''} ${open ? 'rect2-open' : ''}`}></rect>
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
						<Link className='nav-item-links' to='/Folio_v1/#projets' onClick={() => setOpen(!open)}>
							Projets
						</Link>
					</li>
					<li className='nav-item'>
						<span className='number'>2</span>
						<Link className='nav-item-links' to='/Folio_v1/#contact' onClick={() => setOpen(!open)}>
							Contact
						</Link>
					</li>
					<li className='nav-item'>
						<span className='number'>3</span>
						<Link className='nav-item-links' to='/Folio_v1/#apropos' onClick={() => setOpen(!open)}>
							A propos
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

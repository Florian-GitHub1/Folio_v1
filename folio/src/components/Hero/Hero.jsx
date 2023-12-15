import './Hero.scss';

function Hero() {
	return (
		<section className='hero' id='home'>
			<div className='hero-content'>
				<div className='hero-text'>
					<div className='hero-align-left'>
						<h1 className='name'>Florian</h1>
						<h2 className='job'>Developpeur</h2>
					</div>
					<div className='hero-align-right'>
						<h3 className='specialisation'>Front-end</h3>
					</div>
				</div>
				<div className='scroll'>
					<div>
						<svg width={9} height={13} viewBox='0 0 9 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g style={{ mixBlendMode: 'difference' }}>
								<path d='M9 7.7381L4.63636 11.1429L4.63636 1.2381L4.09091 -2.14583e-07L4.09091 11.1429L0.272727 7.73809L-3.38243e-07 7.73809L4.36364 13L9 7.7381Z' fill='white' />
							</g>
						</svg>
						<p>scroll to see more</p>
						<svg width={9} height={13} viewBox='0 0 9 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g style={{ mixBlendMode: 'difference' }}>
								<path d='M9 7.7381L4.63636 11.1429L4.63636 1.2381L4.09091 -2.14583e-07L4.09091 11.1429L0.272727 7.73809L-3.38243e-07 7.73809L4.36364 13L9 7.7381Z' fill='white' />
							</g>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;

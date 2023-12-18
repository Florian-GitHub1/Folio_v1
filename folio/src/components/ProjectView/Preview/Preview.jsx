import React from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import projects from '../../../data/projects.json';

import './Preview.scss';

const Preview = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);
	const nextproject = projects.find((nextproject) => nextproject.id !== id);
	const location = useLocation();
	console.log(location);
	return (
		<section className='project-preview-content'>
			<h2 className='preview-title'>Preview</h2>
			<div className='details'>
				<div className='images-container'>
					{project.images.map((images, index) => (
						<img key={index} src={images} alt={`Images du projet ${project.title} ${index}`} />
					))}
				</div>
			</div>
			<NavLink className='next-project' to={`/Folio_v1/${nextproject.id}`}>
				<div>
					<h2>{nextproject.title}</h2>
					<div className='subtitle'>
						<h3>Next project</h3>
						<svg width={26} height={20} viewBox='0 0 26 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g style={{ mixBlendMode: 'difference' }}>
								<path d='M15.4762 0L22.2857 9.69697L2.47619 9.69697L0 10.9091L22.2857 10.9091L15.4762 19.3939V20L26 10.303L15.4762 0Z' fill='white' />
							</g>
						</svg>
					</div>
				</div>
			</NavLink>
		</section>
	);
};

export default Preview;

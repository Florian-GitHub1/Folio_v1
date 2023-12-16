import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import Error from '../Error/Error';

import img from '../../assets/projects-img/kasa-cover.jpg';

import './ProjectView.scss';

const ProjectView = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);

	if (!project) {
		return <Error />;
	}

	return (
		<>
			<div className='noise'></div>
			<div className='project-header-content'>
				<div className='cover'>
					{/* <img src={project.cover} alt={`${project.title} project cover`} /> */}
					<img src={img} alt='' />
				</div>
			</div>
		</>
	);
};

export default ProjectView;

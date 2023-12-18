import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import Error from '../Error/Error';

import HeroProject from '../../components/ProjectView/Hero/HeroProject';
import Preview from '../../components/ProjectView/Preview/Preview';

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
			<HeroProject />
			<Preview />
		</>
	);
};

export default ProjectView;

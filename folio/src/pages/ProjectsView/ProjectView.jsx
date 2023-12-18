import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import Error from '../Error/Error';

import HeroProject from '../../components/ProjectView/Hero/HeroProject';
import SmoothScroll from '../../components/smoothScroll';
import ScrollToTop from '../../components/ScrollToTop';

const ProjectView = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);

	if (!project) {
		return <Error />;
	}

	return (
		<>
			<div className='noise'></div>
			<SmoothScroll>
				<HeroProject />
				<ScrollToTop />
			</SmoothScroll>
		</>
	);
};

export default ProjectView;

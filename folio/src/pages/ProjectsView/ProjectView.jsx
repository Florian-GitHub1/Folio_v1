import React from 'react';

import transition from '../../transition';

import './ProjectView.scss';

const ProjectView = () => {
	return (
		<>
			<div className='noise'></div>
			<div className='project-content'></div>
		</>
	);
};

export default transition(ProjectView);

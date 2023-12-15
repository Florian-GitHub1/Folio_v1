import ProjectsList from './ProjectsList';

import './Projects.scss';

function Projects() {
	return (
		<>
			<div className='project-preview-background'>
				<div className='project-preview-container'>
					<h3 className='project-preview-title1'>Projects</h3>
					<h3 className='project-preview-title2'>Preview</h3>
				</div>
			</div>
			<div className='projects-list-container'>
				<ProjectsList />
			</div>
		</>
	);
}

export default Projects;

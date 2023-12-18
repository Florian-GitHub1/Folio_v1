import { NavLink } from 'react-router-dom';
import ProjectsData from '../../data/projects.json';

import './Projects.scss';

function ProjectsList() {
	const projectsData = ProjectsData.map((project, index) => {
		return (
			<div className='project' key={index}>
				<NavLink to={`${project.id}`}>
					<h4>{project.title}</h4>
					<h4 className='project-date'>/ {project.date}</h4>
				</NavLink>
			</div>
		);
	});
	return <div className='projects-container'>{projectsData}</div>;
}

export default ProjectsList;

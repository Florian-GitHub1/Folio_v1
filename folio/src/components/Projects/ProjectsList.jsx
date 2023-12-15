import { NavLink } from 'react-router-dom';
import ProjectsData from '../../data/projects.json';

import './Projects.scss';

function ProjectsList() {
	const projectsData = ProjectsData.map((project) => {
		return (
			<NavLink to={`${project.id}`} key={project.key} className='project'>
				<h4>{project.title}</h4>
				<h4>/ {project.date}</h4>
			</NavLink>
		);
	});
	return <div className='projects-container'>{projectsData}</div>;
}

export default ProjectsList;

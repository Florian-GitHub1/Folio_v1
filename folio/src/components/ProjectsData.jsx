import { useState, useEffect } from 'react';
import projects from '../data/projects.json';

const ProjectsData = () => {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		setProjectsData(projects);
	}, []);

	return projectsData;
};

export default ProjectsData;

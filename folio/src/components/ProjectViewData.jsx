import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';

const ProjectViewData = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);
	return project;
};

export default ProjectViewData;

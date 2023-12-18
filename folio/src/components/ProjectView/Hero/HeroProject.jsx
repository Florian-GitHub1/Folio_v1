import { useParams } from 'react-router-dom';
import projects from '../../../data/projects.json';

import './HeroProject.scss';

function HeroProject() {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);
	return (
		<section className='project-header-content'>
			<div className='project-infos-wrapper'>
				<div className='project-infos'>
					<div className='title-desc'>
						<h1>
							<a href={project.link} target='_blank' rel='noreferrer'>
								{project.title}
							</a>
						</h1>
						<p>{project.description}</p>
					</div>
					<div className='date-roles-techs'>
						<div className='project-date'>
							<h2>Date</h2>
							<span>{project.date}</span>
						</div>
						<div className='project-roles'>
							<h2>Roles</h2>
							<span>{project.roles}</span>
						</div>
						<div className='project-date'>
							<h2>Techs</h2>
							<span>{project.technos}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroProject;

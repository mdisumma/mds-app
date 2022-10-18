import ProjectData from "./store/Projects.json";

import "./Projects.css";

function Projects() {
	console.log(ProjectData);

	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="projects">
				{ProjectData.map((project) => (
					<div key={project.name} className="project">
						<h3>{project.name}</h3>
						<img src={project.label} alt={project.alt} height="120px" />
						<ul>
							<li>{project.date}</li>
							<li>{project.course}</li>
							<li>
								<a target="_blank" href={project.link} rel="noreferrer">
									website
								</a>
							</li>
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;

import { useState } from "react";
import ProjectData from "./store/Projects.json";

import "./Projects.css";

function Projects() {
	const [overlay, setOverlay] = useState(false);

	function openOverlay(e) {
		function selection(project) {
			return project.name === e.currentTarget.firstChild.textContent;
		}
		const projectSelected = ProjectData.find(selection);
		console.log(projectSelected);
		setOverlay(projectSelected);
	}

	function closeOverlay() {
		setOverlay(false);
	}

	return (
		<section id="projects">
			<h2>Projects</h2>
			{!overlay && (
				<div className="projects">
					{ProjectData.map((project) => (
						<div key={project.name} className="project" onClick={openOverlay}>
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
			)}
			{overlay && (
				<div className="overlay">
					<button onClick={closeOverlay}>close</button>
					<h3>{overlay.name}</h3>
					{overlay.gallery.map((image) => (
						<img key={image} src={image} height="240px"></img>
					))}
				</div>
			)}
		</section>
	);
}

export default Projects;

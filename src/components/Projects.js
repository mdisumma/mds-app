import { useState } from "react";
import ProjectData from "./store/Projects.json";
import { FaArrowLeft } from "react-icons/fa";

import { IconContext } from "react-icons";
import "./Projects.css";

function Projects() {
	const [gallery, setgallery] = useState(false);

	function opengallery(e) {
		function selection(project) {
			return project.name === e.currentTarget.firstChild.textContent;
		}
		const projectSelected = ProjectData.find(selection);
		console.log(projectSelected);
		setgallery(projectSelected);
	}

	function closegallery() {
		setgallery(false);
	}

	return (
		<section id="projects">
			<IconContext.Provider
				value={{
					color: "var(--mid-tone)",
					size: 20,
					className: "backArrowIcon",
				}}
			>
				{!gallery && (
					<>
						<h2>Projects</h2>
						<div className="projects">
							{ProjectData.map((project) => (
								<div
									key={project.name}
									className="project"
									onClick={opengallery}
								>
									<h3>{project.name}</h3>
									<img src={project.label} alt={project.alt} height="120px" />
									<ul>
										<li>{project.date}</li>
										<li>{project.course}</li>
										<li>{project.kind}</li>
									</ul>
								</div>
							))}
						</div>
					</>
				)}
				{gallery && (
					<div className="gallery">
						<button onClick={closegallery}>
							<FaArrowLeft />
						</button>
						<h3>{gallery.name}</h3>
						<div className="galleryItems">
							{gallery.gallery.map((image) => (
								<img key={image} src={image} height="100%" />
							))}
						</div>

						<ul>
							<li>
								<a target="_blank" href={gallery.link} rel="noreferrer">
									<b>Website:</b> {gallery.link}
								</a>
							</li>

							{gallery.link1 !== undefined && (
								<li>
									<a target="_blank" href={gallery.link1} rel="noreferrer">
										<b>Animation:</b> {gallery.link1}
									</a>
								</li>
							)}

							<li>
								<a target="_blank" href={gallery.gitHub} rel="noreferrer">
									<b>GitHub:</b> {gallery.gitHub}
								</a>
							</li>
							{gallery.gitHub1 !== undefined && (
								<li>
									<a target="_blank" href={gallery.gitHub1} rel="noreferrer">
										<b>GitHub:</b> {gallery.gitHub1}
									</a>
								</li>
							)}
						</ul>
					</div>
				)}
			</IconContext.Provider>
		</section>
	);
}

export default Projects;

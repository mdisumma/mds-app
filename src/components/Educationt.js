import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

import { IconContext } from "react-icons";
import "./Education.css";

function Education() {
	return (
		<section id="education">
			<h2>Education</h2>
			<IconContext.Provider
				value={{
					color: "var(--mid-tone)",
					size: 18,
					className: "educationIcons",
				}}
			>
				<div className="institute">
					<h3>
						<FaUniversity /> SAE institute
					</h3>
					<ul className="course">
						<li>
							Bachelor of Science in Web Development <span>2020 - 2022</span>
						</li>
					</ul>
				</div>

				<div className="institute">
					<h3>
						<FaSchool /> WAES Westminster
					</h3>
					<ul className="course">
						<li>
							Diploma in Graphic Design <span>2018 - 2020</span>
						</li>

						<li>
							Award in Creative Media <span>2019 - 2020</span>
						</li>
					</ul>
				</div>

				<div className="institute">
					<h3>
						<FaSchool /> Liceo Artistico Ripetta
					</h3>
					<ul className="course">
						<li>
							Diploma in Fine Art &amp; Design <span>2000</span>
						</li>
					</ul>
				</div>
			</IconContext.Provider>
		</section>
	);
}

export default Education;

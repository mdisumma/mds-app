import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { TbVectorBezier } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

import { IconContext } from "react-icons";
import "./Skills.css";

function CodingSkills() {
	return (
		<section id="skills">
			<h2>Coding Skills</h2>
			<IconContext.Provider
				value={{
					color: "var(--mid-tone)",
					size: 35,
				}}
			>
				<ul>
					<li>
						<SiHtml5 />
						HTML5
					</li>
					<li>
						<SiCss3 />
						CSS3
					</li>
					<li>
						<SiSass />
						Sass
					</li>
					<li>
						<SiJavascript />
						Javascript
					</li>
					<li>
						<SiReact />
						React
					</li>
					<li>
						<VscJson />
						JSON
					</li>
					<li>
						<SiNodedotjs />
						Node
					</li>
					<li>
						<SiMongodb />
						MongoDb
					</li>

					<li>
						<TbVectorBezier />
						SVG
					</li>
				</ul>
			</IconContext.Provider>
		</section>
	);
}

export default CodingSkills;

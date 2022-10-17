import { RiLinkedinLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";

function SocialIcons() {
	return (
		<nav className="socialIcons">
			<ul>
				<li>
					<RiLinkedinLine />
				</li>
				<li>
					<RiTwitterLine />
				</li>
				<li>
					<RiGithubLine />
				</li>
				<li>
					<BsEnvelope />
				</li>
			</ul>
		</nav>
	);
}
export default SocialIcons;

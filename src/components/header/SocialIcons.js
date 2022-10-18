import { RiLinkedinLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";

function SocialIcons() {
	return (
		<nav className="socialIcons">
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/marco-di-summa-1a5146182/"></a>
					<RiLinkedinLine />
				</li>
				<li>
					<a href="https://twitter.com/MarcoDiSumma1"></a>
					<RiTwitterLine />
				</li>
				<li>
					<a href="https://github.com/mdisumma"></a>
					<RiGithubLine />
				</li>
				<li>
					<a href="mailto:mdisumma@yahoo.com"></a>
					<BsEnvelope />
				</li>
			</ul>
		</nav>
	);
}
export default SocialIcons;

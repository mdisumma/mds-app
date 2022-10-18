import { RiLinkedinLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";

function SocialIcons() {
	return (
		<nav className="socialIcons">
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/marco-di-summa-1a5146182/"
						target="blanck"
					>
						<RiLinkedinLine />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/MarcoDiSumma1" target="blanck">
						<RiTwitterLine />
					</a>
				</li>
				<li>
					<a href="https://github.com/mdisumma" target="blanck">
						<RiGithubLine />
					</a>
				</li>
				<li>
					<a href="mailto:mdisumma@yahoo.com" target="blanck">
						<BsEnvelope />
					</a>
				</li>
			</ul>
		</nav>
	);
}
export default SocialIcons;

import { FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { IconContext } from "react-icons";

function ContactSocial() {
	return (
		<div className="contactSocial">
			<IconContext.Provider
				value={{
					color: "var(--mid-tone)",
					size: 20,
					className: "contactIconImg",
				}}
			>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/marco-di-summa-1a5146182/"
							target="blanck"
							rel="noreferrer"
						>
							<FaLinkedinIn /> <span>LinkedIn</span>
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/MarcoDiSumma1"
							target="blanck"
							rel="noreferrer"
						>
							<SiTwitter /> <span>Twitter</span>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/mdisumma"
							target="blanck"
							rel="noreferrer"
						>
							<SiGithub /> <span>GitHub</span>
						</a>
					</li>
					<li>
						<a href="mailto:mdisumma@yahoo.com">
							<MdOutlineAlternateEmail /> <span>mdisumma@yahoo.com</span>
						</a>
					</li>
				</ul>
			</IconContext.Provider>
		</div>
	);
}
export default ContactSocial;

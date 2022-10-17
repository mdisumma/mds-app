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
						<FaLinkedinIn /> <span>LinkedIn</span>
					</li>
					<li>
						<SiTwitter /> <span>Twitter</span>
					</li>
					<li>
						<SiGithub /> <span>GitHub</span>
					</li>
					<li>
						<MdOutlineAlternateEmail /> <span>mdisumma@yahoo.com</span>
					</li>
				</ul>
			</IconContext.Provider>
		</div>
	);
}
export default ContactSocial;

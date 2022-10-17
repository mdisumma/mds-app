// import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

import "./Header.css";

function Header() {
	return (
		<>
			<header>
				<div className="banner">
					<div className="logo">
						<img src="./mds_logo.svg" alt="marco di summa logo" />
					</div>
					<div className="title">
						<h1>Marco Di Summa</h1>
						<p>Web Developer</p>
					</div>
				</div>
				<SocialIcons />
			</header>
		</>
	);
}

export default Header;

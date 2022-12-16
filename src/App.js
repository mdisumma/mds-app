import Header from "./components/header/Header";
import About from "./components/About";
import Education from "./components/Educationt";
import TransferableSkills from "./components/TransferableSkills";
import AcademinSkills from "./components/AcademicSkills";
import CodingSkills from "./components/skills/CodingSkills";
import SoftwareSkills from "./components/skills/SoftwareSkills";
import Projects from "./components/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main className="mainContainer">
				<About />

				<Education />
				<AcademinSkills />
				<div className="skillsContainer">
					<CodingSkills />
					<SoftwareSkills />
					<TransferableSkills />
				</div>
				<Projects />

				<Contacts />
			</main>
			<Footer />
		</>
	);
}

export default App;

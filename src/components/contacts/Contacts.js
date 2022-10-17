import ContactForm from "./ContactsForm";
import ContactSocial from "./ContactSocial";

import "./Contact.css";

function Contacts() {
	return (
		<section id="contacts">
			<h2>Contacts</h2>
			<div className="contactsContainer">
				<ContactForm />
				<ContactSocial />
			</div>
		</section>
	);
}

export default Contacts;

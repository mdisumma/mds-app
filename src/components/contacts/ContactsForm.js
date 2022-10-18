import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
console.log(emailjs);
function Form() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_gu9mi8n",
				"template_25huuz7",
				form.current,
				"nGfwq7xyP-ZimTiR2"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form onSubmit={sendEmail} ref={form} className="contactForm">
			<label htmlFor="fullName">Full Name</label>
			<input type="text" id="user_name" name="user_name"></input>
			<label htmlFor="email">Email</label>
			<input type="email" id="user_email" name="user_email"></input>
			<label htmlFor="subject">Subject</label>
			<input type="text" id="Subject" name="subject"></input>
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" rows="4"></textarea>
			<input type="submit" value="Send" />
		</form>
	);
}
export default Form;

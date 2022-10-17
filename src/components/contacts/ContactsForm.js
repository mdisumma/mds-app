function Form() {
	return (
		<form className="contactForm">
			<label htmlFor="fullName">Full Name</label>
			<input type="text" id="fullName" name="fullName"></input>
			<label htmlFor="email">Email</label>
			<input type="text" id="email" name="email"></input>
			<label htmlFor="subject">Subject</label>
			<input type="text" id="Subject" name="subject"></input>
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" rows="4"></textarea>
			<button>Submit</button>
		</form>
	);
}
export default Form;

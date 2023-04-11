import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [status, setStatus] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gu9mi8n",
        "template_25huuz7",
        form.current,
        "UIHeHVuUtCoihduMO"
      )
      .then(
        (result) => {
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.subject.value = "";
          form.current.message.value = "";
          if (result.text === "OK") {
            setStatus(true);
          }
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
      <textarea id="message" name="message" rows="2"></textarea>
      {!status && <input type="submit" name="submit" value="Send" />}

      {status && <span>Thank you for getting in tuch</span>}
    </form>
  );
}
export default Form;

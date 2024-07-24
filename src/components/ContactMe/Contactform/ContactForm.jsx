import "./contactForm.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifmuyrn", "template_le08p08", form.current, {
        publicKey: "puuBvb7G9aerleT3R",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-form-content">
      <form onSubmit={sendEmail} ref={form}>
        <div className="name-container">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email Address" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

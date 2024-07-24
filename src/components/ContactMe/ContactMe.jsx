import ContactInfoCard from "./ConatctInfocard/ContactInfoCard";
import "./contactMe.css";
import emailIcon from "../../assets/email-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import ContactForm from "./Contactform/ContactForm";
import linkedInIcon from "../../assets/linkedIn-icon.svg";
import resumeIcon from "../../assets/resume-icon.svg";

export default function ContactMe() {
  return (
    <section name="contactme" id="contactme" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div className="contact-info">
          <ContactInfoCard
            iconUrl={emailIcon}
            text="mailto:parsiharshith002@gmail.com"
          />
          <ContactInfoCard
            iconUrl={githubIcon}
            text="https://github.com/Harshith1003"
          />
          <ContactInfoCard
            iconUrl={linkedInIcon}
            text="https://www.linkedin.com/in/parsi-harshith-436476259/"
          />
          <ContactInfoCard iconUrl={resumeIcon} text="src/assets/resume.pdf" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

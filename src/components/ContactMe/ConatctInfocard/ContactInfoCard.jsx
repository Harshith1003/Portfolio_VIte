import "./contactInfoCard.css";

export default function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <a href={text} target="_blank" download>
          <img src={iconUrl} alt={text} />
        </a>
      </div>
      {/* <a href={text}>Link</a> */}
    </div>
  );
}

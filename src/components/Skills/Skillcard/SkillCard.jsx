import "./skillCard.css";
import logo from "../../../assets/logo.png";
export default function SkillCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div
      className={`skills-card${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
}

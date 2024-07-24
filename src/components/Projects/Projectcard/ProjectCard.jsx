import "./projectCard.css";

export default function ProjectCard({ details }) {
  return (
    <div className="project-card">
      <div className="project-head">
        <h6>{details.title}</h6>
        <div className="links">
          <div className="work-links">
            <a
              href={details.hosting}
              target="_blank"
              class={"material-symbols-outlined"}
              style={{ color: "white", textDecoration: "auto", fontSize: 30 }}
            >
              Language
            </a>
          </div>
          <div className="work-links">
            <a
              href={details.gitlink}
              target="_blank"
              class={"material-symbols-outlined"}
              style={{ color: "white", fontSize: 30, textDecoration: "auto" }}
            >
              Link
            </a>
          </div>
        </div>
      </div>
      <ul>
        {details.about.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

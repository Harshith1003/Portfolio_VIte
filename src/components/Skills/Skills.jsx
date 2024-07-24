import { useState } from "react";
import { SKILLS } from "../../Utils/data";
import SkillCard from "./Skillcard/SkillCard";
import "./skills.css";
import SkillInfoCard from "./SkillInfo/SkillInfoCard";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleselectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill === item.title}
              onClick={() => {
                handleselectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}

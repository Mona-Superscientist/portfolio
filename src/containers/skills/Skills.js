import React, { useState } from "react";
import SkillSection from "../../components/skills/SkillSection";
import skills from "../../assets/data/skills";
import './Skills.css'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const slicedSkills = skills.slice(0, visibleSkills);

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {/* Map through slicedSkills and render SkillSection for each section */}
        {slicedSkills.map((section) => (
          <SkillSection key={section.title} title={section.title} skills={section.skills} />
        ))}

        {/* Conditionally render button container based on isExpanded */}
        {isExpanded && (
          <div className="view-btn-container">
            <button className="view-btn" onClick={() => {
              setIsExpanded(false);
              setVisibleSkills(4);
            }}>
              View Less
            </button>
          </div>
        )}

        {/* Render button to toggle visibility of all skills */}
        {skills.length > visibleSkills && (
           <div className="view-btn-container">
               <button className="view-btn" onClick={() => {
                    setIsExpanded(!isExpanded);
                    setVisibleSkills(isExpanded ? 4 : skills.length);
                }}>
                {/* Button text toggles based on isExpanded state */}
                {isExpanded ? 'View Less' : `View All (${skills.length - visibleSkills} more)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;

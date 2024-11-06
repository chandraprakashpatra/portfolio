import './skills.css'
import {LinearGradient as Lg} from 'react-text-gradients'
import React from "react";


const SkillsLoop: React.FC = () => {
  const skills = ["JavaScript", "React", "TypeScript", "Python", "Django", "Node.js", "CSS", "HTML"];

  return (
    <div>
         <h1>
          <Lg className="chill" gradient={["to left","#eb3f3f ,#fff0a8, #5e56fb"]}>Skills</Lg>    
         </h1>
    <div className="skills-loop">
      <div className="skills-scroll">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>{skill}</span>
        ))}
        {/* Duplicate the skills list for a smooth loop */}
        {skills.map((skill, index) => (
          <span className="skill" key={`duplicate-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SkillsLoop;

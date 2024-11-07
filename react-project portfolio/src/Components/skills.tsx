import './skills.css'
import {LinearGradient as Lg} from 'react-text-gradients'
import React from "react";


const SkillsLoop: React.FC = () => {
  const skills = ["JavaScript", "React", "TypeScript", "C" ,"Python", "Django", "Node.js", "CSS", "HTML","Express.js","Vmware","NutanixCloud","Jenkins","Docker","Git","Linux"];

  return (
    <div>
         <h1>
          <Lg className="sk" gradient={["to left","#eb3f3f , #5e56fb"]}>Skills</Lg>    
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

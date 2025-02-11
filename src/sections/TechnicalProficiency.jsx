import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import {motion} from 'framer-motion'
const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleValueChange = (value) => {
    if(value == 'all'){
      setTabData(SKILLS);
      setActiveTab('all');
      return;
    }

    const updateList = SKILLS.filter((skills) => skills.type == value);
    setTabData(updateList);
    setActiveTab(value)

  };

  return (
    <section id="skills" className="bg-[#fbfbfb] mt-3">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title text-5xl">Technical Skills</h4>
          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and frameworks, dedicated to building
            efficient, scalable, and user-centric solutions.
          </p>
        </div>
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleValueChange}
        />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[100px] justify-center items-center">
        {tabData.map((skill, index) => (
          <motion.div
          key={skill.id}
          initial ={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transform={{duraction:0.4, delay:index =0.1}}>
            <SkillCard
            icon={<skill.icon className="w-8 h-8 text-[#f6a64f]" />}
            skillName={skill.skill}
            // description={skill.description}
            // progress={skill.progress}
             
             />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;

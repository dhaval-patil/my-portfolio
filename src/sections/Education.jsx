import React from "react";
import { EDUCATION } from "../utils/data";

const Education = () => {
  return (
    <section id="education" className="pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#161626] hover:scale-101 hover:blur-[2px] shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="font-[Onest] text-xl font-semibold text-zinc-300">
                {edu.degree}
              </h3>
              <p className="text-zinc-100 pt-12 ">{edu.institution}</p>
              <p className="text-gray-100">{edu.location}</p>
              <div className="flex justify-between items-center text-gray-100 text-sm mt-2">
                <span>{edu.year}</span>
                <span className="font-medium text-[#ffffff]">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

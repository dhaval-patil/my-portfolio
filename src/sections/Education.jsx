import React, { useEffect } from "react";
import { EDUCATION } from "../utils/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = ({ setCursorVariant }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log(AOS);
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <section id="education" className="pb-20 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-6xl font-text text-center tracking-wide mb-8"
        >
          Education
        </h2>
        <div className="space-y-6 font-text">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              data-aos="flip-up"
              className="bg-radial-[at_50%_75%]  from-indigo-900 via-blue-900 to-indigo-900 to-90% hover:scale-101 hover:blur-[1px] shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="font-text text-3xl  text-zinc-300">
                {edu.degree}
              </h3>
              <p className="text-zinc-100 text-xl pt-12 ">{edu.institution}</p>
              <p className="text-gray-100 text-xl">{edu.location}</p>
              <div className="flex justify-between text-xl items-center text-gray-100 text-sm mt-2">
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

import React from 'react'
import { EDUCATION } from '../utils/data';

const Education = () => {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold section-title mb-8">
          Education
        </h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#b56141]">
                {edu.degree}
              </h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-600">{edu.location}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                <span>{edu.year}</span>
                <span className="font-medium text-[#b56141]">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education
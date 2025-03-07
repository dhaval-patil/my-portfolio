import React from "react";
import PROFILE_PIC from "../assets/images/Profile_PIC.jpg";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  
  return (
    <section
      
      id="about"
      className="container mx-auto h-[90vh] px-20 py-16"
      
    >
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        
        About Me
      </h4>
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div className="w-[300px] md:w-[365px] h-[300px] md:h-[365px] bg-gray-900 rounded-3xl mx-auto">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="profile-pic1 rounded-2xl"
          />
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[350px] text-7xl uppercase text-zinc-300 tracking-tighter font-bold text-left">
            About Me
          </h4>

          <p className="text-lg tracking-tight text-justify leading-6 items-end justify-end whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group my-29"
              >
                <item.icon className="text-2xl text-[#404cd0] transition-transform duration-400 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-[#cac9ff] " />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

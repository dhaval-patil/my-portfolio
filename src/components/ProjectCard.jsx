import React from "react";

const ProjectCard = ({ imgUrl, title, tags, github, live }) => {
  return (
    <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />

      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-[#b56141] bg-orange-100 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center space-x-9 py-3 lg:space-x-25 ">
          
          <a href={github} target="_blank">
            <button className="action-btn translate-y-4 hover:scale-110 duration-300 ease-in-out cursor-pointer">
              Github
            </button>
          </a>
          
          <a href={live} target="_blank">
          <button className="action-btn translate-y-4 hover:scale-110 duration-300 ease-in-out cursor-pointer">
            Live
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

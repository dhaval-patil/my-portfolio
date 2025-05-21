const ProjectCard = ({
  imgUrl,
  title,
  tags,
  github,
  live,
  setCursorVariant,
}) => {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div className="h-full bg-[#00001d] backdrop-blur-sm rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover group-hover:blur-[2px]  duration-300"
      />

      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="px-4 py-5"
      >
        <h3 className="text-[28px] font-text line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-[#ffffff] bg-indigo-900 border-b-1 border-r-1 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center py-2  lg:space-x-25 ">
          <a href={github} target="_blank">
            <button className="font-text text-3xl action-btn translate-y-3 hover:scale-105 duration-300 ease-in-out rounded-md border-b-2 border-r-1 px-15">
              GITHUB
            </button>
          </a>

          <a href={live} target="_blank">
            <button className="font-text text-3xl action-btn translate-y-3 hover:scale-105 duration-300 ease-in-out  rounded-md border-b-2 border-r-1 px-15">
              LIVE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const SkillCard = ({ image }) => {
  return (
    <>
      <div className=" hover:scale-120 ease-in-out duration-300">
        <div className="gap-3 ">
          <div className=" flex items-center justify-center rounded-[7px]">
            {image}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;

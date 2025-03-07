import React from "react";

const SkillCard = ({ image, skillName, description, progress }) => {
  return (
    <>
      <div className=" hover:scale-120 ease-in-out duration-300">
        <div className="gap-3 ">
          <div className=" flex items-center justify-center rounded-[7px]">
            {image}
          </div>

          {/* <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[14px] py-3 text-black font-semibold ">
                {skillName}
              </p>
              <p className="text-xs text-[#b56141] font-medium">{progress}</p>
            </div>
            <div className="w-full bg-[#fffcf8] rounded-md h-[5px] relative mt-2 ">
            <div
              className="bg-[#f6a64f] h-[5px] rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          </div> */}
        </div>

        {/* <p className="text-xs text-gray-600 text-justify leading-5 mt-2">
        {description}
      </p> */}
      </div>
    </>
  );
};

export default SkillCard;

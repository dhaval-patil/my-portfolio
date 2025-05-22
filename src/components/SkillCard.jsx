import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ image, setCursorVariant }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log(AOS);
  }, []);
  return (
    <>
      <div className=" hover:scale-120 ease-in-out duration-300">
        <div className="gap-3 ">
          <div
            data-aos="zoom-in-down"
            className=" flex items-center justify-center rounded-[7px]"
          >
            {image}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;

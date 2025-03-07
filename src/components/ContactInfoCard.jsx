import React from "react";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-blue-50 rounded border border-blue-400 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-black flex items-center justify-center  rounded-lg">
        {icon}
      </div>

      <p className="text-black text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default ContactInfoCard;

import React from "react";

const MeetingCard = ({ title, content, color, icon: Icon, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: `${color}` }}
      className="px-4 py-6 flex flex-col justify-between w-full xl:max-w-[300px] min-h-[240px] rounded-[14px] cursor-pointer"
    >
      <div className="text-center w-fit bg-white/20 p-2 rounded-[10px]">
        <Icon size={32} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-normal font-normal">{content}</p>
      </div>
    </div>
  );
};

export default MeetingCard;

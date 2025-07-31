import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-[450px] h-[60px] bg-[#1DA1F2] rounded-[76px] text-[18px] text-white cursor-pointer">
      {title}
    </button>
  );
};

export default Button;

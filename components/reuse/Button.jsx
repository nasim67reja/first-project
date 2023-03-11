import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-btn-bg text-white px-[2rem] py-[.8rem] rounded-[0.5rem] hover:outline  hover:outline-btn-bg hover:outline-2 hover:bg-white hover:text-t-color transition-all text-[14px] md:text-[16px] lg:text-[18px]  md:px-[2.5rem] md:py-[1.8rem]">
      {text}
    </button>
  );
};

export default Button;

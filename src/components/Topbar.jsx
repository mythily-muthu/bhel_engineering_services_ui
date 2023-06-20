import React from "react";
import { BiBulb } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const Topbar = () => {
  return (
    <div className=" hidden  md:flex  w-full h-9 bg-primary text-white ">
      <div className="flex items-center w-[60%] justify-between mx-auto text-base font-normal tracking-wide">
        <p>Monday - Friday 6AM - 5PM</p>
        <p className="flex items-center gap-2">
          <BiBulb size={20} /> 0470207796
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineMail size={20} /> info@bhelengineering.com.au
        </p>
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";

const ServiceCard = ({
  title,
  desc,
  color = "text-secondary",
  descColor = "text-text-light",
  bgColor = "bg-light-grey",
}) => {
  return (
    <div className={`flex flex-col ${bgColor}  p-8 w-full gap-y-5 h-[260px]`}>
      {/* title */}
      <p className={`text-sm lg:text-base ${color}`}>{title}</p>
      {/* description */}
      <p className={`text-xs lg:text-sm ${descColor}`}>{desc}</p>
      <div className="">
        <img src="https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-arrow-right.png" />
      </div>
    </div>
  );
};

export default ServiceCard;

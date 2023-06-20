import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  const navList = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About us",
      link: "about_us",
    },
    {
      title: "Services",
      link: "services",
    },
    {
      title: "Recent work",
      link: "recent_work",
    },
    {
      title: "Repair and maintanence",
      link: "repair and maintanence",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];
  return (
    <div className="  w-full h-20 p-6 items-center justify-between flex sticky top-0 bg-white  z-20">
      <div className="flex items-center w-full gap-14">
        {/* logo */}
        <div className=" flex items-center w-32 h-20 ">
          <img
            alt="logo"
            src="https://bhel.thinroot.io/wp-content/uploads/2023/06/Bhel-Logo.jpg"
            className="w-full object-cover"
          />
        </div>
        {/* nav items */}
        <div className=" gap-x-8 hidden md:flex ">
          {navList.map((item) => {
            return (
              <p
                key={item.title}
                className={`text-base  uppercase font-semibold tracking-wide hover:text-primary hover:underline ${
                  activePage === item.link && "text-primary underline"
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.link);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      {/* button */}
      <div className="flex bg-primary text-white justify-end">
        <button className="flex font-normal tracking-wide text-base px-6 py-2 uppercase whitespace-nowrap">
          contact now
        </button>
      </div>
    </div>
  );
};

export default Navbar;

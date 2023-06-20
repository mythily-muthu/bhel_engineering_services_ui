import React from "react";

const HomeScreen = () => {
  return (
    <div
      className="flex  w-full bg-center items-center h-[80vh] justify-center relative"
      style={{
        backgroundImage:
          "url(https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-slider-bg.jpg)",
      }}
    >
      <div className="bg-[#040c00cc] h-[80vh] w-1/2 absolute left-0 " />
      <div className="flex flex-col text-white w-[80%] z-10 lg:w-[60%] sm:gap-y-6 md:gap-y-10 lg:gap-y-15">
        <p className="text-2xl md:text-6xl lg:text-8xl">
          Welcome to
          <br />
          BHEL Engineering
          <br />
          Services.
        </p>
        <div className="flex bg-primary text-white w-max ">
          <button className="flex font-light tracking-wide text-base px-12 py-3 uppercase whitespace-nowrap">
            See more info about us
          </button>
        </div>
        <p className="font-normal ">
          We are dedicated and specialized in general and precision
          <br />
          machining.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;

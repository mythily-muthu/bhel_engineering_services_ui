import React from "react";

const HomeScreen = () => {
  return (
    <div
      className="flex flex-col w-full bg-center overflow-y-auto relative "
      style={{
        backgroundImage:
          "url(https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-slider-bg.jpg)",
      }}
    >
      <div className="absolute flex flex-col text-white pt-[14%] pl-[22%] sm:gap-y-6 md:gap-y-10 lg:gap-y-15">
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

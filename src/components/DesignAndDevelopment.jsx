import React from "react";

const DesignAndDevelopment = () => {
  return (
    <div
      className="flex justify-center h-max  w-full py-20"
      style={{
        backgroundImage: `url("https://bhel.thinroot.io/wp-content/uploads/2023/06/7.jpg")`,
      }}
    >
      <div className="w-[60%] flex flex-col gap-y-10 items-center">
        {/* title */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-primary">
          __Easy to Use__
        </p>
        {/* subtitle */}
        <p className="text-2xl ">Design And Development</p>
        {/* detail card */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-7">
          <div className="w-full lg:w-1/2">
            <img
              src="https://bhel.thinroot.io/wp-content/uploads/2023/06/Design-And-Development-Services-Australia.jpg"
              className="w-full h-full object-contain"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-y-7 w-full  lg:w-1/2 justify-center">
            <p className="text-text-light text-sm lg:text-md leading-8">
              BHEL Engineering Services Australia pty ltd design, build, and
              test mechanical devices such as tools, engines, and machines.
              Considered the broadest engineering discipline, mechanical
              engineers work in engineering services, research facilities,
              manufacturing industries.
              <p>
                should have particular hard skills, including a solid
                understanding of industry standards and excellent computer
                skills, because much time is spent designing, simulating, and
                testing. In addition, mechanical engineers should have soft
                skills, such as strong analytical thinking and communication
                capabilities.
              </p>
            </p>
            <p className="text-sm text-text-light">Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignAndDevelopment;

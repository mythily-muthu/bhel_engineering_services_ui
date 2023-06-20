import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div
      className="flex justify-center h-max  w-full py-20"
      style={{
        backgroundImage: `url("https://bhel.thinroot.io/wp-content/uploads/2023/06/7.jpg")`,
      }}
    >
      <div className="w-[90%] lg:w-[60%] flex flex-col gap-y-10 items-center">
        {/* top */}
        <div className="w-full flex flex-col lg:flex-row  justify-between items-center">
          {/* title */}
          <p className="text-2xl md:text-3xl lg:text-5xl text-secondary">
            OUR SERVICES
          </p>
          <p className="text-text-light tracking-wide ">
            We will serve you with the best Services
          </p>
        </div>
        {/* bottom */}
        <div className="w-full flex flex-col lg:flex-row ">
          {/* card */}
          <div className="w-full lg:w-1/3">
            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
              bgColor="bg-primary"
              color="text-white"
              descColor="text-white"
            />
            <div className="w-full">
              <img
                src="https://bhel.thinroot.io/wp-content/uploads/2023/06/machines-industrial-building-scaled.jpg"
                className="w-full h-full object-contain"
                alt="image"
              />
            </div>
            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
            />
          </div>

          {/* second */}
          <div className="w-full lg:w-1/3">
            <div className="w-full">
              <img
                src="https://bhel.thinroot.io/wp-content/uploads/2023/06/macro-view-clock-mechanism-scaled.jpg"
                className="w-full h-full object-contain"
                alt="image"
              />
            </div>
            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
            />

            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
              bgColor="bg-white"
              color="text-primary"
            />
          </div>
          {/* third */}
          <div className="w-full lg:w-1/3">
            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
              height={"h-[260px]"}
            />
            <div className="w-full">
              <img
                src="https://bhel.thinroot.io/wp-content/uploads/2023/06/engineer-specialist-asian-female-technician-maintenance-inspect-relay-robot-arm-system-with-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-smart-factory-scaled.jpg"
                className="w-full h-full object-contain"
                alt="image"
              />
            </div>
            <ServiceCard
              title={"Project Design & Development"}
              desc={`Design, build, and test mechanical devices such as tools, engines,
            and machines.`}
              bgColor="bg-primary"
              color="text-white"
              descColor="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

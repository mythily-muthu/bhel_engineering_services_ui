import React from "react";

const RecentWork = () => {
  const items = [
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-logo1.png",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-logo2.png",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-logo3.png",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-logo4.png",
    },
  ];
  return (
    <div className="flex flex-col justify-center h-max  w-full py-20 gap-y-16 items-center">
      <div className="w-[90%] lg:w-[60%] flex flex-col lg:flex-row  gap-y-10 items-center justify-between">
        {/* left*/}
        <div className="flex flex-col w-1/2 gap-y-5 tracking-wider">
          {/* title */}
          <p className="text-primary text-xl md:text-2xl lg:text-4xl">
            Explore Recent Work
          </p>
          {/* description */}
          <p className="text-secondary">
            We've Done Lot's Projects Let's Check Some Here
          </p>
        </div>

        {/* right */}
        <div className="flex flex-col w-1/2 leading-relaxed tracking-wider gap-y-4 ">
          <p>
            You will find yourself working in a partnership that result in an
            incredible Experience, and an end products that is the best
          </p>
          <p>Read more</p>
        </div>
      </div>

      {/* bottom */}
      <div className="w-[90%] lg:w-[60%] flex  gap-y-10">
        <div className="w-full flex justify-evenly">
          {items.map((item) => {
            return (
              <div className="w-60 h-16">
                <img
                  src={item.image_url}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;

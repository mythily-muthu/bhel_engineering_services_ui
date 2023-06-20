import React from "react";

const AboutUs = () => {
  const items = [
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-icon1.png",
      quantity: 40,
      text: "workforce size",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-icon2.png",
      quantity: 100,
      text: "quality",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-icon3.png",
      quantity: 50,
      text: "work facilities",
    },
    {
      image_url:
        "https://bhel.thinroot.io/wp-content/uploads/2019/06/factory2-home-icon4.png",
      quantity: 100,
      text: "customer satisfaction",
    },
  ];
  return (
    <div className="w-full bg-gray-950 flex flex-col py-28">
      <div className="w-[90%] lg:w-[60%] mx-auto flex flex-col gap-y-36">
        <div className="flex w-full flex-col md:flex-row justify-evenly gap-x-10 ">
          {items.map((item) => {
            return (
              <div key={item.text} className="flex w-full  flex-col gap-y-6">
                <div className="w-20 h-20">
                  <img
                    src={item.image_url}
                    alt={item.text}
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="font-medium text-2xl text-white">
                  {item.quantity}
                </p>
                <p className="font-medium text-lg tracking-wider text-white">
                  {item.text}
                </p>
                <span className="w-full h-1 bg-slate-500 rounded-md" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-full gap-7 flex-col md:flex-row ">
          <div className="flex flex-col gap-y-10 w-full md:w-1/2 justify-center">
            <p className="text-blue-600 font-medium text-xl">
              BHEL Engineering Services Australia pty ltd
            </p>
            <p className="text-gray-400 text-sm xl:text-md   w-[60%] leading-8">
              We are dedicated and specialized in general and precision
              machining. Equipped with conventional machine lathe and milling
              radial drilling automatic band saw power saw drop
            </p>
            <div className="flex bg-primary text-white w-max ">
              <button className="flex font-light tracking-wide text-base px-12 py-3 uppercase whitespace-nowrap">
                READ MORE ABOUT US
              </button>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <img
              src="https://bhel.thinroot.io/wp-content/uploads/2023/06/portrait-young-worker-hard-hat-large-metalworking-plant-2048x1367.jpg"
              className="w-full h-full object-contain"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

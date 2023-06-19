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
    <div className="w-full bg-gray-800 flex flex-col ">
      <div className="w-[60%] mx-auto flex flex-col ">
        <div className="flex ">
          {items.map((item) => {
            return (
              <div key={item.text}>
                <img
                  src={item.image_url}
                  alt={item.text}
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;

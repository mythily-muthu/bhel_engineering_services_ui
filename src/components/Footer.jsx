import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full items-center flex-col gap-y-5">
      <div className="flex justify-center bg-black w-full p-7 ">
        <p className="text-white">
          Technology is important for your business, you use technology makes
        </p>
      </div>
      <div className="w-[90%] lg:w-[60%] flex flex-col gap-y-10 items-center py-8">
        {/* top */}

        {/* center */}
        <div className="flex w-full gap-x-10 items-center flex-col md:flex-row">
          {/* col 1 */}
          <div className="flex flex-col items-start w-1/2">
            {/* logo */}
            <div className="w-30 h-20 flex">
              <img
                alt="logo"
                src="https://bhel.thinroot.io/wp-content/uploads/2023/06/Bhel-Logo.jpg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              {/* title */}
              <p className="text-primary">
                BHEL Engineering Services Australia Pty Ltd
              </p>
              {/* desc */}
              <p className="leading-loose">
                Based in Western Australia, Its provides innovative, time
                critical engineering solutions to some of the largest and most
                progressive mining, oil & gas, energy and defence businesses in
                Australia.
              </p>
            </div>

            {/* icons */}
            <div></div>
          </div>

          {/* col 2 */}
          <div className="flex w-full flex-col gap-5  md:w-1/2 md:flex-row">
            <div className="flex flex-col gap-y-2 ">
              <p className="text-primary">CONTACT INFO</p>
              <div className="flex flex-col gap-y-2">
                <p className="text-primary">Phone</p>
                <p>0470207796</p>
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="text-primary">E-mail</p>
                <p>info@bhelengineering.com.au</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-primary ">OUR OFFICE</p>
              <p className="leading-relaxed">
                Unit 5/46 Buckingham dr Wangara, Perth. WA 6065
              </p>
            </div>
          </div>

          {/* col3 */}
        </div>

        {/*  bottom*/}
        <p className="flex items-center justify-center w-full">
          © 2023 All Rights Reserved . BHEL Engineering Services Australia Pty
          Ltd | designed by. ONEUX CREATIVE STUDIO
        </p>
      </div>
    </div>
  );
};

export default Footer;

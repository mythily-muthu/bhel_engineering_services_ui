import React from "react";
import HomeScreen from "../components/HomeScreen";
import AboutUs from "../components/AboutUs";
import DesignAndDevelopment from "../components/DesignAndDevelopment";
import OurServices from "../components/OurServices";
import RecentWork from "../components/RecentWork";
const HomePage = () => {
  return (
    <div className="w-full flex flex-col  ">
      <HomeScreen />
      <AboutUs />
      <OurServices />
      <RecentWork />
      <DesignAndDevelopment />
    </div>
  );
};

export default HomePage;

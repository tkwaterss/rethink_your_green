import React from "react";
import HomeIntro from "../components/homeComponenents/HomeIntro";
import HomeSuccess from "../components/homeComponenents/HomeSuccess";
import HomeAbout from "../components/homeComponenents/HomeAbout";
import HomeBlog from "../components/homeComponenents/HomeBlog";

const Home = () => {
  return (
    <>
      <HomeIntro />
      <HomeSuccess />
      <HomeAbout />
      <HomeBlog />
    </>
  );
};

export default Home;

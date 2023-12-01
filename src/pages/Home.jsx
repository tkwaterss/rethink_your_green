import React from "react";
import HomeIntro from "../components/homeComponenents/HomeIntro";
import HomeBlog from "../components/homeComponenents/HomeBlog";
import HomeAbout from "../components/homeComponenents/HomeAbout";

const Home = () => {
  return (
    <>
      <HomeIntro />
      <HomeBlog />
      <HomeAbout />
    </>
  );
};

export default Home;

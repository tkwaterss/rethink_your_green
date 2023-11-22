import React from "react";
import classes from "./HomeSuccess.module.css";
import SuccessStoryCard from "../UI/SuccessStoryCard";

const HomeSuccess = () => {
  return (
    <section className={classes.successStoriesSection}>
      <h3>Success Stories</h3>
      <div className={classes.successStories}>
        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
      </div>
    </section>
  );
};

export default HomeSuccess;

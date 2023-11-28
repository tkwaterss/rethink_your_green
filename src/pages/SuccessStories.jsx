import React, { useEffect } from "react";
import ExpandedSuccessStoryCard from "../components/UI/ExpandedSuccessStoryCard";
import classes from "./SuccessStories.module.css";
import axios from "axios";

const SuccessStories = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4040/stories")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={classes.successStoriesPage}>
      <h2>Success Stories</h2>
      <div className={classes.storyCards}>
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
      </div>
    </section>
  );
};

export default SuccessStories;

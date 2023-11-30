import React, { useEffect, useState } from "react";
import ExpandedSuccessStoryCard from "../components/UI/ExpandedSuccessStoryCard";
import classes from "./SuccessStories.module.css";
import axios from "axios";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4040/stories")
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let storyCards = stories.map((story) => {
    return (
      <ExpandedSuccessStoryCard
        key={story.id}
        id={story.id}
        storyTitle={story.storyTitle}
        storyDescription={story.storyDescription}
        storyPhoto={story.storyPhoto}
      />
    );
  });

  return (
    <section className={classes.successStoriesPage}>
      <h2>Success Stories</h2>
      <div className={classes.storyCards}>{storyCards}</div>
    </section>
  );
};

export default SuccessStories;

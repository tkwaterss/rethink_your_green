import React, { useState, useEffect } from "react";
import classes from "./HomeSuccess.module.css";
import SuccessStoryCard from "../UI/SuccessStoryCard";
import axios from "axios";
import NewsletterSignup from '../NewsletterSignup';

const HomeSuccess = () => {
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
      <SuccessStoryCard
        key={story.id}
        id={story.id}
        storyTitle={story.storyTitle}
        storyDescription={story.storyDescription}
        storyPhoto={story.storyPhoto}
      />
    );
  });

  return (
    <section className={classes.successStoriesSection}>
      <h2>Success Stories</h2>
      <div className={classes.successStories}>{storyCards}</div>
      <NewsletterSignup className={classes.newsletterSignup}/>
    </section>
  );
};

export default HomeSuccess;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from './SuccessStory.module.css';

const SuccessStory = (props) => {
  const { storyId } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4040/stories/${storyId}`)
      .then((res) => {
        setStory(res.data);
      })
      .catch((err) => console.log(err));
  }, [storyId]);

  console.log(story);

  return (
    <section className={classes.successStorySection}>
      <h2>{story.storyTitle}</h2>
      <img src={story.storyPhoto} alt="clover lawn" className={classes.storyImage}/>
      <p>{story.storyDescription}</p>
    </section>
  );
};

export default SuccessStory;

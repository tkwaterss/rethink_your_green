import React from "react";
import classes from "./ExpandedSuccessStoryCard.module.css";

const ExpandedSuccessStoryCard = () => {
  return (
    <div className={classes.storyCardContainer}>
      <div className={classes.storyCardText}>
        <h3>Some Story Title</h3>
        <p>Story Description</p>
      </div>
      <div className={classes.storyCardImage}>
        Story Photo Here
      </div>
    </div>
  );
};

export default ExpandedSuccessStoryCard;

import React from "react";
import classes from "./SuccessStoryCard.module.css";

//TODO background image CSS needs to be inline and pulled from props

const SuccessStoryCard = ({ storyTitle, storyDescription, storyPhoto }) => {
  return (
    <div className={classes.successStoryCard}>
      <div className={classes.storyImage} />
      <div className={classes.storyDescription}>
        <h4>{storyTitle}</h4>
        <p>{storyDescription}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

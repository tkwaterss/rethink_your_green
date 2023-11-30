import React from "react";
import classes from "./ExpandedSuccessStoryCard.module.css";

const ExpandedSuccessStoryCard = ({
  storyTitle,
  storyDescription,
  storyPhoto,
}) => {
  return (
    <div className={classes.storyCardContainer}>
      <div className={classes.storyCardText}>
        <h3>{storyTitle}</h3>
        <p>{storyDescription}</p>
      </div>
      <div className={classes.storyCardImage}>{storyPhoto}</div>
    </div>
  );
};

export default ExpandedSuccessStoryCard;

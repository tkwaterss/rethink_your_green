import React from "react";
import classes from "./ExpandedSuccessStoryCard.module.css";
import { Link } from "react-router-dom";

const ExpandedSuccessStoryCard = ({
  storyTitle,
  storyDescription,
  storyPhoto,
  storyId
}) => {
  return (
    <Link className={classes.storyCardContainer} to={`/story/${storyId}`}>
      <div className={classes.storyCardImage} style={{backgroundImage: `url(${storyPhoto})`}}></div>
      <div className={classes.storyCardText}>
        <h3>{storyTitle}</h3>
        <p>{storyDescription}</p>
      </div>
    </Link>
  );
};

export default ExpandedSuccessStoryCard;

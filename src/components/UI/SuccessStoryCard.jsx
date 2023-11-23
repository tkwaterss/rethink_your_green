import React from "react";
import classes from "./SuccessStoryCard.module.css";

//TODO Card content will be supplied from database eventually

const SuccessStoryCard = () => {
  return (
    <div className={classes.successStoryCard}>
      <div className={classes.storyImage} />
      <div className={classes.storyDescription}>
        <h4>Huge Success</h4>
        <p>
          This project went great, Lawn looks amazing now. We encountered some
          difficulties but persivered and delivered another amazing product.
          Another line about the project to make the text overflow.
        </p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

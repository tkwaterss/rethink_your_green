import React from "react";
import classes from "./BlogCard.module.css";

const BlogCard = ({ blogTitle, blogDescription, blogPhoto, blogLink }) => {
  return (
    <div className={classes.blogCard} style={{backgroundImage: `url(${blogPhoto})`}}>
      <div className={classes.blogDescription}>
        <h4>{blogTitle}</h4>
        <p>{blogDescription}</p>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import classes from "./ExpandedBlogCard.module.css";
import { Link } from "react-router-dom";

const ExpandedBlogCard = ({
  blogTitle,
  blogDescription,
  blogPhoto,
  blogId
}) => {
  return (
    <Link className={classes.blogCardContainer} to={`/blog/${blogId}`}>
      <div className={classes.blogCardImage} style={{backgroundImage: `url(${blogPhoto})`}}></div>
      <div className={classes.blogCardText}>
        <h3>{blogTitle}</h3>
        <p>{blogDescription}</p>
      </div>
    </Link>
  );
};

export default ExpandedBlogCard;

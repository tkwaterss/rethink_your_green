import React from "react";
import classes from "./BlogCard.module.css";
import { Link } from 'react-router-dom';

//TODO background image CSS needs to be inline and pulled from props

const BlogCard = ({ blogTitle, blogDescription, blogPhoto, blogId }) => {
  return (
    <Link to={`blog/${blogId}`} className={classes.blogCard}>
      <div className={classes.blogImage} style={{backgroundImage: `url(${blogPhoto})`}}/>
      <div className={classes.blogDescription}>
        <h4>{blogTitle}</h4>
        <p>{blogDescription}</p>
      </div>
    </Link>
  );
};

export default BlogCard;

import React from 'react'
import classes from './BlogCard.module.css';

const BlogCard = () => {
  return (
    <div className={classes.blogCard}>
      <div className={classes.blogDescription}>
        <h4>Going Clover</h4>
        <p>
        In this article we discuss some of the primary reasons to convert your lawn to clover. We'll cover the sustainability, maintainability, and beauty of clover. Keep reading to find out more.
        </p>
      </div>
    </div>
  )
}

export default BlogCard
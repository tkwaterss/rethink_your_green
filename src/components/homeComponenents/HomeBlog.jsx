import React from 'react'
import classes from './HomeBlog.module.css';
import BlogCard from '../UI/BlogCard';

const HomeBlog = () => {
  return (
    <section className={classes.blogSection}>
      <h3>Blog / Media</h3>
      <div className={classes.blogCardContainer}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}

export default HomeBlog
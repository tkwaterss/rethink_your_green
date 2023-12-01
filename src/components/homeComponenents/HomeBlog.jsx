import React, { useState, useEffect } from "react";
import classes from "./HomeBlog.module.css";
import BlogCard from "../UI/BlogCard";
import axios from "axios";
import NewsletterSignup from '../NewsletterSignup';

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4040/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let blogCards = blogs.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        blogId={blog.id}
        blogTitle={blog.blogTitle}
        blogDescription={blog.blogDescription}
        blogPhoto={blog.blogPhoto}
      />
    );
  });

  return (
    <section className={classes.blogsSection}>
      <h2>Success Stories</h2>
      <div className={classes.blogs}>{blogCards}</div>
      <NewsletterSignup className={classes.newsletterSignup}/>
    </section>
  );
};

export default HomeBlog;

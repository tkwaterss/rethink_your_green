import React, { useState, useEffect } from "react";
import classes from "./HomeBlog.module.css";
import BlogCard from "../UI/BlogCard";
import axios from "axios";

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
        id={blog.id}
        blogTitle={blog.blogTitle}
        blogPhoto={blog.blogPhoto}
        blogDescription={blog.blogDescription}
      />
    );
  });

  return (
    <section className={classes.blogSection}>
      <h3>Blog / Media</h3>
      <div className={classes.blogCardContainer}>{blogCards}</div>
    </section>
  );
};

export default HomeBlog;

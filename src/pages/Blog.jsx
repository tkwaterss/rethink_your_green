import React, { useEffect, useState } from "react";
import ExpandedBlogCard from "../components/UI/ExpandedBlogCard";
import classes from "./Blog.module.css";
import axios from "axios";

const Blog = () => {
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
      <ExpandedBlogCard
        key={blog.id}
        blogId={blog.id}
        blogTitle={blog.blogTitle}
        blogDescription={blog.blogDescription}
        blogPhoto={blog.blogPhoto}
      />
    );
  });

  return (
    <section className={classes.blogPage}>
      <h2>Blog</h2>
      <div className={classes.blogCards}>{blogCards}</div>
    </section>
  );
};

export default Blog;

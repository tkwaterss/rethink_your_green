import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from './BlogDetails.module.css';
import AuthContext from '../store/authContext';

const Blog = (props) => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/blogs/${blogId}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, [blogId]);

  return (
    <section className={classes.blogSection}>
      <h2>{blog.blogTitle}</h2>
      <img src={blog.blogPhoto} alt="clover lawn" className={classes.blogImage}/>
      <p>{blog.blogDescription}</p>
      {authCtx.token && <button>Edit Blog</button>}
    </section>
  );
};

export default Blog;

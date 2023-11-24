import React from "react";
import classes from "./HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <section className={classes.aboutSection}>
      <h3>About Us</h3>
      <p>
        A short bio about the company . List some things about why the company
        was started. What is the companies mission statement. Also list some
        stuff about who the owner is and why he started this company Possibly
        include a photo of Marcus
      </p>
    </section>
  );
};

export default HomeAbout;

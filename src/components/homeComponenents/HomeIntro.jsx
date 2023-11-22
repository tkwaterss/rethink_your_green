import React from "react";
import classes from "./HomeIntro.module.css";

const HomeIntro = () => {
  return (
    <section>
      <div className={classes.intro}>
        <h1>Clover is Awesome!</h1>
        <h2>Salt Lake City, UT</h2>
      </div>
      <div className={classes.stats}>
        <div className={classes.statsContainer}>
          <div className={classes.statsIcon}></div>
          <h3 className={classes.statsTitle}>Looks Great</h3>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsIcon}></div>
          <h3 className={classes.statsTitle}>Less Water</h3>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsIcon}></div>
          <h3 className={classes.statsTitle}>Low Maintenance</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

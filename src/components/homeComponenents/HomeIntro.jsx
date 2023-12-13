import React from "react";
import classes from "./HomeIntro.module.css";
import { RiLandscapeFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { GiWaterRecycling } from "react-icons/gi";

const HomeIntro = () => {
  return (
    <section className={classes.homeIntro}>
      <div className={classes.intro}>
        <h1>Clover is Awesome!</h1>
        <h2>Salt Lake City, UT</h2>
      </div>
      <div className={classes.stats}>
        <div className={classes.statsContainer}>
          <RiLandscapeFill className={classes.statsIcon}></RiLandscapeFill>
          <h3 className={classes.statsTitle}>Looks Great</h3>
        </div>
        <div className={classes.statsContainer}>
          <GiWaterRecycling className={classes.statsIcon}></GiWaterRecycling>
          <h3 className={classes.statsTitle}>Less Water</h3>
        </div>
        <div className={classes.statsContainer}>
          <GrServices className={classes.statsIcon}></GrServices>
          <h3 className={classes.statsTitle}>Low Maintenance</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

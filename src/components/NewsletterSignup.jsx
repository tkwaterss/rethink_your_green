import React from "react";
import classes from "./NewsletterSignup.module.css";
import { useFormik } from "formik";

const NewsletterSignup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values, helpers) => {
      console.log(values);
      helpers.resetForm();
      //TODO Submit the captured email to the email list
    },
  });

  return (
    <div className={classes.newsletterSignupContainer}>
      <h5 className={classes.newsletterSignupLabel}>Newsletter Signup:</h5>
      <form onSubmit={formik.handleSubmit} className={classes.newsletterSignupForm}>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={classes.newsletterSignupInput}
          placeholder="youremail@email.com"
        ></input>
        <button type="submit" className={classes.newsletterSignupButton}>Submit</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;

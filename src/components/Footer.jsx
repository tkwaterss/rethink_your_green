import React from "react";
import classes from "./Footer.module.css";
import logo from "../images/company_logo.png";
import NewsLetterSignup from "./NewsletterSignup";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={classes.companyInfo}>
        <img src={logo} alt="company logo" className={classes.companyLogo} />
      </div>
      <div className={classes.contactContainer}>
        <h5>Contact</h5>
        <p>contact us today for a free estimate</p>
        <div className={classes.contactInfo}>
          <p>(123) 456 7890</p>
          <p>info@rethinkyourgreen.com</p>
        </div>
        <NewsLetterSignup className={classes.newsletterSignup}/>
      </div>
      <div className={classes.linksContainer}>
        <ul className={classes.siteLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/why_clover">Why Clover?</Link>
          </li>
          <li>
            <Link to="/success_stories">Success Stories</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className={classes.socialLinks}>
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

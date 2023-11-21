import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import company_logo from "../images/company_logo.png";

const Header = () => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#A59132" : "",
      textDecoration: isActive ? "underline" : "",
    };
  };

  return (
    <header>
      <NavLink to="/">
        <img className={classes.companyLogo} src={company_logo} />
      </NavLink>
      <div className={classes.rightHeader}>
        <nav>
          <ul className={classes.navLinksList}>
            <li>
              <NavLink style={activeStyle} to="why_clover">
                Why Clover?
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="success_stories">
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.newsLetterSignup}>News Letter Signup</div>
      </div>
    </header>
  );
};

export default Header;

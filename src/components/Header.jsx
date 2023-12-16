import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import company_logo from "../images/company_logo.png";
import NewsletterSignup from "./NewsletterSignup";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#A59132" : "",
      textDecoration: isActive ? "underline" : "",
    };
  };

  return (
    <header>
      <NavLink to="/">
        <img
          className={classes.companyLogo}
          src={company_logo}
          alt="Company Logo"
        />
      </NavLink>
      <div className={classes.rightHeader}>
        <nav>
          <ul className={classes.navLinksList}>
            <li>
              <NavLink style={activeStyle} to="/why_clover">
                Why Clover?
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/contact">
                Contact
              </NavLink>
            </li>
            {authCtx.token && (
              <li onClick={() => authCtx.logout()}>
                <NavLink to="/">Logout</NavLink>
              </li>
            )}
          </ul>
        </nav>
        <NewsletterSignup />
      </div>
    </header>
  );
};

export default Header;

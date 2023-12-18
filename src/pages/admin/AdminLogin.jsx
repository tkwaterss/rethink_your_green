import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import AuthContext from "../../store/authContext";
import classes from "./AdminLogin.module.css";
import Input from "../../components/UI/Input";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, helpers) => {
      axios
        .post("http://localhost:4040/login", values)
        .then(({ data }) => {
          authCtx.login(data.token, data.exp, data.userId, data.employee);
          console.log("after auth", data);
          navigate('/');
        })
        .catch((err) => {
          console.log("Sorry there was an issue with your login", err);
        });
      helpers.resetForm();
    },
  });

  return (
    //contain the login form and logic here
    <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
      <Input
        id="email"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="email"
      >
        Email
      </Input>
      <Input
        id="password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="name"
      >
        Password
      </Input>
        <button type="submit" className={classes.submitBtn}>
          LOGIN
        </button>
    </form>
  );
};

export default AdminLogin;

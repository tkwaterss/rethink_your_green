import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import AuthContext from "../../store/authContext";
import Input from "../../components/UI/Input";
import classes from "./AdminRegister.module.css";


//TODO Need to figure out capturing form data
//TODO Then make sure it sends to back end
//TODO Then review back end functionality

const AdminRegister = () => {
  const authCtx = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPass: "",
      phone: "",
    },
    onSubmit: (values, helpers) => {
      console.log(values);

      axios
        .post("http://localhost:4040/register", values)
        .then(({ data }) => {
          authCtx.login(data.token, data.exp, data.userId);
          console.log("after auth", data);
        })
        .catch((err) => {
          console.log(err);
        });
      // helpers.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.registerForm}>
      <Input
        id="firstname"
        name="firstname"
        type="text"
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="First Name"
      >
        First Name
      </Input>
      <Input
        id="lastname"
        name="lastname"
        type="text"
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Last Name"
      >
        Last Name
      </Input>
      <Input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="email"
      >
        Email
      </Input>
      <Input
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Password"
      >
        Password
      </Input>

      <Input
        id="confirmPass"
        name="confirmPass"
        type="password"
        value={formik.values.confirmPass}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Confirm Password"
      >
        Confirm Password
      </Input>
      <Input
        id="phone"
        name="phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Phone"
      >
        Phone
      </Input>
      <button type="submit" className={classes.submitBtn}>
        "REGISTER"
      </button>
    </form>
  );
};

export default AdminRegister;

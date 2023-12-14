import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.formGroup}>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className={classes.formField}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <label htmlFor={props.id} className={classes.formLabel}>
        {props.children}
      </label>
    </div>
  );
};

export default Input;

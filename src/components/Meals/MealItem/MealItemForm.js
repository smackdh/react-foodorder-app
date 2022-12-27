import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "./Input";

const MealItemForm = (props) => {
  const addHandler = (e) => {
    e.preventDefault();
    console.log("testing");
  };

  return (
    <form className={classes.form}>
      <Input />
      <button onClick={addHandler} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;

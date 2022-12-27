import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const addHandler = (e) => {
    e.preventDefault();
    console.log("testing");
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addHandler} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;

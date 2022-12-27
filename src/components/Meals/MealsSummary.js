import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Get food instantly delivered to you, like magic! 🧙🏼‍♂️</h2>
      <p>
        Nom nom some food and make your tummy feel great again. Eat in or
        take-out, the choice is yours.{" "}
      </p>
      <p>
        All of our food is cooked somewhere else. We take no responsability for
        potential allergic reactions, illness or other side-effects that might
        occur by ingesting our food. Enjoy! 🤠{" "}
      </p>
    </section>
  );
};

export default MealsSummary;

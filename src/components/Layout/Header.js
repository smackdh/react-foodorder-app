import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Husmans</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img className={["main-image.image"]} src={meals} alt="meal table" />
      </div>
    </Fragment>
  );
};

export default Header;

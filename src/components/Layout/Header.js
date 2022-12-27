import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Husmans</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img className={["main-image.image"]} src={meals} alt="meal table" />
      </div>
    </Fragment>
  );
};

export default Header;

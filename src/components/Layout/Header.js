import { Fragment } from "react";
import classes from "./Header.module.css";
import julbord from "../../assets/julbord.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Husmans</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img className={["main-image.image"]} src={julbord} alt="meal table" />
      </div>
    </Fragment>
  );
};

export default Header;

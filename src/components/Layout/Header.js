import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Husmans</h1>
        <button>Cart</button>
      </header>
      <div className={classes.mainImage}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="food"
        />
      </div>
    </Fragment>
  );
};

export default Header;

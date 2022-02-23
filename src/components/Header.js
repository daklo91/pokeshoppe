import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "../assets/svg/logo.svg";
import shoppingcart from "../assets/svg/shoppingcart.svg";

const Header = (props) => {
  const [badgeAnimate, setBadgeAnimate] = useState(false);

  useEffect(() => {
    setBadgeAnimate(false);

    const timer = setTimeout(() => {
      setBadgeAnimate(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [props.cartLength]);

  return (
    <header>
      <div className={classes.container}>
        <Link to="/" className={classes["logo-container"]}>
          <img src={logo} alt={"pokeshoppe logo"} />
          <div className={classes["logo-text-container"]}>
            <h1 className={classes["logo-text"]}>PokeShoppe</h1>
            <span className={classes["sub-text"]}>Gotto buy em’ all!</span>
          </div>
        </Link>
        <Link to="/cart" className={classes["shoppingcart-container"]}>
          <div
            className={`${classes["amount-badge"]} ${
              !badgeAnimate ? classes["bopp-animation"] : null
            }`}
          >
            {props.cartLength}
          </div>
          <img src={shoppingcart} alt="shoppingcart icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

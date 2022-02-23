import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/svg/logo.svg";
import shoppingcart from "../assets/svg/shoppingcart.svg";

const Header = (props) => {
  return (
    <header>
      <Link to="/" className={classes["logo-container"]}>
        <img src={logo} alt={"pokeshoppe logo"} />
        <div className={classes["logo-text-container"]}>
          <h1 className={classes["logo-text"]}>PokeShoppe</h1>
          <span className={classes["sub-text"]}>Gotto buy em’ all!</span>
        </div>
      </Link>
      <Link to="/cart" className={classes["shoppingcart-container"]}>
        <div className={classes["amount-badge"]}>{props.cartLength}</div>
        <img src={shoppingcart} alt="shoppingcart icon" />
      </Link>
    </header>
  );
};

export default Header;

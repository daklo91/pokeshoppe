import classes from "./Header.module.css";
import logo from "../assets/svg/logo.svg";
import shoppingcart from "../assets/svg/shoppingcart.svg";

const Header = () => {
  return (
    <header>
      <div className={classes["logo-container"]}>
        <img src={logo} alt={"pokeshoppe logo"} />
        <div className={classes["logo-text-container"]}>
          <h1 className={classes["logo-text"]}>PokeShoppe</h1>
          <span className={classes["sub-text"]}>Gotto buy em’ all!</span>
        </div>
      </div>
      <div className={classes["shoppingcart-container"]}>
        <div className={classes["amount-badge"]}>13</div>
        <img src={shoppingcart} alt="shoppingcart icon" />
      </div>
    </header>
  );
};

export default Header;

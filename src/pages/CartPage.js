import { Link } from "react-router-dom";
import classes from "./CartPage.module.css";

const CartPage = (props) => {
  const mapCartItems = () => {
    const cartArr = props.cartInfo.map((item, index) => {
      return (
        <div className={classes["cart-item-card"]}>
          <div className={classes.image}>
            <img src={item.image} alt={"image of " + item.name} />
          </div>
          <div>
            <div className={classes.name}>{item.name}</div>
            <div>Height: {item.height / 10}m</div>
            <div>Weight: {item.weight / 10}kg</div>
            <div className={classes.price}>Price: ${item.price}</div>
            <button
              className={classes.button}
              onClick={() => props.RemoveFromCart(index)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      );
    });
    return cartArr;
  };

  return (
    <main>
      <div className={classes.container}>
        <span>You have {props.cartInfo.length} item(s) in your cart</span>
        {mapCartItems()}
        <button className={classes["checkout-button"]}>
          Continue to checkout
        </button>
        <Link to="/">Or continue shopping</Link>
      </div>
    </main>
  );
};

export default CartPage;

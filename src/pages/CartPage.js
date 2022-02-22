import { Link } from "react-router-dom";

const CartPage = (props) => {
  return (
    <main>
      {props.cartInfo.map((item, index) => {
        return (
          <div>
            <img src={item.image} alt={"image of " + item.name} />
            <div>
              <div>{item.name}</div>
              <div>Height: {item.height / 10}m</div>
              <div>Weight: {item.weight / 10}kg</div>
            </div>
            <button onClick={() => props.RemoveFromCart(index)}>
              Remove from cart
            </button>
          </div>
        );
      })}
      <button>Continue to checkout</button>
      <Link to="/">Or continue shopping</Link>
    </main>
  );
};

export default CartPage;

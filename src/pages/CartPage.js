const CartPage = (props) => {
  return (
    <main>
      {props.cartInfo.map((item) => {
        return (
          <div>
            <img src={item.image} alt={"image of " + item.name} />
            <div>
              <div>{item.name}</div>
              {/* <div>Type: {item.types.map((type) => type)}</div> */}
              <div>Height: {item.height / 10}m</div>
              <div>Weight: {item.weight / 10}kg</div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default CartPage;

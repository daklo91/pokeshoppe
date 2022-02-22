import classes from "./ItemCard.module.css";
import findColor from "../scripts/findColor";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <Link to={"/" + props.name}>
      <div
        className={classes.container}
        style={{
          backgroundColor: findColor(props.types[0]) + 70,
          borderColor: findColor(
            props.types.length > 1 ? props.types[1] : props.types[0]
          ),
        }}
      >
        <div className={classes["price-tag"]}>${props.price}</div>
        <img
          className={classes.image}
          src={props.image}
          alt={"Image of" + props.name}
        />
        <div className={classes["name-tag"]}>{props.name}</div>
      </div>
    </Link>
  );
};

export default ItemCard;

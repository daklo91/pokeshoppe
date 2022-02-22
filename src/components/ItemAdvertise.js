import ItemCard from "./ItemCard";
import classes from "./ItemAdvertise.module.css";
import { Fragment } from "react";

const ItemAdvertise = (props) => {
  return (
    <Fragment>
      <h2 className={classes["advertisement-text"]}>{props.children}</h2>
      <div className={classes.container}>
        {props.pokemonData
          ? props.pokemonData
              .filter(
                (pokemon) =>
                  pokemon.name ===
                  props.pokemonsToRender.find((name) => name === pokemon.name)
              )
              .map((pokemon) => (
                <ItemCard
                  key={pokemon.id}
                  price={pokemon.price}
                  image={pokemon.image}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              ))
          : null}
      </div>
    </Fragment>
  );
};

export default ItemAdvertise;

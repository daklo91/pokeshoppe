import { Fragment } from "react";
import classes from "./ItemAdvertise.module.css";
import ItemCard from "./ItemCard";

const ItemAdvertise = (props) => {
  const pokemonData = props.pokemonData ? props.pokemonData : [];
  const pokemonsToRender = props.pokemonsToRender;

  const filterPokemonByID = () => {
    const filteredArray = pokemonData
      .filter(
        (pokemon) =>
          pokemon.id === pokemonsToRender.find((id) => id === pokemon.id)
      )
      .map((pokemon) => (
        <ItemCard
          key={pokemon.id}
          price={pokemon.price}
          image={pokemon.image}
          name={pokemon.name}
          types={pokemon.types}
        />
      ));
    return filteredArray;
  };

  return (
    <Fragment>
      <h2 className={classes["advertisement-text"]}>{props.children}</h2>
      <div className={classes.container}>{filterPokemonByID()}</div>
    </Fragment>
  );
};

export default ItemAdvertise;

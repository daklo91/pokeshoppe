import { Link, useParams } from "react-router-dom";
import classes from "./DetailPage.module.css";
import ItemAdvertise from "../components/ItemAdvertise";
import findColor from "../scripts/findColor";

const DetailPage = (props) => {
  const { pokemonName } = useParams();
  const pokemon = props.pokemonData.find(
    (pokemon) => pokemon.name === pokemonName
  );

  const findColorByType = () => {
    return {
      backgroundColor: findColor(pokemon.types[0]) + 70,
      borderColor: findColor(
        pokemon.types.length > 1 ? pokemon.types[1] : pokemon.types[0]
      ),
    };
  };

  return pokemon ? (
    <main>
      <div className={classes.container}>
        <h1 className={classes.name}>{pokemon.name}</h1>
        <img
          className={classes.image}
          src={pokemon.image}
          alt={"image of" + pokemon.name}
        />
        <div className={classes["detail-container"]}>
          <div>Species: {pokemon.species}</div>
          <div>Height: {pokemon.height / 10}m</div>
          <div>Weight: {pokemon.weight / 10}kg</div>
          <p className={classes["pokemon-description"]}>
            {pokemon.description}
          </p>
        </div>
        <button
          onClick={() => props.AddToCart(pokemon)}
          className={classes["add-to-cart-button"]}
          style={findColorByType()}
        >
          Buy for ${pokemon.price}
        </button>
        <Link to="/">Back to browsing</Link>
        <ItemAdvertise
          pokemonData={props.pokemonData}
          pokemonsToRender={
            pokemon.id < 149
              ? [pokemon.id + 1, pokemon.id + 2, pokemon.id + 3]
              : [pokemon.id - 1, pokemon.id - 2, pokemon.id - 3]
          }
        >
          Others also purchased 👇
        </ItemAdvertise>
      </div>
    </main>
  ) : (
    <h1>Loading ...</h1>
  );
};

export default DetailPage;

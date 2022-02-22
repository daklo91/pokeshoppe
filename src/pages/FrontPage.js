import ItemAdvertise from "../components/ItemAdvertise";
import { Fragment } from "react";
import classes from "./FrontPage.module.css";

const FrontPage = (props) => {
  return (
    <main>
      {props.pokemonData.length < 140 ? (
        <h1>Loading ...</h1>
      ) : (
        <div className={classes["advertise-container"]}>
          <ItemAdvertise
            pokemonData={props.pokemonData}
            pokemonsToRender={[151, 25, 6, 144, 41, 124]}
          >
            Most popular 😮
          </ItemAdvertise>
          <ItemAdvertise
            pokemonData={props.pokemonData}
            pokemonsToRender={[12, 1, 7, 150, 143, 25, 92]}
          >
            Just in 📨
          </ItemAdvertise>
          <ItemAdvertise
            pokemonData={props.pokemonData}
            pokemonsToRender={[77, 37, 50, 70, 30, 23, 123, 143]}
          >
            Whats hot 🔥
          </ItemAdvertise>
          <ItemAdvertise
            pokemonData={props.pokemonData}
            pokemonsToRender={[124, 142, 13, 15, 17, 69, 37]}
          >
            Shockingly cheap ⚡
          </ItemAdvertise>
        </div>
      )}
    </main>
  );
};

export default FrontPage;

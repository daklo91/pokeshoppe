import classes from "./App.module.css";
import { Fragment, useEffect, useState } from "react";
import ItemAdvertise from "./components/ItemAdvertise";
import Header from "./components/Header";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (!pokemonData.length) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.results.forEach((pokemon) =>
            fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
              .then((response) => response.json())
              .then((pokeData) => {
                const object = {
                  id: pokeData.id,
                  name: pokeData.name,
                  types: [pokeData.types[0].type.name],
                  weight: pokeData.weight,
                  height: pokeData.height,
                  image:
                    pokeData.sprites.other["official-artwork"].front_default,
                  price: pokeData.base_experience,
                };
                if (pokeData.types.length > 1) {
                  object.types.push(pokeData.types[1].type.name);
                }
                fetch(
                  "https://pokeapi.co/api/v2/pokemon-species/" + pokeData.name
                )
                  .then((response) => {
                    return response.json();
                  })
                  .then((speciesData) => {
                    const description = speciesData.flavor_text_entries
                      .reverse()
                      .find((x) => x.language.name === "en");
                    object.species = speciesData.genera[7].genus;
                    object.description = description.flavor_text;
                  });
                setPokemonData((prevState) => {
                  return [...prevState, object];
                });
              })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pokemonData]);

  return (
    <Fragment>
      <Header />
      <main>
        {pokemonData.length < 140 ? (
          <h1>Loading ...</h1>
        ) : (
          <div className={classes["advertise-container"]}>
            <ItemAdvertise
              pokemonData={pokemonData}
              pokemonsToRender={[
                "mew",
                "pikachu",
                "charizard",
                "articuno",
                "zubat",
                "jynx",
              ]}
            >
              Most popular 😮
            </ItemAdvertise>
            <ItemAdvertise
              pokemonData={pokemonData}
              pokemonsToRender={[
                "butterfree",
                "bulbasaur",
                "squirtle",
                "mewtwo",
                "snorlax",
                "pikachu",
                "ghastly",
              ]}
            >
              Just in 📨
            </ItemAdvertise>
            <ItemAdvertise
              pokemonData={pokemonData}
              pokemonsToRender={[
                "ponyta",
                "vulpix",
                "growlithe",
                "magmar",
                "charmander",
                "charmeleon",
                "ninetales",
                "rapidash",
              ]}
            >
              Whats hot 🔥
            </ItemAdvertise>
            <ItemAdvertise
              pokemonData={pokemonData}
              pokemonsToRender={[
                "voltorb",
                "magnemite",
                "electrode",
                "magneton",
                "electabuzz",
                "jolteon",
                "raichu",
              ]}
            >
              Shockingly cheap ⚡
            </ItemAdvertise>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default App;

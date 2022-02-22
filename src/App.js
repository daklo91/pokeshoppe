import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import FrontPage from "./pages/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [cart, setCart] = useState([]);

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

  const AddToCart = (pokemon) => {
    setCart((prevState) => {
      return [...prevState, pokemon];
    });
  };

  const RemoveFromCart = (pokeIndex) => {
    setCart((cart) => {
      return cart.filter((value, i) => i !== pokeIndex);
    });
  };

  return (
    <Fragment>
      <Router>
        <Header cartLength={cart.length} />
        <Routes>
          <Route path="/" element={<FrontPage pokemonData={pokemonData} />} />
          <Route
            path="/cart"
            element={
              <CartPage cartInfo={cart} RemoveFromCart={RemoveFromCart} />
            }
          />
          <Route
            path="/:pokemonName"
            element={
              <DetailPage pokemonData={pokemonData} AddToCart={AddToCart} />
            }
          />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;

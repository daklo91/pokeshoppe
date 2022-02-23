import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./pages/FrontPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [cart, setCart] = useState([]);

  if (pokemonData.length === 151) {
    console.log(pokemonData);
  }

  useEffect(() => {
    if (!pokemonData.length) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
          return response.json();
        })
        .then((dataList) => {
          dataList.results.forEach((pokemon) =>
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
                    const description = speciesData.flavor_text_entries.find(
                      (x) => x.language.name === "en"
                    );
                    object.species = speciesData.genera[7].genus;
                    object.description = description.flavor_text;
                  })
                  .then(() => {
                    setPokemonData((prevState) => {
                      return [...prevState, object];
                    });
                  })
                  .catch((err) => {
                    console.log("Error fetching pokemon-species: " + err);
                  });
              })
              .catch((err) => {
                console.log("Error fetching pokemon: " + err);
              })
          );
        })
        .catch((err) => {
          console.log("Error fetching list: " + err);
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
    <Router>
      <Header cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<FrontPage pokemonData={pokemonData} />} />
        <Route
          path="/:pokemonName"
          element={
            <DetailPage pokemonData={pokemonData} AddToCart={AddToCart} />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartInfo={cart} RemoveFromCart={RemoveFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

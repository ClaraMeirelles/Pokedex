import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const limit = 30 * (currentPage - 1);
    axios
      .get(`${BASE_URL}/pokemon?limit=30&offset=${limit}`)
      .then((response) => {
        setPokemonNames(response.data.results);
      })
      .catch((error) => console.log(error.message));
  }, [currentPage]);

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios.get(`${BASE_URL}/pokemon/${item.name}`).then((response) => {
        newList.push(response.data);
        if (newList.length === 30 && currentPage < 38) {
          const orderedList = newList.sort((a, b) => {
            return a.id - b.id;
          });
          setPokemons(orderedList);
        } else if (currentPage === 38 && newList.length === 9) {
          const orderedList = newList.sort((a, b) => {
            return a.id - b.id;
          });
          setPokemons(orderedList);
        }
      });
    });
  }, [pokemonNames, currentPage]);

  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;

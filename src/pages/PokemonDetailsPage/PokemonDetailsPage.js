import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage } from '../../routes/Coordinator.js'
import { StyledPokemonDetails, PokemonImages, DetailPageContainer, Details } from "./Styled";
import axios from 'axios'
import { BASE_URL } from "../../constants/url";

const PokemonDetailsPage = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState()
  const pathParams = useParams()
  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon/${pathParams.name}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [pathParams])
  return (
    <>
      <Header
        title={"Detalhes do Pokemon"}
        ControllerButtonMain={() => goToHomePage(history)}
        ControllerButtonSecond
      />
      <DetailPageContainer>
        <StyledPokemonDetails>
          {pokemon &&
            <>
              <h1>{pokemon.forms[0].name}</h1>
              <p><strong>Tipo:</strong>{pokemon.types.map((type) => { return " " + type.type.name + " " })}</p>
              <PokemonImages>
                {pokemon.sprites.other.dream_world.front_default ?
                  <img src={pokemon.sprites.other.dream_world.front_default} alt={`imagem frontal do pokémon ${pathParams.name}`} /> :
                  <img src={pokemon.sprites.front_default} alt={`imagem frontal do pokémon ${pathParams.name}`} />
                }
                {pokemon.sprites.other.dream_world.back_default ?
                  <img src={pokemon.sprites.other.dream_world.back_default} alt={`imagem do ${pathParams.name} de costas`} /> :
                  <img src={pokemon.sprites.back_default} alt={`imagem do ${pathParams.name} de costas`} />
                }
              </PokemonImages>

              <div>
                <h3>Estatísticas</h3>
                <Details>
                  {pokemon.stats.map((stat) => {
                    return <p key={stat.stat.name}><strong>{stat.stat.name}:</strong> {stat.base_stat}</p>
                  })}
                  <p><strong>weight: </strong>{pokemon.weight}</p>
                </Details>
              </div>
              <div>
                <h3>Ataques</h3>
                <Details>
                  {pokemon.moves.map((move) => {
                    return <p key={move.move.name}>{move.move.name}</p>
                  })}
                </Details>
              </div>
            </>
          }
        </StyledPokemonDetails>
      </DetailPageContainer>
    </>
  );
};

export default PokemonDetailsPage;

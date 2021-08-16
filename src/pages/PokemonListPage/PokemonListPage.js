import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import { Container, ListContainer, ContainerPagination } from "./Styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

const PokemonListPage = () => {
  const history = useHistory();
  const { pokemons, currentPage, setCurrentPage } =
    useContext(GlobalStateContext);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Header
        title={"Lista de Pokemons"}
        ControllerButtonMain={() => goToPokedexPage(history)}
      />
      <ListContainer>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => {
            return <CardPokemon pokemon={pokemon} key={pokemon.name} />;
          })
        ) : (
          <CircularProgress />
        )}
      </ListContainer>
      <ContainerPagination>
        <Pagination
          count={38}
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </ContainerPagination>
    </Container>
  );
};

export default PokemonListPage;

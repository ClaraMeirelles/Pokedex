import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import Logo from "../../img/logo.png";
import {
  ContainerMain,
  ControllerButtonOne,
  ControllerButtonTwo,
  ContainerLogo,
} from "./Styled";

const Header = ({ ControllerButtonMain, title, ControllerButtonSecond }) => {
  const history = useHistory();

  const ButtonHeader = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Pokedex";
      case "Pokedex":
        return "Lista de Pokemons";
      default:
        return "Lista de Pokemons";
    }
  };

  return (
    <>
      <ContainerMain>
        <ControllerButtonOne onClick={ControllerButtonMain}>
          {ButtonHeader()}
        </ControllerButtonOne>

        <img src={Logo} alt={'Logo Pokémon'} />

        {ControllerButtonSecond && (
          <ControllerButtonTwo onClick={() => goToPokedexPage(history)}>
            Ir para Pokedex
          </ControllerButtonTwo>
        )}
      </ContainerMain>

      <ContainerLogo>
        <h1>{title}</h1>
      </ContainerLogo>
    </>
  );
};

export default Header;

import styled from "styled-components";

export const CardContainerMain = styled.div`
  height: 35vh;
  width: 300px;
  margin: 40px;
  display: grid;
  grid-template-rows: 85% 15%;

  p {
    color: white;
    text-transform: uppercase;
    margin: 10px;
  }

  button {
    background-color: black;
    color: white;
    border-top: 2px solid rgb(239, 191, 1);
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(239, 191, 1);
    color: black;
  }

  button:active {
    background-color: rgb(182, 146, 1);
  }
`;

export const ImageContainer = styled.div`
  background: rgb(25, 25, 25);
  opacity: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const ImagePokemon = styled.img`
  height: 70%;
  width: 70%;
`;

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ContainerButtonFight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 35px;
`;



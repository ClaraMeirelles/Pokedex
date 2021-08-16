import styled from "styled-components";

export const BattlePageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    margin-top: 0;
    max-height: 80vh;
  }
`;

export const StyledPokemonBattle = styled.section`
  height: fit-content;
  width: 90vw;
  display:grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns:  25vw 1fr 25vw;
  padding: 16px;
  justify-self: center;
  align-self: center;
  text-decoration: underline;
  margin-top: 30px;
  border-radius: 30px;
  background-color: rgb(25, 25, 25);
  color: lightgray;
  h1{
      grid-column: 1/3;
      color:white;
      text-decoration: underline;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    border: 1px solid lightgray;
    padding: 16px;
    margin: 8px;
    align-items: space-between;
  }
  
  aside{
    grid-column: 1;
  }
  strong{
    color:white;
  }  
  h3{
    color: white;
    align-self: center;
    text-decoration: underline;
  }

  @media (min-width: 501px) and (max-width: 850px) {
    width: 99vw;
    grid-template-columns: 30vw 1fr 30vw;
    img{
      height: 100px;
      width: 100px;
    }
    div{
      max-height:80vh;
      display: flex;
      flex-direction: column;
    }
    h1 {
      font-size: 0.9rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 500px) {
    height: fit-content;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 45vw 45vw;
    grid-template-rows: 40vh 40vh;
    gap: 8px;
    margin-top: 0;
    h1 {
      font-size: 0.7rem;
    }
    h3 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.5rem;
    }
    div {
      height: 35vh !important;
      border-radius: 15px;
      padding-left: 10px;
      margin-left: 28px;
      align-items: center;
      margin: 0;
      :nth-child(2){
      grid-column: 1/3;
      grid-row: 2;
      }
    }
    img{
      width: 8vw;
      height: 8vw;
    }
  }
`
export const RivalBattleImage = styled.img`
  @media (max-width: 500px){
    height: 30vw !important;
    width: 30vw !important;
  }
`
export const PokemonBattleImage = styled.img`
  @media (max-width: 500px){
    height: 40vw !important;
    width: 40vw !important;
  }
`
export const PokemonImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 25vh;
    width: 25vw;
  }

  @media (max-width: 800px) {
    img {
      height: 30vh;
      width: 30vw;
    }
  }
  
  @media (max-width: 500px) {
    flex-direction: row;
    img {
      height: 25vw;
      width: 25vw;
    }
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 55vh;
  margin-top: 36px;
  ::-webkit-scrollbar {
      width: 12px;
  }
  ::-webkit-scrollbar-track {
      background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 3px solid lightgray;
  }
  button {
    background-color: black;
    color: white;
    border: 2px solid rgb(239, 191, 1);
    border-radius: 20px;
    cursor: pointer;
    margin-top: 8px;
  }

  button:hover {
    background-color: rgb(239, 191, 1);
    color: black;
  }

  button:active {
    background-color: rgb(182, 146, 1);
  }
  @media (max-width: 800px) {
    overflow: hidden;
    padding: 0;
    margin-top: 0;
  }
`
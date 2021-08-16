import styled from 'styled-components'

export const DetailPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPokemonDetails = styled.section`
  height: 80vh;
  width: 70vw;
  display:grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows: 10vh 1fr;
  padding: 16px;
  justify-self: center;
  align-self: center;
  background-color: rgb(25, 25, 25);
  margin-top: 30px;
  border-radius: 30px;
  color: lightgray;
  strong, h1, h3{
    color: white;
    text-decoration: underline;
  } 
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
    border-radius: 25px;
    border: 1px solid lightgray;
    padding: 16px;
    margin: 8px;
    align-items: space-between;
  }

  @media (max-width: 800px){
    display: inline-block;
    margin: 0 auto;
    height: 156vh;

    h1 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
    div {
    min-height: 40vh;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 2px;
    margin-left: 28px;
    }
  }

  @media (max-width: 500px) {
    display: inline-block;
    margin: 0 auto;
    height: fit-content;
    width: 80vw;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 1rem;
    }
    div {
      margin-left: 8px;
    }
  }
`

export const PokemonImages = styled.section`
  grid-column: 1;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 25vh;
    width: 25vh;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    img {
      height: 25vh;
      width: 25vw;
    }
  }

  @media (max-width: 500px) {
    flex-direction: row !important;
    justify-items: space-evenly;
    img {
      width: 30vw;
      height: 30vw;
      margin: 8px;
    }
  }
`

export const Details = styled.section`
  overflow-y: auto;
  height: 55vh;
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

  @media (max-width: 800px) { 
    /* width: 50vw; */
    letter-spacing: 0.1rem;
    /* height: 40vh; */
    height: fit-content;
    max-height: 40vh;
    padding: 8px;
  }
`

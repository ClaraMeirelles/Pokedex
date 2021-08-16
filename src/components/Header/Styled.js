import styled from "styled-components";

export const ContainerMain = styled.header`
  height: 10vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 1em 1em black;
  img {
    height: 22vh;
  }

  @media (max-width: 850px) {
    padding: 0;
    button{
      margin-top: 12px;
    }
  }
  @media (max-width: 500px){
    img{
      height: 18vh;
    }
  }
`;

export const ControllerButtonOne = styled.button`
  position: absolute;
  left: 3rem;
  background-color: rgb(25, 25, 25);
  box-shadow: inset 0 0 0.4em gold;
  color: lightgray;
  border: 1px solid rgb(239, 191, 1);
  border-radius: 0.5rem;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 1rem;
    height: 2.7rem;
    width: 8rem; 
    left: 12px;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    width: 5rem;
  }
`;

export const ControllerButtonTwo = styled.button`
  right: 3rem;
  position: absolute;
  background-color: rgb(25, 25, 25);
  box-shadow: inset 0 0 0.4em gold;
  border: 1px solid rgb(239, 191, 1);
  border-radius: 0.5rem;
  color: lightgray;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 1rem;
    height: 2.7rem;
    width: 8rem;
    right: 12px;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    width: 5rem;
  }
`;

export const ContainerLogo = styled.header`
  background-color: black;
  height: 8vh;
  width: 15vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(209, 209, 209);
  font-weight: lighter;
  font-size: 0.6rem;
  margin: 0 auto;
  border-bottom-left-radius: 20rem;
  border-bottom-right-radius: 20rem;
  box-shadow: 9px 7px 5px #191919;
  h1 {
    font-size: 1rem;
  }

  @media (max-width: 1400px) {
    width: 30vw;
    height: 8vh;
    margin-bottom: 2rem;
    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 800px) {
    width: 30vw;
    height: 8vh;
    margin-bottom: 2rem;
    h1 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    width: 45vw;
    height: 8vh;
    margin-bottom: 2rem;
    h1 {
      font-size: 0.8rem;
    }
  }
`;

import styled from "styled-components";
import ImgFundo from "../../img/backgroundPoke.png";

export const ListContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  h1 {
    color: white;
  }
`;

export const Container = styled.body`
  width: 98vw;
  height: 98vh;
  margin: 0rem 0rem;
  padding: 0rem 0rem;
  background-image: url(${ImgFundo});
`;
export const Topo = styled.div`
  width: 98vw;
  height: 15vh;
  background-color: black;
  display: flex;
  box-shadow: 0 10px 30px -1px black;
  align-items: center;

  button {
    width: 8vw;
    height: 5vh;
    margin-left: 2rem;
    background-color: transparent;
    border: 1px solid darkgray;
    color: darkgray;
    border-radius: 0.5rem;
  }

  img {
    height: 20vh;
    align-items: flex-end;
    z-index: 3;
    display: flex;
    margin: 0 auto;
  }
`;

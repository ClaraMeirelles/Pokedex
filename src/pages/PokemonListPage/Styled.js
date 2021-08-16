import styled from "styled-components";

export const Container = styled.div`
  display: flow-root;
`;

export const ListContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3vh;
`;

export const ContainerPagination = styled.div`
  height: 5vh;
  background-color: whitesmoke;
  display: flex;
  justify-content: center; 
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

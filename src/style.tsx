import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  grid-gap: 50px;
  height: 92vh;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0px;
    height: 95vh;
  }
`;

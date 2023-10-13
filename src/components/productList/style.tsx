import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  overflow-y: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

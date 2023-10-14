import styled from "styled-components";

export const CartOrder = styled.div`
  overflow-y: visible;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartOrderContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 92vh;
`;
export const CartOrderMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

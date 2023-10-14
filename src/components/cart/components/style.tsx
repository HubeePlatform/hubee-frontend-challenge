import styled from "styled-components";

export const Order = styled.div`
  height: 300px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  justify-content: space-around;
  align-items: center;
  & > * {
    flex: 1;
    flex-grow: 1;
  }
`;

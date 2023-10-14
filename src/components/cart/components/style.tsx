import styled from "styled-components";

export const Order = styled.div`
  margin-bottom: 30px;
  height: 120px;
  overflow-y: auto;
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

export const Coupon = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const InformationValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0px;
`;

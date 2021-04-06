import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  @media (max-width: 640px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  h2 {
    color: var(--text-title);
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  margin-bottom: 2rem;
`;

export const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 0 auto;
  border-radius: 0.3rem;
  background: var(--white);
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  span {
    color: var(--text-body);
    font-weight: 500;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--text-body);
    font-weight: 700;
    margin: 0 10px;
  }
`;

export const ButtonIcon = styled(IconButton)``;

export const Footer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: auto;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 1080px) {
    padding: 0 22px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
  height: 54px;
  margin-bottom: 5rem;
`;

export const ButtonDiscount = styled(Button)`
  width: 100%;
  height: 2.5rem;
`;

export const WrapperPrices = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.5rem;

  &:nth-child(3) {
    margin-top: 5rem;
  }

  p {
    color: var(--text-body);
    font-weight: 500;
  }
`;

export const WrapperPricesDescont = styled(WrapperPrices)`
  strong {
    color: var(--red);
  }
`;

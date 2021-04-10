import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

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

export const ContentCartEmpty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h2 {
    color: var(--blue);
    font-size: 2rem;
    margin: 2rem 0;
    text-align: center;
  }

  img {
    width: 20rem;
    height: 20rem;
  }
`;

export const WrapperProducts = styled(Card)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2rem;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  flex-direction: row;
  margin: 0 auto;
  border-radius: 0.3rem;
  background: var(--white);

  @media (max-width: 340px) {
    padding: 1rem;
  }
`;

export const CardImage = styled(CardMedia)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 100%;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;

  p {
    width: 100%;
    color: var(--text-body);
    font-weight: 500;
    text-align: center;
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
  margin: 2rem 0 4rem 0;
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
  height: 52px;
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

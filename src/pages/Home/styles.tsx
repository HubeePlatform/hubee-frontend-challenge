import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  @media (max-width: 640px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  padding: 1.5rem 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardWrapper = styled(Card)`
  display: flex;
  background: var(--white);
  flex-direction: column;
  min-height: 40px;
`;

export const CardImage = styled(CardMedia)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 100%;
`;

export const WrapperValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonBuy = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
`;

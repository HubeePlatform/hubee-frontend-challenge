import styled from "styled-components";
import { Typography, Button, Card, CardActions, TextField } from '@material-ui/core';

export const BoxContent = styled.div`
  width: 100%;
  background-color: var(--background);
  margin-bottom: 2rem;
  padding: 1rem 10rem 1rem 10rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: auto;
`;    

export const ContainerMain = styled.div`
  background-color: var(--background);
  height: 30vh
  display: flex;
  justify-content: center;
`;

export const BoxCart = styled.div`
  width: 100%;
  background-color: var(--background);
  margin-bottom: 1rem;
`;   

export const ContainerMainCart = styled.div`
  background-color: var(--background);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerCartItems = styled.div`;
  width: 40vw;
  margin-right: 2rem;
`;

export const ContainerCartSumary = styled(Card)`
  width: 27vw;
  height: 40rem;
  background-color: #d3d3d3;
  margin-bottom: 7rem;
  padding: 2rem;
`;

export const CSpan = styled.span`
  color: var(--black);
  font-size: 1.1rem;
  font-weight: bold;
  align-self: center;
  
`;

export const BtnCart = styled(Button)`
  width: 100%;
`; 

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Space = styled.hr`
  margin: 1.5rem 0;
  opacity: 0.3;
`;	

export const TextFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 7rem;
`;

export const ContainerEmpty = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

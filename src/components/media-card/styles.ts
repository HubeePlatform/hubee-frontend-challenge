import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import CardActions from '@material-ui/core/CardActions';

export const CardFlex = styled(Card)`
  display: flex;
  background: var(--white);
  flex-direction: column;
  width: 20rem;
  height: 100%;
  margin: 1rem;
`;

export const BtnComprar = styled(Button)`
  width: 100%;
`; 

export const Stars = styled(CardActions)`
  display: flex;  
  flex-direction: row;
  justify-content: center;
`; 

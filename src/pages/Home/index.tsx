import { TextField } from '@material-ui/core';
import { Header } from '../../components/Header';
import { CardProduct } from './components/CardProduct';
import { Container } from './styled';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <TextField label="Filtrar..." />
        <ul>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ul>
      </Container>
    </>
  );
}

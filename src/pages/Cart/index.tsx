import { Header } from '../../components/Header';
import { CardProduct } from './components/CardProduct';
import { Container } from './styled';

export function Cart() {
  return (
    <>
      <Header />
      <Container>
        <h4>meu carrinho</h4>
        <ul>
          <CardProduct />
        </ul>
      </Container>
    </>
  );
}

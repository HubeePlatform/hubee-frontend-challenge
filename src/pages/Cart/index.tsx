import { Button, TextField } from '@material-ui/core';
import { Header } from '../../components/Header';
import { CardProduct } from './components/CardProduct';
import { ActionsCart, Container, Summary } from './styled';

export function Cart() {
  return (
    <>
      <Header />
      <Container>
        <h4>meu carrinho</h4>
        <ul>
          <CardProduct />
        </ul>
        <Summary>
          <p>
            <small>subtotal</small>
            R$ 57,98
          </p>
          <p>
            <small>cupom “hubee” aplicado</small>
            -R$ 17,98
          </p>

          <p className="total">
            <small>total</small>
            R$ 40,00
          </p>
        </Summary>
        <ActionsCart>
          <TextField label="cupom de desconto..." />
          <Button>finalizar pedido</Button>
        </ActionsCart>
      </Container>
    </>
  );
}

import { Button } from '@material-ui/core';
import { Add, Delete, Remove } from '@material-ui/icons';
import { Container, ButtonGroup, Subtotal } from './styled';

export function CardProduct() {
  return (
    <Container>
      <Button type="button">
        <Delete />
      </Button>

      <img
        src="https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        alt="produto"
      />
      <p>
        blusinha listrada branca e azuli
        <small>temos no tamanho de todas as pessoas e animais</small>
      </p>

      <ButtonGroup>
        <Button type="button">
          <Remove />
        </Button>
        <span>2</span>
        <Button type="button">
          <Add />
        </Button>
      </ButtonGroup>

      <Subtotal>
        <small>2 x R$28,99 = </small>
        R$ 57,98
      </Subtotal>
    </Container>
  );
}

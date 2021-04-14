import { Button } from '@material-ui/core';
import { Container } from './styled';

export function CardProduct() {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        alt="produto"
      />
      <div>
        <h4>camiseta básica verde verdona</h4>
        <small>temos no tamanho de todas as pessoas e animais</small>
        <p>
          R$ 28,99
          <span>por unidade</span>
        </p>
      </div>
      <Button color="primary">adicionar ao carrinho</Button>
    </Container>
  );
}

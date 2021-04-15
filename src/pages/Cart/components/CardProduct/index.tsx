import { Button } from '@material-ui/core';
import { Add, Clear, Delete, Remove } from '@material-ui/icons';
import { IProduct } from '../../../../store/modules/cart/type';
import { Container, ButtonGroup, Subtotal } from './styled';

interface CardProductProps {
  product: IProduct;
  amount: number;
}

export function CardProduct({ product, amount }: CardProductProps) {
  return (
    <Container>
      <Button type="button">
        <Delete />
      </Button>

      <img src={product.url} alt={product.name} />
      <p>{product.name}</p>

      <ButtonGroup>
        <Button type="button">
          <Remove />
        </Button>
        <span>{amount}</span>
        <Button type="button">
          <Add />
        </Button>
      </ButtonGroup>

      <Subtotal>
        <small>
          {amount}
          <Clear />
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price)}
          =
        </small>
        {new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        }).format(product.price * amount)}
      </Subtotal>
    </Container>
  );
}

import { Button } from '@material-ui/core';
import { Add, Clear, Delete, Remove } from '@material-ui/icons';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeProductToCartRequest } from '../../../../store/modules/cart/actions';
import { IProduct } from '../../../../store/modules/cart/type';
import { Container, ButtonGroup, Subtotal } from './styled';

interface CardProductProps {
  product: IProduct;
  amount: number;
}

export function CardProduct({ product, amount }: CardProductProps) {
  const dispatch = useDispatch();

  const handleRemoveProductToCart = useCallback(() => {
    dispatch(removeProductToCartRequest(product.id));
  }, [dispatch, product]);

  return (
    <Container>
      <Button type="button" onClick={handleRemoveProductToCart}>
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

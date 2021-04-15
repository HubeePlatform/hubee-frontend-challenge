import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../../store/modules/cart/actions';
import { IProduct } from '../../../../store/modules/cart/type';
import { Container } from './styled';

interface CardProductProps {
  product: IProduct;
}

export function CardProduct({ product }: CardProductProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <Container>
      <img src={product.url} alt={product.name.toLocaleLowerCase()} />
      <div>
        <h4>{product.name.toLocaleLowerCase()}</h4>
        <p>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price)}
          <span>por unidade</span>
        </p>
      </div>
      <Button color="primary" onClick={handleAddProductToCart}>
        adicionar ao carrinho
      </Button>
    </Container>
  );
}

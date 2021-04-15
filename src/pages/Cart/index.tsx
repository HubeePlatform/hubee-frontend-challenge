import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { IState } from '../../store';
import { ICartItem, ICartState, IProduct } from '../../store/modules/cart/type';
import { CardProduct } from './components/CardProduct';
import { ActionsCart, Container, Summary } from './styled';

interface IProductInCart {
  product: IProduct;
  amount: number;
}

export function Cart() {
  const [products, setProducts] = useState<IProductInCart[]>([]);
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  useEffect(() => {
    api.get('products').then((response) => {
      function onFilterProducts(product: IProduct) {
        return cart.items.findIndex((p) => p.productId === product.id) >= 0;
      }

      const listProductsInCart: IProduct[] = response.data.filter(
        onFilterProducts,
      );

      const newListProducts = listProductsInCart.map((product) => ({
        product,
        amount:
          cart.items.find((p: ICartItem) => p.productId === product.id)
            ?.amount ?? 0,
      }));

      setProducts(newListProducts);
    });
  }, [cart]);

  return (
    <>
      <Header />
      <Container>
        <h4>meu carrinho</h4>
        <ul>
          {products.map((productInCart) => (
            <CardProduct
              product={productInCart.product}
              amount={productInCart.amount}
              key={productInCart.product.id}
            />
          ))}
        </ul>
        <Summary>
          <p>
            <small>subtotal</small>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(cart.totalPrice)}
          </p>
          <p>
            <small>cupom “hubee” aplicado</small>
            -R$ 17,98
          </p>

          <p className="total">
            <small>total</small>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(cart.totalPrice)}
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

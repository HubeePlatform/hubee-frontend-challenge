import { Button, TextField } from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { IState } from '../../store';
import { addCouponToCart } from '../../store/modules/cart/actions';
import {
  ICartItem,
  ICartState,
  ICoupon,
  IProduct,
} from '../../store/modules/cart/type';
import { CardProduct } from './components/CardProduct';
import { ActionsCart, Container, Summary } from './styled';

interface IProductInCart {
  product: IProduct;
  amount: number;
}

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const [couponKey, setCouponKey] = useState('');
  const [coupon, setCoupon] = useState<ICoupon>({} as ICoupon);
  const [products, setProducts] = useState<IProductInCart[]>([]);

  const percentageCoupon = coupon?.rebatePercentage / 100 || 0;

  const priceOffByCoupon = cart.totalPrice * percentageCoupon;

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

  useEffect(() => {
    api.get<ICoupon[]>('coupons').then((response) => {
      const couponToResponse = response.data.find(
        (c) => c.key === cart.coupon,
      ) as ICoupon;

      setCoupon(couponToResponse);
    });
  }, []);

  const handleAddCouponToCartRequest = () => {
    api.get<ICoupon[]>('coupons').then((response) => {
      const couponToResponse = response.data.find(
        (c) => c.key === couponKey,
      ) as ICoupon;

      if (!couponToResponse.key) {
        toast.error('Cupom inválido, tente outro');
        return;
      }

      if (!couponToResponse.isActive) {
        toast.error('Cupom foi desativado, tente outro');
        return;
      }

      dispatch(addCouponToCart(couponToResponse));

      setCoupon(couponToResponse);
    });
  };

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
          <div>
            <TextField
              label="cupom de desconto..."
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCouponKey(e.target.value);
              }}
            />
            <Button onClick={handleAddCouponToCartRequest}>
              aplicar cupom
            </Button>
          </div>

          <p>
            <small>subtotal</small>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(cart.totalPrice)}
          </p>

          {!!cart.coupon && (
            <p>
              <small>
                cupom
                {' "'}
                {cart.coupon}
                {'" '}
                aplicado
              </small>
              {new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                style: 'currency',
              }).format(-priceOffByCoupon)}
            </p>
          )}

          <p className="total">
            <small>total</small>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(cart.totalPrice - priceOffByCoupon)}
          </p>
        </Summary>
        <ActionsCart>
          <Button>finalizar pedido</Button>
        </ActionsCart>
      </Container>
    </>
  );
}

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../assets/emptyCart.svg";
import { IState } from "../../store";
import {
  addCouponRequest,
  checkoutCart,
  removeProduct,
  updateAmount,
} from "../../store/modules/cart/actions";
import { ICartState, IProduct } from "../../store/modules/cart/types";
import { formatPrice } from "../../utils/format";
import {
  ButtonDiscount,
  ButtonIcon,
  Container,
  Content,
  ContentCartEmpty,
  Footer,
  Input,
  Products,
  WrapperButton,
  WrapperPrices,
  WrapperPricesDescont,
  WrapperProducts,
  WrapperTitle,
} from "./styles";

const Cart = (): JSX.Element => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const subtotalProduct = cart.items.reduce((sumTotal, product) => {
    const subTotal = product.price * product.amount;
    sumTotal += subTotal;

    return sumTotal;
  }, 0);

  const valueCoupon = subtotalProduct * (cart.coupon.rebatePercentage / 100);
  const totalProducts = subtotalProduct - valueCoupon;

  const handleRemoveProduct = useCallback(
    (id: number) => {
      dispatch(removeProduct(id));
    },
    [dispatch]
  );

  const incrementAmountProduct = useCallback(
    (product: IProduct) => {
      dispatch(updateAmount(product.id, product.amount + 1));
    },
    [dispatch]
  );

  const decrementAmountProduct = useCallback(
    (product: IProduct) => {
      dispatch(updateAmount(product.id, product.amount - 1));
    },
    [dispatch]
  );

  const handleAddCoupon = useCallback(
    (key: string) => {
      if (!key) return;

      dispatch(addCouponRequest(key));
    },
    [dispatch]
  );

  const checkoutCartProducts = useCallback(
    (coupon, product: IProduct[], totalValue) => {
      dispatch(checkoutCart(coupon, product, totalValue));
    },
    [dispatch]
  );

  return (
    <Container>
      <Content>
        {cart.items.length <= 0 ? (
          <ContentCartEmpty>
            <img src={EmptyCart} alt="Carrinho vazinho" />
            <h2>OPS! SEU CARRINHO ESTÁ VAZIO.</h2>
          </ContentCartEmpty>
        ) : (
          <>
            <WrapperTitle>
              <h2>Resumo do pedido</h2>
            </WrapperTitle>

            {cart.items.map((product) => (
              <WrapperProducts key={product.id}>
                <Products>
                  <p>{product.name}</p>
                </Products>
                <WrapperButton>
                  <ButtonIcon onClick={() => decrementAmountProduct(product)}>
                    <RemoveIcon style={{ color: "#e52e4d" }} />
                  </ButtonIcon>
                  <p>{product.amount}</p>
                  <ButtonIcon onClick={() => incrementAmountProduct(product)}>
                    <AddIcon style={{ color: "#33cc95" }} />
                  </ButtonIcon>
                </WrapperButton>
                <Products>
                  <p>{formatPrice(product.price * product.amount)}</p>
                </Products>
                <ButtonIcon onClick={() => handleRemoveProduct(product.id)}>
                  <DeleteIcon style={{ color: "#e52e4d" }} />
                </ButtonIcon>
              </WrapperProducts>
            ))}
            <Footer>
              <Input
                id="outlined-basic"
                label="Cupom de desconto"
                variant="outlined"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
              />
              <ButtonDiscount
                onClick={() => handleAddCoupon(inputValue)}
                variant="contained"
                size="small"
                color="primary"
                style={{ background: "#272C59" }}
              >
                ADICIONAR
              </ButtonDiscount>
              <WrapperPrices>
                <p>Subtotal</p>
                <strong>{formatPrice(subtotalProduct)}</strong>
              </WrapperPrices>
              {cart.coupon.key !== "" ? (
                <WrapperPricesDescont>
                  <p>Cupom {cart.coupon.key} aplicado</p>
                  <strong> - {formatPrice(valueCoupon)}</strong>
                </WrapperPricesDescont>
              ) : (
                <> </>
              )}
              <WrapperPrices>
                <p>Total</p>
                <strong>{formatPrice(totalProducts || subtotalProduct)}</strong>
              </WrapperPrices>

              <ButtonDiscount
                variant="contained"
                size="small"
                color="primary"
                style={{ background: "#272C59" }}
                onClick={() =>
                  checkoutCartProducts(
                    cart.coupon.key,
                    cart.items,
                    totalProducts || subtotalProduct
                  )
                }
              >
                FINALIZAR PEDIDO
              </ButtonDiscount>
            </Footer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Cart;

import { useState } from "react";
import { Typography } from "@mui/material";
import { CartItem as CartItemInterface } from "../../../utils/interfaces";
import { formatToMoney } from "../../../utils/functions/utils";
import { QtdButtons } from "../../ui-components/qtdButtons";
import { CartItemContainer } from "./style";
import { useCart } from "../../../hooks/useCart";

interface Props {
  item: CartItemInterface;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [qtd, setQtd] = useState(1);
  const { handleRemoveOrAddQtdItemToCart } = useCart();

  const setQtdItemToCard = (val: number) => {
    setQtd(val);
    handleRemoveOrAddQtdItemToCart({
      amount: val,
      product: item.product,
      productId: item.productId,
    });
  };

  return (
    <CartItemContainer key={item.productId}>
      <Typography>{item.product.name}</Typography>
      <QtdButtons handleSetCount={setQtdItemToCard} qtd={item.amount} />
      <Typography align="right" fontWeight={"bold"} fontSize={"18px"}>
        {formatToMoney(item.product.price)}
      </Typography>
    </CartItemContainer>
  );
};

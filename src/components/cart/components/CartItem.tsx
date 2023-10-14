import { useState } from "react";
import { Typography } from "@mui/material";
import { CartItem as CartItemInterface } from "../../../utils/interfaces";
import { formatToMoney } from "../../../utils/functions/utils";
import { QtdButtons } from "../../ui-components/qtdButtons";
import { CartItemContainer } from "./style";

interface Props {
  item: CartItemInterface;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [qtd, setQtd] = useState(item.amount || 1);

  return (
    <CartItemContainer>
      <Typography>{item.product.name}</Typography>
      <QtdButtons handleSetCount={setQtd} qtd={qtd} />
      <Typography align="right" fontWeight={"bold"} fontSize={"18px"}>
        {formatToMoney(item.product.price)}
      </Typography>
    </CartItemContainer>
  );
};

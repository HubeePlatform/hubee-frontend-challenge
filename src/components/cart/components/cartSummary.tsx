import { Typography } from "@mui/material";
import { Coupon } from "../../../utils/interfaces";
import { InformationValues } from "./style";
import { formatToMoney } from "../../../utils/functions/utils";

interface Props {
  totalPrice: number;
  coupon: Coupon;
}

export const CartSummary: React.FC<Props> = ({ coupon, totalPrice }) => {
  return (
    <>
      <InformationValues>
        <Typography>Subtotal</Typography>
        <Typography align="right" fontWeight={"bold"} fontSize={"24px"}>
          {totalPrice && formatToMoney(totalPrice)}
        </Typography>
      </InformationValues>
      {coupon && (
        <InformationValues>
          <Typography>Cupom "{coupon.key}" aplicado</Typography>
          <Typography
            align="right"
            fontWeight={"bold"}
            fontSize={"24px"}
            color={"error"}
          >
            -{formatToMoney(coupon.rebatePercentage)}
          </Typography>
        </InformationValues>
      )}
      <InformationValues>
        <Typography>Total</Typography>
        <Typography align="right" fontWeight={"bold"} fontSize={"24px"}>
          {totalPrice &&
            formatToMoney(totalPrice - (coupon.rebatePercentage || 0))}
        </Typography>
      </InformationValues>
    </>
  );
};

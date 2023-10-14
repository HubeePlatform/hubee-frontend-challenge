import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Coupon } from "./style";

interface Props {
  handleSetCoupon: (coupon: string) => void;
}

export const CouponForm: React.FC<Props> = ({ handleSetCoupon }) => {
  const [coupon, setCoupon] = useState("");

  return (
    <Coupon>
      <TextField
        id="coupon"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        label="Cupom de desconto"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button variant="contained" onClick={() => handleSetCoupon(coupon)}>
        Adicionar
      </Button>
    </Coupon>
  );
};

import { CardMedia, Typography } from "@mui/material";

export const EmptyCart: React.FC = () => {
  return (
    <div>
      <CardMedia
        component="img"
        alt="name"
        height="400"
        image="/img/empty-cart.png"
      />
      <Typography align="center" fontWeight={"bold"} fontSize={"36px"}>
        Seu carrinho está vazio
      </Typography>
    </div>
  );
};

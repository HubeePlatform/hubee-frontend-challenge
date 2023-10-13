import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Products } from "../../../utils/interfaces";
import { ProductDescribe } from "./style";
import { formatToMoney } from "../../../utils/functions/utils";
import { QtdButtons } from "../../ui-components/qtdButtons";

interface Props {
  product: Products;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card style={{ minHeight: "370px" }}>
      <CardMedia
        component="img"
        image={product.url}
        alt={product.name}
        style={{ width: "100%", height: "200px" }}
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <ProductDescribe>
          <Typography fontWeight={"bold"}>
            {formatToMoney(product.price)}
          </Typography>
          <QtdButtons />
        </ProductDescribe>
        <Button variant="contained" fullWidth>
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

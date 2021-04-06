import { useEffect, useState } from "react";
import {
  Container,
  Content,
  CardWrapper,
  CardImage,
  WrapperValue,
  ButtonBuy,
} from "./styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/format";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

const Cart = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const responseApi = await api.get("products");
      const responseProducts: Product[] = responseApi.data;
      const ProductFormated: ProductFormatted[] = responseProducts.map(
        (product) => {
          return {
            ...product,
            priceFormatted: formatPrice(product.price),
          };
        }
      );
      setProducts(ProductFormated);
      console.log(ProductFormated);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <CardImage image={product.url} title={product.name} />
            <CardContent>
              <Typography
                variant="h6"
                component="h6"
                style={{ color: "#191A1C" }}
              >
                {product.name}
              </Typography>
              <WrapperValue>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "#2b2b2b" }}
                >
                  {product.priceFormatted}
                </Typography>
              </WrapperValue>
            </CardContent>
            <CardActions>
              <ButtonBuy
                style={{ background: "#272C59" }}
                variant="contained"
                size="large"
                color="primary"
              >
                Comprar
              </ButtonBuy>
            </CardActions>
          </CardWrapper>
        ))}
      </Content>
    </Container>
  );
};

export default Cart;

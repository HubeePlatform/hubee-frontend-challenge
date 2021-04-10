import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../services/api";
import { addProduct } from "../../store/modules/cart/actions";
import { formatPrice } from "../../utils/format";
import {
  ButtonBuy,
  CardImage,
  CardWrapper,
  Container,
  Content,
  WrapperValue,
} from "./styles";

interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
}

interface IProductFormatted extends IProduct {
  priceFormatted: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const [products, setProducts] = useState<IProductFormatted[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const responseApi = await api.get("products");
      const responseProducts: IProduct[] = responseApi.data;
      const ProductFormated: IProductFormatted[] = responseProducts.map(
        (product) => {
          return {
            ...product,
            priceFormatted: formatPrice(product.price),
            amount: 0,
          };
        }
      );
      setProducts(ProductFormated);
    }

    loadProducts();
  }, []);

  const handleAddProduct = useCallback(
    (product: IProductFormatted) => {
      dispatch(addProduct(product));
    },
    [dispatch]
  );

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
                onClick={() => handleAddProduct(product)}
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

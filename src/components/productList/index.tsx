import { Products } from "../../utils/interfaces";
import { ProductCard } from "./components/productCard";
import { ProductListContainer } from "./style";
import { useCart } from "../../hooks/useCart";

interface Props {
  products: Products[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const { cartIsOpen, cart } = useCart();

  return (
    <ProductListContainer open={!cartIsOpen || cart?.items?.length < 1}>
      {products.length > 0 &&
        products.map((product: Products) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </ProductListContainer>
  );
};

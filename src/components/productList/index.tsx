import { Products } from "../../utils/interfaces";
import { ProductCard } from "./components/productCard";
import { ProductListContainer } from "./style";

interface Props {
  products: Products[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product: Products) => (
        <ProductCard product={product} />
      ))}
    </ProductListContainer>
  );
};

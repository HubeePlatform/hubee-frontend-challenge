import { useEffect } from "react";
import useProducts from "./hooks/useProducts";
import { AppContainer } from "./style";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { ModalSuccess } from "./components/ui-components/modalSuccess";
import { useCart } from "./hooks/useCart";

function App() {
  const { handleFetchProducts, products } = useProducts();
  const { handleFetchCart } = useCart();

  useEffect(() => {
    handleFetchProducts();
    handleFetchCart();
  }, []);

  return (
    <AppContainer>
      <ModalSuccess />
      <ProductList products={products} />
      <Cart />
    </AppContainer>
  );
}

export default App;

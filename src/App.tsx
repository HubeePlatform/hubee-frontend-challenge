import { useEffect } from "react";
import useProducts from "./hooks/useProducts";
import { AppContainer } from "./style";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";

function App() {
  const { handleFetchProducts, products } = useProducts();

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <AppContainer>
      <ProductList products={products} />
      <Cart />
    </AppContainer>
  );
}

export default App;

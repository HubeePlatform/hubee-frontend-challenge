import { useEffect } from "react";
import useProducts from "./hooks/useProducts";
import { AppContainer } from "./style";
import { ProductList } from "./components/productList";
import { Order } from "./components/order";

function App() {
  const { handleFetchProducts, products } = useProducts();

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <AppContainer>
      <ProductList products={products} />
      <Order />
    </AppContainer>
  );
}

export default App;

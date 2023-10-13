import { useEffect } from "react";
import useProducts from "./hooks/useProducts";
import { AppContainer } from "./style";
import { ProductList } from "./components/productList";

function App() {
  const { handleFetchProducts, products } = useProducts();

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <AppContainer>
      <ProductList products={products} />
      <div>Carrinho de compras</div>
    </AppContainer>
  );
}

export default App;

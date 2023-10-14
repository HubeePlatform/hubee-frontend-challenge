import { toast } from "react-toastify";
import { getProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/products/actions";
import { RootState } from "../store/store";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const handleFetchProducts = async () => {
    try {
      const productsData = await (await getProducts()).json();
      dispatch(setProducts(productsData));
    } catch (error) {
      toast.error("Erro ao buscar produtos.");
    }
  };

  return {
    products,
    handleFetchProducts,
  };
};

export default useProducts;

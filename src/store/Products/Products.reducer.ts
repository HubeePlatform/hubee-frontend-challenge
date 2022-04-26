import { AnyAction } from "redux";
import { InitialCartState, InitialProduct } from "../../types/Product";
import { api } from "../../services/api";
import Swal from 'sweetalert2'

const INITIAL_CART_STATE: InitialCartState= {
  products: [],
};

export default function ProductsReducer(
  state = INITIAL_CART_STATE, 
  action : AnyAction) : InitialCartState{
    switch (action.type) {   
    case "ADD_PRODUCT_CART":
        const product = action.payload.product;
        const index = state.products.findIndex(p => p.id === product.id);
        if(index === -1){
          const data = {
            ...state,
            products: [...state.products, product],
          }    
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          }) 
        return data
        }else{
            window.location.href = "/cart";
        }     
    case "REMOVE_PRODUCT_CART":
        const productToRemove = action.payload.id;
        const newProducts = state.products.filter(p => p.id !== productToRemove); 
            const data = {
              ...state,
              products: newProducts
              } 
            return data   

    case "INC_PRODUCT_CART":
        const productToIncId = action.payload.id;
        const newProductsInc = state.products.map(p => ({...p}));
        const productToInc = newProductsInc.findIndex(p => p.id === productToIncId);
        if(productToInc >= 0){
          newProductsInc[productToInc].quantity++;
          const data = {
            ...state,
            products: newProductsInc
          } 
          return data
        }  

    case "DEC_PRODUCT_CART":
        const productToDecId = action.payload.id; 
        const newProductsDec = state.products.map(p => ({...p}));
        const productToDec = newProductsDec.findIndex(p => p.id === productToDecId);
        if(productToDec >= 0){
          newProductsDec[productToDec].quantity > 1 ? newProductsDec[productToDec].quantity-- : newProductsDec[productToDec].quantity = 1;
          const data = {
            ...state,
            products: newProductsDec
          } 
          return data
        } 

    default: 
      return state;
    }
  };  
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./products/reducers";
import { cartReducer } from "./cart/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import createSagaMiddlware from "redux-saga";
import rootSaga from "./modules/rootSaga";

import { ICartState } from "./modules/cart/types";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddlware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;

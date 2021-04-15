import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { removeProductToCart, removeProductToCartRequest } from './actions';
import { IProduct } from './type';

type CheckProductStockRequest = ReturnType<typeof removeProductToCartRequest>;

function* getPriceProduct({ payload }: CheckProductStockRequest) {
  const { productId } = payload;

  const productResponseResponse: AxiosResponse<IProduct> = yield call(api.get, `products/${productId}`);

  yield put(removeProductToCart(productId, productResponseResponse.data.price));
}

export default all([
  takeLatest('REMOVE_PRODUCT_TO_CART_REQUEST', getPriceProduct),
]);

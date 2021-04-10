import { all, takeLatest, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import toastify from "../../../utils/toastify";
import { addCouponRequest, addCouponSucess } from "./actions";

type checkCoupon = ReturnType<typeof addCouponRequest>;

interface ICoupon {
  key: string;
  isActive: boolean;
  rebatePercentage: number;
}

function* checkCoupon(payload: checkCoupon) {
  const { data } = yield api.get("coupons");

  const filterCoupon: ICoupon = data.find(
    (c: any) => c.key == payload.payload.key
  );

  if (!!filterCoupon) {
    if (filterCoupon.isActive) {
      yield put(
        addCouponSucess(filterCoupon.key, filterCoupon.rebatePercentage)
      );
    } else {
      toastify("error", "Ops, o cupom não está mais ativo");
    }
  } else {
    toastify("error", "Ops, este cupom não existe");
  }
}

export default all([takeLatest("ADD_COUPON_REQUEST", checkCoupon)]);

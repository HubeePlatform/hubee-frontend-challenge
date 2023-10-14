export const getCoupon = (coupon: string) =>
  fetch(`http://localhost:3000/coupons?key=${encodeURIComponent(coupon)}`);

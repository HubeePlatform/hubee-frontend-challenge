export interface CartItem {
  productId: number;
  amount: number;
}

export interface Cart {
  id: number;
  coupon: boolean;
  opened: boolean;
  items: CartItem[];
  totalPrice: number;
}

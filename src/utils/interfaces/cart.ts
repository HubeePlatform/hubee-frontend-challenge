import { Products } from "./products";

export interface CartItem {
  productId: number;
  amount: number;
  product: Products;
}

export interface Cart {
  id: number;
  coupon: boolean;
  opened: boolean;
  items: CartItem[];
  totalPrice: number;
}

export interface Coupon {
  key: string;
  isActive: boolean;
  rebatePercentage: number;
}

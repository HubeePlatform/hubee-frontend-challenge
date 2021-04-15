export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
}

export interface ICoupon {
  key: string;
  isActive: boolean;
  rebatePercentage: number;
}

export interface ICartItem {
  productId: number;
  amount: number;
}

export interface ICartState {
  id?: number;
  coupon?: string;
  items: ICartItem[];
  totalPrice: number;
}

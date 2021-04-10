export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
  amount: number;
  subtotal?: number;
}

export interface ICartState {
  items: IProduct[];
  coupon: {
    key: string;
    rebatePercentage: number;
  };
}

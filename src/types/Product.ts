export type InitialProduct = {
  id: number;
  name: string;
  price: number | string;
  url: string;
  quantity: number;
  functionAdd ?: any;
}

export type InitialCartState = {
  products: InitialProduct[];
}
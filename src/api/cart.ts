export const getCarts = () =>
  fetch(`http://localhost:3000/carts?opened=${true}`);

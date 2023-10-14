export const getCarts = () =>
  fetch(`http://localhost:3000/carts?opened=${true}`);

export const getCartById = (id: number) =>
  fetch(`http://localhost:3000/carts/${id}`);

export const updateCart = (updatedData: any) =>
  fetch(`http://localhost:3000/carts/${updatedData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

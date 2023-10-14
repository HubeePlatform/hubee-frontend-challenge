export const updateOrder = (updatedData: any) =>
  fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

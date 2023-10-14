export function formatToMoney(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function calcRebatePercentage(value: number, percentage: number) {
  return value * (percentage / 100);
}

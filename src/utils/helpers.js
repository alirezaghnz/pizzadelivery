export function formatCurrency(value) {
  return new Intl.NumberFormat("fa", {
    style: "currency",
    currency: "IRR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("fa", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

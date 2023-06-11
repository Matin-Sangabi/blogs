export function DateCalculate(data) {
  return new Date(data).toLocaleDateString("en-Us", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
}

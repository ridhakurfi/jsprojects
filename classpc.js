const all = [
  { id: 1, product: "Soda", price: 10 },
  { id: 2, product: "Tea", price: 5 },
];

const productsWithTax = all.map((item) => ({
  ...item,
  tax: item.price * 0.1,
  total: item.price * 1.1,
}));

console.log(productsWithTax);

let product = [
  { name: "Bread", price: 2.5 },
  { name: "Milk", price: 3.0 },
  { name: "Eggs", price: 2.0 },
  { name: "Chesse", price: 4.5 },
  { name: "Apples", price: 5.0 },
  { name: "Chicken", price: 8.0 },
  { name: "Rice", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];

let totalPrice = 0;
for (let i = 0; i < product.length; i++) {
  totalPrice += product[i].price;
}
console.log(`The Total Cost : $ ${totalPrice}`);

let discount = 0.1;
let cost = totalPrice * discount;
// totalPrice = totalPrice - cost;
totalPrice -= cost;
console.log(`The discount applied : $ ${cost}`);

let tax = 0.07;
let taxPayment = totalPrice * tax;
// totalPrice = totalPrice + taxpayment;
totalPrice += taxPayment;
console.log(`Tax amount : $ ${taxPayment}`);

console.log(`The final amount : $ ${totalPrice}`);

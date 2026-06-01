let list = [
  { name: "Burger", price: 8.5 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];

let totalPrice = 0;
for (let i = 0; i < list.length; i++) {
  totalPrice += list[i].price;
}
console.log(`The total bill : $${totalPrice}`);

let service = 0.1;
let serviceCharge = totalPrice * service;
totalPrice = totalPrice + serviceCharge;
console.log(`Service Charge : $ ${serviceCharge}`);

let tax = 0.07;
let taxpayment = totalPrice * tax;
totalPrice = totalPrice + taxpayment;
console.log(`Tax amount : $ ${taxpayment}`);

let numberOfPeople = 2;
let split = totalPrice / numberOfPeople;
console.log(`The amount of each person : $ ${split}`);
